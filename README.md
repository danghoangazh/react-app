# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# ROUTER
- sử dụng react-router
- sử dụng lib: query-string để lấy query string từ url
- param và string
# COMPONENT
- ứng dụng react tất cả đều là component
- sử dụng function component
- nhìn là html markup nhưng thực ra là js => jsx
- có thể viết các component vào 1 file, và import ở các nơi khác để dùng
- trong 1 file nhiều function component chỉ export default đc 1 func

- Rule JSX: 
  + return single root element
  + close all tag
  + camelCase all 
- JSX sử dụng {} là chỗ để xử lý logic, data : hiện thị name, avatar từ image, css.
- Props
  + Truyên dữ liệu từ cha => con (giống, angular, vuejs)
  + bước 1: truyền props cho child component, dữ liệu được đặt trong {} ở trên
  + bước 2: đọc props trong child component, và dùng {} để xử dụng
  + chỉ định mặc định cho props ở child
  + props có thể là cả 1 component
  + ko thay đổi props
- Conditional render: if __ && __ ? : 
- Render list: xử dụng maps, filter, reducer của arrays. cần cấp key cho các item, dùng  key để làm index gây cho lỗi 
- Component is Pure: react thiết kế theo concept này, mọi component đều là pure function => ở strict mode component render 2 lần để kiểm tra component có phải là pure, component ko nên thay đổi bất kỳ đối tượng và biến nào (Same inputs, same output)
- side effects: thay đổi, update màn hình, chạy animation hoặc thay đổi data gọi là SIDE EFFECTS, thường nằm trong event handlers. event handlers không chạy trong lúc render => event handlers không cần phải thuần túy
# REACT EVENTS
- function :  
  + trong component,
  + tryền từ parent thông qua props
- gọi hàm trong jsx
  + onClick={() => helloW()}  // truyền đc thêm param
  + onClick={helloW} // ko có param
=> event handlers phải được truyền vào trong button, nếu không thì event sẽ bị gọi khi render
- Event propagation : event ở cả dom child và parent dom => cần phải stop propagation, để dừng sự lan truyền
- e.preventDefault() : Ngăn chặn hành vi mặc định
# REACT STATE
-  local variable bị reset mỗi lần render lại, khi component render lại nó sẽ render lại từ đầu
-  update local variable thì sẽ ko trigger render => component không render lại để cập nhật dữ liệu mới
=> dùng hook useState để giữ dữ liệu giữa các lần render, hàm setter trong useState giúp rerender component
- Hook là các hàm đặc biệt, khả dụng khi react đang render, bắt đầu = use
- mỗi state là riêng biệt, khi thay đổi 1 state thì ko liên quan đến state khác.
# Render - Commit
- bước 1 Triggering a render: 
  + component được init
  + state hoặc component cha được update
- bước 2 Rendering the component
  + render cách DOM nodes cho các tags
  + trong re-render, tính toán xem cái nào cần render và ko cần render lại
- bước 3 Committing to the DOM
  + react sử dụng dom api để đưa dom lên màn hình
  + react chỉ thay đổi dom có sự thay đổi so với lần trc
- update trạng thái nhiều lần trong 1 lần thìu dùng arrow function: setNumber(n => n + 1), vì mỗi lần set, yêu cầu kết xuất để update
# Update State Object
- immutable: string, number, booleans : các giá trị : 1 ,2 ,3 .. 'abc'  true|false là các giá trị bất biến (gán a = b = 5, b thay đổi thì a ko thay đổi )
- mutation: còn lại
- useState có thể lưu tất cả các loại dữ liệu
- update state của object, vẫn phải dùng hàm set, để render lại
- Dùng use-immer để khỏi cần copy lại object khi setState, chỉ cần set trường cần thiết
- mảng trong state cũng chỉ đọc => ko sử dụng arr[0] = 'bird', push, pop
- khi muốn update mảng, truyền mảng mới vào hàm set, 
- mutate array: push, unshift, pop, shift, splice, splice, arr[i] = ... , reverse, sort
- new Array: concat, [...arr] spread syntax, filter, slice, map
- thay đổi dl 1 object trong array dùng ... spread syntax và map
- sử dụng immer thì  dùng đc những mutate array, dùng cả với khi update data object trong array. => dùng immer để thay đổi dữ liệu mutation
=> có thể đưa mảng vào state, và ko thể thay đổi, nếu muốn thay đổi sử dụng immer hoặc tạo mảng mới và cập nhật vào state

# Điều khiển Input với state
- Giống như thuê taxi, bạn chỉ cần cung cấp điểm đón và điểm đến, lái đến thế nào taxi quyết định (taxi = react)
- 5 step setup
  + Xác định các state của component => (Identify your component’s different visual states)
  + Xác định những gì kích hoạt thay đổi state => (Determine what triggers those state changes)
  + xử dụng "useState" để khai báo 1 state => (Represent the state in memory using useState)
  + Xóa state ko cần thiết => (Remove any non-essential state variables)
  + Connect các handler event với setState => (Connect the event handlers to set the state)

- Xem xét kỹ để tổ chức các state: từng state hay nhóm gộp
  + Nhóm các trạng thái (Group related state): Cân nhắc kỹ việc gộp các trạng thái
  + Tránh mâu thuẫn trong state (Avoid contradictions in state): nên tránh các state mâu thuẫn
  + Tránh dư thừa state (redundant state)
  + Tránh trùng lặp trạng thái (duplication in state)
  + Tránh deeply nested state 

- Lifting state up: Thay vì 2 component con có state riêng biệt để quản lý vấn đề giống nhau, thì để trạng thái lên component cha quản lý.

- PRESERVING ADN RESETTING STATE
