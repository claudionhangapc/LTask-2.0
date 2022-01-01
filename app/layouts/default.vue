<template>
  <v-app>
  
    <v-app-bar
        color="#101010"
        dark
        fixed 
        app
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>L<span style="color:#FF8700">Task</span></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
          <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab large plain
              v-bind="attrs"
              v-on="on"
              class="pa-0"
            >
              <v-avatar color="#FF8700" size="36" class="mr-1">
                <v-icon dark>
                  mdi-account-circle
                </v-icon>
              </v-avatar>
              <!--<v-icon small>mdi-arrow-down-drop-circle-outline</v-icon> -->
              <span class="dropdown-caret"></span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    <div>
    olsa
  </div>
  </v-app>
  
</template>

<script>
export default {
  data () {
    return {
       items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-style: solid;
    border-width: 4px 4px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
</style>