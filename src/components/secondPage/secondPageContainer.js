import { connect } from 'react-redux';
import { secondPageApplication } from '../../features/applicationSlice';
import SecondPage from './secondPage';


const mSTP = ({application}) => ({
   application
})

const mDTP = dispatch => ({
  secondPageApp: payload => dispatch(secondPageApplication(payload))
})

export default connect(mSTP, mDTP)(SecondPage);