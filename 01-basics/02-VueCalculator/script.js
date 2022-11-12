import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent ( {
    name: 'App',

    data () {
        return {
            first: 0,
            second: 0,
            picked: '',
        }
    },

    computed: {
        result () {
            if (this.picked === 'sum') {
                return this.first + this.second
            }
            if (this.picked === 'subtract') {
                return this.first - this.second
            }
            if (this.picked === 'multiply') {
                return this.first * this.second
            }
            if (this.picked === 'divide') {
                return this.first / this.second
            }
        }
    },

});

const app = createApp (App);
const vm = app.mount('#app');
