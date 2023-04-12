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


# ***Tìm hiểu lệnh `mkfs`***
 Là tạo các hệ thống tệp. Hay gọi khác có thể được gọi là định dạng.Đó là quá trình chuẩn bị một phân vùng để nó có thể lưu trữ dữ liệu. Phân vùng cần một cách để lưu tập tin, vâng.

 - Hệ thống tệp có sẵn

```
  $ mkfs
mkfs         mkfs.cramfs  mkfs.ext3    mkfs.fat     mkfs.msdos   mkfs.vfat
mkfs.bfs     mkfs.ext2    mkfs.ext4    mkfs.minix   mkfs.ntfs    
```


Các thư mục trên đề cập đến các lệnh `mkfs` để tạo ra các loại hệ thống tập tin khác nhau trên Linux.

- `mkfs.bfs`: tạo ra một hệ thống tập tin BFS (BeOS File System).
- `mkfs.cramfs`: tạo ra một hệ thống tập tin CRAMFS (Compressed ROM File System), được sử dụng cho các thiết bị nhúng.
- `mkfs.ext2`, `mkfs.ext3`, `mkfs.ext4`: tạo ra các hệ thống tập tin ext2, ext3 và ext4, được sử dụng phổ biến trên các bản phân phối Linux.
- `mkfs.fat`, `mkfs.msdos`, `mkfs.vfat`: tạo ra các hệ thống tập tin FAT (File Allocation Table), MS-DOS và VFAT, được sử dụng trên các thiết bị lưu trữ di động như USB hoặc thẻ nhớ.
- `mkfs.minix`: tạo ra một hệ thống tập tin Minix, được sử dụng trên một số bản phân phối Linux và các thiết bị nhúng.

Các lệnh `mkfs` này được sử dụng để tạo ra các hệ thống tập tin trên các thiết bị lưu trữ khác nhau, tùy thuộc vào mục đích sử dụng và yêu cầu của người dùng.

# ***Tìm hiểu lệnh `mount`***
Lệnh `mount` trong Linux được sử dụng để kết nối một hệ thống tập tin đã được tạo trên một thiết bị lưu trữ (như ổ đĩa cứng, USB, thẻ nhớ, ...) vào một thư mục trên hệ thống tập tin hiện tại. Kết nối hệ thống tập tin này có thể cho phép bạn truy cập và sử dụng các tập tin và thư mục được lưu trữ trên thiết bị đó.

# ***Lệnh `lvscan` trong linux***
Trong LVM (Logical Volume Manager) trên Linux, lệnh `lvscan` được sử dụng để quét các Logical Volume (LV) hiện có và hiển thị thông tin về chúng.

Cú pháp của lệnh `lvscan` như sau:

```
lvscan [options]
```

Trong đó, `options` là các tùy chọn để cấu hình lệnh. Một số tùy chọn phổ biến của `lvscan` như sau:

- `-a`: Quét tất cả các Volume Group (VG) và LV, bao gồm cả những LV đang bị khóa.
- `-c`: Hiển thị kết quả dưới dạng cột.
- `-d`: Hiển thị kết quả dưới dạng giảm dần (descending).
- `-h`: Hiển thị kết quả dưới dạng đơn vị được định dạng (megabytes, gigabytes, ...).
- `-o`: Chỉ định các trường thông tin để hiển thị, ví dụ như `lv_name`, `lv_size`, `vg_name`, `lv_path`, `lv_attr`, ...

Khi được chạy, `lvscan` sẽ quét các LV hiện có trên hệ thống và hiển thị thông tin về chúng, bao gồm tên LV, dung lượng, VG chứa LV, đường dẫn đến LV, trạng thái của LV, ...

# ***Tạo 2 phân vùng***
```
$ fdisk /dev/sdb

Welcome to fdisk (util-linux 2.37.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

fdisk: cannot open /dev/sdb: No such file or directory
vanphong17@vanphong17-Inspiron-5490:~$ pvcreate /dev/sdb
  WARNING: Running as a non-root user. Functionality may be unavailable.
  /run/lock/lvm/P_global:aux: open failed: Permission denied
vanphong17@vanphong17-Inspiron-5490:~$ sudo -i
[sudo] password for vanphong17: 
root@vanphong17-Inspiron-5490:~# pvcreate /dev/sdb
  No device found for /dev/sdb.
root@vanphong17-Inspiron-5490:~# pvcreate /dev/sdb1
  No device found for /dev/sdb1.
root@vanphong17-Inspiron-5490:~# su - vanphong17
vanphong17@vanphong17-Inspiron-5490:~$ pvcreate /dev/sdb1
  WARNING: Running as a non-root user. Functionality may be unavailable.
  /run/lock/lvm/P_global:aux: open failed: Permission denied
```