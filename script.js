class QuizApp {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizContainer = document.querySelector('.quiz-container');
        this.scoreContainer = document.getElementById('score-container');
        this.reviewContainer = document.getElementById('review-container');
        this.totalQuestions = questions.length;
        
        this.init();
        this.showWelcomeMessage();
    }

    async showWelcomeMessage() {
        await Swal.fire({
            title: '🌐 Chào mừng đến với bài trắc nghiệm!',
            html: `
                <div style="text-align: left; font-size: 16px;">
                    📚 <strong>Bài thi:</strong> Mạng Máy Tính & Linux<br>
                    📊 <strong>Tổng số câu:</strong> ${this.totalQuestions} câu<br>
                    ⏰ <strong>Thời gian:</strong> Không giới hạn<br>
                    🎯 <strong>Quy tắc:</strong> Chọn đáp án đúng nhất cho mỗi câu hỏi<br><br>
                    <em>Chúc bạn làm bài tốt! 🍀</em>
                </div>
            `,
            icon: 'info',
            confirmButtonText: '🚀 Bắt đầu làm bài',
            confirmButtonColor: '#667eea',
            allowOutsideClick: false,
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
    }

    init() {
        this.renderQuestion();
        this.bindEvents();
        this.updateProgress();
        this.updateCounter();
    }

    bindEvents() {
        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        
        // Score buttons
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
        document.getElementById('review-btn').addEventListener('click', () => this.showReview());
        document.getElementById('back-to-quiz').addEventListener('click', () => this.backToQuiz());
    }

    renderQuestion() {
        const question = questions[this.currentQuestion];
        if (!question) {
            console.error('Question not found:', this.currentQuestion);
            return;
        }

        console.log('Current question:', question); // Debug log

        document.getElementById('question-text').innerHTML = 
            `<span style="color: #666; font-size: 0.9em;">Câu ${question.numb}:</span><br>${question.question}`;
        
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';

        // Check if options exist and is an array
        if (!question.options || !Array.isArray(question.options)) {
            console.error('Options not found or not an array:', question.options);
            answersContainer.innerHTML = '<p>Lỗi: Không tìm thấy đáp án cho câu hỏi này</p>';
            return;
        }

        question.options.forEach((option, index) => {
            const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.dataset.answer = option;
            
            // Check if this answer was previously selected
            if (this.userAnswers[this.currentQuestion] === option) {
                answerDiv.classList.add('selected');
            }

            answerDiv.innerHTML = `
                <span class="answer-label">${optionLetter}</span>
                <span class="answer-text">${option}</span>
            `;

            answerDiv.addEventListener('click', () => this.selectAnswer(option));
            answersContainer.appendChild(answerDiv);
        });

        this.updateNavigation();
    }

    async selectAnswer(answer) {
        // Remove previous selection with animation
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Add selection to clicked answer with animation
        const selectedOption = document.querySelector(`[data-answer="${answer}"]`);
        selectedOption.classList.add('selected');
        
        // Store user answer
        this.userAnswers[this.currentQuestion] = answer;

        // Show selection feedback
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            customClass: {
                popup: 'colored-toast'
            }
        });

        await Toast.fire({
            icon: 'success',
            title: 'Đã chọn đáp án!'
        });
    }

    async nextQuestion() {
        if (!this.userAnswers[this.currentQuestion]) {
            await Swal.fire({
                title: '⚠️ Chưa chọn đáp án!',
                text: 'Vui lòng chọn một đáp án trước khi tiếp tục.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#f39c12'
            });
            return;
        }

        if (this.currentQuestion < this.totalQuestions - 1) {
            this.currentQuestion++;
            this.renderQuestion();
            this.updateProgress();
            this.updateCounter();
            
            // Add transition effect
            this.quizContainer.style.opacity = '0';
            setTimeout(() => {
                this.quizContainer.style.opacity = '1';
            }, 150);
        } else {
            await this.confirmFinish();
        }
    }

    async confirmFinish() {
        const unansweredCount = this.totalQuestions - this.userAnswers.filter(answer => answer).length;
        
        let message = `Bạn đã trả lời ${this.userAnswers.filter(answer => answer).length}/${this.totalQuestions} câu hỏi.`;
        
        if (unansweredCount > 0) {
            message += `<br><br>⚠️ Còn <strong>${unansweredCount}</strong> câu chưa trả lời.<br>Bạn có muốn nộp bài không?`;
        } else {
            message += `<br><br>✅ Bạn đã trả lời tất cả các câu hỏi!`;
        }

        const result = await Swal.fire({
            title: '🏁 Hoàn thành bài thi?',
            html: message,
            icon: unansweredCount > 0 ? 'warning' : 'question',
            showCancelButton: true,
            confirmButtonText: '✅ Nộp bài',
            cancelButtonText: '❌ Tiếp tục làm',
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#6c757d'
        });

        if (result.isConfirmed) {
            this.finishQuiz();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
            this.updateProgress();
            this.updateCounter();
            
            // Add transition effect
            this.quizContainer.style.opacity = '0';
            setTimeout(() => {
                this.quizContainer.style.opacity = '1';
            }, 150);
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
    }

    updateCounter() {
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('total-questions').textContent = this.totalQuestions;
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.totalQuestions - 1) {
            nextBtn.innerHTML = '🏁 Hoàn thành';
        } else {
            nextBtn.innerHTML = 'Câu tiếp ➡';
        }
    }

    async finishQuiz() {
        // Show loading animation
        Swal.fire({
            title: 'Đang tính điểm...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        // Simulate calculation time
        await new Promise(resolve => setTimeout(resolve, 2000));

        this.calculateScore();
        Swal.close();
        this.showScore();
    }

    calculateScore() {
        this.score = 0;
        questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.answer) {
                this.score++;
            }
        });
    }

    async showScore() {
        this.quizContainer.style.display = 'none';
        this.scoreContainer.style.display = 'block';
        
        document.getElementById('score').textContent = this.score;
        document.getElementById('total').textContent = this.totalQuestions;
        
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        document.getElementById('percentage').textContent = `${percentage}%`;
        
        // Update score color based on performance
        const scoreDisplay = document.querySelector('.score-display');
        let color, icon, title;
        
        if (percentage >= 80) {
            color = '#4caf50';
            icon = 'success';
            title = '🎉 Xuất sắc!';
        } else if (percentage >= 60) {
            color = '#ff9800';
            icon = 'info';
            title = '👍 Khá tốt!';
        } else {
            color = '#f44336';
            icon = 'warning';
            title = '💪 Cần cố gắng thêm!';
        }
        
        scoreDisplay.style.color = color;

        // Show result notification
        await Swal.fire({
            title: title,
            html: `
                <div style="font-size: 18px;">
                    🎯 <strong>Điểm số:</strong> ${this.score}/${this.totalQuestions}<br>
                    📊 <strong>Tỷ lệ:</strong> ${percentage}%<br><br>
                    ${percentage >= 80 ? '🌟 Bạn đã thành thạo kiến thức!' : 
                      percentage >= 60 ? '📚 Hãy ôn luyện thêm để đạt điểm cao hơn!' : 
                      '📖 Cần học tập và luyện tập nhiều hơn!'}
                </div>
            `,
            icon: icon,
            confirmButtonText: 'Tiếp tục',
            confirmButtonColor: color
        });

        // Show custom celebration alert after completing all questions
        await this.showCelebrationAlert(percentage);
    }

    async showCelebrationAlert(percentage) {
        let celebrationTitle, celebrationMessage, bgColor, bgImage;
        
        if (percentage >= 80) {
            celebrationTitle = "🎉 Xuất sắc! Hoàn thành bài thi với điểm cao!";
            celebrationMessage = "Chúc mừng bạn đã thành thạo kiến thức mạng máy tính!";
            bgColor = "#e8f5e8";
            bgImage = "linear-gradient(45deg, #4CAF50 25%, transparent 25%), linear-gradient(-45deg, #4CAF50 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #4CAF50 75%), linear-gradient(-45deg, transparent 75%, #4CAF50 75%)";
        } else if (percentage >= 60) {
            celebrationTitle = "👍 Khá tốt! Đã hoàn thành bài thi";
            celebrationMessage = "Bạn đã làm tốt! Hãy tiếp tục ôn luyện để đạt điểm cao hơn.";
            bgColor = "#fff3cd";
            bgImage = "linear-gradient(45deg, #FFC107 25%, transparent 25%), linear-gradient(-45deg, #FFC107 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFC107 75%), linear-gradient(-45deg, transparent 75%, #FFC107 75%)";
        } else {
            celebrationTitle = "💪 Đã hoàn thành bài thi! Cố gắng lên!";
            celebrationMessage = "Đừng nản lòng! Hãy ôn tập kỹ hơn và thử lại.";
            bgColor = "#f8d7da";
            bgImage = "linear-gradient(45deg, #DC3545 25%, transparent 25%), linear-gradient(-45deg, #DC3545 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #DC3545 75%), linear-gradient(-45deg, transparent 75%, #DC3545 75%)";
        }

        // Create confetti effect
        this.createConfettiEffect();

        await Swal.fire({
            title: celebrationTitle,
            html: `
                <div style="text-align: center;">
                    <div style="font-size: 1.2em; margin-bottom: 20px;">${celebrationMessage}</div>
                    <div style="font-size: 2.5em; margin: 20px 0;">
                        ${percentage >= 80 ? '🏆🎉✨' : percentage >= 60 ? '👏🎊💪' : '📚💪🔥'}
                    </div>
                    <div style="font-size: 1.1em; color: #666;">
                        <strong>Điểm số cuối cùng: ${this.score}/${this.totalQuestions}</strong><br>
                        <strong>Tỷ lệ: ${percentage}%</strong>
                    </div>
                </div>
            `,
            width: 650,
            padding: "3em",
            color: "#2c3e50",
            background: `${bgColor} ${bgImage}`,
            backgroundSize: "20px 20px",
            backdrop: `
                rgba(0,0,123,0.4)
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🎓%3C/text%3E%3C/svg%3E")
                left top
                no-repeat
            `,
            confirmButtonText: '📋 Xem chi tiết kết quả',
            confirmButtonColor: '#667eea',
            customClass: {
                popup: 'celebration-popup'
            },
            didOpen: () => {
                // Add extra sparkle effect
                setTimeout(() => {
                    this.addSparkleEffect();
                }, 500);
            }
        });
    }

    createConfettiEffect() {
        // Create confetti elements
        const confettiContainer = document.createElement('div');
        confettiContainer.id = 'confetti-container';
        confettiContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(confettiContainer);

        // Create multiple confetti pieces
        for (let i = 0; i < 50; i++) {
            this.createConfettiPiece(confettiContainer);
        }

        // Remove confetti after animation
        setTimeout(() => {
            if (confettiContainer) {
                confettiContainer.remove();
            }
        }, 4000);
    }

    createConfettiPiece(container) {
        const confetti = document.createElement('div');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${color};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: 1;
            border-radius: 50%;
            animation: confettiFall ${3 + Math.random() * 2}s linear forwards;
        `;

        container.appendChild(confetti);
    }

    addSparkleEffect() {
        const popup = document.querySelector('.celebration-popup');
        if (!popup) return;

        // Add sparkle elements
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: 0;
                pointer-events: none;
                animation: sparkleFloat ${2 + Math.random() * 2}s ease-in-out forwards;
            `;
            popup.appendChild(sparkle);
        }

        // Remove sparkles after animation
        setTimeout(() => {
            popup.querySelectorAll('div').forEach(sparkle => {
                if (sparkle.innerHTML === '✨') {
                    sparkle.remove();
                }
            });
        }, 4000);
    }

    showReview() {
        this.scoreContainer.style.display = 'none';
        this.reviewContainer.style.display = 'block';
        
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';

        questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.answer;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Câu ${question.numb}:</strong> ${question.question}
                </div>
                <div class="review-answer correct">
                    ✅ <strong>Đáp án đúng:</strong> ${question.answer}
                </div>
                ${userAnswer ? `<div class="review-answer user ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✅' : '❌'} <strong>Bạn chọn:</strong> ${userAnswer}
                </div>` : '<div class="review-answer user">❓ <strong>Bạn chưa chọn đáp án</strong></div>'}
            `;
            
            reviewContent.appendChild(reviewItem);
        });

        // Scroll to top
        reviewContent.scrollTop = 0;
    }

    async restart() {
        const result = await Swal.fire({
            title: '🔄 Làm lại bài thi?',
            text: 'Tất cả kết quả hiện tại sẽ bị xóa và bạn sẽ bắt đầu lại từ đầu.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '✅ Làm lại',
            cancelButtonText: '❌ Hủy',
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#6c757d'
        });

        if (result.isConfirmed) {
            this.currentQuestion = 0;
            this.score = 0;
            this.userAnswers = [];
            
            this.scoreContainer.style.display = 'none';
            this.reviewContainer.style.display = 'none';
            this.quizContainer.style.display = 'block';
            
            this.renderQuestion();
            this.updateProgress();
            this.updateCounter();

            // Show restart message
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });

            await Toast.fire({
                icon: 'success',
                title: '🎯 Đã reset! Chúc bạn làm bài tốt!'
            });
        }
    }

    backToQuiz() {
        this.reviewContainer.style.display = 'none';
        this.scoreContainer.style.display = 'block';
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking questions...'); // Debug log
    console.log('Questions variable:', typeof questions); // Debug log
    console.log('Questions length:', questions?.length); // Debug log
    console.log('First question:', questions?.[0]); // Debug log

    // Check if questions are loaded
    if (typeof questions === 'undefined' || questions.length === 0) {
        Swal.fire({
            title: '❌ Lỗi!',
            text: 'Không thể tải câu hỏi. Vui lòng kiểm tra lại file questions.js',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Home/Quiz navigation logic
    const homeScreen = document.getElementById('home-screen');
    const quizHeader = document.querySelector('header');
    const quizMain = document.querySelector('.quiz-container');
    const scoreContainer = document.getElementById('score-container');
    const reviewContainer = document.getElementById('review-container');
    const quizBtn = document.getElementById('quiz-btn');
    const backToQuizBtn = document.getElementById('back-to-quiz');

    function showQuiz() {
        homeScreen.style.display = 'none';
        quizHeader.style.display = '';
        quizMain.style.display = '';
        scoreContainer.style.display = 'none';
        reviewContainer.style.display = 'none';
    }
    function showHome() {
        homeScreen.style.display = '';
        quizHeader.style.display = 'none';
        quizMain.style.display = 'none';
        scoreContainer.style.display = 'none';
        reviewContainer.style.display = 'none';
    }

    quizBtn.addEventListener('click', () => {
        showQuiz();
        if (!window.quizAppInstance) {
            window.quizAppInstance = new QuizApp();
        }
    });
    backToQuizBtn.addEventListener('click', showHome);

    // Mặc định hiển thị Home
    showHome();
});