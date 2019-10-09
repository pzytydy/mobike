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
export default class IRouter extends React.Component{

    render(){
        return(
            <HashRouter>
                <App>
                    {/* <Route path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/order/detail" component={}/> */}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" render={()=>
                        <Admin>
                             <Switch>
                                <Route path="/ui/buttons" component={Button}></Route>
                                <Route path="/ui/modals" component={Modals}></Route>
                                <Route path="/ui/loadings" component={Loadings}></Route>
                                <Route path="/ui/notification" component={Notice}></Route>
                                <Route path="/ui/tabs" component={Tabs}></Route>
                                <Route path="/ui/gallery" component={Gallery}></Route>
                                <Route path="/table/basic" component={BasicTab}></Route>
                                <Route path="/table/high" component={HighTable}></Route>
                                <Route path="/city" component={City}></Route>
                                <Route path="/Order" component={Order}></Route>


                                <Route  component={NoMatch}></Route>
                                
                             </Switch>
                        </Admin>                    
                    
                    }></Route>
                    <Route path="/order/detail" component={Login}></Route>
                </App>
            </HashRouter>
        );
    }
}