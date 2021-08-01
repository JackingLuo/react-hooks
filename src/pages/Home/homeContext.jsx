import React,{ createContext, useState } from "react"

export const HomeContext = createContext();
HomeContext.displayName = 'HomeContext';
export const HomeContextProvider = ({children}) => {
    const [userInfo,setUserInfo]= useState({});
    const [testNum,setNum] = useState(1);
    const store={
        userInfo,
        setUserInfo,
        testNum,
        setNum
    }
    return (
        <HomeContext.Provider value={store}>
            {children}
            {/* {
                React.cloneElement(children)
            } */}
        </HomeContext.Provider>
    )
}