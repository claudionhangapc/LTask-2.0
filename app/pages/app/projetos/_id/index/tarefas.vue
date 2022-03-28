<template>
  <v-container>
    <v-row>
       <v-col 
         cols="12"
         class="my-0 d-flex align-center"
         >
         <v-icon >
           mdi-clipboard-edit-outline
        </v-icon>
        <h3 class="ml-2">  
          Tarefas           
        </h3>
      </v-col>
      <v-col
         cols="12"
         class="py-0"
         >
          <tasks :tasks="tasks"/>
      </v-col>
   </v-row>
   </v-container>

</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted() {
    //this.$router.replace('/app/projetos');
  },

  computed:{
    id(){
      return this.$route.params.id
      },
    tasks(){
        return this.$store.state.task.tasks
      } 
  },
  methods:{
    async fetchTaskByProject(){

    }
  }
 
}
</script>