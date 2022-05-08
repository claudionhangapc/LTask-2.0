<template>
  <v-sheet
    class="mx-auto"
    elevation="1"
    max-width="400"
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
          @click="mostrar"
        >
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
    mostrar(){
      alert("ola")
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