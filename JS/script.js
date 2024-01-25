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
        };
    },
    computed: {
        highestIdMessage() {
            //* Computes a message based on whether a contact is selected or not
            return this.selectedContact ? 'Type a message' : 'Select a contact to start chatting...';
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
            }
        }
    }
})
app.mount('#root');

