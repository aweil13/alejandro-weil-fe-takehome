import React from 'react';
// import { Link } from 'react-router-dom';

class FirstPage extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.initialState
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    console.log(this.state)
    return(
      <div className='form-background'>
        <h1 className='introduction-blurb'>
          Alejandro's Coterie Insurance Take Home Project
        </h1>
        <h2 className='information-request'>
          Please fill in your business details below!
        </h2>
        <form className="initial-form">
          <div className='label-name'>
            What's your Business Name?
            <input
              className="business-name-input"
              name='business-name' 
              type="text" 
              placeholder="Business Name" 
              onChange={this.update("businessName")}
            />
          </div>
          <div className="industry-selector"> Industry
            <select onChange={this.update("industryId")} className='industry-selector'>
              <option value="10537">Plumber</option>
              <option value="10391">Software developer</option>
              <option value="10415">Lawyer</option>
              <option value="10109">Handyman</option>
            </select>
          </div>
          <div className='email-input-container'>
            Email
            <input className='email-input' type="email" />
          </div>
          
        </form>
      </div>
    )
  }

}

export default FirstPage;