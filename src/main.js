import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import 'devextreme/dist/css/dx.material.orange.dark.compact.css';
import 'devextreme/dist/css/dx.material.lime.dark.compact.css';

import * as ruMessages from 'devextreme/localization/messages/ru.json'
import * as localization from 'devextreme/localization'

localization.loadMessages(ruMessages);
localization.locale('ru-RU');

createApp(App).mount('#app')
