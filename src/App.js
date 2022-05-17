import React from 'react';
import './App.css';
import RenderCvPrev from './components/PreviewCv';
import { Example } from './components/PreviewCv';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      address:"",
      job:"",
    }
    this.submited = this.submited.bind(this)
    this.onWrite = this.onWrite.bind(this)
  }
submited(e){
  e.preventDefault()
  this.setState(
    {name: e.target[0].value,
    address: e.target[1].value,
    job:e.target[2].value
    }
  )  
}
onWrite(e){
  let Obj = e.target.placeholder;
  this.setState(
    {[Obj]: e.target.value
    }
  )  
  console.log(this.state)

}
  render(){
    return (
      <div className='TESTING'>
        <form action="" className='former' onSubmit={this.submited} >
          <input type="text" placeholder='name' onChange={this.onWrite}/>
          <input type="text" placeholder='address'onChange={this.onWrite}/>
          <input type="text" placeholder='job'onChange={this.onWrite}/>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit"> send</button>
        </form>
        <Example name = {this.state.name} address = {this.state.address} job ={this.state.job} />
      </div>
    );
  }
 
}

export default App;
