// tuluan.js

// 1. Load questions from cauhoi.txt (fetch, parse)
// 2. Show mode select (ôn tập/làm bài ngay)
// 3. Render all Q&A for ôn tập, or step-by-step for làm bài ngay (with blanks)
// 4. Check answers, highlight mistakes

const essayBtn = document.getElementById('essay-btn');
const essaySection = document.getElementById('essay-section');
const homeScreen = document.getElementById('home-screen');

let essayQuestions = [];
let currentDifficulty = 'medium'; // default
const DIFFICULTY_MAP = {
    easy: 0.4,
    medium: 0.6,
    hard: 0.8,
    master: 1
};

// Parse cauhoi.txt to extract questions and answers
async function loadEssayQuestions() {
    const res = await fetch('cauhoi.txt');
    let text = await res.text();
    // Loại bỏ các dòng rác đầu file (aNotepad, Workspace, ...)
    text = text.replace(/^[\s\S]*?(\*\*\d+\))/m, '$1');
    // Split by **N) ...
    const blocks = text.split(/\*\*\d+\)/).slice(1);
    essayQuestions = blocks.map((block, idx) => {
        // First line is question, rest is answer
        const lines = block.trim().split(/\n|\r/).filter(l => l.trim());
        const question = lines[0].replace(/\*+/, '').trim();
        const answer = lines.slice(1).join('\n').replace(/\*+/, '').trim();
        return { numb: idx + 1, question, answer };
    });
}

function showEssaySection() {
    homeScreen.style.display = 'none';
    essaySection.style.display = '';
}

function hideEssaySection() {
    essaySection.style.display = 'none';
    homeScreen.style.display = '';
}

function showModePopup() {
    Swal.fire({
        title: 'Chọn chế độ tự luận',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Ôn tập',
        denyButtonText: 'Làm bài ngay',
        cancelButtonText: 'Huỷ',
    }).then((result) => {
        if (result.isConfirmed) {
            renderReviewMode();
        } else if (result.isDenied) {
            showDifficultyPopup();
        }
    });
}

function showDifficultyPopup() {
    Swal.fire({
        title: 'Chọn mức độ khó',
        input: 'radio',
        inputOptions: {
            easy: 'Dễ (khuyết 40%)',
            medium: 'Trung bình (60%)',
            hard: 'Khó (80%)',
            master: 'Bậc thầy (chỉ còn 1 ô)'
        },
        inputValue: 'medium',
        confirmButtonText: 'Bắt đầu',
        cancelButtonText: 'Huỷ',
        showCancelButton: true,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            currentDifficulty = result.value || 'medium';
            renderPracticeMode();
        }
    });
}

// Ôn tập: hiện toàn bộ câu hỏi và đáp án
function renderReviewMode() {
    showEssaySection();
    essaySection.innerHTML = `
        <h2>📝 Ôn tập tự luận</h2>
        <button class="nav-btn" id="essay-back-btn">🏠 Về trang chủ</button>
        <div class="essay-list">
            ${essayQuestions.map(q => `
                <div class="essay-block">
                    <div class="essay-q"><b>Câu ${q.numb}:</b> ${q.question}</div>
                    <div class="essay-a"><b>Đáp án:</b><br>${q.answer.replace(/\n/g, '<br>')}</div>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('essay-back-btn').onclick = hideEssaySection;
}

// Làm bài ngay: hiện từng câu, random chỗ trống, chấm điểm
let currentEssay = 0;
let userEssayAnswers = [];
let blanksMap = [];

function renderPracticeMode() {
    showEssaySection();
    currentEssay = 0;
    userEssayAnswers = Array(essayQuestions.length).fill(null);
    blanksMap = essayQuestions.map(q => randomBlanks(q.answer));
    renderEssayQuestion();
}

function renderEssayQuestion() {
    const q = essayQuestions[currentEssay];
    const blanks = blanksMap[currentEssay];
    essaySection.style.opacity = 0;
    setTimeout(() => {
        // Dropdown chọn câu hỏi
        const dropdown = `<select id="essay-q-jump" class="essay-q-jump" style="margin-bottom:10px; margin-right:8px; padding:4px 10px; border-radius:6px; font-size:1em;">
            ${essayQuestions.map((q, i) => `<option value="${i}" ${i===currentEssay?'selected':''}>Câu ${q.numb}: ${q.question.slice(0, 32).replace(/\n/g, ' ')}${q.question.length>32?'...':''}</option>`).join('')}
        </select>`;
        essaySection.innerHTML = `
            <h2>📝 Làm bài tự luận</h2>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                ${dropdown}
                <span style="font-size:1.08em;"><b>Câu ${q.numb}:</b> ${q.question}</span>
            </div>
            <form id="essay-form">
                <div class="essay-a">${renderBlanks(q.answer, blanks, userEssayAnswers[currentEssay])}</div>
                <div style="margin-top:16px;">
                    <button type="button" class="nav-btn" id="essay-prev-btn" ${currentEssay === 0 ? 'disabled' : ''}>⬅ Trước</button>
                    <button type="button" class="nav-btn" id="essay-next-btn" ${currentEssay === essayQuestions.length-1 ? 'disabled' : ''}>Tiếp ➡</button>
                    <button type="submit" class="nav-btn" id="essay-finish-btn">Hoàn thành</button>
                    <button type="button" class="nav-btn" id="essay-back-btn">🏠 Về trang chủ</button>
                </div>
            </form>
            <div id="essay-feedback"></div>
        `;
        document.getElementById('essay-prev-btn').onclick = () => { currentEssay--; renderEssayQuestion(); };
        document.getElementById('essay-next-btn').onclick = () => { currentEssay++; renderEssayQuestion(); };
        document.getElementById('essay-back-btn').onclick = hideEssaySection;
        document.getElementById('essay-form').onsubmit = onEssaySubmit;
        // Sự kiện chọn nhanh câu hỏi
        document.getElementById('essay-q-jump').onchange = (e) => {
            currentEssay = +e.target.value;
            renderEssayQuestion();
        };
        essaySection.scrollIntoView({behavior:'smooth'});
        setTimeout(()=>{ essaySection.style.opacity = 1; }, 60);
        const firstInput = essaySection.querySelector('.essay-blank');
        if(firstInput) firstInput.focus();
        bindMicEvents();
    }, 120);
}

// Random các từ/cụm từ để tạo chỗ trống (blank)
function randomBlanks(answer) {
    const words = answer.split(/\s+/);
    if (currentDifficulty === 'master') {
        // Chỉ còn 1 ô nhập toàn bộ đáp án
        return words.length > 1 ? [0, ...Array(words.length-1).fill(-1)] : [0];
    }
    let nBlanks = Math.max(1, Math.floor(words.length * (DIFFICULTY_MAP[currentDifficulty] || 0.6)));
    let candidates = words.map((w, i) => i).filter(i => words.length <= 4 ? true : (i !== 0 && i !== words.length-1));
    // Trộn ngẫu nhiên
    for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
    let idxs = candidates.slice(0, nBlanks).sort((a,b)=>a-b);
    return idxs;
}

function renderBlanks(answer, blanks, userInput) {
    const words = answer.split(/\s+/);
    if (currentDifficulty === 'master') {
        // Chỉ còn 1 ô nhập toàn bộ đáp án
        const val = userInput && userInput[0] ? userInput[0] : '';
        return `<input type="text" class="essay-blank" data-blank="0" value="${val}" style="width:90%; min-width:120px; margin:0 2px;">`;
    }
    let html = '';
    let inputIdx = 0;
    for (let i = 0; i < words.length; i++) {
        if (blanks.includes(i)) {
            const val = userInput && userInput[inputIdx] ? userInput[inputIdx] : '';
            html += `<input type="text" class="essay-blank" data-blank="${inputIdx}" value="${val}" style="width:${Math.max(40, words[i].length*10)}px; margin:0 2px;">`;
            inputIdx++;
        } else {
            html += words[i] + ' ';
        }
    }
    return html;
}

function onEssaySubmit(e) {
    e.preventDefault();
    const blanks = blanksMap[currentEssay];
    let inputs;
    if (currentDifficulty === 'master') {
        inputs = [essaySection.querySelector('.essay-blank').value.trim()];
        userEssayAnswers[currentEssay] = inputs;
        const answer = essayQuestions[currentEssay].answer;
        const userVal = inputs[0] || '';
        let html = '';
        if (normalizeString(userVal) === normalizeString(answer)) {
            html = `<span class="essay-correct">${userVal}</span>`;
        } else {
            html = `<span class="essay-wrong">${userVal||'___'}</span> <span class="essay-correct">[${answer}]</span>`;
        }
        const feedback = essaySection.querySelector('#essay-feedback');
        feedback.style.opacity = 0;
        setTimeout(()=>{
            feedback.innerHTML = `<div>${normalizeString(userVal) === normalizeString(answer) ? 'Chính xác!' : 'Chưa đúng.'}</div><div>${html}</div>`;
            feedback.style.opacity = 1;
        }, 120);
        return;
    }
    inputs = Array.from(essaySection.querySelectorAll('.essay-blank')).map(i => i.value.trim());
    userEssayAnswers[currentEssay] = inputs;
    const answerWords = essayQuestions[currentEssay].answer.split(/\s+/);
    let html = '';
    let inputIdx = 0;
    let correct = 0;
    for (let i = 0; i < answerWords.length; i++) {
        if (blanks.includes(i)) {
            const userVal = inputs[inputIdx] || '';
            const correctVal = answerWords[i];
            if (normalizeString(userVal) === normalizeString(correctVal)) {
                html += `<span class="essay-correct">${userVal}</span> `;
                correct++;
            } else {
                html += `<span class="essay-wrong">${userVal||'___'}</span> <span class="essay-correct">[${correctVal}]</span> `;
            }
            inputIdx++;
        } else {
            html += answerWords[i] + ' ';
        }
    }
    const total = blanks.length;
    const feedback = essaySection.querySelector('#essay-feedback');
    feedback.style.opacity = 0;
    setTimeout(()=>{
        feedback.innerHTML = `<div>Đúng ${correct}/${total} chỗ trống.</div><div>${html}</div>`;
        feedback.style.opacity = 1;
    }, 120);
}

// Helper: normalize string (không dấu, thường)
function normalizeString(str) {
    if (!str) return '';
    return str.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/\s+/g, ' ')
        .trim();
}

// Sự kiện nút essay
essayBtn.addEventListener('click', async () => {
    if (!essayQuestions.length) await loadEssayQuestions();
    showModePopup();
}); 