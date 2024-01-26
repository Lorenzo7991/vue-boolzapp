console.log('VUE-OK', Vue);

const  { createApp } = Vue;

const app = createApp({
    data() {
        return {
            ...data,
            selectedContact: '',
            newMessage: '',
            chatMessages: [],
            nextMessageId: '',
            isTyping: false,
        };
    },
    computed: {
        // * Computes the highest message ID in the chatMessages array
        highestIdMessage() {
            // * Initialize variable to hold highest ID found
            let highId = 0;
            // * Iterate through each message in chatMessages array
            for (const message of this.chatMessages) {
                // * Check ID of current message if greater than the current highest ID
                if (message.id > highId) {
                    // * Update the highest ID to the ID of the current message
                    highId = message.id;
                }
            }
            // * Return the highest ID found
            return highId;
        },
        // * Retrieves the messages for the current chat
        currentChat() {
            if (!this.selectedContact) {
                return [];
            } else {
                return this.chatMessages.filter(message => message.to === this.selectedContact.id || message.from === this.selectedContact.id);
            }
        },
        // * Computes placeholder text based on whether a contact is selected or not
        placeholderText() {
            return this.selectedContact ? 'Type a message' : 'Select a contact to start chatting...';
        },
    },
    methods: {
        // * Method to select a contact
        selectContact(contact) {
            this.selectedContact = contact;
        },
        // * Method to compute classes for styling messages
        getMessageClasses(message) {
            return {'message': true,
                    'sent': message.status === 'sent',
                    'received': message.status === 'received'};
        },
        // * Method to send a message
        sendMessage() {
            if (this.newMessage.trim() && this.selectedContact) {
                // * Computes the ID for the new message
                const newMessageId = this.highestIdMessage + 1;
                // * New message object
                const newMessage = { id: newMessageId,
                                     text: this.newMessage.trim(), 
                                     status: 'sent',
                                     date: this.getCurrentDate(), 
                                     to: this.selectedContact.id, 
                                     from: this.user.id };
                
                 // * Adds the new message to the selected contact's chatMessages
                this.selectedContact.messages.push(newMessage);
                // * Resets the new message input field
                this.newMessage = '';
        
                // * Delay sending automatic response
                setTimeout(() =>  {
                    if (this.selectedContact) {
                        // * Call sendAutomaticResponse method to simulate sending response
                        this.sendAutomaticResponse();
                        // * Set isTyping flag false.
                        this.isTyping = false;
                    }
                }, 3000);
                // * Set isTyping flag to simulate fake contact typing a response
                this.isTyping = true;
            }
        },
        // * Method to simulate sending automatic response
        sendAutomaticResponse() {
            // * Create a response message object
            const responseMessage = { id: this.nextMessageId++,
                                     text: 'Ciao!',
                                     status: 'received',
                                     date: this.getCurrentDate(), 
                                     to: this.user.id, 
                                     from: this.selectedContact.id };
            
            // * Push the response message
            this.selectedContact.messages.push(responseMessage);
        },
        getCurrentDate() {
            return new Date().toLocaleString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        },
    }
});

app.mount('#root');
