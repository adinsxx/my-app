Vue.component('app-nav-component', {
    data: function(){
        return {

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

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>TBD</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>TBD</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>








  </v-app>`
})