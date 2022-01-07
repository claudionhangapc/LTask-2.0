<template>
  <v-app id="inspire" color="white">
    <LayoutsTheHeader :drawer="drawer" @displayAsideMenu="displayAsideMenu($event)"/>
    <LayoutsTheAside :drawer="drawer" @displayAsideMenu="displayAsideMenu($event)"/>
    
    <v-main style="background:#fff">
      <v-container
        class="py-8 px-6"
        fluid
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  
  export default {
    data: () => ({
      drawer: true,
      cards: ['Today', 'Yesterday'],
    }),
    methods:{
      displayAsideMenu(value){
        this.drawer = value
      }
    }
  }
</script>
