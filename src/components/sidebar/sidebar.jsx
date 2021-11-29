import React from "react";



export default class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {location: window.location.href}
    this.pageOne = this.pageOne.bind(this);
    this.pageTwo = this.pageTwo.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
      if (window.location.href !== prevState.location){
        this.setState({location: window.location.href})
      }
  }


  pageOne(){
    return(
      <div className='sidebar-container'>
        
        <div className='application-header-container'>
          <span className='application-header'>Application Progress</span>
        </div>
        <div className='application-location-container'>
          <div className='first-page-container'>
            <div className='dot-line-container'>
              <div className='first-page-dot'></div>
              <div className='first-page-line'></div>
            </div>
            <a href='/' className='first-page-text'>Name and Industry</a>
          </div>
          <div className='second-page-container'>
            <div className='dot-line-container'>
              <div className='second-page-dot'></div>
            </div>
            <a href='/second-page' className='second-page-text'>Sales and Payroll</a>
          </div>
        </div>
      </div>
    )
  }

  pageTwo(){
    return(
      <div className='sidebar-container'>
        <div className='application-header-container'>
          <span className='application-header'>Application Progress</span>
        </div>
        <div className='application-location-container'>
          <div className='first-page-container'>
            <div className='dot-line-container'>
              <div className='first-page-dot'></div>
              <div className='second-page-line'></div>
            </div>
            <a href='/' className='first-page-text'>Name and Industry</a>
          </div>
          <div className='second-page-container'>
            <div className='dot-line-container'>
              <div className='second-page-dot-complete'></div>
            </div>
            <a href='/second-page' className='second-page-text-complete'>Sales and Payroll</a>
          </div>
        </div>
      </div>
    )
  }



  render(){
    if (this.state.location.includes("second")){
      return(
        this.pageTwo()
      ) 
    } else {
      return(
        this.pageOne()
      )
    }
  }
}