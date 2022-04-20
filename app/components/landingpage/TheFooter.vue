
<template>
  <section>
   <v-container fluid class="section-container">
      <v-row >
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
        <v-col cols="12" md="2">
        </v-col>
        <v-col cols="12" md="5">
            <v-row >
             <v-col cols="12" md="4">
               <h4 class="mb-3">
                 Feature
               </h4>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>

             </v-col>
             <v-col cols="12" md="4">
               <h4 class="mb-3">
                 Resources
               </h4>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               
             </v-col>
             <v-col cols="12" md="4">
                <h4 class="mb-3">
                 Company
               </h4>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
               <p class="mb-2">
                 teste 1
               </p>
             </v-col>
           </v-row>
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
  .section-container{
    padding:60px 40px;
    color:#101010
  }
  
  @media (max-width:600px) {
  .section-container{
    padding:60px 20px;
  }
}

</style>
