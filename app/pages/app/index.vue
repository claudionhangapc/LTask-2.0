<template>
   <v-row>
       <v-col 
         cols="12"
         class="my-0 pb-0"
         >
         <h3 >Meu dia</h3>
        <p class="my-0">domingo, 27 de março</p>
      </v-col>
      <v-col
         cols="12"
         class="py-0"
         >
         <tasks :tasks="tasks"/>
      </v-col>
      <v-col 
         cols="12"
         class="py-0 my-0 mt-5"
         >
         <h4 >Atrasada</h4>
      </v-col>
      <v-col
         cols="12"
         class="py-0"
         >
         <tasks :tasks="tasks"/>
      </v-col>
   </v-row>
</template>
<script>
   export default {
     data() {
       return{
       }
     },
    created(){
      this.fetchTasks()
    },
    computed:{
      tasks(){
        return this.$store.state.task.tasks
      }
    },
    methods:{
      fetchTasks(){
        this.$store.dispatch('task/fetch')
      }  
    }
    
   }
</script>
<style scoped>
   .texto{
   background: green !important;
   color:black !important;
   }
</style>