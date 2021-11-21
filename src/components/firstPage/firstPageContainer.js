import { connect } from 'react-redux';
import React from 'react';
import FirstPage from './firstPage';

const mSTP = () => {
  return {
    initialState: {
      "businessName": "",
      "grossAnnualSales": 0,
      "contactEmail": "",
      "numEmployees": 0,
      "annualPayroll": 0,
      "locations": [{"zip": ""}],
      "industryId": "",
    }
  }
}

const mDTP = dispatch => {

}


export default connect(mSTP, mDTP)(FirstPage);

