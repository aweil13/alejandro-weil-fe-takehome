import { connect } from 'react-redux';
import FirstPage from './firstPage';
import { firstPageApplication } from '../../features/applicationSlice';

const mSTP = ({application}) => ({  
    application
})


const mDTP = dispatch => ({
    firstPageApp: payload => dispatch(firstPageApplication(payload))
})


export default connect(mSTP, mDTP)(FirstPage);

