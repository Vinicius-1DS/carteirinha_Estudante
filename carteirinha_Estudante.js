const app = Vue.createApp({
    data() {
        return {
            mostrarCarteira: true,
            nome: 'João Silva',
            matricula: '20230001',
            curso: 'Ciência da Computação'
        }
    }
});

const mountedApp = app.mount('#app');