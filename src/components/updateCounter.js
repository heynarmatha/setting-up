import React, { Component } from 'react';
class Update extends Component {
    state ={
        value :this.props.update.value,
    };

    handleIncrement=()=>{
        // console.log(product);
        this.setState({value :this.state.value+1})
    }

    render() { 
        return (
            <div className='m-2'>

                <span className={this.badgeColorChange()}>
                    {this.counterFun()}
                </span>

                <button onClick={this.handleIncrement}
                 className='btn btn-secondary btn-lg'>Counter</button>

                <button onClick={()=>this.props.onDelete(this.props.update.id)} 
                className='btn btn-danger btn-sm m-2'>Delete</button>

            </div>
        );
    }


    badgeColorChange() {
        let colorChange = "badge m-2 badge-";
        colorChange += (this.state.value === 0) ? "warning" : "primary";
        return colorChange;
    }

    counterFun(){
        const {value: count} = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default Update;