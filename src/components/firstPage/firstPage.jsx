import React from 'react';
// import { Link } from 'react-router-dom';

class FirstPage extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.initialState
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div className='form-background'>
        <p className="intro">Whats Up Bitch</p>
      </div>
    )
  }

}

export default FirstPage;