const app = Vue.createApp({
    data() {
        return {
            mostrarCarteira: true,
            nome: 'João Silva',
            matricula: '20230001',
            curso: 'Ciência da Computação',
            novoTexto: '',
            textos: [],
            modoEscuro: false
        }
    },
    watch: {
        modoEscuro(novoValor) {
            document.body.style.backgroundColor = novoValor ? '#333' : '#f4f4f4';
            document.body.style.color = novoValor ? '#fff' : '#000';
        }
    },
    methods: {
        adicionarTexto() {
            if (this.novoTexto) {
                this.textos.push(this.novoTexto);
                this.novoTexto = '';
            }
        }
    }
});

const mountedApp = app.mount('#app');