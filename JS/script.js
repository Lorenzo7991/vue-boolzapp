console.log('VUE-OK', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            ...data,
            selectedContact: '',
        }
    },
    methods: {
        selectContact(contact)  {
            this.selectedContact = contact;
        } ,
        getMessageClasses(message) {
            return {
                'message': true,
                'sent': message.status === 'sent',
                'received': message.status === 'received'
            };
        }
    }
}).mount('#root')
