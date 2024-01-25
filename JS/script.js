console.log('VUE-OK', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            ...data,
        }
    }
}).mount('#root')
