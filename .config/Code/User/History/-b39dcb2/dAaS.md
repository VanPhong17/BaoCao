# ***Cấu hình card giao tiếp mạng***
Để các máy có thể giao tiếp được với nhau trong mạng theo giao thức TCP/IP, thiết bị
dùng làm phương tiện giao tiếp đó là Card giao tiếp mạng (network card). Để quản lý thiết
bị này Linux cung cấp lệnh `ifconfig`. Lệnh này dùng để xem các thông tin về cấu hình mạng
hiện thời của máy cũng như gán các địa chỉ cho các card giao tiếp mạng (interface). Ngoài
ra ta cũng có thể dùng lệnh này để kích hoạt hoặc tắt một card mạng.
# ***Các lệnh dùng để quản trị mạng***
## ***Lệnh `ifconfig`***
Được viết tắt của từ Interface configurator nghĩa là cấu hình giao diện của mạng. Đây là lệnh phổ thông được dùng để kiểm tra mạng. Kết quả trả về của lệnh này sẽ là các thông tin cơ bản về cấu hình mạng như: địa chỉ IP, địa chỉ MAC, MTU,…
Lệnh này thường được sử dụng trong việc đặt hoặc hiển thị địa chỉ IP và NETMASK của giao diện mạng
- ipconfig -a : Liệt kê tất các các giao diện (interface) hiện tại kể các các giao diện không được sử dụng.
- ipconfig <interface> : Hiển thị thông tin chi tiết của một interface cụ thể
- ifconfig <interface> <address> netmask <address> : Lệnh này sẽ gán địa chỉ IP và Gateway cho một giao diện. Lưu ý: sau khi khởi động lại máy tính thì các cấu hình này sẽ được reset (cập nhật lại).
- ifup <interface> : Bật interface 
- ifdown <interface> : Tắt interface