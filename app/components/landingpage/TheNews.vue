
<template>
  <section class="section-container" id="news">
   <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
           <!--<img src="~/assets/app-init.png" />-->
           <v-img
          src="app-task.png"
          aspect-ratio="2"
          contain
        ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="py-3">
           O LTask ajuda os times a agilizarem o trabalho
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi, inventore ipsum repellendus dignissimos aliquam, autem exercitationem, placeat rerum minus natus dolores illo nisi neque facere tempora velit ab laudantium. Lorem ipsum.
            </p>
          </div>
          <div class="py-2">
            <v-row>
              <v-col cols="12"  sm="8" md="8">
               <v-text-field
                  label="Digita o teu email "
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12"  sm="4" md="4">
                <v-btn  
                color ="#101010" 
                class="white--text"
                @click="voltar()"
                >
                  <span >Enviar</span>
                </v-btn>
              </v-col>
            </v-row>
            
          </div>
        </v-col>
        
      </v-row>
   </v-container>
  </section>
</template>
<script>
  
  export default {
    
    data: () => ({
   
    }),
    methods:{
      voltar(){
        //alert("olaaaaaa") 
         this.$vuetify.goTo("#about")
      }
    }
  }
</script>
<style scoped>
.section-container{
    background-color: #FEFAEF;
    padding:60px 40px;
    color:#101010
  }


</style>
