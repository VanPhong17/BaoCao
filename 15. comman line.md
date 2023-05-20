# Command Line
## ***Khái niệm***
Command line trong Linux là một giao diện dòng lệnh cho phép người dùng tương tác với hệ thống bằng cách nhập các lệnh và thực hiện các tác vụ khác nhau. Nó cung cấp cho người dùng quyền truy cập đến các chức năng và tài nguyên của hệ thống.

Với command line, người dùng có thể thực hiện các tác vụ như tạo, xóa, sao chép và di chuyển các tập tin và thư mục, cài đặt phần mềm, quản lý quyền truy cập và nhiều tác vụ khác. Nó cũng cho phép người dùng tùy chỉnh và cấu hình hệ thống của mình theo ý muốn.

Command line thường được sử dụng bởi các nhà phát triển, quản trị viên hệ thống và người dùng kỹ thuật, nhưng nó cũng có thể được sử dụng bởi bất kỳ ai muốn tìm hiểu và khám phá thêm về hệ thống Linux.
## ***Tìm hiểu***
Biến `PS1` là chuỗi ký tự được hiển thị dưới dạng dấu nhắc trên dòng lệnh. Hầu hết, các phiên bản đều đặt `PS1` thành một giá trị mặc định đã biết. Ví dụ: tên người dùng và máy chủ tương ứng:

`[root@localhost ~]#`

Nó thật sự hữu dụng vì luôn hiển thị để người dùng biết họ đang làm việc ở chế độ người dùng nào.

Ta có thể tùy chỉnh bằng cách thay đổi giá trị của `PS1`.

Ta xem giá trị mặc định của `PS1`:
```
[root@localhost ~]# echo $PS1
[\u@\h \W]\$
```

Trong đó: 
- `\u` : tên user
- `\h` : hostname
- `\W` : thư mục đang làm việc
- `\$` : kí tự đại diện cho loại tài khoản

Để tùy biến ta chỉ cần thay đổi giá trị của `PS1`, ta sử dụng lệnh `export`. Ví dụ: 
```
[root@localhost ~]# export PS1='[\h@\u \W]\$'
[localhost@root ~]# 
```