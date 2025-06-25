// questions.js
// Bộ câu hỏi trắc nghiệm về Mạng máy tính & Linux

const questions = [
    {
        numb: 1,
        question: "Máy in kết nối với máy tính dùng cáp UTP CAT5 bấm cáp như thế nào?",
        answer: "Bấm thẳng",
        options: [
            "Bấm chéo",
            "Bấm thẳng",
            "Bấm song song",
            "Không cần bấm cáp"
        ]
    },
    {
        numb: 2,
        question: "Cáp mạng là thiết bị hoạt động ở tầng nào của mô hình OSI?",
        answer: "Tầng vật lý",
        options: [
            "Tầng mạng",
            "Tầng vật lý",
            "Tầng ứng dụng",
            "Tầng liên kết dữ liệu"
        ]
    },
    {
        numb: 3,
        question: "Việc định nghĩa địa chỉ IP được thực hiện tại tầng nào?",
        answer: "Tầng mạng",
        options: [
            "Tầng vật lý",
            "Tầng giao vận",
            "Tầng mạng",
            "Tầng trình diễn"
        ]
    },
    {
        numb: 4,
        question: "Cáp quang có ưu điểm gì nổi bật?",
        answer: "Chống nhiễu, truyền xa hơn, chống nghe trộm",
        options: [
            "Giá thành rẻ, dễ lắp đặt",
            "Chỉ dùng cho mạng không dây",
            "Tốc độ thấp nhưng rất ổn định",
            "Chống nhiễu, truyền xa hơn, chống nghe trộm"
        ]
    },
    {
        numb: 5,
        question: "Để kết nối trực tiếp hai máy tính (PC) với nhau dùng cáp UTP thì bấm cáp như thế nào?",
        answer: "Bấm cáp chéo",
        options: [
            "Bấm cáp thẳng",
            "Bấm cáp chéo",
            "Bấm cáp cuộn",
            "Dùng cáp quang"
        ]
    },
    {
        numb: 6,
        question: "Thiết bị cơ bản và phổ biến nhất của mạng không dây là gì?",
        answer: "Cục router (Access Point)",
        options: [
            "Hub",
            "Switch",
            "Card mạng có dây",
            "Cục router (Access Point)"
        ]
    },
    {
        numb: 7,
        question: "Mạng không dây thường được kết nối bằng công nghệ nào?",
        answer: "Wi-Fi",
        options: [
            "Bluetooth",
            "Wi-Fi",
            "Cáp đồng trục",
            "Hồng ngoại"
        ]
    },
    {
        numb: 8,
        question: "Phát biểu nào sau đây không phải là lợi ích của mạng không dây?",
        answer: "Tốc độ cao như mạng có dây",
        options: [
            "Linh hoạt, dễ di chuyển",
            "Tốc độ cao như mạng có dây",
            "Dễ dàng mở rộng",
            "Tiện lợi cho các thiết bị di động"
        ]
    },
    {
        numb: 9,
        question: "Đâu là một kiểu antenna thường dùng cho Wireless LAN?",
        answer: "Yagi",
        options: [
            "Yagi",
            "Router",
            "Switch",
            "Hub"
        ]
    },
    {
        numb: 10,
        question: "Cơ chế lọc địa chỉ MAC trong Wireless LAN thực hiện bảo mật như thế nào?",
        answer: "Chỉ cho phép các thiết bị có MAC trong danh sách được kết nối",
        options: [
            "Mã hóa tất cả dữ liệu truyền đi",
            "Chỉ cho phép các thiết bị có MAC trong danh sách được kết nối",
            "Yêu cầu ISP kiểm tra",
            "Thay đổi địa chỉ IP liên tục"
        ]
    },
    {
        numb: 11,
        question: "Ưu điểm nào sau đây là của mạng không dây?",
        answer: "Không cần dây cáp",
        options: [
            "Không cần dây cáp",
            "Bảo mật tuyệt đối",
            "Tốc độ luôn cao hơn mạng có dây",
            "Không bao giờ bị nhiễu sóng"
        ]
    },
    {
        numb: 12,
        question: "Windows Server 2019 khác Windows 10 chủ yếu ở điểm nào?",
        answer: "Quản lý tài nguyên, dịch vụ mạng và phân quyền truy cập",
        options: [
            "Giao diện đồ họa đẹp hơn",
            "Quản lý tài nguyên, dịch vụ mạng và phân quyền truy cập",
            "Khả năng chơi game tốt hơn",
            "Có nhiều ứng dụng văn phòng hơn"
        ]
    },
    {
        numb: 13,
        question: "Dịch vụ DNS (Domain Name System) là gì?",
        answer: "Hệ thống phân giải tên miền thành địa chỉ IP và ngược lại",
        options: [
            "Dịch vụ cấp phát địa chỉ IP động",
            "Hệ thống phân giải tên miền thành địa chỉ IP và ngược lại",
            "Giao thức truyền tải siêu văn bản",
            "Dịch vụ tường lửa bảo vệ mạng"
        ]
    },
    {
        numb: 14,
        question: "Trên Windows, dùng lệnh gì trong Command Prompt để kiểm tra cấu hình IP của máy tính?",
        answer: "ipconfig",
        options: [
            "ping",
            "tracert",
            "netstat",
            "ipconfig"
        ]
    },
    {
        numb: 15,
        question: "Biện pháp nào sau đây là cơ bản và hiệu quả để bảo vệ dữ liệu trên mạng?",
        answer: "Phân quyền truy cập và cài đặt mật khẩu mạnh",
        options: [
            "Luôn tắt máy tính khi không sử dụng",
            "Phân quyền truy cập và cài đặt mật khẩu mạnh",
            "Chỉ sử dụng mạng có dây",
            "Xóa lịch sử duyệt web thường xuyên"
        ]
    },
    {
        numb: 16,
        question: "Router là một thiết bị dùng để làm gì?",
        answer: "Định tuyến và kết nối các mạng khác nhau",
        options: [
            "Chia sẻ tín hiệu cho nhiều máy trong cùng một mạng",
            "Tăng tốc độ kết nối Internet",
            "Định tuyến và kết nối các mạng khác nhau",
            "Chỉ dùng để phát sóng Wi-Fi"
        ]
    },
    {
        numb: 17,
        question: "Chức năng chính của Router trong mạng máy tính là gì?",
        answer: "Kết nối các mạng khác nhau",
        options: [
            "Kết nối các máy tính trong cùng một mạng LAN",
            "Làm máy chủ lưu trữ dữ liệu",
            "Quét và diệt virus",
            "Kết nối các mạng khác nhau"
        ]
    },
    {
        numb: 18,
        question: "Giao thức DHCP (Dynamic Host Configuration Protocol) cấp gì cho máy Client?",
        answer: "Cấp địa chỉ IP động",
        options: [
            "Cấp địa chỉ IP động",
            "Cấp tên miền (Domain Name)",
            "Cấp địa chỉ MAC",
            "Cấp quyền truy cập thư mục"
        ]
    },
    {
        numb: 19,
        question: "Dịch vụ nào giúp 'phiên dịch' tên miền (ví dụ: google.com) thành địa chỉ IP khi duyệt Internet?",
        answer: "DNS",
        options: [
            "DHCP",
            "FTP",
            "DNS",
            "SMTP"
        ]
    },
    {
        numb: 20,
        question: "Để truyền tải tập tin, giao thức FTP (File Transfer Protocol) sử dụng cổng điều khiển (control port) mặc định là bao nhiêu?",
        answer: "21",
        options: [
            "80",
            "25",
            "21",
            "110"
        ]
    },
    {
        numb: 21,
        question: "Giao thức SMTP (Simple Mail Transfer Protocol) dùng cổng dịch vụ mặc định nào để gửi mail?",
        answer: "25",
        options: [
            "110",
            "25",
            "143",
            "80"
        ]
    },
    {
        numb: 22,
        question: "Giao thức POP3 (Post Office Protocol version 3) dùng để nhận mail sử dụng cổng mặc định nào?",
        answer: "110",
        options: [
            "110",
            "25",
            "443",
            "8080"
        ]
    },
    {
        numb: 23,
        question: "Trong công nghệ ảo hóa, hệ điều hành chạy bên trong máy ảo được gọi là gì?",
        answer: "Guest operating system (Hệ điều hành khách)",
        options: [
            "Host operating system (Hệ điều hành chủ)",
            "Guest operating system (Hệ điều hành khách)",
            "Virtual operating system",
            "Embedded operating system"
        ]
    },
    {
        numb: 24,
        question: "IPv6 có không gian địa chỉ là bao nhiêu bit?",
        answer: "128 bit",
        options: [
            "32 bit",
            "64 bit",
            "128 bit",
            "256 bit"
        ]
    },
    {
        numb: 25,
        question: "Phần Header (phần đầu) của gói tin IPv6 có kích thước cố định là bao nhiêu byte?",
        answer: "40 bytes",
        options: [
            "20 bytes",
            "30 bytes",
            "40 bytes",
            "60 bytes"
        ]
    },
    {
        numb: 26,
        question: "Khái niệm nào mô tả việc giữ cho đồng hồ của các hệ thống máy tính khác nhau chạy khớp với nhau?",
        answer: "Đồng bộ hóa thời gian (Time Synchronization)",
        options: [
            "Phân giải tên miền",
            "Đồng bộ hóa thời gian (Time Synchronization)",
            "Định tuyến gói tin",
            "Mã hóa dữ liệu"
        ]
    },
    {
        numb: 27,
        question: "Để kết nối các mạng LAN, WAN, MAN độc lập với nhau, người ta dùng thiết bị có chức năng gì?",
        answer: "Định tuyến (Routing)",
        options: [
            "Chuyển mạch (Switching)",
            "Lặp lại tín hiệu (Repeating)",
            "Định tuyến (Routing)",
            "Tập trung (Hub)"
        ]
    },
    {
        numb: 28,
        question: "Mạng Intranet là gì?",
        answer: "Mạng LAN riêng của một tổ chức, sử dụng công nghệ Internet",
        options: [
            "Một tên gọi khác của mạng Internet toàn cầu",
            "Mạng LAN riêng của một tổ chức, sử dụng công nghệ Internet",
            "Mạng kết nối giữa các Intranet",
            "Mạng không dây công cộng"
        ]
    },
    {
        numb: 29,
        question: "Chức năng chính của tầng Network trong mô hình OSI là gì?",
        answer: "Định tuyến đường truyền và địa chỉ logic",
        options: [
            "Kiểm soát lỗi và luồng dữ liệu",
            "Cung cấp giao diện cho người dùng",
            "Mã hóa và nén dữ liệu",
            "Định tuyến đường truyền và địa chỉ logic"
        ]
    },
    {
        numb: 30,
        question: "Thiết bị Wireless Access Point (WAP) hoạt động ở tầng nào của mô hình OSI?",
        answer: "Tầng Data link",
        options: [
            "Tầng Physical",
            "Tầng Data link",
            "Tầng Network",
            "Tầng Application"
        ]
    },
    {
        numb: 31,
        question: "Công nghệ mạng LAN có dây nào được sử dụng phổ biến nhất hiện nay?",
        answer: "Ethernet",
        options: [
            "Token Ring",
            "FDDI",
            "Ethernet",
            "ATM"
        ]
    },
    {
        numb: 32,
        question: "Công nghệ Hyper-Threading được Intel tạo ra cho thiết bị nào?",
        answer: "Processor (CPU)",
        options: [
            "RAM",
            "Card đồ họa (GPU)",
            "Ổ cứng (HDD/SSD)",
            "Processor (CPU)"
        ]
    },
    {
        numb: 33,
        question: "VLAN là viết tắt của thuật ngữ nào?",
        answer: "Virtual Local Area Network",
        options: [
            "Very Large Area Network",
            "Virtual Local Area Network",
            "Variable Local Area Number",
            "Virtual LAN Access Node"
        ]
    },
    {
        numb: 34,
        question: "Ưu điểm của việc sử dụng mạng LAN ảo (VLAN) là gì?",
        answer: "Tăng cường bảo mật và linh hoạt trong quản lý mạng",
        options: [
            "Tăng tốc độ truy cập Internet",
            "Giảm chi phí mua thiết bị mạng",
            "Tăng cường bảo mật và linh hoạt trong quản lý mạng",
            "Không cần sử dụng Switch"
        ]
    },
    {
        numb: 35,
        question: "Trong Windows, lệnh nào dùng để ánh xạ một thư mục chia sẻ trên mạng thành một ổ đĩa trên máy tính?",
        answer: "net use",
        options: [
            "map",
            "net use",
            "assign",
            "link"
        ]
    },
    {
        numb: 36,
        question: "Phương thức truyền thông điệp đến một nhóm các thiết bị đã định trước được gọi là gì?",
        answer: "Multicast",
        options: [
            "Unicast",
            "Broadcast",
            "Multicast",
            "Anycast"
        ]
    },
    {
        numb: 37,
        question: "Chức năng của tầng Presentation (trình bày) trong mô hình OSI là gì?",
        answer: "Định dạng, mã hóa và nén dữ liệu",
        options: [
            "Thiết lập, quản lý và chấm dứt phiên làm việc",
            "Định tuyến gói tin",
            "Định dạng, mã hóa và nén dữ liệu",
            "Kiểm soát lỗi và luồng dữ liệu"
        ]
    },
    {
        numb: 38,
        question: "Để các máy tính trong mạng có thể giao tiếp với nhau, chúng cần tuân theo bộ quy tắc chung được gọi là gì?",
        answer: "Giao thức (Protocol)",
        options: [
            "Phần cứng (Hardware)",
            "Phần mềm (Software)",
            "Giao thức (Protocol)",
            "Hệ điều hành (Operating System)"
        ]
    },
    {
        numb: 39,
        question: "Một vùng mạng mà trong đó các gói tin có thể va chạm với nhau khi truyền đi được gọi là gì?",
        answer: "Collision Domain (Miền xung đột)",
        options: [
            "Broadcast Domain (Miền quảng bá)",
            "Collision Domain (Miền xung đột)",
            "Subnet",
            "VLAN"
        ]
    },
    {
        numb: 40,
        question: "Giao thức UDP (User Datagram Protocol) thường được sử dụng cho các ứng dụng nào?",
        answer: "Streaming video, game online, DNS",
        options: [
            "Tải file lớn, gửi email quan trọng",
            "Streaming video, game online, DNS",
            "Truy cập website (HTTP)",
            "Tất cả các ứng dụng trên Internet"
        ]
    },
    {
        numb: 41,
        question: "Khái niệm RTT (Round Trip Time) trong mạng máy tính là gì?",
        answer: "Thời gian để một gói tin đi từ nguồn đến đích và quay trở lại",
        options: [
            "Thời gian để tải xong một trang web",
            "Tốc độ truyền dữ liệu của đường truyền",
            "Thời gian để một gói tin đi từ nguồn đến đích và quay trở lại",
            "Thời gian xử lý gói tin tại router"
        ]
    },
    {
        numb: 42,
        question: "Một kết nối trong giao thức UDP hoặc TCP được xác định duy nhất bởi bộ 4 thông tin nào?",
        answer: "IP nguồn, Port nguồn, IP đích, Port đích",
        options: [
            "Địa chỉ MAC nguồn và đích",
            "IP nguồn và IP đích",
            "Port nguồn và Port đích",
            "IP nguồn, Port nguồn, IP đích, Port đích"
        ]
    },
    {
        numb: 43,
        question: "Giao thức TCP (Transmission Control Protocol) là giao thức:",
        answer: "Hướng kết nối và đảm bảo độ tin cậy",
        options: [
            "Phi kết nối và không đảm bảo độ tin cậy",
            "Hướng kết nối và đảm bảo độ tin cậy",
            "Chỉ dùng để gửi dữ liệu, không nhận",
            "Không sử dụng số hiệu cổng (port)"
        ]
    },
    {
        numb: 44,
        question: "Thiết bị router cho phép làm gì?",
        answer: "Tất cả các phương án trên",
        options: [
            "Liên kết nhiều mạng LAN lại với nhau",
            "Ngăn chặn gói tin broadcast lan truyền giữa các mạng",
            "Định tuyến cho các packet tìm đường đi",
            "Tất cả các phương án trên"
        ]
    },
    {
        numb: 45,
        question: "Phát biểu nào sau đây đúng về thông tin điện tử?",
        answer: "Nội dung của một trang web là một dạng thông tin điện tử",
        options: [
            "Chỉ văn bản mới là thông tin điện tử",
            "Thông tin điện tử không thể sao chép",
            "Nội dung của một trang web là một dạng thông tin điện tử",
            "Thông tin điện tử chỉ tồn tại trên máy tính cá nhân"
        ]
    },
    {
        numb: 46,
        question: "Thao tác nào sau đây không thể thực hiện được trực tiếp với nội dung của một trang web bạn đang xem?",
        answer: "Xóa một đoạn văn bản trên trang web đó",
        options: [
            "Lưu trang web về máy",
            "Sao chép một đoạn văn bản",
            "In trang web",
            "Xóa một đoạn văn bản trên trang web đó"
        ]
    },
    {
        numb: 47,
        question: "Trong trình duyệt web, để lưu lại toàn bộ nội dung trang web (bao gồm cả hình ảnh), bạn nên chọn tùy chọn nào trong hộp thoại Save As?",
        answer: "Web Page, Complete",
        options: [
            "Web Page, HTML Only",
            "Text File",
            "Web Page, Complete",
            "All Files"
        ]
    },
    {
        numb: 48,
        question: "Để thiết lập in trang web theo chiều ngang trong trình duyệt, bạn thường chọn tùy chọn nào?",
        answer: "Landscape",
        options: [
            "Portrait",
            "Landscape",
            "Horizontal",
            "A4"
        ]
    },
    {
        numb: 49,
        question: "Chức năng chính của các phần mềm Internet Explorer, Mozilla Firefox, Google Chrome là gì?",
        answer: "Trình duyệt web",
        options: [
            "Soạn thảo văn bản",
            "Trình duyệt web",
            "Gửi và nhận email",
            "Chỉnh sửa ảnh"
        ]
    },
    {
        numb: 50,
        question: "Để chuyển tiếp (Forward) một thư điện tử, bạn thường tìm biểu tượng hoặc nút nào?",
        answer: "Mũi tên chỉ sang phải",
        options: [
            "Thùng rác",
            "Mũi tên quay lại",
            "Mũi tên chỉ sang phải",
            "Dấu cộng"
        ]
    },
    {
        numb: 51,
        question: "Khi nhận được một email có tập tin đính kèm từ người lạ, bạn nên làm gì đầu tiên?",
        answer: "Quét tệp tin bằng chương trình diệt virus trước khi mở",
        options: [
            "Mở ngay để xem nội dung",
            "Trả lời email để hỏi nội dung",
            "Xóa ngay email đó",
            "Quét tệp tin bằng chương trình diệt virus trước khi mở"
        ]
    },
    {
        numb: 52,
        question: "Máy tính kết nối Internet có thể sử dụng các dịch vụ nào?",
        answer: "Tất cả các phương án trên",
        options: [
            "Duyệt web, gửi email",
            "Xem video, nghe nhạc trực tuyến",
            "Tải các tập tin",
            "Tất cả các phương án trên"
        ]
    },
    {
        numb: 53,
        question: "Trong khi xem các trang web, trình duyệt thường lưu lại một bản sao của trang vào bộ nhớ đệm (cache) để làm gì?",
        answer: "Tăng tốc độ tải trang cho lần truy cập sau",
        options: [
            "Tăng tốc độ tải trang cho lần truy cập sau",
            "Gửi thông tin về cho nhà cung cấp dịch vụ",
            "Để xem khi không có mạng",
            "Làm giảm bộ nhớ máy tính"
        ]
    },
    {
        numb: 54,
        question: "Trong hệ thống thư điện tử, điều nào sau đây là sai?",
        answer: "Hai người khác nhau có thể có địa chỉ thư giống hệt nhau",
        options: [
            "Mỗi địa chỉ thư là duy nhất",
            "Có thể gửi thư cho nhiều người cùng lúc",
            "Hai người khác nhau có thể có địa chỉ thư giống hệt nhau",
            "Có thể đính kèm tệp tin vào thư"
        ]
    },
    {
        numb: 55,
        question: "Để gửi một email cho nhiều người mà không muốn họ thấy địa chỉ email của nhau, bạn nên điền các địa chỉ đó vào trường nào?",
        answer: "Bcc (Blind Carbon Copy)",
        options: [
            "To",
            "Cc (Carbon Copy)",
            "Bcc (Blind Carbon Copy)",
            "Subject"
        ]
    },
    {
        numb: 56,
        question: "Trên Windows, lệnh 'route print' trong Command Prompt dùng để làm gì?",
        answer: "Hiển thị bảng định tuyến của máy tính",
        options: [
            "In một tài liệu",
            "Kiểm tra kết nối mạng",
            "Hiển thị bảng định tuyến của máy tính",
            "Cấu hình địa chỉ IP"
        ]
    },
    {
        numb: 57,
        question: "Để nhiều thiết bị (PC, điện thoại) cùng kết nối Internet thông qua một đường truyền duy nhất, người ta thường dùng thiết bị nào?",
        answer: "Router có chức năng phát Wi-Fi",
        options: [
            "Hub",
            "Switch không có chức năng định tuyến",
            "Modem chỉ có 1 cổng LAN",
            "Router có chức năng phát Wi-Fi"
        ]
    },
    {
        numb: 58,
        question: "Tại sao các máy tính trong mạng LAN thường không dùng trực tiếp địa chỉ IP công cộng để truy cập Internet?",
        answer: "Vì không gian địa chỉ IP công cộng (IPv4) có hạn và để tăng cường bảo mật",
        options: [
            "Vì IP công cộng có tốc độ chậm hơn",
            "Vì IP công cộng không an toàn",
            "Vì IP công cộng phải trả phí rất cao cho mỗi máy",
            "Vì không gian địa chỉ IP công cộng (IPv4) có hạn và để tăng cường bảo mật"
        ]
    },
    {
        numb: 59,
        question: "Kỹ thuật nào cho phép nhiều máy tính trong mạng LAN sử dụng chung một địa chỉ IP công cộng để truy cập Internet?",
        answer: "NAT (Network Address Translation)",
        options: [
            "NAT (Network Address Translation)",
            "DHCP",
            "DNS",
            "VLAN"
        ]
    },
    {
        numb: 60,
        question: "Chức năng của một Proxy Server là gì?",
        answer: "Làm trung gian, thay mặt người dùng truy cập đến các máy chủ khác",
        options: [
            "Cấp phát địa chỉ IP",
            "Làm trung gian, thay mặt người dùng truy cập đến các máy chủ khác",
            "Lưu trữ website",
            "Dịch tên miền thành IP"
        ]
    },
    {
        numb: 61,
        question: "Trong các mạng dùng topo dạng Bus, thiết bị ở hai đầu cáp để chống dội tín hiệu được gọi là gì?",
        answer: "Terminator",
        options: [
            "Router",
            "Repeater",
            "Terminator",
            "Connector"
        ]
    },
    {
        numb: 62,
        question: "Giao thức nào cho phép các Router tự động chia sẻ thông tin định tuyến với nhau?",
        answer: "RIP (Routing Information Protocol)",
        options: [
            "FTP (File Transfer Protocol)",
            "HTTP (HyperText Transfer Protocol)",
            "RIP (Routing Information Protocol)",
            "ARP (Address Resolution Protocol)"
        ]
    },
    {
        numb: 63,
        question: "Trong các mạng không dây, thiết bị nào đóng vai trò trung tâm để các máy khách kết nối vào?",
        answer: "Access Point (AP)",
        options: [
            "Card mạng không dây",
            "Access Point (AP)",
            "Repeater",
            "Switch"
        ]
    },
    {
        numb: 64,
        question: "Câu này bị bỏ trống trong ghi chú.",
        answer: "N/A",
        options: [
            "A",
            "B",
            "C",
            "N/A"
        ]
    },
    {
        numb: 65,
        question: "Trong cấu hình router, 'default gateway' hoặc 'default route' được dùng để làm gì?",
        answer: "Chỉ đường đi cho các gói tin không có trong bảng định tuyến",
        options: [
            "Đặt địa chỉ IP cho router",
            "Đặt tên cho router",
            "Chỉ đường đi cho các gói tin không có trong bảng định tuyến",
            "Cấu hình mật khẩu"
        ]
    },
    {
        numb: 66,
        question: "Trên thiết bị Cisco, lệnh nào dùng để vào chế độ cấu hình cho một giao diện VLAN?",
        answer: "interface vlan [số vlan]",
        options: [
            "vlan [số vlan]",
            "configure vlan [số vlan]",
            "interface vlan [số vlan]",
            "ip address vlan [số vlan]"
        ]
    },
    {
        numb: 67,
        question: "Lệnh nào dùng để cấu hình địa chỉ IP cho một giao diện trên router Cisco?",
        answer: "ip address [địa chỉ IP] [subnet mask]",
        options: [
            "ip address [địa chỉ IP] [subnet mask]",
            "set ip [địa chỉ IP] [subnet mask]",
            "interface ip [địa chỉ IP] [subnet mask]",
            "address is [địa chỉ IP] [subnet mask]"
        ]
    },
    {
        numb: 68,
        question: "Lệnh nào dùng để cấu hình một thông điệp (banner) hiển thị khi người dùng đăng nhập vào thiết bị?",
        answer: "banner motd",
        options: [
            "login message",
            "display text",
            "banner motd",
            "set welcome"
        ]
    },
    {
        numb: 69,
        question: "Lệnh nào dùng để truy cập từ xa vào một thiết bị mạng khác thông qua giao thức telnet?",
        answer: "telnet [địa chỉ IP]",
        options: [
            "connect [địa chỉ IP]",
            "remote [địa chỉ IP]",
            "telnet [địa chỉ IP]",
            "ssh [địa chỉ IP]"
        ]
    },
    {
        numb: 70,
        question: "Để lưu cấu hình đang chạy (running-config) vào cấu hình khởi động (startup-config) trên router Cisco, ta dùng lệnh nào?",
        answer: "copy running-config startup-config",
        options: [
            "save running-config",
            "write memory",
            "copy running-config startup-config",
            "reload"
        ]
    },
    {
        numb: 71,
        question: "Ai là người đã khởi xướng và tạo ra nhân (kernel) của hệ điều hành Linux?",
        answer: "Linus Torvalds",
        options: [
            "Bill Gates",
            "Steve Jobs",
            "Richard Stallman",
            "Linus Torvalds"
        ]
    },
    {
        numb: 72,
        question: "Trong trình soạn thảo 'vi' của Linux, để chuyển từ chế độ chèn (Insert Mode) về chế độ lệnh (Command Mode), bạn nhấn phím nào?",
        answer: "ESC",
        options: [
            "Enter",
            "Tab",
            "ESC",
            "Ctrl + C"
        ]
    },
    {
        numb: 73,
        question: "Trong trình soạn thảo 'vi' (chế độ lệnh), lệnh nào dùng để ghi lại thay đổi và thoát?",
        answer: ":wq",
        options: [
            ":q!",
            ":w",
            ":wq",
            ":exit"
        ]
    },
    {
        numb: 74,
        question: "Trong Linux, lệnh nào dùng để liệt kê các file và thư mục trong thư mục hiện tại?",
        answer: "ls",
        options: [
            "dir",
            "list",
            "ls",
            "show"
        ]
    },
    {
        numb: 75,
        question: "Phần cốt lõi của hệ điều hành Linux, quản lý tài nguyên phần cứng, được gọi là gì?",
        answer: "Kernel (Nhân)",
        options: [
            "Shell (Trình bao)",
            "Kernel (Nhân)",
            "GUI (Giao diện đồ họa)",
            "Bootloader"
        ]
    },
    {
        numb: 76,
        question: "Công cụ nào sau đây là một trình soạn thảo văn bản hoạt động ở chế độ dòng lệnh (không có giao diện đồ họa) trong Linux?",
        answer: "vi / vim",
        options: [
            "Gedit",
            "LibreOffice Writer",
            "vi / vim",
            "Visual Studio Code"
        ]
    },
    {
        numb: 77,
        question: "Giao thức nào sau đây cho phép đăng nhập từ xa vào một máy khác qua mạng một cách an toàn (mã hóa)?",
        answer: "ssh",
        options: [
            "telnet",
            "ftp",
            "ssh",
            "http"
        ]
    },
    {
        numb: 78,
        question: "SSH trong Linux là viết tắt của?",
        answer: "Secure Shell",
        options: [
            "System Shell",
            "Secure Shell",
            "Superuser Shell",
            "Simple Socket Host"
        ]
    },
    {
        numb: 79,
        question: "Địa chỉ IP 127.0.0.1 được gọi là gì và dùng để làm gì?",
        answer: "Địa chỉ loopback, dùng để kiểm tra chính máy tính đó",
        options: [
            "Địa chỉ broadcast, gửi gói tin đến tất cả các máy",
            "Địa chỉ gateway, để đi ra ngoài mạng",
            "Địa chỉ loopback, dùng để kiểm tra chính máy tính đó",
            "Địa chỉ DNS server"
        ]
    },
    {
        numb: 80,
        question: "Trong mô hình TCP/IP, quá trình thêm thông tin điều khiển (header) vào dữ liệu ở mỗi tầng được gọi là gì?",
        answer: "Đóng gói (Encapsulation)",
        options: [
            "Nén (Compression)",
            "Đóng gói (Encapsulation)",
            "Phân mảnh (Fragmentation)",
            "Mã hóa (Encryption)"
        ]
    },
    {
        numb: 81,
        question: "Thiết bị hoặc phần mềm nào được đặt giữa mạng nội bộ và Internet để bảo vệ, chống lại các truy cập trái phép?",
        answer: "Firewall (Tường lửa)",
        options: [
            "Router",
            "Switch",
            "Firewall (Tường lửa)",
            "Hub"
        ]
    },
    {
        numb: 82,
        question: "Một card mạng có thể đồng thời gửi và nhận dữ liệu được gọi là hoạt động ở chế độ nào?",
        answer: "Full-duplex",
        options: [
            "Simplex",
            "Half-duplex",
            "Full-duplex",
            "Multi-duplex"
        ]
    },
    {
        numb: 83,
        question: "Đặc điểm chính của giao thức dạng Connectionless (phi kết nối) là gì?",
        answer: "Không thiết lập kết nối trước khi gửi, không đảm bảo tin cậy",
        options: [
            "Phải thực hiện bắt tay ba bước trước khi gửi",
            "Đảm bảo mọi gói tin đến đúng thứ tự",
            "Không thiết lập kết nối trước khi gửi, không đảm bảo tin cậy",
            "Tốc độ chậm nhưng rất ổn định"
        ]
    },
    {
        numb: 84,
        question: "Phương thức truyền dữ liệu trong đó dữ liệu được chia thành các gói tin nhỏ hơn để gửi đi được gọi là gì?",
        answer: "Chuyển mạch gói (Packet Switching)",
        options: [
            "Chuyển mạch kênh (Circuit Switching)",
            "Chuyển mạch gói (Packet Switching)",
            "Broadcasting",
            "Streaming"
        ]
    },
    {
        numb: 85,
        question: "Để đảm bảo tính toàn vẹn của dữ liệu (dữ liệu không bị thay đổi khi truyền), người ta thường sử dụng kỹ thuật nào?",
        answer: "Hàm băm (Hashing) và checksum",
        options: [
            "Mã hóa (Encryption)",
            "Nén dữ liệu (Compression)",
            "Hàm băm (Hashing) và checksum",
            "Phân quyền (Authorization)"
        ]
    },
    {
        numb: 86,
        question: "Hình thức tấn công mạng trong đó kẻ tấn công giả mạo thành một thực thể đáng tin cậy được gọi là gì?",
        answer: "Tấn công giả mạo (Spoofing)",
        options: [
            "Tấn công từ chối dịch vụ (DoS)",
            "Tấn công giả mạo (Spoofing)",
            "Tấn công nghe lén (Eavesdropping)",
            "Tấn công bằng mã độc (Malware)"
        ]
    },
    {
        numb: 87,
        question: "Để phòng chống tấn công từ chối dịch vụ (DoS), biện pháp nào sau đây là hiệu quả?",
        answer: "Sử dụng Firewall và hệ thống phát hiện xâm nhập (IDS/IPS)",
        options: [
            "Đổi mật khẩu thường xuyên",
            "Cài phần mềm diệt virus",
            "Sử dụng Firewall và hệ thống phát hiện xâm nhập (IDS/IPS)",
            "Không truy cập các trang web lạ"
        ]
    },
    {
        numb: 88,
        question: "So với thư tín truyền thống, thư điện tử có đặc điểm nổi bật nào?",
        answer: "Tốc độ nhanh và có thể gửi đồng thời cho nhiều người",
        options: [
            "Bảo mật hơn",
            "Phải viết tay",
            "Tốc độ nhanh và có thể gửi đồng thời cho nhiều người",
            "Luôn miễn phí"
        ]
    },
    {
        numb: 89,
        question: "Kỹ thuật nào được dùng để bảo mật thông tin trên hệ thống mạng bằng cách che giấu địa chỉ IP thật của mạng nội bộ?",
        answer: "NAT (Network Address Translation)",
        options: [
            "VLAN",
            "Subnetting",
            "NAT (Network Address Translation)",
            "Firewall"
        ]
    },
    {
        numb: 90,
        question: "Cơ chế nào dùng để ánh xạ một tên gọi (hostname) thành một địa chỉ IP?",
        answer: "DNS",
        options: [
            "DHCP",
            "ARP",
            "DNS",
            "NAT"
        ]
    },
    {
        numb: 91,
        question: "Ngôn ngữ nào là công cụ cơ bản để tạo cấu trúc và soạn thảo nội dung cho các trang web?",
        answer: "HTML",
        options: [
            "Java",
            "Python",
            "C++",
            "HTML"
        ]
    },
    {
        numb: 92,
        question: "Trong một bản ghi DNS, loại bản ghi nào chỉ định máy chủ tên miền cho một tên miền?",
        answer: "NS (Name Server)",
        options: [
            "A (Address)",
            "CNAME (Canonical Name)",
            "MX (Mail Exchange)",
            "NS (Name Server)"
        ]
    },
    {
        numb: 93,
        question: "Khi bạn có thể truy cập website bằng địa chỉ IP nhưng không thể truy cập bằng tên miền, nguyên nhân có khả năng cao nhất là gì?",
        answer: "Lỗi DNS Server",
        options: [
            "Lỗi cáp mạng",
            "Lỗi card mạng",
            "Lỗi DNS Server",
            "Hết dung lượng ổ cứng"
        ]
    },
    {
        numb: 94,
        question: "Khi gói tin từ web server bị lỗi trên đường truyền và không đến được máy khách, giao thức TCP sẽ làm gì?",
        answer: "Yêu cầu gửi lại gói tin bị lỗi",
        options: [
            "Bỏ qua gói tin đó",
            "Yêu cầu gửi lại toàn bộ trang web",
            "Yêu cầu gửi lại gói tin bị lỗi",
            "Hiển thị thông báo lỗi cho người dùng ngay lập tức"
        ]
    },
    {
        numb: 95,
        question: "Mạng chuyển mạch gói có đặc điểm gì?",
        answer: "Tài nguyên mạng được chia sẻ, hiệu quả hơn chuyển mạch kênh",
        options: [
            "Thiết lập một kênh riêng cho mỗi kết nối",
            "Tài nguyên mạng được chia sẻ, hiệu quả hơn chuyển mạch kênh",
            "Tất cả các gói tin phải đi theo cùng một con đường",
            "Không phù hợp cho lưu lượng truy cập không đều"
        ]
    },
    {
        numb: 96,
        question: "Đại lượng nào đo lường sự suy giảm cường độ tín hiệu khi nó được truyền đi trên mạng?",
        answer: "Suy hao (Attenuation)",
        options: [
            "Băng thông (Bandwidth)",
            "Độ trễ (Latency)",
            "Suy hao (Attenuation)",
            "Nhiễu (Noise)"
        ]
    },
    {
        numb: 97,
        question: "Để đảm bảo các gói tin đến đúng thứ tự, giao thức TCP sử dụng thông tin gì?",
        answer: "Số thứ tự (Sequence Number)",
        options: [
            "Số hiệu cổng (Port Number)",
            "Địa chỉ IP",
            "Số thứ tự (Sequence Number)",
            "Checksum"
        ]
    },
    {
        numb: 98,
        question: "Hiện tượng xảy ra khi lượng dữ liệu gửi đến một thiết bị mạng vượt quá khả năng xử lý của nó được gọi là gì?",
        answer: "Nghẽn mạng (Congestion)",
        options: [
            "Xung đột (Collision)",
            "Nghẽn mạng (Congestion)",
            "Suy hao (Attenuation)",
            "Độ trễ (Jitter)"
        ]
    },
    {
        numb: 99,
        question: "Chức năng của tầng Trình diễn (Presentation) trong mô hình OSI là gì?",
        answer: "Đảm bảo dữ liệu từ tầng Ứng dụng của một hệ thống có thể đọc được bởi tầng Ứng dụng của hệ thống khác",
        options: [
            "Khởi tạo, quản lý, kết thúc phiên làm việc",
            "Cung cấp dịch vụ truyền file",
            "Đảm bảo dữ liệu từ tầng Ứng dụng của một hệ thống có thể đọc được bởi tầng Ứng dụng của hệ thống khác",
            "Xác định đường đi tốt nhất cho gói tin"
        ]
    }
];