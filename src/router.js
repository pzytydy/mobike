import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Button from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notification'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallerys'

import BasicTab from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import Order from './pages/order/index'


import NoMatch from './pages/nomatch'
import City from './pages/city/index'
import OrderDetail from './pages/order/detail'
import User from './pages/user/index'
import Common from './conmom'
export default class IRouter extends React.Component{

    render(){
        return(
            <HashRouter>
                <App>
                    {/* <Route path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/order/detail" component={}/> */}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                             <Switch>
                                <Route path="/admin/ui/buttons" component={Button}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/table/basic" component={BasicTab}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/city" component={City}></Route>
                                <Route path="/admin/order" component={Order}></Route>
                                <Route path="/admin/user" component={User}></Route>


                                <Route  component={NoMatch}></Route>
                                
                             </Switch>
                        </Admin>                    
                    
                    }></Route>
                    <Route path="/common" render = {()=>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    }                    
                    />
                </App>
            </HashRouter>
        );
    }
}