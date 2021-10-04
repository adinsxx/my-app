Vue.component('MyTable', {
    props: {
        myTable: {
            required: true,
        },
    },
    data: () => ({
        // snackbar: false,
        // text: 'New item added',
        // timeout: 2000,
        // drawer: false,
        // group: null,
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
    template: `
    <v-data-table :headers="headers" :items="items" sort-by="weight" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My Bag</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Item
              </v-btn> -->
              <v-btn
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >                  
            <v-icon>mdi-plus</v-icon>
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Item Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.weight" label="Weight (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.rarity" label="Rarity of item (%)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.cost" label="Cost of item ($)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.type" label="Type of item"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save" @click="snackbar = true">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </template> `
})

Vue.component('MySnackbar', {
    data: () => ({
        snackbar: false,
        text: 'My timeout is set to 2000.',
        timeout: 2000,
      }),
    template: `    
    <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>`
})