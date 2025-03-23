const app = Vue.createApp({
    data() {
        return {
            nome: '',
            matricula: '',
            curso: ''
        }
    }
});

const mountedApp = app.mount('#app');