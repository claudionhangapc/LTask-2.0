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
        v-for="n in 10"
        :key="n"
        v-slot="{ active}"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="150"
          width="150"
          @click="mostrar"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
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
    }
  },
  computed:{
    
  },
  methods:{

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