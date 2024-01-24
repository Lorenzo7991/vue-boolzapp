console.log('VUE-OK', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ready...'
        }
    }
}).mount('#app')