# ***Khái niệm***
LVM là phương pháp cho phép ấn định không gian đĩa cứng thành những logical Volume khiến cho việc thay đổi kích thước trở nên dễ dàng hơn. Với kỹ thuật này có thể thay đổi kích thước mà không cần phải sửa lại bảng của OS
# ***Vai trò của LVM***
LVM là kỹ thuật quản lý việc thay đổi kích thước lưu trữ của ổ cứng
- Không để hệ thống bị gián đoạn hoạt động
- Không làm hỏng dịch vụ
- Có thể kết hợp Hot Swapping(thay thế nóng các thành phần bên trong máy tính.

# ***Các thành phần trong LVM***
## ***Hard drives -Drives***
Thiết bị lưu trữ dữ liệu
## ***Partition***
Partition là các phân vùng của Hard drives, Mỗi Hard drives có 4 partition mà partition lại có 2 loại:
- Primary partition:
  - Phân vùng chính, có thể khởi động? 
  - Mỗi đĩa cứng có thể có tối đa 4 phân vùng này

- Extended partition
  - Phân vùng mở rộng
# ***Physical Volumes***
Thành phần cơ bản sử dụng bởi lVM?
# ***Volume Group***
Nhiều Physical Volume thì thành một Volume Group. Các PV có thể thuộc cùng một HDD hoặc HDD khác nhau.
# ***Logical Volume***
VG được chia nhỏ thành nhiều LG. Khi dung lượng của Logical Volume được sử dụng hết ta có thể đưa thêm ổ đĩa mới bổ sung cho VG do đó tăng được dung lượng của Logical Volume
???? Tại sao từ PV lại gộp thành nhiều VG mà từ VG lại thành LG????

# ***File systems***
- Tổ chức và kiểm soát các tập tin
- Được lưu trữ trên ổ đĩa cho phép truy cập nhanh chóng và an toàn
- Sắp xếp dữ liệu trên đĩa cứng máy tính.
- Quản lý vị trí vật lý của mọi thành phần dữ liệu

# ***Tạo LVM***
- Kiểm tra những Hard Drives trên hệ thống bằng câu lệnh `lsblk`
```
  $ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0         7:0    0     4K  1 loop /snap/bare/5
loop1         7:1    0  63,3M  1 loop /snap/core20/1822
loop2         7:2    0  63,3M  1 loop /snap/core20/1852
loop3         7:3    0    73M  1 loop /snap/core22/583
loop4         7:4    0    73M  1 loop /snap/core22/607
loop5         7:5    0 240,6M  1 loop /snap/firefox/2356
loop6         7:6    0 239,9M  1 loop /snap/firefox/2487
loop7         7:7    0 346,3M  1 loop /snap/gnome-3-38-2004/119
loop8         7:8    0 349,7M  1 loop /snap/gnome-3-38-2004/137
loop9         7:9    0 460,4M  1 loop /snap/gnome-42-2204/68
loop10        7:10   0  91,7M  1 loop /snap/gtk-common-themes/1535
loop11        7:11   0  45,9M  1 loop /snap/snap-store/638
loop12        7:12   0  49,8M  1 loop /snap/snapd/18357
loop13        7:13   0  49,8M  1 loop /snap/snapd/18596
loop14        7:14   0   304K  1 loop /snap/snapd-desktop-integration/49
loop15        7:15   0   428K  1 loop /snap/snapd-desktop-integration/57
nvme0n1     259:0    0 476,9G  0 disk 
├─nvme0n1p1 259:1    0   100M  0 part /boot/efi
├─nvme0n1p2 259:2    0    16M  0 part 
├─nvme0n1p3 259:3    0 199,1G  0 part 
├─nvme0n1p4 259:4    0   823M  0 part 
├─nvme0n1p5 259:5    0 221,6G  0 part 
├─nvme0n1p6 259:6    0  14,9G  0 part 
└─nvme0n1p7 259:7    0  39,1G  0 part /var/snap/firefox/common/host-hunspell
```
- Tạo Partition 
  Từ các Hard Drives trên hệ thống, tạo các partition bằng lệnh `fdisk /dev/
