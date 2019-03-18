import sayHello from './sayHello.vue';

const sayhello = {
  install:function(Vue) {
    Vue.component(sayHello.name, sayHello);
  }
}
 if (typeof window !== 'undefined' && window.Vue) {
   window.Vue.use(sayhello);
 }
 export default sayHello;
