# ***The file streams***
## ***Khái niệm***
Trong Linux, các file streams được sử dụng để định hướng dữ liệu từ và đến các tệp tin và thiết bị trên hệ thống. Có ba loại file stream chính:

- Standard Input (stdin): Là file stream đại diện cho dữ liệu được nhập vào từ bàn phím hoặc từ một file hoặc một chương trình khác. Theo mặc định, nếu không có đối số đầu vào nào được cung cấp cho một chương trình, chương trình sẽ sử dụng standard input để lấy đầu vào.

- Standard Output (stdout): Là file stream đại diện cho dữ liệu được xuất ra đến màn hình hoặc đến một file hoặc chương trình khác. Theo mặc định, nếu không có đối số đầu ra nào được chỉ định cho một chương trình, chương trình sẽ sử dụng standard output để xuất dữ liệu.

- Standard Error (stderr): Là file stream đại diện cho thông tin lỗi và cảnh báo của một chương trình. Nó thường được sử dụng để ghi ra các thông báo lỗi trong quá trình thực hiện một chương trình. Standard error được hiển thị trên màn hình hoặc được đưa ra một file riêng biệt để dễ dàng quản lý các thông báo lỗi.

Các file stream này cung cấp cho chương trình một cách thức tiếp cận dễ dàng và linh hoạt đến dữ liệu đầu vào và đầu ra. Chúng ta có thể sử dụng các ký hiệu để định hướng file streams của chương trình, chẳng hạn như sử dụng dấu < để lấy đầu vào từ một file hoặc sử dụng dấu > để ghi dữ liệu xuất ra đến một file.
## ***Cách thực hiện***
Thông thường, stdin là bàn phím của bạn, stdout và stderr được in trên terminal của bạn; thường stderr được chuyển hướng đến một tập tin ghi lỗi.
Trong Linux, tất cả các tập tin mở được biểu diễn trong bộ nhớ bởi những gì được gọi là mô tả tập tin. Đơn giản, chúng được biểu diễn bằng các số bắt đầu từ số 0. Stdin là mô tả tập tin 0, stdout là mô tả tập tin 1, và stderr là mô tả tập tin 2. Thông thường, nếu có các tập tin khác được mở cạnh cả ba tập tin này, mà nó được mở mặc định, chúng sẽ bắt đầu từ mô tả tập tin 3 và tăng từ đó.