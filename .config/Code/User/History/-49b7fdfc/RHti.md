# ***Khái niệm cơ bản về tiến trình***
Là một chương trình chạy trên hệ thống. Mỗi chương trình chạy hệ thống đều có tiến trình tương ứng
Được định danh bởi một PID phục vụ cho việc giám sát, điều khiển và quản lý của hệ thống

# ***Các loại tiến trình***
Có 2 loại tiến trình gồm tiến trình cha và tiến trình con
Khi một tiến trình sinh ra 1 tiến trình khác thì:
-	Tiến trình ban đầu được gọi là tiến trình cha và được định danh bởi PPID(Parent)
-	Tiến trình mới sẽ được gọi là tiến trình con
Tương tác giữa tiến trình cha và tiến trình con
-	Khi tiến trình con đang chạy thì tiến trình cha sẽ chờ
-	Khi tiến trình con hoàn thành thì tiến trình cha sẽ tiếp tục thực thi và tiến trình con sẽ được kết thúc.
## ***Các trạng thái của tiến trình*** 
-	Run: tiến trình đang chạy
-	Sleep: Tiến trình đang ở trạng thái chờ hoạt động
-	Zombie: Tiến trình mà tiền trình cha đã kết thúc
-	Stop: Tiến trình đã dừng hoạt động
# ***Mục đích của quản lí tiến trình***
-	Xác định những tiến trình đang chạy trên hệ thống 
-	Trạng thái của các tiến trình 
-	Tài nguyên mà các tiến trình đang sử dụng
-	Kiểm soát tiến trình 
-	Kết thúc các tiến tình không mong muốn
-	Thực thi các nghiệp vụ theo lịch
- Kiểm soát tải của hệ thống, giúp kiểm soát và tối ưu lại hệ thống, tránh ảnh hượng đến nghiệp vụ khác.
# ***Các câu lệnh quản lý tiến trình***
-	`ps -ef`: liệt kê các tiến trình đang hoạt động trên hệ thống
*Các thông số*
```sh
 #ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 07:51 ?        00:00:03 /sbin/init splash
root           2       0  0 07:51 ?        00:00:00 [kthreadd]
root           3       2  0 07:51 ?        00:00:00 [rcu_gp]
root           4       2  0 07:51 ?        00:00:00 [rcu_par_gp]
root           5       2  0 07:51 ?        00:00:00 [slub_flushwq]
root           6       2  0 07:51 ?        00:00:00 [netns]
root           8       2  0 07:51 ?        00:00:00 [kworker/0:0H-events_highpri
root          10       2  0 07:51 ?        00:00:00 [mm_percpu_wq]
root          11       2  0 07:51 ?        00:00:00 [rcu_tasks_kthread]
root          12       2  0 07:51 ?        00:00:00 [rcu_tasks_rude_kthread]
root          13       2  0 07:51 ?        00:00:00 [rcu_tasks_trace_kthread]
root          14       2  0 07:51 ?        00:00:00 [ksoftirqd/0]
root          15       2  0 07:51 ?        00:00:19 [rcu_preempt]
root          16       2  0 07:51 ?        00:00:00 [migration/0]
root          17       2  0 07:51 ?        00:00:00 [idle_inject/0]
root          19       2  0 07:51 ?        00:00:00 [cpuhp/0]
root          20       2  0 07:51 ?        00:00:00 [cpuhp/1]
root          21       2  0 07:51 ?        00:00:00 [idle_inject/1]
root          22       2  0 07:51 ?        00:00:00 [migration/1]
root          23       2  0 07:51 ?        00:00:00 [ksoftirqd/1]
root          25       2  0 07:51 ?        00:00:00 [kworker/1:0H-events_highpri
root          26       2  0 07:51 ?        00:00:00 [cpuhp/2]
root          27       2  0 07:51 ?        00:00:00 [idle_inject/2]
root          28       2  0 07:51 ?        00:00:00 [migration/2]
root          29       2  0 07:51 ?        00:00:00 [ksoftirqd/2]
root          31       2  0 07:51 ?        00:00:00 [kworker/2:0H-events_highpri
root          32       2  0 07:51 ?        00:00:00 [cpuhp/3]
root          33       2  0 07:51 ?        00:00:00 [idle_inject/3]
root          34       2  0 07:51 ?        00:00:00 [migration/3]
root          35       2  0 07:51 ?        00:00:00 [ksoftirqd/3]
root          37       2  0 07:51 ?        00:00:00 [kworker/3:0H-events_highpri
root          38       2  0 07:51 ?        00:00:00 [cpuhp/4]
root          39       2  0 07:51 ?        00:00:00 [idle_inject/4]
root          40       2  0 07:51 ?        00:00:00 [migration/4]
root          41       2  0 07:51 ?        00:00:00 [ksoftirqd/4]
root          43       2  0 07:51 ?        00:00:00 [kworker/4:0H-events_highpri
```
-  UID: User quản lý tiến trình 
- PID: ID tiến trình
- PPID: ID tiến trình cha
- STIME: Start time
- c: CPU đang thực thi
- TIME: Thời gian thực thi của tiến trình 
- CMD: Câu lệnh thực thi
- `ps -fu oracle`: Hiện thị các tiến trình của user oracle
- `pgrep`: Hiển thị thông tin các tiến trình của một chương trình
Ví dụ liệt kê các tiến trình chạy java: `pgrep -l java`
-	`top`: Hiện thị trạng thái của các tiến trình đang hoạt động trên hệ thống
```sh
top - 15:57:58 up  8:06,  1 user,  load average: 0,11, 0,08, 0,09
Tasks: 317 total,   1 running, 316 sleeping,   0 stopped,   0 zombie
%Cpu(s):  4,0 us,  1,4 sy,  0,0 ni, 94,6 id,  0,1 wa,  0,0 hi,  0,0 si,  0,0 st
MiB Mem :   7608,8 total,    373,2 free,   2928,0 used,   4307,6 buff/cache
MiB Swap:   2048,0 total,   2046,7 free,      1,2 used.   3670,9 avail Mem 

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                                                                                                                                     
   2169 vanphon+  20   0 5916936 332404 127324 S  18,2   4,3  15:29.59 gnome-shell                                                                                                                                 
   5059 vanphon+  20   0 4868660 536852 224956 S   6,3   6,9  51:44.12 firefox                                                                                                                                     
   1923 vanphon+  20   0   25,5g 153948  96308 S   5,3   2,0  13:26.48 Xorg                                                                                                                                        
  36995 vanphon+  20   0   18,8g 271548 111092 S   1,0   3,5   0:40.89 Isolated Web Co                                                                                                                             
     53 root      20   0       0      0      0 S   0,7   0,0   0:24.94 ksoftirqd/6                                                                                                                                 
    749 root      20   0  287724  10568   9672 S   0,7   0,1   0:56.39 thermald                                                                                                                                    
   2407 vanphon+  20   0  327060  12536   7280 S   0,7   0,2   0:11.70 ibus-daemon                                                                                                                                 
  39874 root      20   0       0      0      0 I   0,7   0,0   0:00.13 kworker/6:0-events                                                                                                                          
      1 root      20   0  168208  13384   8192 S   0,3   0,2   0:03.61 systemd                                                                                                                                     
     15 root      20   0       0      0      0 I   0,3   0,0   0:22.43 rcu_preempt            
```
Đây là một công cụ đa năng cho phép hiển thị tất cả những tải của hệ điều hành
-	-`Kill` :  Để xử lí tiến trình nó không stop theo lệnh được hoặc bị treo chúng ta cần kill để tránh ảnh hưởng đến hệ thống.
-	Có 2 loại gồm: `kill -9` và `kill -15`
-	- kill -9: kết thúc tiến trình ngay lập tức.
-	- kill -15: gửi tín hiệu kết thúc đến tiến trình, chờ tiến trình thực hiện cleanup và kết thúc(trong một số trường hợp kill -15 không thể tắt được tiến trình, buộc phải sử dụng kill -9 để dừng tiến trình.
-	- `pkill`: kết thúc một tiến trình hoặc nhiều tiến trình theo tên hoặc thuộc tính của tiến trình
-	Ví dụ: kill tất cả các tiến trình java trên máy chủ: pkill java
-	Lưu ý: cần đặc biệt thẩn trọng trong khi sử dụng `pkill`. Trong hầu hết các trường hợp nên sử dụng `ps` hoặc `pgrep` để xác định tiến trình và sử dụng `kill` để kết thúc tiến trình.
-	# ***Đặt lịch tiến trình chạy tự động***
-	Giảm thiểu thời gian tác động vào hệ thống. Hệ thống yêu cầu onl mà ta không thể onl ta cần có tiến trình để nó rà soát xem tiến trình có chết không. Nếu chết thì nó tự bật lên.
-	## Mục đích
-	Thiết lập lịch cho 1 tác vụ được thực hiện vào 1 thời điểm xác định
-	Giúp tự động hóa các công việc mang tính lặp lại
-	Hỗ trợ cho việc vận hành, giám sát hệ thống.
-	## Các kiểu đặt để nó chạy tự động
-	AT: đặt lịch cho 1 lệnh hoặc 1 tiến trình thực thi 1 lần duy nhất vào 1 thời điểm xác định.
-	Crontab: Cho phép chạy một lệnh hay một nhóm các lệnh. Đặt lịch cho 1 lệnh hoặc 1 tiến trình thực thi lặp lại nhiều lần
-	*Nguyên lý hoạt động*
-	Sử dụng daemon cron
-	Lịch thực thi được lưu trong file crontab
-	Daemon cron đọc file crontab để thực thi theo lịch và câu lệnh cấu hình crontab


# ***Tìm hiểu thêm***
# ***Khái niệm***
- Khi chạy một file chương trình thì hệ điều hành sẽ đưa file đó từ trên đĩa cứng vào trong RAM để thực thi. Phiên bản của file chương trình trong RAM được gọi là tiến trình
  ```Lưu ý: chương trình là một file nằm trên đĩa cứng. Khi chương trình được thực thi thì nó trở thành tiến trình(nằm trong RAM).```

- khi chạy một lệnh đều tạo ra tiến trình. Ví dụ chạy lệnh ls -l là cho thi hành một file chương trình cụ thể là file /bin/ls
- Tiến trình luôn sử dụng tài nguyên của máy tính(CPU,RAM, và các thiết bị ngoại vi) và việc quản lý tiến trình(do nhân Linux đảm nhiệm) là phân bổ các tài nguyên này cho tiến trình một cách hợp lý
- Để quản lý được, nhân Linux phải ghi lại các thông tin về tiến trình gồm
  - Tên, số ID của tiến trình
  - Địa chỉ của tiến trình trong bộ nhớ
  - Trạng thái hiện thời của tiến trình
  - Độ ưu tiên của tiến trình 
  - Thông tin về nguồn tài nguyên(CPU, bộ nhớ) mà tiến trình đang sử dụng
  - Thông tin về các file và các cổng mạng mà tiến trình đang mở
  - Chủ sở hữu của tiến trình
  - Danh sách các signal mà tiến trình sẽ bắt(catch)
  ## ***Tìm hiểu về các thông tin về tiến trình***
  ### ***Tiến trình cha, tiến trình con, số ID của tiến trình.***
    - Khi một tiến trình đang chạy mà nó gọi ra một tiến trình khác thì tiến trình ban đầu là tiến trình cha, tiến trình sau là tiến trình con: PID(process identification number. Tiến trình cha PPID(parent process).
- Khi máy tính khởi động, nhân Linux trên đĩa cứng được tải vào RAM để chạy. Khi chạy nhân Linux sẽ tải file /`sbin/init` vào RAM để chạy và `init` trở thành tiến trình đầu tiên. `PID` của `init` bằng 1.Từ đây nó gọi ra các tiến trình con khác và các tiến trình con khác gọi ra các tiến trình con của nó nữa. Các tiến trình con có PID tăng dần, khi một tiến trình kết thúc PID của nó lại được dùng để gán cho các tiến trình con khác sau này.
- Lệnh `pstree` cho biết cấu trúc "cha-con" của tất cả tiến trình đang có ở thời điểm hiện tại

 ```sh $ pstree -p
systemd(1)─┬─ModemManager(686)─┬─{ModemManager}(698)
           │                   └─{ModemManager}(703)
           ├─NetworkManager(606)─┬─{NetworkManager}(666)
           │                     └─{NetworkManager}(670)
           ├─accounts-daemon(597)─┬─{accounts-daemon}(742)
           │                      └─{accounts-daemon}(744)
           ├─acpid(598)
           ├─avahi-daemon(600)───avahi-daemon(634)
           ├─bluetoothd(601)
           ├─colord(1628)─┬─{colord}(1629)
           │              └─{colord}(1631)
           ├─containerd(728)─┬─{containerd}(730)
           │                 ├─{containerd}(731)
           │                 ├─{containerd}(732)
           │                 ├─{containerd}(733)
```
### ***Phân bổ CPU và độ ưu tiên của tiến trình***
- Với hệ điều hành đa nhiệm thì người dùng có thể chạy một lúc nhiều chương trình. Tuy nhiên tại mỗi thời điểm CPU chỉ thực hiện được 1 tiến trình. Và giải pháp của nó là CPU không thực hiện trọn vẹn 1 tiến trình nào cả. Mà với mỗi tiến trình CPU chỉ thực thi trong một khoảng thời gian rất nhanh rồi chuyển sang tiến trình khác và cứ chuyển liên tục như vậy. Rõ ràng các tiến trình được thực thi lần lượt nhưng vì thời gian cho mỗi tiến trình là rất nhỏ nên người dùng không cảm nhận được.Và tốc độ của CPU là hàng tỉ phép tính trên giây nên trong một thời gian rất nhỏ nó cũng làm được rất nhiều việc và khiến người dùng cảm thấy như nó đang chạy đồng thời.
- Mỗi tiến trình có mức độ quan trọng khác nhau nên để dễ điều phối mỗi tiến trình được gắn với một độ ưu tiên nào đó, và nó là số `nice`. Số `nice` càng lớn thì nó chạy sau và nhường các tiến trình khác chạy trước.
### ***Trạng thái của tiến trình***
Tiến trình luôn ở một trong 5 trạng thái
- Runnable: tiến trình ở trạng thái sẵn sàng để chạy. Nó được cấp phát đầy đủ các tài nguyên và chỉ đợi tới phiên được cấp CPU thì sẽ chạy.
- Sleeping: tiến trình đang đợi sự kiện nào đó xảy ra. Khi sự kiện đó xảy ra nó sẽ được duyệt chờ cấp phát CPU để chạy.
- Zoombie: Tiến trình đã kết thúc nhưng nó không được xóa sạch khỏi RAM và tiến trình cha của nó không nhận được thông báo về việc nó đã kết thúc.
- Traced/Stopped: những tiến trình đã bị buộc dừng lại.

```sh
top - 10:45:57 up  2:54,  1 user,  load average: 1,49, 1,44, 1,38
Tasks: 311 total,   3 running, 308 sleeping,   0 stopped,   0 zombie
%Cpu(s):  6,2 us,  2,2 sy,  0,0 ni, 91,6 id,  0,0 wa,  0,0 hi,  0,0 si,  0,0 st
MiB Mem :   7608,8 total,   1954,9 free,   2174,2 used,   3479,7 buff/cache
MiB Swap:   2048,0 total,   2048,0 free,      0,0 used.   4564,5 avail Mem 

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                                                                                                                                   
   2421 vanphon+  20   0 5387256 289600 128172 S  26,4   3,7  17:07.34 gnome-shell                                                                                                                               
   2187 vanphon+  20   0   25,5g 150944  94276 R  13,2   1,9   4:44.24 Xorg                                                                                                                                      
   9407 vanphon+  20   0  909232  56804  43556 R   8,3   0,7   0:13.83 gnome-terminal-                                                                                                                           
   4620 vanphon+  20   0 2679948 199988 130540 S   5,0   2,6   4:08.66 Isolated Web Co                                                                                                                           
   3457 vanphon+  20   0 4028736 474704 218664 S   4,1   6,1   8:31.2
   ```
   # ***Các thao tác với tiến trình***
   Để xem trạng thái của tiến trình thường dùng 2 công cụ là `ps` và `top`. Lệnh `top` cho biết trạng thái của các tiến trình theo thời gian thực, cứ 5 giây trạng thái lại được cập nhật một lần. Lệnh ps chỉ in ra được trạng thái các tiến trình tại đúng thời điểm lệnh được thực hiện.
   ## ***Thao tác với lệnh ps***
   Lệnh `ps` không tham số hiện thị danh sách các tiến trình được khởi tạo bời người sử dụng đang đăng nhập tại terminal.
   ```sh$ ps
    PID TTY          TIME CMD
   9430 pts/0    00:00:00 bash
  11074 pts/0    00:00:00 ps 
  ```
  Lệnh này cho biết ít thông tin nên người ta thường dùng 3 tham số `aux`:
  - A: hiện thị tiến trình của tất cả các user.
  - U:hiện thị các thông tin chi tiết hơn về tiến trình
  - X:hiện thị tiến trình chạy trên tất cả các terminal
```sh 
ps- aux 
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.1 168016 13368 ?        Ss   07:51   0:03 /sbin/i
root           2  0.0  0.0      0     0 ?        S    07:51   0:00 [kthrea
root           3  0.0  0.0      0     0 ?        I<   07:51   0:00 [rcu_gp
root           4  0.0  0.0      0     0 ?        I<   07:51   0:00 [rcu_pa
root           5  0.0  0.0      0     0 ?        I<   07:51   0:00 [slub_f
root           6  0.0  0.0      0     0 ?        I<   07:51   0:00 [netns]
root           8  0.0  0.0      0     0 ?        I<   07:51   0:00 [kworke
root          10  0.0  0.0      0     0 ?        I<   07:51   0:00 [mm_per
root          11  0.0  0.0      0     0 ?        I    07:51   0:00 [rcu_ta
root          12  0.0  0.0      0     0 ?        I    07:51   0:00 [rcu_ta
root          13  0.0  0.0      0     0 ?        I    07:51   0:00 [rcu_ta 
```

```Lưu ý```: trang thông tin về các tiến trình thường dài nên ta có thể sử dụng `ps aux | less`

```
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.1 168016 13368 ?        Ss   07:51   0:03 /sbin/i
nit splash
root           2  0.0  0.0      0     0 ?        S    07:51   0:00 [kthrea
dd]
root           3  0.0  0.0      0     0 ?        I<   07:51   0:00 [rcu_gp
]
root           4  0.0  0.0      0     0 ?        I<   07:51   0:00 [rcu_pa
r_gp]
root           5  0.0  0.0      0     0 ?        I<   07:51   0:00 [slub_f
lushwq]
root           6  0.0  0.0      0     0 ?        I<   07:51   0:00 [netns]
 ```

### ***Giải thích các thông tin***
- USER: tên của user đã khởi tạo tiến trình
- PID:số ID của tiến trình
- %CPU: tỉ lệ giữa thời gian chiếm giữ CPU của tiến trình và thời gian mà tiến trình đã nằm trong bộ nhớ.
- %MEM: phần trăm RAM mà tiến trình sử dụng tại thời điểm hiện thị thông tin 
- VSZ: lượng bộ nhớ ảo(phần cứng giả làm RAM) mà tiến trình sử dụng tính theo byte.
- TTY:terminal mà tiến trình được khởi tạo trên đó. Dấu hỏi thể hiện tiến trình này là một daemon và nó không liên kết với một terminal nào
- STAT: trạng thái hiện tại của tiến trình

