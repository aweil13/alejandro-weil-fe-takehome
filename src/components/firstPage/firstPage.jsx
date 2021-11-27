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
    console.log(this.props)
    return(
      <div className='form-background'>
        <h1 className='introduction-blurb'>
          Coterie Insurance Take Home Project
        </h1>
        <h2 className='information-request'>
          Business Name and Industry
        </h2>
        <form className="initial-form">
          <div className='input-container'>
            <span> What's your Business Name? </span>
            <input
              value={this.state.businessName}
              className="business-name-input"
              name='business-name' 
              type="text" 
              placeholder="Business Name" 
              onChange={this.update("businessName")}
            />
          </div>
          <div className='input-container'> 
            <span> What Industry is your business?</span>
            <select onChange={this.update("industryId")} defaultValue={"industry"} className='industry-selector'>
              <option value="industry" disabled>Industry</option>
              <option value="10537">Plumber</option>
              <option value="10391">Software developer</option>
              <option value="10415">Lawyer</option>
              <option value="10109">Handyman</option>
            </select>
          </div>
          <div className='input-container'>
          <span> Please provide a contact email </span>
            <input placeholder='Email' value={this.state.contactEmail} className='email-input' type="email" onChange={this.update("contactEmail")}/>
          </div>
          <div className='input-container'>
          <span> Business Zip Code </span>
            <input placeholder='Zip Code' value={this.state.locations} onChange={this.update("locations")} type="text" className="zip-input"/>
          </div>
        </form>
        <div className='next-page-button-container'>
          <Link to="/second-page" className='second-page-link'><button className='button-link' onClick={() => this.props.firstPageApp(this.state)}>Continue</button></Link>
        </div>
      </div>
    )
  }

}

