import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { Icon } from '@iconify/vue';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const app = createApp(App)
app.use(Vue3ColorPicker)
app.component("Icon",Icon)
app.mount('#app')
