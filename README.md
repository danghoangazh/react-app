### ROUTER ###

- sử dụng react-router
- sử dụng lib: query-string để lấy query string từ url
- param và string

### COMPONENT ###

- ứng dụng react tất cả đều là component
- sử dụng function component
- nhìn là html markup nhưng thực ra là js => jsx
- có thể viết các component vào 1 file, và import ở các nơi khác để dùng
- trong 1 file nhiều function component chỉ export default đc 1 func

- Rule JSX:
  - return single root element
  - close all tag
  - camelCase all
- JSX sử dụng {} là chỗ để xử lý logic, data : hiện thị name, avatar từ image, css.
- Props
  - Truyên dữ liệu từ cha => con (giống, angular, vuejs)
  - bước 1: truyền props cho child component, dữ liệu được đặt trong {} ở trên
  - bước 2: đọc props trong child component, và dùng {} để xử dụng
  - chỉ định mặc định cho props ở child
  - props có thể là cả 1 component
  - ko thay đổi props
- Conditional render: if ** && ** ? :
- Render list: xử dụng maps, filter, reducer của arrays. cần cấp key cho các item, dùng key để làm index gây cho lỗi
- Component is Pure: react thiết kế theo concept này, mọi component đều là pure function => ở strict mode component render 2 lần để kiểm tra component có phải là pure, component ko nên thay đổi bất kỳ đối tượng và biến nào (Same inputs, same output)
- side effects: thay đổi, update màn hình, chạy animation hoặc thay đổi data gọi là SIDE EFFECTS, thường nằm trong event handlers. event handlers không chạy trong lúc render => event handlers không cần phải thuần túy

- Vòng đời component
  + mounts: khi nó được thêm vào màn hình
  + updated: khi nhận props hoặc state mới, ho
  + unmounts: khi component bị xóa khỏi màn hình
  
### REACT EVENTS ###

- function :
  - trong component,
  - tryền từ parent thông qua props
- gọi hàm trong jsx
  - onClick={() => helloW()} // truyền đc thêm param
  - onClick={helloW} // ko có param
    => event handlers phải được truyền vào trong button, nếu không thì event sẽ bị gọi khi render
- Event propagation : event ở cả dom child và parent dom => cần phải stop propagation, để dừng sự lan truyền
- e.preventDefault() : Ngăn chặn hành vi mặc định

### REACT STATE ###

- Các biến bình thường ko được react theo dõi, khi chúng thay đổi => React cũng ko biết để cập nhập UI => vì thế chỉ dùng để

  - Lưu giá trị tạm thời, ko hiện UI
  - tính toán trung gian
  - Lưu trữ tham chiếu DOM

- local variable bị reset mỗi lần render lại, khi component render lại nó sẽ render lại từ đầu
- update local variable thì sẽ ko trigger render => component không render lại để cập nhật dữ liệu mới
  => dùng hook useState để giữ dữ liệu giữa các lần render, hàm setter trong useState giúp rerender component
- Hook là các hàm đặc biệt, khả dụng khi react đang render, bắt đầu = use
- mỗi state là riêng biệt, khi thay đổi 1 state thì ko liên quan đến state khác.
- Cập nhật state dựa trên giá trị trước đó: cần dùng callback : setCount(prevCount => prevCount + 1);

### Render - Commit ###

- bước 1 Triggering a render:
  - component được init
  - state hoặc component cha được update
- bước 2 Rendering the component
  - render cách DOM nodes cho các tags
  - trong re-render, tính toán xem cái nào cần render và ko cần render lại
- bước 3 Committing to the DOM
  - react sử dụng dom api để đưa dom lên màn hình
  - react chỉ thay đổi dom có sự thay đổi so với lần trc
- update trạng thái nhiều lần trong 1 lần thìu dùng arrow function: setNumber(n => n + 1), vì mỗi lần set, yêu cầu kết xuất để update

- 4 lý do component re-render:
  - state thay đổi,
  - re-render parent
  - thay đổi context
  - thay đổi hook
  - Forced Update
  - thay đổi Key
    => Sử dụng React.memo, useMemo, useCallback để tránh re-render không cần thiết.
    Props không bị ảnh hưởng bởi sự thay đổi trạng thái

* LƯU Ý

- KHÔNG NÊN: tạo component bên trong hàm render của 1 component khác
- NÊN : ngăn chặn re-render với composition: MOVE STATE DOWN,
- NÊN : Ngăn chặn việc re-render với composition: children as Props (tách component thành component nhỏ, component phức tạp thành props của 1 component xử lý, để tránh việc render component ko liên quan nhưng lại render component phức tạp )
- NÊN : Ngăn chặn việc re-render với composition: components as props, giống với cái trên (<MovieList   child={<MoveItem />}>)
- Ngăn chặn Re-Render với React.meno
    + 1 React.memo: Component với props
    + 2 React.memo: Component as Props hoặc children
- KHÔNG NÊN: useMemo/useCallback không cần thiết trên props
- NÊN: useMemo/useCallback cần thiết
- NÊN: useMemo dành cho các phép tính tốn kém
- Ngăn chặn re-render do Context
  + memoizing giá trị Provider
  + phân chia dữ liệu và API
  + chia dữ liệu thành từng khối
  + Context Selector

### Update State Object ###

- immutable: string, number, booleans : các giá trị : 1 ,2 ,3 .. 'abc' true|false là các giá trị bất biến (gán a = b = 5, b thay đổi thì a ko thay đổi )
- mutation: còn lại
- useState có thể lưu tất cả các loại dữ liệu
- update state của object, vẫn phải dùng hàm set, để render lại
- Dùng use-immer để khỏi cần copy lại object khi setState, chỉ cần set trường cần thiết
- mảng trong state cũng chỉ đọc => ko sử dụng arr[0] = 'bird', push, pop
- khi muốn update mảng, truyền mảng mới vào hàm set,
- mutate array: push, unshift, pop, shift, splice, splice, arr[i] = ... , reverse, sort
- new Array: concat, [...arr] spread syntax, filter, slice, map
- thay đổi dl 1 object trong array dùng ... spread syntax và map
- sử dụng immer thì dùng đc những mutate array, dùng cả với khi update data object trong array. => dùng immer để thay đổi dữ liệu mutation
  => có thể đưa mảng vào state, và ko thể thay đổi, nếu muốn thay đổi sử dụng immer hoặc tạo mảng mới và cập nhật vào state

### Điều khiển Input với state ###

- Giống như thuê taxi, bạn chỉ cần cung cấp điểm đón và điểm đến, lái đến thế nào taxi quyết định (taxi = react)
- 5 step setup

  - Xác định các state của component => (Identify your component’s different visual states)
  - Xác định những gì kích hoạt thay đổi state => (Determine what triggers those state changes)
  - xử dụng 'useState' để khai báo 1 state => (Represent the state in memory using useState)
  - Xóa state ko cần thiết => (Remove any non-essential state variables)
  - Connect các handler event với setState => (Connect the event handlers to set the state)

- Xem xét kỹ để tổ chức các state: từng state hay nhóm gộp

  - Nhóm các trạng thái (Group related state): Cân nhắc kỹ việc gộp các trạng thái
  - Tránh mâu thuẫn trong state (Avoid contradictions in state): nên tránh các state mâu thuẫn
  - Tránh dư thừa state (redundant state)
  - Tránh trùng lặp trạng thái (duplication in state)
  - Tránh deeply nested state

- Lifting state up: Thay vì 2 component con có state riêng biệt để quản lý vấn đề giống nhau, thì để trạng thái lên component cha quản lý.
  => trong quá trình làm việc nên tổ chức state có thể di chuyển state lên xuống giữa các component sao cho hợp lý (lift it up - move state down)

- PRESERVING ADN RESETTING STATE

  - mỗi component render ra là độc lập, tuy nhiên là 2 component ở 1 vị trí dome node thì nó là 1 (ẩn hiện 1 trong 2 component) => React giữ state nếu cùng 1 component và được hiển thị cùng chỗ
  - mặc định, React giữ nguyên state của component NẾU nó được render cùng vị trí trong tree component cùng loại component
  - 2 cách để reset state của same component:
    - Hiển thị same component ở vị trí khác nhau
    - Sử dụng Key cho các component ( ko dùng index, key phải unique, và ổn định giữa các lần render)

- USEREDUCER: Xử lý các state phức tạp, hiệu quả hơn. -> gom logic state vào 1 reducer để quản lý

  - đầu vào : logic xử lý và dữ liệu đầu vào
  - trả về : data hiện tại và 1 dispatch function
  - là 1 pure function thuần túy
    bước 1: tạo reducer và init state
    bước 2: Sử dụng useReducer

- CONTEXT: Truyền data từ paren -> child ở xa, mà ko cần truyền qua các child ko cần thiết, mục đích chia sẻ dữ liệu mà ko cần truyền props qua từng cấp

  bước 1: tạo Context // createContext(value)
  const ThemeContext = createContext('light');

  bước 2: Cung cấp context //
  <ThemeContext.Provider value='dark'>
  <Toolbar />
  </ThemeContext.Provider>

  bước 3: Sử dụng Context
  const theme = useContext(ThemeContext);
  => trước khi dùng context, hãy thử dùng props hoặc jsx as children

- Combining CONTEXT + REDUCER

  bước 1: CREATE context

  - tạo 1 bộ reducer : dữ liệu x + function dispatch y
  - tạo 2 context riêng biệt, 1 để cung cấp dữ liệu x hiện tại, 1 để cung cấp function dispatch
    bước 2: PUT state và dispatch vào context
  - truyền dữ liệu reducer vào từng context
    const [xData, yDispatch] = useReducer(tasksReducer, initialTasks);

  <TasksContext.Provider value={xData}>
  <TasksDispatchContext.Provider value={yDispatch}>
  ... component trong đây
  </TasksDispatchContext.Provider>
  </TasksContext.Provider>
  bước 3: USE context bất cứ đâu ở trong tree

  - trong các component con sử dụng các context để lấy dữ liệu xData và yDispatch từ reducer, bằng cách dùng useContext
    \*note: có thể chuyển reducer + context vào 1 file

- Refs: Lưu một số dữ liệu nhưng không re-render component khi dl đó thay đổi
  ex: lưu interval của timeout

  - useRef(initialValue) trả về { current: initialValue }
    => sử dụng khi cần lưu giá trị, nhưng ko ảnh hưởng đến logic kết xuất

- Refs with DOM

  - để truy cập vào DOM, sử dụng useRef hook
    ex: <div ref={myRef}>
  - ref có thể sử dụng như props để điều khiển child component
    ex: <MyInput ref={inputRef} />
    function MyInput({ ref }) {
    return <input ref={ref} />;
    }

- Synchronizing with Effects: useEffect

  - Effect là các tác vụ side effects xảy ra sau khi component render xong.
  - đồng bộ component với các hệ thống bên ngoài (API, DOM, subscriptions, third-party libraries) khi cần xử lý side effects sau khi render.
  - Effects chạy sau khi render và phản ứng với thay đổi state/props
  - Cú pháp:
    useEffect(() => {
    // Logic của Effect
    return () => { /_ Cleanup logic _/ };
    }, [dependencies]);

    1/ chứa logic chính của Effect
    2/ mảng phụ thuộc: 
    --- KHÔNG CÓ MẢNG : Effect chạy sau mỗi lần render
    --- Mảng rỗng [] : Effect chỉ chạy 1 lần sau khi component mount
    --- có dependencies: Effect chạy lại khi các giá trị trong mảng thay đổi
    3/ cleanup function: dọn dẹp tài nguyên, trước khi component unmount hoặc trước khi effect chạy lại . ex: clearnInterval, unsubcriberSocket

  - quản lý dependencies: mội giá trị động được sử dụng trong effect phải được khai báo trong mảng dependencies
  - case sử dụng phổ biến : Fetch dữ liệu, đăng ký event (window.addEventlistener), tương tác với dom
  - tách biệt các Effect với nhau. mỗi Effects xử lý 1 nv
  - tránh Effect ko cần thiết,clearnup để tránh rò rỉ,

- Trường hợp ko cần sử dụng useEffects

  2 trường hợp phổ biến mà ko cần Effects
  - Chuyển đổi, Biến đổi dữ liệu để render (tránh lặp đi lặp lại việc render): Không cần Effect nếu logic chỉ để tính toán dữ liệu từ props/state. Thay vào đó, tính trực tiếp trong    component
  - Xử lý sự kiện người dùng:  Dùng event handlers (như onClick, onSubmit) thay vì Effect.
  - Đồng bộ state với props: Thay vì dùng Effect để cập nhật state khi props thay đổi, hãy tính toán trực tiếp trong render hoặc dùng key để reset state.
  - Tránh fetch trong Effect mà không có cleanup. Dùng thư viện như React Query, SWR để xử lý caching, retry, SSR.

  Ví dụ phổ biến, thay vì sử dụng Effect thì có cách sau:

  - Cập nhập 1 state dựa trên props hoặc state : ví dụ state fullname = first_name + last_name, thay vào đó chỉ cần chuyển full_name thành biến = first_name + last_name . ko cần
    coi là 1 state, thay vào đó tính toán nó trong quá trình rendering
  - Caching các phép toán phức tạp, mà ko cần tính toán lại khi dependency thay đổi: sử dụng useMeno hook // const cachedValue = useMemo(calculateValue, [dependencies]), cho phép tính toán lại khi phụ thuộc thay đổi
  - Reset state dựa trên props: 
    + Không nên: Dùng Effect để reset state khi prop thay đổi.
    + Dùng key để React tự động reset component
  - Xử lý event từ user: Nên Gọi trực tiếp trong event handler
  - Fetch dữ liệu 
    + Nên: Dùng thư viện chuyên dụng (React Query, SWR) hoặc cleanup Effect

- Khi nào CẦN dùng Effect: Đồng bộ với hệ thống bên ngoài như DOM, API animation, subscription (WebSocket).

- Quy tắc vàng
  Tránh Effect cho logic có thể xử lý qua:
  ✨ Render logic (tính toán từ props/state)
  ✨ Event handlers (click, submit, input)
  ✨ Thư viện chuyên dụng (React Query, Formik, Redux).

- Lifecycle of Reactive Effects
  + Vòng đời của Effect: Effect chạy sau mỗi lần render, bắt đầu đồng bộ và dừng đồng bộ (khi component unmount hoặc dependencies thay đổi)
  + Phụ thuộc vào Dependencies: Effect chỉ chạy lại nếu dependencies (props/state) thay đổi. Không được bỏ qua dependencies (dù có thể gây lặp), thay vào đó sử dụng state updater hoặc ref để xử lý giá trị thay đổi liên tục.
  + Cleanup Function: Mỗi Effect có thể trả về hàm cleanup để hủy tác vụ (ngắt kết nối, hủy subscription, etc.). Cleanup được gọi trước khi Effect chạy lại hoặc component unmount
  + Luồng hoạt động 

    Mount: Chạy Effect → Cleanup khi unmount.
    Update: Chạy Cleanup cũ → Chạy Effect mới (nếu dependencies thay đổi).
    Unmount: Chạy Cleanup.
  + Cẩn thận Infinite Loop (Khi Effect cập nhật state mà state đó lại nằm trong dependency.) và Memory Leak (ko cleanup các subsubscriptions/timers khi component unmount)

- tách biệt giữa event và Effect 
  + Không dùng Effect để xử lý sự kiện: Event handlers là nơi thích hợp cho logic tương tác người dùng
  + Effect chỉ dành cho đồng bộ hóa: Kết nối, ngắt kết nối, fetch dữ liệu khi dependencies thay đổi.
  Luôn đặt câu hỏi: 'Logic này có phải là phản ứng với một hành động người dùng, hay là đồng bộ với hệ thống bên ngoài?'

- LOẠI BỎ DEPENDENCIES không cần thiết
  + Vì sao: Có nguy cơ dẫn đến việc useEffect chạy quá nhiều lần hoặc gây ra lỗi.
  + cần đảm bảo rằng tất cả các giá trị reactive được sử dụng trong useEffect đều được liệt kê trong mảng dependencies
  +  Để loại bỏ một dependency, bạn cần chứng minh rằng nó không cần thiết bằng cách thay đổi code
  + useMemo: Cache kết quả tính toán, chỉ chạy lại khi dependencies thay đổi
  + useCallback: Cache hàm, tránh tạo lại hàm mới mỗi lần render, giảm số lần useEffect chạy lại

- Custom Hooks
  + dùng để tái sử dụng logic giữa các component mà không cần sao chép code, là một hàm
  + bắt đầu bằng: use | ví dụ: useFetch, useForm, useLocalStorage.
  + dùng các hook khác bên trong : useState, useEffect, useContext
  + Ko chia sẻ trạng thái, giá trị trả về linh hoạt.
  + ko gọi hook trong (if) và for hoặc hàm lồng nhau
  => giúp tránh lặp code, tách biệt logic và giao diện, dễ test, bảo trì
  => ứng dụng: useLocalStorage, useDarkMode, useWindowSize ...

### HOOK ###

- STATE HOOKS -
  useState, useReducer // state cho phép 'nhớ' thông tin như là user input
  + useState: Cho phép thêm biến trạng thái vào component   // const [state, setState] = useState(initialState)
    > Update dựa trên previous state:  các state trong component đc coi là 1 snapshot => dùng arrrow function để cập nhập liên tiếp, vì nó lấy 'Pending state' để tính toán 'Next State' mới nhất.
    > Update Object and Arrays: state is Read-only => nên chỉ 'Thay thế' thay vì làm 'Thay đổi' object hoặc array state. tránh xa việc mutation (có thể sử dụng Immer)
    > giá trị khởi tạo, ngoài truyền giá trị chính xác thì có thể sử dụng 'Hàm' làm tham số
    > dùng 'Key' để reset component

  + useReducer: Dùng để quản lý state phức tạp hơn, thường kết hợp với một reducer function.
    // const [state, dispatch] = useReducer(reducer, initialArg, init?)
    >  'reducer' là 'Pure function', có 2 parameter: 'state' hiện tại và 'action' , và trả về 'next State'
    > initialArg : Trạng thái ban đầu của hook
    > init? : function để tính toán, nếu ko có thì trả về 'initialArg' ngược lại thì lấy 'initialArg' làm param đầu vào
    > useReducer: luôn trả về  [state, dispatch], dispatch function cho phép 'cập nhập' state và kích hoạt 're-render'
    > dispatch: pass action làm parameter, chỉ để kích hoạt reducer, không có gia trị trả về
    > lưu ý là State 'chỉ đọc', chỉ 'thay thế' nó 

- CONTEXT HOOK -
  + useContext: Cho phép truy cập vào context từ các thành phần cha mà không cần qua Props
    const value = useContext(SomeContext)
    > cần tạo context trước, example: ThemeContext = createContext('white | black')
    > ở compoment Cha sử dụng <ThemeContext value = 'abc'></ThemeContext> wrap component con
    > ở component cần sử dụng context const theme = useContext(ThemeContext);
    > thay đổi ở value ở context bằng cách sử dụng chung với useState để set lại
  
- EFFECT HOOKS -

  + useEffect: Cho phép 'Synchroize a Component' với hệ thông ngoài (call api, connect socket, event listner, dom)
    > useEffect(() => {
        // Logic side effect
        return () => {
          // (option) Cleanup function
        };
      }, [dependencies]);
    > useEffect(setup, [dependencies?])
    > gọi 'useEffect' ở top của component, có 2 tham số là 'setup' và 'dependency' 
    > setup: function chứa logic của "Effects", Được thực thi sau khi component render (sau khi DOM được cập nhật). Có thể trả về một cleanup function để dọn dẹp tài nguyên.
    > Mỗi khi re-render, setup chạy lại khi 'dependency' thay đổi, nó chạy clearnup với giá trị cũ trước và sau đó thực hiện với giá trị mới của dependency. khi component bị xóa khỏi DOM, clearnup sẽ được kích hoạt.
    > Dependency (option): Một mảng chứa các giá trị mà useEffect phụ thuộc, khi có thay đổi => setup thực hiện lại, có thể là (props, state, variable...). 
    > Nếu dependency = []  useEffect chỉ chạy 1 lần sau khi component được mount
    > Nếu không cung cấp dependency array, useEffect chạy sau mỗi lần render
    > Cleanup function Dùng để dọn dẹp tài nguyên, khi component unmount hoặc trước khi useEffect chạy lại
    > Mỗi useEffect nên xử lý một side effect cụ thể để code dễ đọc và bảo trì.

  + useLayoutEffect: kích hoạt trước browser vẽ lại screen, có thể đo lại layout ở đây
  + useInsertionEffect: trước khi React thực hiện thay đổi với DOM, có thể chèn css động ở đây

- REF HOOKS
  + useRef: là một Hook để tạo tham chiếu bền vững đến DOM elements hoặc giá trị thay đổi mà không gây re-render.
    > const myRef = useRef(initialValue); gắn ref={myRef} vào DOM
    > Truy cập trực tiếp vào DOM
    > Lưu trữ giá trị thay đổi (mutable values) giữa các lần render mà không gây re-render component. 
    > Thay đổi giá trị của useRef không gây re-render. => Lưu trữ giá trị không cần hiển thị trên giao diện.

- Performance Hooks -   bỏ qua tính toán và re-render lại hông cần thiết

  + useMemo: ghi nhớ kết quả của hàm tính toán, chỉ tính lại khi giá trị phụ thuộc thay đổi
    > const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    > tham số 1. Hàm tính toán, trả về giá trị muốn ghi nhớ, chạy lại khi mảng phụ thuộc thay đổi
    > tham số 2. Mảng phụ thuộc, là d/s các biến mà hàm phụ thuộc vào 
    > dùng với các phép tính tốn kém
    > Bảo đảm tính bất biến của tham chiếu => cụ thể: hữu ích để tối ưu hóa các component con dựa vào tính bất biến của tham chiếu để ngăn render không cần thiết.
      Ví dụ: Một component con nhận props là một mảng. Nếu mảng được tạo mới trong mỗi render (dù nội dung không đổi), component con sẽ render lại. useMemo giúp giữ tham chiếu của mảng không đổi.
    > dùng khi thực sự cần thiết, nhớ khai báo phụ thuộc

  + useCallback: là hook cho phép 'ghi nhớ' các hàm callback trước khi truyền nó xuống 'optimized component', giúp ngăn chặn việc tạo lại hàm trong mỗi lần render, đặc biệt khi bạn truyền hàm cho component con, gây re-render component con không cần thiết
    > cú pháp:  const memoizedCallback = useCallback(() => {
                  // Logic của hàm
                }, [dependencies]);
    > Hàm callback: Hàm mà bạn muốn ghi nhớ. hữu ích khi bạn sử dụng cùng với React.memo – một công cụ memoize component, giúp component con chỉ re-render khi props thực sự thay đổ
    > Mảng phụ thuộc (dependencies) Một mảng chứa các giá trị mà hàm callback phụ thuộc vào. Nếu một giá trị trong mảng này thay đổi, hàm sẽ được tạo lại.
      - Nếu mảng phụ thuộc rỗng ([]), hàm chỉ được tạo một lần và giữ nguyên tham chiếu trong suốt vòng đời của component.
      - Nếu có phụ thuộc, React sẽ so sánh các giá trị trong mảng bằng Object.is để quyết định xem có cần tạo lại hàm hay không. 
    > dùng chung với "memo"
    > dùng khi : Truyền callback cho component con được memoize, tránh re-render không cần thiết.

    > không cần dùng: Nếu hàm không được truyền qua props hoặc component con không phụ thuộc vào tham chiếu của hàm. Và mảng phụ thuộc thay đổi thường xuyên
    > LƯU Ý: "Quản lý mảng phụ thuộc", cần liệt kê các biến mà callback sử dụng, nếu quên, callb có thể sử dụng giá trị cũ => lỗi logic

- HOOK KHÁC -
  +  useTransition: Một hook trong React giúp đánh dấu các cập nhật state là "transition" để giữ UI phản hồi nhanh chóng, cải thiện trải nghiệm ng dùng
  + useDeferredValue: là công cụ hữu ích trong React để trì hoãn render các giá trị không cần cập nhật ngay, giúp ứng dụng phản hồi mượt mà hơn. Nó đặc biệt phù hợp với các tình huống như tìm kiếm hoặc xử lý dữ liệu lớn

### COMPONENT ###

- <Fragment> (<>...</>)
- <Profiler> : Đo lường 'rendering performance' 
