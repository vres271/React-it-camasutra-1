import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;