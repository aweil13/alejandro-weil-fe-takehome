import * as applicationUtil from '../util/applicationUtil';

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

const receiveQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote
})
 

export const sendApplication = application => dispatch => (
  applicationUtil.sendApplicationCall(application).then(quote => (
    dispatch(receiveQuote(quote))
  ))
)