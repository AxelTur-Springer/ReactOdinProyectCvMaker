import React from "react";
import ReactToPrint from 'react-to-print';

export  default class RenderCvPrev extends React.Component{
  constructor(props){
    super(props)
    const {name,address,job} = props;
  }
    render(){
    return(
        <div>
          <h1> i am {this.props.name}</h1>
          <h2>i work at {this.props.job}</h2>
          <h3>i live in {this.props.address}</h3>
        </div>
    )
  }
}
    
export class Example extends React.PureComponent {
  constructor(props){
    super(props)
    const {name,address,job} = props;
  }
  render() {
    return (
      <div>
          <RenderCvPrev 
         name = {this.props.name} 
         address = {this.props.address} 
         job ={this.props.job} 
         ref={el => (this.componentRef = el)} />
        <ReactToPrint 
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button>Print this out!</button>;
          }}
          content={() => this.componentRef}
        />
      
      </div>
    );
  }
} 
