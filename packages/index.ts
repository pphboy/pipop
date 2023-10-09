import {App} from 'vue'

import PiPop from './pop'

export {PiPop}

const components = [PiPop]

const Pi = {
    install(app:App) {
        components.forEach(item=>app.component(item.name,item))
    }
}

export default Pi


