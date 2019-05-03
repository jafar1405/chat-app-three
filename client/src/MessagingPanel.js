import React from 'react';
import DisplayConversation from './DisplayConversations';
import MessageBox from './MessageBox';

class MessagingPanel extends React.Component{

    state = {
        messages:[]
    }     

    sound = new Audio("../assets/ping.mp3")
    
    playSound = () => {
        let click=this.sound.cloneNode();
        click.play();
    }

   connection = new WebSocket(window.location.origin.replace(/^http/, 'ws'))
   // connection = new WebSocket("ws://localhost:5000")

    componentDidMount(){
        this.sound.preload = 'auto';
        this.sound.load();
        this.connection.onmessage = (message) =>{
            this.playSound()
            const data = JSON.parse(message.data)
            this.setState({
                messages:[...this.state.messages, data]
            })
        }
    }

    getMessage = (message) => {
        
        const data = {
            username:this.props.username,
            message:message
        }
        // this.connection.onopen = (data) => {
        //     console.log('hi')
            
            
        // }
        this.connection.send(JSON.stringify(data))
    }
    render(){
        return(
            <>
                <DisplayConversation messages={this.state.messages}/>
                <MessageBox getMessage={this.getMessage}/>
            </>
        )
    }
}

export default MessagingPanel;