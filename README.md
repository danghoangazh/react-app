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