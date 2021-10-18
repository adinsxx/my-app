Vue.use(Vuetify);

Vue.component('app-nav-component', {
    data: function () {
        return {
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Photos', icon: 'mdi-image' },
                { title: 'About', icon: 'mdi-help-box' },
            ],
            right: null,
        };
    },
    template:
        `    <v-app>
    <!--Toobar-->
    <v-app-bar color="gray" dark dense 
      src="https://mocah.org/thumbs/304204-Fantasy-Digital-Art-Landscape-Scenery-4K.jpg">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Bag of Holding</v-toolbar-title>
      <v-img gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>


    </v-app-bar>

  </v-app>`
});

Vue.component('app-card', {
    data: function () {
        return
    },
    template:
        
`        <v-card>
            <v-img></v-img>
            <v-card-title></v-card-title>
            <v-card-text></v-card-text>
        </v-card>`,

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    }
});

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

    }),
    // methods: usually "events" triggered by v-on:
    methods: {

    },
    // computed: values that are updated and cached if dependencies change
    computed: {

    },
    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

});