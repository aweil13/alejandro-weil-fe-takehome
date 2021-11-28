import React from "react";



export default class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = window.location.href
    this.pageOne = this.pageOne.bind(this)
  }

  pageOne(){
    return(
      <div className='application-location-container'>
        <div className='application-header-container'>
          <span className='application-header'>Application</span>
        </div>
        <div className='application-location-container'>
          <div className='first-page-container'>
            <div className='dot-line-container'>
              <div className='first-page-dot'></div>
              <div className='first-page-line'></div>
            </div>
            <div className='first-page-text'>Name and Industry</div>
          </div>
          <div className='second-page-container'>
            <div className='dot-line-container'>
              <div className='second-page-dot'></div>
            </div>
            <div className='second-page-text'>Sales and Payroll</div>
          </div>
        </div>
      </div>
    )
  }


  render(){
    return(
      this.pageOne()
    )
  }
}