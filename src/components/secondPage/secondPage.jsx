import React from 'react';

export default class SecondPage extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.application 
  }

  render(){
    console.log(this.state)
    return(
      <div>
        Hello
      </div>
    )
  }

}