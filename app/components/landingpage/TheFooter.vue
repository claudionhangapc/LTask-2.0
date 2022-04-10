
<template>
  <section>
   <v-container fluid class="pt-10">
      <v-row align="center" justify="center">
        <v-col cols="12" md="5">
          <h4>
            <v-toolbar-title>L<span style="color:#FF8700">Task</span></v-toolbar-title>
          </h4>
          <p class="py-2 my-0">
            Junta se a dezena de pessoas que tem usado este app para organizar as suas ativadedes
          </p>
          <div>
            
          <v-card flat tile class=" white--text ">
            <v-card-text class="pa-0">
              <v-btn
                v-for="(icon, i) in icons"
                :key="i"
                class="mr-4 "
                :href="icon.link"
                target="_blank"
                icon
              >
                <v-icon size="24px">{{ icon.text }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="7">
            <v-row>
             <v-col cols="12" md="6">
               
             </v-col>
             <v-col cols="12" md="6">
                
             </v-col>
           </v-row>
        </v-col>
      </v-row>
       <v-row style="background-color: #1c87c9;">
        <v-col>
         <h5>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique non laborum numquam quibusdam rerum a ex sequi, nisi est aperiam 
         </h5>
        </v-col>
      </v-row> 
   </v-container>
  </section>
</template>
<script>
  
  export default {
    
    data: () => ({
      icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "",
      },
    ],
    }),
    
  }
</script>
<style scoped>


</style>
