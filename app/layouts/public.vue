<template>

<v-app>
  <!-- Must have the app property -->
  <!--<v-app-bar app> teste</v-app-bar>-->
  <!--<PublicNavigation /> -->
  <PublicTheHeader :drawer="drawer" @displayAsideMenu="displayAsideMenu($event)"/>
  <v-main>
    <Nuxt />   
  </v-main>
</v-app>

</template>
