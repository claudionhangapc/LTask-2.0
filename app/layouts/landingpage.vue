<template>

<v-app>
  <!-- Must have the app property -->
  <!--<v-app-bar app> teste</v-app-bar>-->
  <!--<PublicNavigation /> -->
  <LandingpageTheHeader :drawer="drawer" @displayAsideMenu="displayAsideMenu($event)"/>
  <v-main>
    <Nuxt />   
  </v-main>
</v-app>

</template>
