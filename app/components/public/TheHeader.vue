
<template>
  <v-app-bar
        color="#101010"
        dark
        fixed 
        clipped-left
        app
        elevation="0"
      >
        <v-app-bar-nav-icon @click.stop="setMenu" v-if="false"></v-app-bar-nav-icon>

        <v-toolbar-title>L<span style="color:#FF8700">Task</span></v-toolbar-title>
      
        <div  class="ml-5">
        <v-btn text >
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text >
          <span class="mr-2">Sobre</span>
        </v-btn>
        <v-btn text >
          <span class="mr-2">Download</span>
        </v-btn>
        <v-btn text>
          <span class="mr-2">Preços</span>
        </v-btn>
        <v-btn  outlined text >
          <span class="mr-2">Contate-nos</span>
        </v-btn>
      </div>
        
        <v-spacer></v-spacer>

        <!-- notificação -->
        <v-btn icon>
          <v-icon>mdi-bell-outline </v-icon>
        </v-btn>

        <!-- task -->
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
                v-for="(item, index) in itemsTask"
                :key="index"
                 link
                @click="handle_function_call(item.method)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>

        <!-- perfil -->
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
                <span class="dropdown-caret"></span>
              </v-btn>
            </template>
            <v-list light>
              <v-list-item
                v-for="(item, index) in itemsPerfil"
                :key="index"
                link
                @click="handle_function_call(item.method)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
      </v-app-bar>
</template>
<script>
  
  export default {
     props:{
      drawer:{
        type:Boolean
      }
    },
    data: () => ({
      itemsTask: [
        { title: 'Nova Tarefa', method:'gotoAddNewTask' },
        { title: 'Novo Projeto', method:'gotoAddNewProject'},
         { title: 'Nova Categoria', method:'gotoAddNewCategory'},
      ],
      itemsPerfil: [
        { title: 'Meu Perfil',method:'goToPerfil' },
        { title: 'Meus Projetos',method:'gotoProject' },
        { title: 'Minhas Categorias',method:'gotoCategory' },
        { title: 'Sair', method:'logout'},
      ],
      cards: ['Today', 'Yesterday'],
      dialogProject:false,
      dialogTask:false
    }),
    created(){
      this.fetchColors();
    },
    computed:{
      colors(){
        return this.$store.state.color.colors
      },   
    },
    methods:{
      setMenu(){
        this.$emit('displayAsideMenu', !this.drawer)
      },
      openModalProject(){
        this.dialogProject = true
      },
      updatedialogProject(value){
        this.dialogProject = value
      },
      openModalTask(){
        this.dialogTask = true
      },
      updatedialogTask(value){
        this.dialogTask = value
      },
      handle_function_call(function_name) {
        this[function_name]()
      },
      logout(){
      this.$router.replace('/logout');
      },
      goToPerfil(){
        this.$router.replace('/app/perfil');
      },
      gotoProject(){
        this.$router.replace('/app/projetos');
      },
      gotoCategory(){
        this.$router.replace('/app/categorias');
      },
      gotoAddNewProject(){
        this.$router.push('/app/projetos/adicionar');
      },
      gotoAddNewTask(){
        this.$router.push('/app/tarefas/adicionar');
      },
      gotoAddNewCategory(){
        this.$router.push('/app/categorias/adicionar');
      },
      fetchColors(){
        this.$store.dispatch('color/fetch')
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
