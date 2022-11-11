import React from 'react'
import ToastMessage from "./toast-message.js"

export default class JournalEntry extends React.Component {
    constructor () {
      super()
      
      // Init state
      this.state = {
        mode : "view",
        viewEditButtonText : "edit",
        characterCount : 0,
        journalEntryText : "",
        messages: []
      }

      // Bind component context to event handlers
      this.handleEntryTextChange = this.handleEntryTextChange.bind(this)
      this.handleSubmitNewJournalEntry = this.handleSubmitNewJournalEntry.bind(this)
      this.handleToggleEditMode = this.handleToggleEditMode.bind(this)
    }

    // Event Handlers
    handleEntryTextChange (event) {
      this.setState({
        characterCount: event.target.value.length,
        journalEntryText: event.target.value
      })
      
      if (!this.isJournalEntryValid()) {
        this.setState({
            messages: ''
        })
      }
    }

    handleSubmitNewJournalEntry (event) {
        if (this.isJournalEntryValid()) {
            // TODO: Persist to database
            console.log("TODO: Persist to database")
        } else {
            // TODO: show falling toast message "Your entry needs more words. Dig deep!"
            var msg = "Your entry needs more words. Dig deep!"
            this.setState({
                messages: [msg]
            })
        }
    }

    handleToggleEditMode (event) {
        this.toggleEditMode()
    }

    // Helper Functions
    isJournalEntryValid () {
        // TODO: Sanitise input text
        return this.state.characterCount > 0 && this.state.journalEntryText.length > 0
    }

    toggleEditMode () {
        this.state.mode = (this.state.mode == "view" ? "edit" : "view")
        if (this.state.mode == "view") {
            this.setState({
                viewEditButtonText: "edit"
            })
        } else {
            this.setState({
                viewEditButtonText: "view"
            })
        }
    }

    render() {
      return (
        <div className="App-text-input">
          <br/><br/>
          <div>
            <button onClick={this.handleToggleEditMode}>{this.state.viewEditButtonText}</button>
          </div>
          <br/><br/>
          <div>
            <textarea id="newJournalEntryTextArea" disabled={this.state.mode == "view"} placeholder={this.props.inputPlaceholderText} onChange={this.handleEntryTextChange}/>
            <br/>
            <small>
                {this.props.maxCharacterLimit - this.state.characterCount} Remaining
            </small>
          </div>
          <div>
            <br/>
            <button id="newJournalEntrySubmit" /*disabled={!this.isJournalEntryValid()}*/ onClick={this.handleSubmitNewJournalEntry}>Submit</button>
          </div>
          <div>
            {/* {this.state.messages[0] && <ToastMessage toastMessageTitle="Alert" toastMessageText={this.state.messages[0]}/>} */}
            <ToastMessage toastMessageTitle="Alert" toastMessageText={this.state.messages[0]}/>
          </div>
        </div>
      )
    }
}