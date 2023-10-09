import {App} from 'vue'
import Pop from './src/Pop.vue'

Pop.install = (app: App) : void => {
    app.component(Pop.name, Pop)
}

export default Pop
