import React, { Component } from 'react';

class Condition extends Component {
    state ={
        // tags:["tag1","tag2","tag3"],
        tags:[]
    };

    conditionMethod(){
        if(this.state.tags.length === 0) return <p>No Tags</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>tag</li>)}</ul>
    }

    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && "No Tags Avaiable"}
                {this.conditionMethod()}
            </div>
        );
    }
 
}
 
export default Condition;