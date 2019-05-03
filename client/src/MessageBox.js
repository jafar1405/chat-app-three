import React from 'react';

function MessageBox(props){

    const message = (e) => {
        console.log(e.target.message.value)
        e.preventDefault()
        props.getMessage(e.target.message.value)
        e.target.message.value = ""
        
    }
    return(
        <div>
            <div className="type_msg">
                        <div className="input_msg_write">
                        {/* <textarea ></textarea> */}
                            <form onSubmit={message}>
                                <input type="text" id="message" className="write_msg" placeholder="Type a message"/>
                                <button className="msg_send_btn" id="enter" type="submit">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                    send
                                </button>
                            </form>
                        </div>
                    </div>
            
        </div>
    )
}

export default MessageBox;