import {  sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state)=>{
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSendMessage: (newMessageBody)=>{
      dispatch(sendMessageCreator(newMessageBody));
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

