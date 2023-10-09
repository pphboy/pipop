import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  {PiPop} from '../PiPop'

const app = createApp(App)
app.use(PiPop)
app.mount('#app')
