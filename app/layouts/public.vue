<template>

<v-app>
  <!-- Must have the app property -->
  <!--<v-app-bar app> teste</v-app-bar>-->
  <!--<PublicNavigation /> -->
  <PublicTheHeader :drawer="drawer" @displayAsideMenu="displayAsideMenu($event)"/>
  <v-main>
     <v-container
      >
        <Nuxt />
      </v-container>
  </v-main>
</v-app>

</template>
