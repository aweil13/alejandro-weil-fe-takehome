import React from 'react';


export default class SecondPage extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.application;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchRequest = this.fetchRequest.bind(this); 
  }


  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  fetchRequest(application){
    let sendObject = {
      "businessName": application.businessName,
      "contactEmail": application.contactEmail,
      "grossAnnualSales": parseInt(application.grossAnnualSales),
      "annualPayroll": parseInt(application.annualPayroll),
      "numEmployees": parseInt(application.numEmployees),
      "industryId": application.industryId,
      "locations": [{
        "zip": application.locations
      }]
    }
    debugger
    fetch("https://api-sandbox.coterieinsurance.com/v1/commercial/applications", {
      method: "POST",
      headers: {
        "authorization": "token 73920c6f-d530-419c-87b3-4f4762e05e9d"
      },
      body: sendObject
    }).then(res => console.log(res))
    .catch((error) => {console.log(error)})
  }

  handleSubmit(e){
    e.preventDefault();
    const application = this.state
    this.fetchRequest(application);
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>Annual Sales</div>
        <select onChange={this.update("grossAnnualSales")}>
          <option value={50000}>$50K</option>
          <option value={75000}>$75K</option>
          <option value={100000}>$100K</option>
          <option value={150000}>$150K</option>
          <option value={200000}>$200K</option>
        </select>

        <div>Annual Payroll</div>
        <select onChange={this.update("annualPayroll")}>
          <option value={50000}>$50K</option>
          <option value={75000}>$75K</option>
          <option value={100000}>$100K</option>
          <option value={150000}>$150K</option>
          <option value={200000}>$200K</option>
        </select>

        <input type="number" onChange={this.update("numEmployees")} />
        <button type='submit'>Submit</button>
        </form>
      </div>

    )
  }

}