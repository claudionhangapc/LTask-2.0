
<template>
  <section>
   <v-container fluid class="section-container">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>Qual é o melhor forma de usar este projeto em um evento ?</v-expansion-panel-header>
            <v-expansion-panel-content >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
