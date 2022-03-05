<template>
  <v-container>
    <v-row>
      <h1 >Tasks {{this.$auth.user}}</h1>
    </v-row>
    <v-row >
      <v-col 
         cols="4"
         >
         <v-card elevation="1" class="pb-3">
           <div class=" d-flex justify-center  pt-3">
             <v-avatar
                height="150"
                width="150"
             >
                <img
                  
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
           </div>
           <v-card-title class="justify-center">
             Claudio Nhanga
           </v-card-title>
           <v-card-subtitle style="text-align: center" class="pb-1">
             claudionhangapc@gmail.com
           </v-card-subtitle>
           <v-card-text style="text-align: center">
             Registrado em 22/01/1998
           </v-card-text>    
         </v-card>   
      </v-col>
      <v-col
         cols="8"
         >
         ola
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
 
}
</script>
