import React from 'react';

class Calculator extends React.Component{
    state={a:30, b:70}

    
    render(){
        // if inside the render then call with out this keyword orelse outside the render then mention this.----
        const add = this.state.a + this.state.b;
       return( 
    <div>
        {/* we can also write this way bacause it reduced the performace issue because of several brackets */}
        {/* SetA=e=>{
            this.setState({
                a:parseInt(e.target.value)
            })
        };
        <input className='inputA' onChange={this.SetA}/> */}



        {/* if we wnt to change the values then we will go for setstate here e=generetes event like jsonobject ,,,target=classname
        value=value u entered value.....better to see in console while u entering put consol.log(e.target.valu)  */}
        <input
        className='inputA'
        onChange={e=>{
            this.setState({
                a:parseInt(e.target.value)
            });
        }}
        />
        <input
        className='inputB'
        onChange={e=>{
            this.setState({
                b:parseInt(e.target.value)
            })
        }}
        />
        <br/>




        {/* concat */}
        {' A: '+this.state.a +' B: '+this.state.b}        <br/>


         {'ADD:'+add}
          {this.state.a+","+this.state.b}   <br/>
          <h1>{'Add:'+(this.state.a+this.state.b)}</h1> <br/>
            {'sub:' +(this.state.a-this.state.b)}             <br/>  
            {'mul:' +(this.state.a*this.state.b)}              <br/>
            {'div:' +(this.state.a/this.state.b)}                <br/> 
    </div>
       );
    }
}
export default Calculator;