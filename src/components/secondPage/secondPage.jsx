import React from 'react';
import { Link } from 'react-router-dom';

export default class SecondPage extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.application          
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchRequest = this.fetchRequest.bind(this); 
    this.displayPolicies = this.displayPolicies.bind(this);
  }

  update(field){
    return e => this.setState( {[field]: e.target.value})
  }

  

  fetchRequest(application){
    let sendObject = JSON.stringify({
      "businessName": application.businessName,
      "contactEmail": application.contactEmail,
      "grossAnnualSales": Number(application.grossAnnualSales),
      "annualPayroll": Number(application.annualPayroll),
      "numEmployees": Number(application.numEmployees),
      "industryId": application.industryId,
      "locations": [{
        "zip": application.locations
      }]
    })
    this.props.secondPageApp(this.state);

    fetch("https://api-sandbox.coterieinsurance.com/v1/commercial/applications", {
      method: "POST",
      headers: {
        "Authorization": "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
        'Content-Type': 'application/json'
      },
      body: sendObject,
    }).then(res =>  res.json()).then(res => {
        this.setState({"policies": res.availablePolicyTypes})
    })
    .catch((error) => {console.log(error)})
  }

  handleSubmit(e){
    e.preventDefault();
    const application = this.state;

    this.fetchRequest(application);
  }

  displayPolicies(policies){
    if (policies.length === 0) {return(<div className='available-policies-container'><h1 className="no-policies">No Available Policies!</h1></div>)}
    else {return ( 
      <div className='available-policies-container'>
        <h1 className='available-policies-text'>Available Policies:</h1>
          <ul className='policies-list'>
            {policies.map(policy => {
              if (policy === "GL") {
                return <li className='policy' key={Math.random()}><span className='list-text'>General Liability</span></li>
              } else if (policy === "PL") {
                return <li className='policy' key={Math.random()}><span className='list-text'>Professional Liability</span></li>
              } else {
                return <li className='policy' key={Math.random()}><span className='list-text'>Business Owners Policy</span></li>
              }
            })}
          </ul>
      </div>
    )}
  }

  render(){
    console.log(this.state)
    return(
      <div className='form-background'>
        <h1 className='introduction-blurb'>
          Coterie Insurance Take Home Project
        </h1>
        <h2 className='information-request'>
          Sales, Payroll, and Number of Employees
        </h2>
        <form className='last-form' onSubmit={this.handleSubmit}>
          <div className='last-page-input-container'>
           <span> What are {this.state.businessName} annual sales?</span>
            <select className='annual-sales-select' onChange={this.update("grossAnnualSales")} defaultValue={this.state.grossAnnualSales ? this.state.grossAnnualSales : ""}>
              <option value="" disabled>Sales</option>
              <option value={50000}>$50K</option>
              <option value={75000}>$75K</option>
              <option value={100000}>$100K</option>
              <option value={150000}>$150K</option>
              <option value={200000}>$200K</option>
            </select>
          </div>
          <div className='last-page-input-container'>
            <span> What is {this.state.businessName} annual payroll?</span>
            <select className='annual-payroll-select' onChange={this.update("annualPayroll")} defaultValue={this.state.annualPayroll ? this.state.annualPayroll : ""} >
              <option value="" disabled>Payroll</option>
              <option value={50000}>$50K</option>
              <option value={75000}>$75K</option>
              <option value={100000}>$100K</option>
              <option value={150000}>$150K</option>
              <option value={200000}>$200K</option>
            </select>
          </div>
          <div className='last-page-input-container'>
            <span>How many Employees in {this.state.businessName}?</span>
            <input type="number" className='number-employees-input' value={this.state.numEmployees} onChange={this.update("numEmployees")} />
          </div>
          <button type='submit' className='show-policies-button' onClick={() => {this.props.secondPageApp(this.state); }}>Show Policies</button>
        </form>
        {this.state.policies ? this.displayPolicies(this.state.policies) : null}
        <div className='second-page-button-container'>
          <Link to="/" className="back-link"><button className='back-button' onClick={() => this.props.secondPageApp(this.state)}>Back</button></Link>
        </div>
      </div>
    )
  }
}