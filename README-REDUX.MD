### CORE CONCEPTS

- State: chỉ là object giống như 'model' (Read-Only)
  > cách thay đổi = dispatch một 'Action'
- Actions: là object bình thường, mô tả việc gì đã xảy ra
  > Bắt buộc phải có một trường 'type'
  > có thêm các trường khác gọi là payload để thêm vào state
  > ex:
  > { type: 'ADD_TODO', text: 'Go to swimming pool' }
  > { type: 'TOGGLE_TODO', index: 1 }
  > { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
- Reducers: xử lý thay đổi
  > là 'Pure function' chỉ định 'cách trạng thái' ứng dụng thay đổi để phản hồi action
  > params: (current_strate, Action_object),
  > return: trả về 'State' mới dựa trên state hiện tại và action
  - Chú ý
    - vì là "Pure funtion" -> ko tha đổi state đầu vào,phải trả về 1 bản sao của state và có các thay đổi cẩn thiết
    - Ko thực hiện các tác vụ 'async', hoặc side effects như thay đổi biến toàn cục
- STORE: là đối tượng trung tâm, kết hợp các khái niệm trên lại với nhau
  > Là nơi lưu trữ 'State'
  > Cho truy cập 'State' thông qua "getState()"
  > Cho phép cập nhật state thông qua "dispatch(action)"
  > Đăng ký các listener (người nghe) thông qua subscribe(listener) để phản ứng khi state thay đổi
  > Xử lý việc hủy đăng ký listener

FLOW:

- Một sự kiện xảy ra trong ứng dụng (ví dụ: người dùng click nút).

- Ứng dụng tạo và dispatch một Action (store.dispatch(action)) mô tả sự kiện đó.

- Store gọi Reducer mà bạn đã cung cấp cho nó, truyền vào state hiện tại và action vừa dispatch.

- Reducer thực thi, tính toán state mới một cách thuần túy (dựa trên state cũ và action) và trả về state mới.

- Store lưu state mới này thay thế cho state cũ.

- Store thông báo cho tất cả các listener (thành phần UI đã đăng ký) rằng state đã thay đổi.

- Các thành phần UI nhận được thông báo, lấy state mới từ Store (store.getState()) và cập nhật giao diện dựa trên dữ liệu mới này.

==> Nên sử dụng: Redux Toolkit (RTK)

#### Redux Essentials

- State Management: Ý tưởng cốt lõi là, một nơi tập trung duy nhất để lưu trữ dữ liệu toàn cục

- Immutability: tính bất biến, muốn cập nhật các giá trị 'immutably' cần tạo bản sao của Object - Array rồi sửa đổi các bản sao đó
  => Cả React và Redux mong đợi cập nhật một cách bất biến 'Immutation'

- Thuật Ngữ cần chú trọng

  - Actions:  
    const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
    }
  - Action Creators: là hàm để tạo 'action object', để khỏi phải tọa bằng tay
    const addTodo = text => {
    return {
    type: 'todos/todoAdded',
    payload: text
    }
    }
  - Reducers: là 1 func có đầu vào: 'curent state' và 'action' object, có logic để cập nhật trạng thái và trả về state mới (immutable), phải là 1 'Pure' không thực hiện
    asynchronous logic, calculate random values hoặc 'side effects'
  - Store: nơi chứa các 'state' của ứng dụng, được tạo bằng cách truyền vào reducer, có methods 'getState' để lấy 'current state'.
    import { configureStore } from '@reduxjs/toolkit'
    const store = configureStore({ reducer: counterReducer })
    console.log(store.getState())
  - Dispatch: là methods, là cách duy nhất để update state 'store.dispatch()' và truyền vào action object. Store sẽ chạy reducer func và lưu lại trang thái mới
  - Selectors
  - Redux App Data Flow 1. Initial Setup: - create Redux store - khởi tạo giá trị ban đầu của store - khi UI được render lần đầu, UI sẽ truy cập và sử dụng trạng thái hiện tại và subcribe để kiểm tra trạng thái có thay đổi không.

        2. Updates
          - ng dùng thực hiện action: click ...
          - gửi dispatch to redux store
          - store chạy reducer function sau đó trả về 'new state'
          - store notifi cho các component UI là store đã đc cập nhật
          - Component kiểm tra xem state sử dụng từ store đã thổi đổi hay chưa
          - re-render lại component

    Redux uses a "one-way data flow" app structure

### Redux FUNDAMENTALS

- Concepts and Data Flow
  - Actions
  - Reducers:
  - Store
  - Dispatch
  - Selector
- Core Concepts and Principles:
  - Single Source of Truth: chỉ có 1 store duy nhất để lưu các 'state'
  - State is Read-Only: các duy nhất để update 'state' là gửi 1 'action'
  - Changes are Made with Pure Reducer Functions: is Reducer
- Step
  1. Xem xét requirement
  2. thiết kế state: phải là plain JavaScript objects and arrays, để mô tả dữ liệu
  3. thiết kế action: các action có thể xảy ra, nên mô tả một cách ngắn gọn đầy đủ, phải là object có trường 'type'
  4. Viết Reducer: có nhiều reducer ở các file riêng biệt, mỗi file chỉ có 1 hàm, có thể sử dụng combineReducers để kết hợp hết reducer, tạo ra reducer root. hoặc chỉ có 1 reducer làm reducer root, để truyền vào store khi khợi tạo : createStore
  - mỗi reducer phải có init state
  - reducer dựa trên state và action để tính toán ra state mới
  - ko được trực tiếp thay đổi state mà phải clone và update state mới
  - ko được thực hiện 'asynchronous logic' hoặc "side effects"
  5. Splitting Reducers --- Chia reducer thành các reducer theo 'state' chúng cập nhật, gọi là "reducer composition"
  6. Combining Reducers: Redux store cần 1 'Root Reducer' để tạo ra nó vì thế cần gộp các reducer thành 1
    sử dụng : combineReducers
    const rootReducer = combineReducers({
      todos: todosReducer,
      filters: filtersReducer
    })
