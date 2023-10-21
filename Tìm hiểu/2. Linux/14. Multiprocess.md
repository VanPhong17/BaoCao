# ***Tìm hiểu Multiprocess***
-	Gói `multiprocess cung cấp cả đồng thời cục bộ và từ xa
-	`Multiprocess` sử dụng các quy trình con thay vì các luồng. Nên lập trình viên có thể tận dụng tối đa nhiều bộ xử lý trên một máy nhất định
# ***Khái niệm***
-	Multiprocess(đa xử lý) and Multithreading(đa luồng)  là những khái niệm của đa nhiệm máy tính.
-	Đa nhiệm máy tính là một hệ thống máy tính cho phép nhiều tác vụ thực hiện đồng thời trong một khoảng thời gian nhất định
-	Đa luồng là một kỹ thuật lập trình gán nhiều đoạn mã cho một quy trình. Các đoạn mã này, còn được gọi là các luồng, chạy đồng thời và song song với nhau. Các luồng này chia sẻ cùng một không gian bộ nhớ trong một tiến trình cha. Điều này giúp tiết kiệm bộ nhớ hệ thống, tăng tốc độ tính toán và cải thiện hiệu suất ứng dụng.
o	Ví dụ: nếu bạn đang làm việc trên máy tính, bạn có thể mở nhiều tab trình duyệt trong khi tìm kiếm trên Internet. Bạn cũng có thể đang nghe nhạc thông qua một ứng dụng máy tính để bàn cùng một lúc. Trình duyệt internet và ứng dụng âm nhạc đại diện cho hai quy trình khác nhau, mặc dù chúng đang hoạt động đồng thời. Tuy nhiên, nhiều tab bạn đã mở trong khi duyệt internet đại diện cho các luồng của trình duyệt internet của bạn, đây là quy trình gốc.
-	Đa xử lý là một hệ thống có nhiều hơn hai đơn vị xử lý trung tâm . Cho phép máy tính chạy 2 hoặc nhiều chương trình đồng thời
## ***Tìm hiểu sự liên quan***
-	Tiến trình là các phiên bản của các chương trình thực thi trong hệ thống máy tính. Do đó các tiến trình máy tính có các phần mã và dữ liệu riêng biệt. Hay nói cách khác, một tiến trình máy tính cụ thể không can thiệp trực tiếp vào quá trình thực thi mã cũng như tài nguyên dữ liệu của tiến trình khác
-	Luồng: Thực thi một tác vụ trong ngữ cảnh của một quy trình.
Tóm lại: Mọi quy trình đều có ít nhất một luồng thực thi các lệnh trong CPU. Còn các luồng chỉ có thể tồn tại trong một chương trình

Đa luồng và đa xử lý đều có thể được sử dụng để tăng sức mạnh tính toán của hệ thống, có một số điểm khác biệt sau đây:
-	Đa xử lý sử dụng hai hoặc nhiều CPU để tăng sức mạnh tính toán, trong khi đa luồng sử dụng một quy trình duy nhất với nhiều đoạn mã để tăng sức mạnh tính toán.
-	Đa luồng tập trung vào việc tạo các luồng tính toán từ một quy trình duy nhất, trong khi đa xử lý tăng sức mạnh tính toán bằng cách thêm CPU
-	Đa xử lý được sử dụng để tạo ra một hệ thống đáng tin cậy hơn, trong khi đa luồng được sử dụng để tạo các luồng chạy song song với nhau.
-	Đa luồng được tạo nhanh và yêu cầu ít tài nguyên, trong khi đa xử lý yêu cầu một lượng thời gian đáng kể và các tài nguyên cụ thể để tạo. 
-	Đa xử lý thực thi đồng thời nhiều chương trình, trong khi đa luồng thực thi đồng thời nhiều luồng
-	Đa luồng sử dụng một không gian địa chỉ chung cho tất cả các luồng, trong khi đa xử lý tạo một không gian địa chỉ riêng cho từng quy trình
# # ***Lợi ích của đa luồng***
-	Nó yêu cầu lưu trữ bộ nhớ ít hơn
-	Truy cập bộ nhớ dễ dàng hơn vì các luồng chia sẻ cùng một tiến trình cha.
-	Chuyển đổi giữa các chủ đề nhanh chóng và hiệu quả
## ***Lợi ích của đa xử lý***
-	Hoàn thành nhiệm vụ nhanh hơn và phân tích một lượng lớn dữ liệu
-	Nó sử dụng nhiều CPU để cải thiện sức mạnh tổng thể của hệ thống
# ***Tìm hiểu về multiprocess và Mutithreading***
Đa xử lý và đa luông giải quyết việc thực thi đồng thời nhiều phiên bản tương ứng của các quy trình và luồng.
-	Đa xử lý đề cập đến khả năng thực hiện đồng thời nhiều hơn một tiến trình trong một hệ thống máy tính
-	Đa luồng đề cập đến khả năng thực hiện đồng thời các tác vụ không đồng nhất của một chương trình cụ thể. 
# ***Tìm hiểu `Multiprogramming` và `Multitasking`***
## ***Tìm hiểu `Multiprogramming`***
Một trong những khía cạnh quan trọng nhất của hệ điều hành là khả năng chạy nhiều chương trình.
-	Đa chương trình làm tăng khả năng sử dụng CPU và làm cho người dùng hài lòng.
-	Bằng cách tổ chức đa chương trình, CPU luôn có một chương trình để thực thi
-	Trong một hệ thống đa chương trình, một chương trình đang thực thi được gọi là tiến trình.
**Ý tưởng thực hiện**
-	Hệ điều hành giữ một số tiến trình đồng thời trong bộ nhớ, sau đó chọn và thực hiện một số trong các tiến trình này theo lịch làm việc
-	Nếu một tiến trình nào đó phải đợi thì hệ điều hành sẽ chuyển sang thực hiện tiến trình khác cho đến khi tiến trình ban đầu kết thúc việc đợi.
## ***Tìm hiểu `Multitasking`***
Đa nhiệm là mở rộng của xử lý đa chương trình
-	CPU thực thi đa tiến trình bằng cách chuyển đổi việc thực thi một cách liên tục giữa các tiến trình nhằm cung cấp cho người dùng thời gian đáp ứng một cách nhanh chóng.
-	Ví dụ: người dùng gõ 7 phím trong 1 giây là nhanh, nhưng với máy tính thì lại là cực kỳ chậm. Thay vì để CPU tạm ngưng hoạt động khi quá trình tương tác gõ phím này đang diễn ra, hệ điều hành sẽ nhanh chóng chuyển CPU sang thực thi một tiến trình khác.
Khi có nhiều tiến trình thực thi đồng thời bên trong bộ nhớ, ta cần có cơ chế quản lý bộ nhớ để tránh sự xung đột. Ngoài ra, cần có cơ chế tiến trình nào tiếp theo sẽ được thực thi. Cơ chế này gọi là lập lịch CPU
Bộ nhớ ảo là một kỹ thuật cho phép thực hiện tiến trình không hoàn toàn nằm trong bộ nhớ. Ưu điểm chính của phương pháp này là cho phép người dùng chạy các chương trình lớn hơn bộ nhớ vật lý thực tế. Phương pháp này giải phóng mối bận tâm về giới hạn bộ nhớ lưu trữ.
-	Nhờ bộ nhớ ảo hệ điều hành luôn đảm bảo thời gian đáp ứng hợp lý đối với người dùng.
