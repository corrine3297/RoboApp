import React, { Component } from 'react';
// import {robot} from './robot';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
    constructor(){
        super();
        this.state = {
            robot: [],
            SearchField:''
        }

    }



    SearchChange = (event) => {
        //____Note: To get Value from a seach field use.. " | event.target.value | "
        //____console.log(event.target.value);
        //_______________________________________________________________
        //Note: you can specify value of Searchfield by this
        //this.state.SearchField = event.target.value;
        //__________________________________________________________________

        //But correct way is using setState
        
       
        this.setState({
            SearchField: event.target.value
        });
        //console.log(robofilter);     
    }  
    //NOte: To get user deatil from web and use here
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => {
                return response.json()
            })
            .then(user =>{
                this.setState({
                    robot: user
               })
            })
        

    }
    
    render(){
        const robofilter = this.state.robot.filter(names => {
            return names.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
        });

    if(this.state.robot===0)
    {
        <h1>Loading</h1>
    }
    else{
        return(
            <div className='tc '>
                <h1 className='f1'>ROBOFRIEND</h1>
                <SearchBox searchchange={this.SearchChange}/>
                <Scroll>
                    <CardList robot={robofilter}/>
                </Scroll>
            </div>
        );
        }
    }
    
}

export default App;
