import React from "react";
import {connect} from 'react-redux';


const mSTP = ({application}, ownProps) => ({
  application: application,
  match: ownProps
})

const mDTP = () => ({

})


 class Sidebar extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const location = useLocation();
    if 

    return(
      <div className='sidebar-container'>

      </div>
    )
  }
}