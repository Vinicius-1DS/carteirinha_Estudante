const app = Vue.createApp({
    data() {
        return {
            nome: '',
            matricula: '',
            curso: '',
            informacoes: ''
        }
    }
});

const mountedApp = app.mount('#app');