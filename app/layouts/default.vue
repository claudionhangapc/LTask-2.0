<template>
  <v-app id="inspire">
    <v-app-bar
        color="#101010"
        dark
        fixed 
        clipped-left
        app
        elevation="0"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>L<span style="color:#FF8700">Task</span></v-toolbar-title>
        <v-spacer></v-spacer>

          <v-text-field
            :autofocus="false"
            full-width
            dense
            hide-details
            append-icon="mdi-magnify"
            filled
            outlined
            dark
          ></v-text-field>
        
  
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-bell-outline </v-icon>
        </v-btn>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
              v-bind="attrs"
              v-on="on"
              icon>
                <v-icon>mdi-plus</v-icon>
                <span class="dropdown-caret"></span>
            </v-btn>
            </template>
            <v-list light>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
  
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
            <v-list light>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
      </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="#DEDEDE"
    >

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
          light
        >
          <v-list-item-icon>
            <v-icon color="#222222">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title style="color:#222222">{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
        v-for="item in items2"
        :key="item.title"
        no-action
        color="#222222"
      >
         <v-icon slot="prependIcon" color="#222222">{{item.action}}</v-icon>
         <v-icon slot="appendIcon" color="#222222">mdi-chevron-down</v-icon>
        <template v-slot:activator style="color:#222222">
          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="color:#222222"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          link
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title" style="color:#222222"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background:#fff">
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <!--<v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item

                    :key="n"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-home-outline', 'Home'],
        ['mdi-star-outline', 'Importantes'],
        ['mdi-clipboard-edit-outline', 'Task']
      ],
      items2: [
        {
          action: 'mdi-folder-outline',
          items: [
            { title: 'List Item' },
            { title: 'Testando' },
             { title: 'Será que agora vai' }
            ],
          title: 'Attractions',
        },
          
      ],
    }),
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