import React from 'react'
import logo from '../img/logo.svg'

export default class ToastMessage extends React.Component {
    constructor (props) {
      super(props)
      
      // Init state
      this.state = {
        displayTimeout: 10000,
        hangTime: 5000,
        hideToast: true,
        messageTitle: props.toastMessageTitle, 
        messageText: props.toastMessageText,
      }

      // Bind component context to event handlers
      this.handleCloseToastMessage = this.handleCloseToastMessage.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        var showMessage = false;
        if (props.toastMessageText) {
            if (props.toastMessageText.length > 0) {
                showMessage = true
            }
        }
        return { 
            messageTitle: props.toastMessageTitle, 
            messageText: props.toastMessageText,
            hideToast: !showMessage
        };
    }

    // Event Handlers
    handleCloseToastMessage(event) {
        console.log("Hiding message...")
        this.setState({
            hideToast: true
        })
        console.log("Hiding message: " + this.state.hideToast)
    }

    render() {
      return (
        <>
        { 
            !this.state.hideToast && 

            <div className="App-toast-message top-right" onClick={this.handleCloseToastMessage}>
                <p className="notification-title">
                    {this.state.messageTitle}
                </p>

                <div className="App-toast-message-icon">
                    <img src={logo} alt="message-icon" />
                </div>
                
                <div className="App-toast-message-text">
                    <p>{this.state.messageText}</p>
                </div>
            </div>
        }
        </>
      )
    }
}