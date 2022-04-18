<template>

<v-app>
  <!-- Must have the app property -->
  <!--<v-app-bar app> teste</v-app-bar>-->
  <!--<PublicNavigation /> -->
  <LandingpageTheHeader />
  <v-main>
    <Nuxt />   
  </v-main>
   <v-container fluid>
     <v-row style="background-color:#101010">
        <v-col>
         <h5 style="color:#fff; text-align:center">
           © Copyright 2022. Todos os direitos reservados.
         </h5>
        </v-col>
      </v-row> 
   </v-container>
</v-app>

</template>
