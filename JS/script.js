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
        } 
    }
}).mount('#root')
