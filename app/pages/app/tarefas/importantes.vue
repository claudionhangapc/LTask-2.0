<template>
  <v-row>
       <v-col 
         cols="12"
         class="my-0 d-flex align-center"
         >
         <v-checkbox
              class="mt-0 pt-0"
              hide-details
              :on-icon="'mdi-star'"
              :off-icon="'mdi-star-outline'"
          ></v-checkbox>
         <h3 >  
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