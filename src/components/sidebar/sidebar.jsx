import React from "react";



export default class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {location: window.location.href}
    this.pageOne = this.pageOne.bind(this);
    this.pageTwo = this.pageTwo.bind(this);
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
    console.log(window.location.href)
    return(
      this.state.location.toString().includes('second') ? this.pageTwo() : this.pageOne()
    )
  }
}