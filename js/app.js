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
    data: {
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
          ],
    }
});