import React from 'react';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor');
    }
    state = {a:0};

    componentWillMount=()=>{
        console.log('componentWillMount');
    }
    componentDidMount=()=>{
        console.log('componentDidMount');
    }
    shouldComponentUpdate=()=>{
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate=()=>{
        console.log('componentWillUpdate');
    };
    componentDidUpdate=()=>{
        console.log('componentDidUpdate');
    }


    changeState = e =>{
        this.setState({
            a:this.state.a +10
        });
    };

    render(){
        console.log('render');
        return(
            <div>
                LIFE CYCLE COMPONENT
                <button onClick={this.changeState}>Change State</button>
                {this.state.a}
            </div>
        )
    }
}

export default Lifecycle;