Vue.use(Vuetify);


const app = new Vue({
    // el: the DOM element to be replaced with a Vue instance
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: true
        },
    }),  
    // data: all the data for the app
    data: () => ({
        drawer: false,
        group: null,
      }),
    // methods: usually "events" triggered by v-on:
    methods: {

    },
    // computed: values that are updated and cached if dependencies change
    computed: {

    },
    //mounted:  called after the instance has been mounted,
    mounted: function() {

    },

});