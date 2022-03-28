<template>
  <v-row>
       <v-col 
         cols="12"
         class="my-0 d-flex align-center"
         >
         <v-icon >
          mdi-star
        </v-icon>
        <h3 class="ml-2">  
          Importantes             
        </h3>
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
  data(){
    return{
      
    }
  },
  computed:{
      tasks(){
        return this.$store.state.task.tasks
      }
    },
 
}
</script>