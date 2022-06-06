<template>
  <v-sheet
    class="mx-auto"
    elevation="1"
    max-width="560"
  >
    <v-slide-group
      v-model="model"
      class="pa-3"
      show-arrows
    >
      <v-slide-item
        v-for="picture in pictures"
        :key="picture.id"
        v-slot="{ active}"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="150"
          width="150"
          @click="setProfilePicture(picture.id) "
        > 
        <template >
       
         <v-hover v-slot="{ hover }">
       <div style="position:relative;">
         <v-avatar
                height="150"
                width="150"
                rounded
              >
                <img
                  :src="`http://localhost:3000${picture.path}`"
                  :alt="`foto do prefil do ${picture.originalname}`"
                >
              </v-avatar>
              <v-btn
                    fab
                    dark
                    small
                    absolute
                    style = "bottom:3px; right:3px" 
                    v-if="hover"           
                  >
                  <v-icon dark>
                    mdi-content-save-outline
                  </v-icon>
                </v-btn>
       </div>
       </v-hover> 
        </template>

        </v-card>      
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>


export default {
  props:{
   
  },
  data(){
    return{
       model: null,
       pictures:[]
    }
  },
  computed:{
    
  },
  created(){
    this.fetchPictures()
  },
  methods:{

    async fetchPictures(){
      try {
        this.pictures = await this.$store.dispatch('user/fetchProfilePictures')  
        console.log (this.pictures)
      } catch (error) {
        
      }
    },
    setProfilePicture(id){
      alert(id)
    }
  }
}
</script>

<style scoped>
  
  .cropper {
    height: 300px;
    max-width: 400px;
    background: #DDD;
  }

  .header-background{
    background-color: #DEDEDE;
  }
</style>