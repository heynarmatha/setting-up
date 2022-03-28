import React, { Component } from 'react';
import Update from './updateCounter';

 class Counter extends Component {
     state = { 
        update :[
             {id:1,value:0},
             {id:2,value:0},
             {id:3,value:0},
             {id:4,value:0},
        ]
      } 
      handleDelete =(updateId)=>{
        // console.log("Delete button",updateId);
        const update =  this.state.update.filter(c =>c.id !== updateId);
        {this.setState({update})}
      }
     render() { 
         return (
         <div>
            {this.state.update.map(update => <Update 
            key={update.id} 
            onDelete ={this.handleDelete}
            update={update}
            />)}
         </div>);
     }
 }
  
 export default Counter;