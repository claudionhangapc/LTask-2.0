
<template>
  <section style="background-color: #1c87c9;">
   <v-container fluid class="py-10">
      <!--<v-row>
        <v-col>
          <h1>
            Sobre
          </h1>
        </v-col>
      </v-row>  -->
      <v-row>
        <v-col cols="12" md="6">
           <!--<img src="~/assets/app-init.png" />-->
           <v-img
          src="app-task.png"
          aspect-ratio="2"
          contain
        ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h4>
            Criar as suas tarefas 
          </h4>
          <h2 class="py-3">
            Lorem ipsum dolor sit amet, consectetur 
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, inventore ipsum repellendus dignissimos aliquam, autem exercitationem, placeat rerum minus natus dolores illo nisi neque facere tempora velit ab laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quisquam expedita iure fuga sint rem pariatur soluta repudiandae nulla est ipsam voluptates deserunt perspiciatis unde aliquid error culpa, consequatur similique!
            </p>
          </div>
          <div class="py-2">
            <v-btn  outlined text>
              <span >Inicia agora mesmo</span>
            </v-btn>
          </div>
        </v-col>
        
      </v-row>
   </v-container>
  </section>
</template>
<script>
  
  export default {
    
    data: () => ({
      items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ]
    }),
    
  }
</script>
<style scoped>


</style>
