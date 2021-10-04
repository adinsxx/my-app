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

    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Items',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Weight', value: 'weight' },
        { text: 'Rarity', value: 'rarity' },
        { text: 'Cost', value: 'cost' },
        { text: 'Type', value: 'type' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        weight: 0,
        rarity: 0,
        cost: 0,
        type: '',
      },
      defaultItem: {
        name: '',
        weight: 0,
        rarity: 0,
        cost: 0,
        type: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.items = [
          {
            name: 'Blade of Woe',
            weight: 1,
            rarity: 80,
            cost: 880,
            type: 'Weapon',
          },
          {
            name: 'Dwarven War Axe',
            weight: 14,
            rarity: 65,
            cost: 165,
            type: 'Weapon',
          },
          {
            name: 'Boar Meat',
            weight: 1,
            rarity: 1.0,
            cost: 2,
            type: 'Food',
          },
          {
            name: '+1 Sword',
            weight: 25,
            rarity: 0,
            cost: 5,
            type: 'Weapon',
          },
          {
            name: 'Cheese Wheel',
            weight: 2,
            rarity: 1,
            cost: 10,
            type: 'Food',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.items.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      },
    },
  
});