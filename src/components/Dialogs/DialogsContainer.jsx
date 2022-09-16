import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
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
    onSendMessage: ()=>{
      dispatch(sendMessageCreator());
    },
    onNewMessageUpdate: (body)=>{
      dispatch(updateNewMessageBodyCreator(body))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

