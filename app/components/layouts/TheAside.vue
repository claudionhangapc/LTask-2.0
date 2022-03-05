
<template>
  <v-navigation-drawer
      :value="drawer"
      app
      clipped
      color="#DEDEDE"
     @input="setMenu($event)"
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
          v-for="item in menuProjects"
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
</template>
<script>
  
  export default {
    props:{
      drawer:{
        type:Boolean
      }
    },
    data: () => ({
      links: [
        ['mdi-home-outline', 'Home'],
        ['mdi-star-outline', 'Importantes'],
        ['mdi-clipboard-edit-outline', 'Tarefas']
      ],
      menuProjects: [
        {
          action: 'mdi-folder-outline',
          title: 'Projetos',
          items: [
            { title: 'List Item' },
            { title: 'Testando' },
             { title: 'Será que agora vai' }
            ],
        },
          
      ],
    }),
    created(){
      this.fetchProjects();
    },
    computed:{
      projects(){
        return this.$store.state.project.projects
      },   
    },
     watch:{
      projects: function(val){
        this.menuProjects[0].items=[]
        val.forEach(element => {
          this.menuProjects[0].items.push({ title:element.name })
        });
       
      }
    },
    methods:{
      setMenu(value){
        this.$emit('displayAsideMenu',value)
      },
      fetchProjects(){
          this.$store.dispatch('project/fetch')
      }
    }
    
  }
</script>

