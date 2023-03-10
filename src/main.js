import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'
import './assets/all.scss'

const app = createApp(App)

app.component( FontAwesomeIcon)

app.use(router)

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faEnvelope, faArrowRight, faFacebook, faTwitter, faYoutube, faHouse, faArrowLeft)