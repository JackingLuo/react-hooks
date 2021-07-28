import {createContext} from 'react';

export const GlobalContext = createContext();
// 方式二：(定义整个context组件再引用)
// GlobalContext.displayName = 'GlobalContext';
// export const GlobalContextProvider = ({children,...rest})=>{

//     const [userInfo,setUserInfo] = useState(null);
//     const [count,setCount] = useState(0);

//     const store = {
//         count,
//         userInfo,
//         setCount,
//         setUserInfo
//     }
//     return (
//         <GlobalContext.Provider value={store}>
//             {React.cloneElement(
//                 children,
//                 rest
//             )}
//         </GlobalContext.Provider>
//     )
// }