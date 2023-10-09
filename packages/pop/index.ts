import {App,createApp} from 'vue'
import Pop from './src/Pop.vue'


createApp(App).use(Pop)

Pop.install = (app: App) : void => {
    app.component(Pop.name, Pop)
}

export default Pop
