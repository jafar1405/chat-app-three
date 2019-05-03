import React from 'react';

class DisplayConversation extends React.Component{
    
    // messagesEnd = React.createRef()

    // componentDidMount () {
    //     this.scrollToBottom()
    // }
    // componentDidUpdate () {
    //     this.scrollToBottom()
    // }
    // scrollToBottom = () => {
    //     this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    // }
    render(){
        return(
            <div className="msg_history">
                {
                    this.props.messages.map((message, index ) => {
                        if(this.props.username === message.username){
                            return (
                                <div className="incoming_msg" key={index}>
                                    {/* <div className="incoming_msg_img"> 
                                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                                    </div> */}
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p><i>{message.username}</i> <br/>{message.message}</p>
                                            {/* <span className="time_date"> 11:01 AM    |    June 9</span> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div className="outgoing_msg"  key={index}>
                                    <div className="sent_msg">
                                        <p><i>{message.username}</i> : <br/>{message.message}</p>
                                        {/* <span className="time_date"> 11:01 AM    |    June 9</span>  */}
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div ref={this.messagesEnd} />
            </div>
        )
    }
}



export default DisplayConversation;