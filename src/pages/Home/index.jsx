import React, { useCallback } from 'react';
import { Switch, Route } from "react-router-dom";

import {HomeContextProvider} from './homeContext';

import {indexChildRoutes} from '../../router';

const Home = props => {
    // const [userInfo,setUserInfo]= useState({});
    // const [testNum,setNum] = useState(1);

    const renderRouters = useCallback(()=>{
        let routers = indexChildRoutes.map(item=>(
            <Route key={item.path} {...item} />
        ));
        return routers
    },[])//依赖动态的indexChildRoutes
    
    // const store={
    //     userInfo,
    //     setUserInfo,
    //     testNum,
    //     setNum
    // }

    return(
        <HomeContextProvider>
        {/* <HomeContext.Provider value={store}> */}
            <h1>index的公共layout</h1>
            <div>
                <Switch>
                    {renderRouters()}
                </Switch>
            </div>
        </HomeContextProvider>
    )
}
export default Home