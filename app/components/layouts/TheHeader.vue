
<template>
  <v-app-bar
        color="#101010"
        dark
        fixed 
        clipped-left
        app
        elevation="0"
      >
        <v-app-bar-nav-icon @click.stop="setMenu"></v-app-bar-nav-icon>

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
        <ModalProject :dialog="dialogProject" @closeModalProject="updatedialogProject($event)"/>
        <ModalTask :dialog="dialogTask" @closeModalTask="updatedialogTask($event)"/>
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
        { title: 'Nova Tarefa', method:'openModalTask' },
        { title: 'Novo Projeto', method:'openModalProject'},
      ],
      itemsPerfil: [
        { title: 'Meu Perfil',method:'openModalProject' },
        { title: 'Meus Projetos',method:'openModalProject' },
        { title: 'Sair', method:'logout'},
      ],
      cards: ['Today', 'Yesterday'],
      dialogProject:false,
      dialogTask:false
    }),
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
