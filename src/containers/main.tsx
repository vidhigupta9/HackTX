import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Home from "../pages/Home/Home"
import Museum from "../pages/Museum/Museum"
import Triceratops from '../pages/Triceratops/Triceratops'
import Chatroom from "../pages/Chatroom/Chatroom"

function Main() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/triceratops' exact component={Triceratops} />
                <Route path='/museum' exact component={Museum} />
                <Route path='/chatroom' exact component={Chatroom} />
            </Switch>

        </Router>
    )
}

export default Main
