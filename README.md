# Alejandro Weil Coterie Frontend Take Home Project

## Overview
### This project is a take home assignment for Coterie insurance to emulate their quote service located [here](https://quote.coterieinsurance.com/) on a scaled down level. The application was built using the following technologies and libraries:

* create-react-app
* react-redux
* Javascript
* react-router-dom
* CSS
* HTML


## High Level Description
### The application is a single page React/Redux webpage which takes user input for a theoretical business, packages and sends it as a POST request to a provided API(https://api-sandbox.coterieinsurance.com/v1/commercial/applications) where it generates a response of available insurance policy types based on the information inputted and sent by the user. 


## Technical Overview
### Store
* The redux store was designed and written with the user inputs and the necessary information needed to achieve a 200 response from the API which were:
  - Business name(string)
  - Industry(ID string) 
    - Plumber(ID: 10537)
    - Software Developer(ID: 10391)
    - Lawyer(ID: 10415)
    - Handyman(ID: 10109)
  - Zip Code(string)
  - Email(string)
  - Annual Sales(integer)
  - Annual Payroll(integer)
  - Number of Employees(integer)
* The store looks as follows:
```
   const initialState = {
  "businessName": "",
  "grossAnnualSales": 0,
  "contactEmail": "",
  "numEmployees": 0,
  "annualPayroll": 0,
  "locations": "",
  "industryId": "",
}

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
      firstPageApplication: (state, action) => {
        state["businessName"] = action.payload["businessName"];
        state["contactEmail"] = action.payload["contactEmail"];
        state["locations"] = action.payload["locations"];
        state["industryId"] = action.payload["industryId"];
      },
      secondPageApplication: (state, action) => {
        state["grossAnnualSales"] = action.payload["grossAnnualSales"];
        state["numEmployees"] = action.payload["numEmployees"];
        state["annualPayroll"] = action.payload["annualPayroll"];
      }
    }
})

export const { firstPageApplication, secondPageApplication } = applicationSlice.actions

export default applicationSlice.reducer;

```
  - This is the initial slice of state which is then populated by the user inputting the relevant information aided by the reducers created in the applicationSlice
  - This store is then passed in to the Provider component wrapping the App componet in index.js:
  ```
  ReactDOM.render(
  <Provider store={store}>
    <HashRouter> 
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
```
### Routing and Components
* I decided to split the application over two pages, with two components using routes and one sidebar component present in every page. On a code level it looks like such in App.js:
``` 
const App = () => (
    <div className="App">
          <Sidebar location={window.location.href}/>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/second-page" element={<SecondPage/>}/>
        </Routes>
    </div>
);
```
* The First and Second Page components each render a page of inputs which the user fills out with their business details, which saves them to the store and can be accessed in each page if required.
* Example render function in SecondPage component:
```
render(){
    
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
```
* Note that if the user has filled something out previously, left and returned to the page then it will be saved and rendered in the input field.
### Sending the POST request
* Once all the necessary information is gathered, the user can trigger the POST request by clicking on a Show Policies button present in the Second Page Component which will send the POST request to the specified Create Application Endpoint API with a function:
```
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
  }
```
* This function will then trigger a re-render of the component with the policies available based on the information provided by the user.
### Styling
* Styling was inspired by coteries own quote application, for this application it's simplified. It's done using CSS and individual stylesheets for each component present in the stylesheets folder.

### What I Could Have Done Better
* I have no experience using the testing library so I decided to forgo it and manually test while writting the application.
* I wasn't able to figure out how to trigger a re-render of the sidebar component when the url changes, so the visual flair of tracking the application progress only works when refreshing the page.
* If I had more time, I would have split the application into more components as well as make it more reactive to screen size changes.
* Displayed errors when the user didn't input the information in the required format.
* Displayed the available policies in a better manner, maybe in their own component with better styling.