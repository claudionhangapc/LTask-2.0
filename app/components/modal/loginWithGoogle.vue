<template>
  <div>
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent
    max-width="390"
    @click:outside="closeModal()"
    >
       <v-dialog :value="dialog"
        overlay-opacity="0.8"
        persistent
         max-width="290"
        @click:outside="closeModal()"
        >
       <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-container style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="text-subtitle-1 text-center"
          cols="12"
        >
          Entrando com a conta do Google
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
      </v-dialog>
       
   </v-dialog>

  </div>
</template>

<script>
export default {
  props:{
    dialog:{
      type:Boolean,
      required:true
    }
  },
  data(){
    return{
    }
  },
  methods:{
    closeModal(){
     this.$emit('closeModalSearch', false)
    },
    
  },

  
}
</script>

<style scoped>

  .header-background{
    background-color: #DEDEDE;
  }
</style>