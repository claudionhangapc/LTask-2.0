
<template>
  <section id="home">
    <!--  https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg-->
    <v-parallax  src="hand-draw.jpg"  class="section-container"  height="600">
      <v-row align="center" justify="center">
        <v-col cols="12" md="7">
          <h1 class="display-2 " style="color:#333">
            Facilite o gerenciamento das suas atividades
          </h1>
          <div class="py-8">
            <p style="color:#333">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic molestias neque consequatur corrupti non pariatur repellendus sunt omnis nobis doloremque itaque facilis reiciendis, voluptatem nesciunt! Consequatur sequi ratione nemo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque harum vel velit debitis facilis architecto dolores porro nulla quia. Dolorum rerum dolores autem beatae sed magni fugit sint. Quasi.
          </p>
          </div>
          <div>
            <v-btn  
            color="#101010"
             class="white--text"
            >
              <span>Criar uma conta</span>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="5" class="hidden-sm-and-down">
         
        </v-col>
      </v-row>
    </v-parallax>
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
    padding:60px 30px !important;
    color:#101010
  }

  
 @media (max-width:600px) {
  .section-container{
    padding:60px 20px;
  }

  .section-container h1{
    font-size: 2rem !important;
    font-weight: 400;
    line-height: 2.525rem;
  }
}

  


</style>
