import React from 'react';
import { Link } from 'react-router-dom';

export default class FirstPage extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.application
    this.update = this.update.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  nextPage(){
    this.props.firstPageApp(this.state)
  }

  render(){
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
              value={this.state.businessName}
              className="business-name-input"
              name='business-name' 
              type="text" 
              placeholder="Business Name" 
              onChange={this.update("businessName")}
            />
          </div>
          <div className="industry-selector"> What Industry is your buisness?
            <select onChange={this.update("industryId")} defaultValue={"industry"} className='industry-selector'>
              <option value="industry" disabled>Industry</option>
              <option value="10537">Plumber</option>
              <option value="10391">Software developer</option>
              <option value="10415">Lawyer</option>
              <option value="10109">Handyman</option>
            </select>
          </div>
          <div className='email-input-container'>
            Email
            <input value={this.state.contactEmail} className='email-input' type="email" onChange={this.update("contactEmail")}/>
          </div>
          <div className='zip-container'>
            Zip Code
            <input  value={this.state.locations} onChange={this.update("locations")} type="text" className="zip-input"/>
          </div>
        </form>
        <div>
          <Link to="/second-page" className='second-page-link'><button onClick={() => this.props.firstPageApp(this.state)}>Continue</button></Link>
        </div>
      </div>
    )
  }

}

