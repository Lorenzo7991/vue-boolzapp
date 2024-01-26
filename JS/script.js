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
        highestIdMessage() {
            // *Initialize variable to hold highest ID found
            let highId = 0;
            //* Iterate through each message in chatMessages array
        for (const message of this.chatMessages) {
            //* Check ID of current message if is greater than the current highest ID
            if (message.id > highId) {
                // * Update the highest ID to the ID of the current message
                highId = message.id;
            }
        }
        //* Return the highest ID found
        return highId;
    },
        placeholderText() {
            //* Computes placeholder text based on whether a contact is selected or not
            return this.selectedContact ? 'Type a message' : 'Select a contact to start chatting...';
        }
    },
    methods: {
        selectContact(contact) {
            //* Method to select a contact
            this.selectedContact = contact;
        },
        getMessageClasses(message) {
            //* Method to compute classes for styling messages
            return {'message': true, 'sent': message.status === 'sent', 'received': message.status === 'received'};
        },
        sendMessage() {
            //* Computes the ID for the new message
            if (this.newMessage.trim()) {
                const newMessageId = this.highestIdMessage + 1;
                //*New message obj
                const newMessage = { id: newMessageId, text: this.newMessage.trim(), status: 'sent'};
                //* Adds the new message to the chat messages
                this.chatMessages.push(newMessage);
                //* Resets the new message input field
                this.newMessage = '';

                //*Delay sending automatic response
                setTimeout(() =>  {
                    //* Call sendAutomaticResponse method to simulate sending response
                    this.sendAutomaticResponse();
                    //*set isTyping flag false.
                    this.isTyping = false;
                }, 3000);
                //* Set isTyping flag to simulate fake contact typing a response
                this.isTyping = true;
            }
        },
        //* Method to simulate sending automatic response.
        sendAutomaticResponse() {
            //* Create a response message object
            const responseMessage = { id: this.nextMessageId++, text: 'Ciao!', status: 'received' };
            //* Push the response message
            this.chatMessages.push(responseMessage);
        }
    }
})
app.mount('#root');

