import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users').then(response => {
            return response.json()
        }).then(users => {
            this.setState({robots:users})
        })
    }

    render(){
        const{robots, searchField} = this.state;
        const filteredRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
        <div className="tc">
            <h1 className="f1">RoboFriends!</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobot}/>
            </Scroll>
        </div>
    );
    }
}

export default App;