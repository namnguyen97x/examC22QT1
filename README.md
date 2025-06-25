# 🌐 Ứng Dụng Trắc Nghiệm Mạng Máy Tính

Ứng dụng web trắc nghiệm về mạng máy tính với giao diện hiện đại và thân thiện với người dùng.

## ✨ Tính Năng

- **99 câu hỏi trắc nghiệm** về mạng máy tính & Linux
- **SweetAlert2** với hiệu ứng động đẹp mắt và chuyên nghiệp
- **Giao diện hiện đại** với gradient và animation mượt mà
- **Thanh tiến độ** hiển thị tiến trình làm bài
- **Điều hướng thông minh** với validation câu trả lời
- **Tính điểm tự động** với phân loại kết quả
- **Xem lại đáp án chi tiết** sau khi hoàn thành
- **Toast notifications** cho feedback tức thời
- **Responsive design** tương thích với mọi thiết bị
- **Confirmation dialogs** cho các hành động quan trọng

## 🚀 Cách Sử Dụng

1. **Mở file `index.html`** trong trình duyệt web
2. **Đọc câu hỏi** và chọn đáp án A, B, C hoặc D
3. **Sử dụng nút điều hướng** để chuyển câu hỏi
4. **Hoàn thành bài thi** bằng cách nhấn "Hoàn thành"
5. **Xem kết quả** và tỷ lệ phần trăm
6. **Xem lại đáp án** để kiểm tra những câu sai

## 📁 Cấu Trúc File

```
ExamC22QT1/
├── index.html      # Giao diện chính
├── style.css       # CSS styling
├── script.js       # Logic ứng dụng
├── questions.js    # Database câu hỏi
└── README.md       # Hướng dẫn sử dụng
```

## 🎯 Chủ Đề Câu Hỏi

- Mô hình OSI
- Giao thức mạng (TCP/IP, UDP, HTTP, FTP, SMTP, POP3)
- Thiết bị mạng (Router, Switch, Hub)
- Mạng không dây (Wireless LAN, Bluetooth)
- Cáp mạng và kết nối
- Địa chỉ IP và DNS
- Bảo mật mạng
- Linux và hệ điều hành
- Virtualization

## 💡 Tính Năng Nổi Bật

### 🎨 Giao Diện
- Thiết kế gradient màu sắc hiện đại
- Hiệu ứng hover và animation mượt mà
- Icons và emoji tạo sự thân thiện
- Typography rõ ràng, dễ đọc

### 📱 Responsive
- Tối ưu cho desktop, tablet và mobile
- Layout linh hoạt thích ứng màn hình
- Touch-friendly trên thiết bị di động

### 🔧 Chức Năng
- Lưu trạng thái câu trả lời
- Tính điểm chính xác
- Hiển thị đáp án đúng/sai
- Khả năng làm lại bài thi

## 🎓 Hướng Dẫn Giáo Viên

Ứng dụng này có thể được sử dụng để:
- Kiểm tra kiến thức học sinh
- Ôn tập trước kỳ thi
- Đánh giá hiểu biết về mạng máy tính
- Thực hành trắc nghiệm

## 🔄 Cập Nhật

Để thêm câu hỏi mới, chỉnh sửa file `questions.js` theo format:

```javascript
{
    question: "Câu hỏi của bạn?",
    answers: {
        a: "Đáp án A",
        b: "Đáp án B", 
        c: "Đáp án C",
        d: "Đáp án D"
    },
    correct: "a" // Đáp án đúng
}
```

## 📞 Hỗ Trợ

Nếu có vấn đề hoặc cần hỗ trợ, vui lòng liên hệ qua issues hoặc email.

---

**Phát triển bởi:** AI Assistant  
**Phiên bản:** 1.0  
**Cập nhật:** 2024 