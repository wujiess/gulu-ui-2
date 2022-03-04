import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

router.afterEach(() => {
    console.log('路由切换了');
})

const app = createApp(App);
app.use(router);
app.mount('#app')