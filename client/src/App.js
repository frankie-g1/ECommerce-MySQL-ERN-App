import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from './pages/shop/shop';
import { Navbar } from './components/navbar';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }
    
    callAPI(){
        fetch("http://localhost:9000")
        .then(res => console.log(res))
        .then(res => this.setState({ apiResponse: res}))
        .catch(err => err)
    }
    
    componentWillMount() {
        this.callAPI()
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop/>}/>
                    </Routes>
                </Router>
            </div>
          );
    }
}


export default App;
