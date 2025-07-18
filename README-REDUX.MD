### CORE CONCEPTS ###
- State: chỉ là object giống như 'model' (Read-Only)
  > cách thay đổi = dispatch một 'Action'
- Actions:  là object bình thường, mô tả việc gì đã xảy ra
  >  Bắt buộc phải có một trường 'type'
  > có thêm các trường khác gọi là payload để thêm vào state
  ex: 
    { type: 'ADD_TODO', text: 'Go to swimming pool' }
    { type: 'TOGGLE_TODO', index: 1 }
    { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
- Reducers: xử lý thay đổi
  > là 'Pure function' chỉ định 'cách trạng thái' ứng dụng thay đổi để phản hồi action 
  > params: (current_strate, Action_object),
  > return: trả về 'State' mới dựa trên state hiện tại và action
  * Chú ý
    - vì là "Pure funtion" -> ko tha đổi state đầu vào,phải trả về 1 bản sao của state và có các thay đổi cẩn thiết
    - Ko thực hiện các tác vụ 'async', hoặc side effects như thay đổi biến toàn cục
- STORE: là đối tượng trung tâm, kết hợp các khái niệm trên lại với nhau
  > Là nơi lưu trữ 'State'
  > Cho truy cập 'State' thông qua getState()
  > Cho phép cập nhật state thông qua dispatch(action)
  > Đăng ký các listener (người nghe) thông qua subscribe(listener) để phản ứng khi state thay đổi
  > Xử lý việc hủy đăng ký listener

FLOW: 
- Một sự kiện xảy ra trong ứng dụng (ví dụ: người dùng click nút).

- Ứng dụng tạo và dispatch một Action (store.dispatch(action)) mô tả sự kiện đó.

- Store gọi Reducer mà bạn đã cung cấp cho nó, truyền vào state hiện tại và action vừa dispatch.

- Reducer thực thi, tính toán state mới một cách thuần túy (dựa trên state cũ và action) và trả về state mới.

-Store lưu state mới này thay thế cho state cũ.

- Store thông báo cho tất cả các listener (thành phần UI đã đăng ký) rằng state đã thay đổi.

- Các thành phần UI nhận được thông báo, lấy state mới từ Store (store.getState()) và cập nhật giao diện dựa trên dữ liệu mới này.

==> Nên sử dụng: Redux Toolkit (RTK) 