# Linux Network Namespaces

**Network namspace** là khái niệm cho phép bạn cô lập môi trường mạng network trong một host. Namespace phân chia việc sử dụng các khác niệm liên quan tới network như devices, địa chỉ addresses, ports, định tuyến và các quy tắc tường lửa vào trong một hộp (box) riêng biệt, chủ yếu là ảo hóa mạng trong một máy chạy một kernel duy nhất.

Các thiết bị mạng chuyên sử dụng Virtual Routing and Forwarding (VRF), nghĩa là nhiều hơn 1 bộ định tuyến ảo(chuyển tiếp Layer 3) có thể chạy trên cùng một thiết bị vật lí. Trong không gian mạng ảo Linux, các Network Namespaces cho phép các giao diện mạng và bảng định tuyến hoạt động riêng biệt với nhau.

## Các thao tác cơ bản trên Namespaces
Trong Linux, chỉ cần là `root` cho tất cả các hoạt động thay đổi cấu hình của network stack.

Tạo 1 `network namespace`:
```
 # ip netns add Blue
 # ip netns list

 # ll /var/run/netns/


```

Mỗi Network namespace có một giao diện loopback riêng, bảng định tuyến riêng và iptables riêng cung cấp nat và filtering.
```
# ip netns exec Blue ip addr list
```

Đảm bảo hiện thị giao diện đó trước khi làm việc với Network Namespace
```
# ip netns exec Blue ip link set dev lo up
# ip netns exec Blue ip a


```

Network Namespaces cung cấp thêm khả năng chạy các tiến trình với network namespace.
Ví dụ chạy 1 session trên namespace Blue:
```
 # ip netns exec Blue bash

# ip a


# netstat -nr

     
# exit
```

Xóa 1 namespace:
```
# ip netns add White
# ip netns list


# ip netns delete White
# ip netns list

```

## Thêm giao diện vào Network Namespace
Để có thể kết nối ra mạng bên ngoài, ta gắn một giao diện ảo vào "default" hoặc "global" namespace nơi giao diện vật lí tồn tại.

Để thực hiện điều này, hãy tạo một vài giao diện ảo, đặt là `vetha` và `vethb`
```
# ip link add vetha type veth peer name vethb
```

Gắn `vethb` vào namespace Blue:
```
# ip link set vethb netns Blue
# ip netns exec Blue ip link set dev vethb up
# ip netns exec Blue ip a

```

Giao diện mạng ảo `vetha` vẫn gắn vào namespace global:
```
# ip link set dev vetha up
# ip a

```

Cấu hình giao diện trong network namespace global: