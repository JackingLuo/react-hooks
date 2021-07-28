import React, { useLayoutEffect,useState } from 'react';
import {renderRoutes} from 'react-router-config';
import { useHistory } from 'react-router-dom';

import {GlobalContext} from './global-context';
// import { GlobalContextProvider } from './global-context';

const Home = props=>{
    const {route} = props;
    const {pathname} = props.history.location;
    const history = useHistory();

    const [count,setCount] = useState(0);

    useLayoutEffect(()=>{//类似于created
        const isFound = route.childRoutes?.some(item=>item.path===pathname);
        if(!isFound){history.push('/notFound')}
    },[pathname])

    const globalStore={
        count,
        setCount
    }

    return (
        <GlobalContext.Provider value={globalStore}>
        {/* <GlobalContextProvider> */}

            <h2>公共的layout</h2>
            {/* 坑 */}
            {renderRoutes(route.childRoutes)}
        {/* </GlobalContextProvider> */}
         </GlobalContext.Provider>
    )
}
export default Home;