import { createApp } from 'vue';
import App from './App.vue';

import data from './data';

createApp(App).mount('#app');

alert(data.message);
alert(data.messageRu);
