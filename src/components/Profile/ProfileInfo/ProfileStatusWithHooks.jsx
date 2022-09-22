import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);

    const activateEditMode = ()=>{
        setEditMode(true)
    }

    const deactivateEditMode = ()=>{
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e)=>{
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Type your status here...'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} type="text" name="" id=""  />
                </div>
            }
        </>
    );
}



export default ProfileStatusWithHooks;