import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import onsen from '@/components/onsen';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(VueOnsen);
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//     },    {
//       path: '/',
//       name: 'onsen',
//       component: onsen,
//     },
//   ],
// });
