import React from 'react';

function MessageBox(props){

    const message = (e) => {
        if(e.keyCode === 13){
            e.preventDefault()
            props.getMessage(e.target.value)
            e.target.value = ""
        }
    }
    return(
        <div>
            <div className="type_msg">
                        <div className="input_msg_write">
                        {/* <textarea ></textarea> */}
                        <input onKeyDown={message} type="text" className="write_msg" placeholder="Type a message"/>
                        <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
            
        </div>
    )
}

export default MessageBox;