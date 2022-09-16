import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = ()=>{
        this.setState({editMode:true});
    }

    deactivateEditMode = ()=>{
        this.setState({editMode:false});
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e)=>{
        this.setState({status:e.currentTarget.value});
    }

    render() {
        return (
            <>
                {!this.state.editMode&&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status||'Type your status here...'}</span>
                    </div> 
                }
                {this.state.editMode&&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" name="" id="" value={this.state.status}/>
                    </div> 
                }
            </>
        );
    }
}

export default ProfileStatus;