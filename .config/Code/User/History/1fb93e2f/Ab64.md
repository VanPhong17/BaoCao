# ***Giới thiệu***
- Điều gì xảy ra nếu bạn gõ tìm google.com

# ***Phím G***
- Khi bạn nhấn phím `G` trình duyệt nhận được sự kiện kích hoạt. Tùy thuộc vào thuật toán của trình duyệt và chế độ bạn đang sử dụng `riêng tư/ẩn danh`. Các gợi ý khác nhau sẽ được hiện ra. Các thuật toán chương trình này sắp xếp dựa trên lịch sử tìm kiếm, đánh dấu trang, và các tìm kiếm phổ biến từ internet. Khi nhấn phím nhiều khối mã đã được tinh chỉnh và chạy. Nó có thể đề xuất trước khi bạn gõ xong `google.com`

# ***Phím enter***
- Một mạch điện đặc biệt được gán cho phím enter trên bàn phím. Nó cho phép một dòng điện nhỏ chạy vào mạch logic của bàn phím. Nó quét trạng thái của mỗi công tắc phím, giảm nhiễu điện của việc đóng mở liên tục nhanh của công tắc và chuyển đổi nó thành một số nguyên mã phím, trong trường hợp này là 13.Bộ điều khiển bàn phím sau đó mã hóa mã phím để chuyển tải đến máy tính. Hiện nay hầu hết các truyền tải này được thực hiện thông qua Universal Serial Bus(USB) hoặc Bluetooth, lịch sự sử dụng kết nối PS/2 hoặc ADB
-  Trong trường hợp của bàn phím usb
   - Mạch USB của bàn phím được cấp nguồn cung cấp 5V thông qua USB trên máy tính.
   - Mã phím được tạo ra được lưu trữ bởi bộ nhớ mạch nội bộ của bàn phím trong một thanh ghi gọi là`điểm cuối`
   - Bộ điều khiển USB của bàn phím đọc điểm cuối mỗi khoảng 10ms
   - Giá trị này được đưa vào USB SIE để được chuyển thành 1 hoặc nhiều gói tin theo giao thực USB
   - Những gói tin này được gửi bằng tín hiệu điện qua chân D+ và D- với tốc độ tối đa là 1,5Mb/s vì một thiết bị HID luôn được khai báo là thiết bị cấp thấp
   - Tín hiệu chuỗi này được giải mã tại bộ điều khiển USB của máy tính và được giải thích bởi thiết bị bàn phím HID thông dụng. Giá trị của phím được chuyển vào lớp phần cứng của hệ điều hành.
- Trong trường hợp bàn phím ảo:
  - Khi người dùng đặt tay lên màn hình bàn phím điện dung hiện đại, một lượng điện nhỏ được chuyển lên ngón tay. Điều này hoàn thành mạch thông qua trường điện tĩnh của lớp dẫn và tạo ra một điện áp tại điểm đó trên màn hình. Bộ điều khiển màn hình sau đó tạo ra một ngắt báo cáo tọa độ của lần nhấn phím 
  - Sau đó, hệ điều hành di động thông báo cho ứng dụng đang tập trung hiện tại về một sự kiện nhấn ở một trong các phần tử GUI của nó (ví dụ như các nút ứng dụng bàn phím ảo).
  - Bàn phím ảo hiện tại có thể tạo ra một ngắt phần mềm để gửi lại một thông báo 'phím được nhấn' cho hệ điều hành.
  Ngắt này thông báo cho ứng dụng đang tập trung hiện tại về một sự kiện 'phím được nhấn'.


```Câu hỏi: Số nguyên mã phím là gì và số 13 nghĩa là sao```

