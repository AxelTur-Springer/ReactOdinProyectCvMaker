import React from 'react';
import './App.css';
import RenderCvPrev from './components/PreviewCv';
import { PreviewCvPlusDownload } from './components/PreviewCv';
import EducationComponent from './components/Education';
import WorkExperienceComponent from './components/WorkExperience';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Name:"",
      Address:"",
      Email:"",
      PhoneNumber:""
    }
    this.onWrite = this.onWrite.bind(this)
  }

onWrite(e){
  let Obj = e.target.placeholder.split(" ").join("");
  this.setState(
    {[Obj]: e.target.value
    }
  )  
  console.log(this.state)

}
  render(){
    return (
          <div className='FullPage'>
            <div className='FullPageForm'>
            <form action="" className='former' >
            <div>
                <h2>Personal Informacion</h2>
              </div>
              <div>
                <p>Enter Full Name</p>
                <input type="text" placeholder='Name' onChange={this.onWrite}/>
              </div>
              <div>
                <p>Enter Address</p>
                <input type="text" placeholder='Address'onChange={this.onWrite}/>
              </div>
              <div>
                <p>Enter Email</p>
                <input type="text" placeholder='Email'onChange={this.onWrite}/>
              </div>
              <div>
                <p>Enter Phone Number</p>
                <input type="text" placeholder='Phone Number'onChange={this.onWrite} />
              </div>
            </form>
            <EducationComponent />
            <WorkExperienceComponent />
            </div>
            <div>
              <PreviewCvPlusDownload 
              Name = {this.state.Name} 
              Address = {this.state.Address}
              Email ={this.state.Email}
              PhoneNumber = {this.state.PhoneNumber}/>
            </div>
        </div>
        
    );
  }
 
}

export default App;
