var Backpack = Vue.component('Backpack', {
  data() {
    return {
      backpack: [
        new BackpackItem(new Weapon('+1 Mace', 10)),
        new BackpackItem(new Armor('+1 Helmet', 20)),
      ]
    }
  },
  template: `
  <div>
    <div class="card-columns">
      <backpack-item v-for="item in backpack" :item="item"></backpack-item>
  `
});

const BackpackItemComponent = Vue.component('BackpackItem', {
  props: {
    item: BackpackItem
  },

  computed: {
    typeOfItem() {
      return this.item.items.constructor.name;
    }
  },
  template: `  
  <div class="card" style="border-width: 3px;">          
  <div class="card-body">
  <component :is="typeOfItem" :item="item.items"></component>
</div>
<div class="card-footer">
</div>
</div>`
});

const WeaponComponent = Vue.component('Weapon', {
  props: {
    item: Weapon
  },
  template: ``,
});

const ArmorComponent = Vue.component('Armor', {
  props: {
    item: Armor
  },
  template: ``
});

// const Nav = Vue.component('app-nav-component', {
//   data: function () {
//       return {
//           items: [
//               { title: 'Dashboard', icon: 'mdi-view-dashboard' },
//               { title: 'Photos', icon: 'mdi-image' },
//               { title: 'About', icon: 'mdi-help-box' },
//           ],
//           right: null,
//       };
//   },
//   template:
//       `    <v-app>
//   <!--Toobar-->
//   <v-toolbar color="gray" prominent
//     src="https://mocah.org/thumbs/304204-Fantasy-Digital-Art-Landscape-Scenery-4K.jpg">

//     <v-toolbar-title>Bag of Holding</v-toolbar-title>
//     <div>
//     <v-img gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
//     </div>

//   </v-toolbar>

// </v-app>`
// });