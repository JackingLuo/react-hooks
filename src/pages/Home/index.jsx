import React, { useCallback } from 'react';
import { Switch, Route } from "react-router-dom";

import {indexChildRoutes} from '../../router';

const Home = props => {
    
    const renderRouters = useCallback(()=>{
        let routers = indexChildRoutes.map(item=>(
            <Route key={item.path} {...item} />
        ));
        return routers
    },[])//依赖动态的indexChildRoutes
    
    return(
        <div>
            <h1>index的公共layout</h1>
            <div>
                <Switch>
                    {renderRouters()}
                </Switch>
            </div>
        </div>
    )
}
export default Home