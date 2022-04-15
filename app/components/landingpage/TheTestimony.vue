
<template>
  <section class="section-container">
   <v-container fluid >
      <!--<v-row>
        <v-col>
          <h1>
            Sobre
          </h1>
        </v-col>
      </v-row>  -->
      <v-row align="center" justify="center">
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
        <v-col cols="12" md="6">
            <v-row>
             <v-col cols="12" md="6">
               <div class="mb-6">
                 <LandingpageTheTestimonyCard />
               </div>
               <div>
                   <LandingpageTheTestimonyCard />
               </div>
             </v-col>
             <v-col cols="12" md="6">
                <div class="mb-6">
                 <LandingpageTheTestimonyCard />
               </div>
               <div>
                   <LandingpageTheTestimonyCard />
               </div>
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
      
    }),
    
  }
</script>
<style scoped>
.section-container{
    padding:60px 40px;
    color:#101010
  }

</style>
