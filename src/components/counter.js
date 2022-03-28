import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count :0,
    };

    handleIncrement(){
        console.log("increment",this);
        /*
        =>>> error we can access this keyword 
        =>>> inside the event handing but if 
        =>>> (CAN WE** *{{ARROW FUNCTION Here}}** TO SOLVE THIS PROBLEM 
        =>>> CONSTRUCTOR (BIND METHOD))
        */
    }

    //*** 1.ARROW FUNCTION   */
    
    // handleIncrement=()=>{
    //     console.log("increment",this);
    // }

    constructor (){
        super();
        // console.log("constructor-increment",this);
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    render() { 
        return (
            <div className='m-2'>
                <span className={this.badgeColorChange()}>{this.counterFun()}</span>
                <button onClick={this.handleIncrement}
                 className='btn btn-secondary btn-lg'>Counter</button>
            </div>
        );
    }
    badgeColorChange() {
        let colorChange = "badge m-2 badge-";
        colorChange += (this.state.count === 0) ? "warning" : "primary";
        return colorChange;
    }

    counterFun(){
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;