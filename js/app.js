Vue.use(Vuetify);

var vm = new Vue({
    //mounts vue instance to existing DOM element
    //Stands for element
    //Mounting to the whole app
    el: "#app",
    vuetify: new Vuetify({
        theme: {
            dark: true
        },
    }),  
  
});