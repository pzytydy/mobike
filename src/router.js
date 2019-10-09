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
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'

import NoMatch from './pages/nomatch'
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
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={FormRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>


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