<template>
  <div>
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent  
    max-width="500" 
    >
      <v-card>
        <v-card-title class="text-h5 header-background">
          Editar foto do Perfil
        </v-card-title>

          <div class="pa-6 d-flex justify-center ">
            <cropper
              :src="img"
             class="cropper"
             @change="changeFromCropper"
            />
          </div>
          <div class="pa-4 d-flex justify-center ">
            <v-btn
            text 
            outlined
            @click="onPickFile"
            >
              <v-icon left>
               mdi-camera-plus-outline
              </v-icon>
              Adicionar foto do perfil
            </v-btn>
            <input 
              type="file" 
              style="display:none" 
              ref="fileInput" 
              accept="image/*"
              @change="onFileSelected"
              >
          </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="closeModal"
          >
           Cancelar
          </v-btn>
          <v-btn
            color="#FF8700"
            outlined
            @click="validationForm()"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
       
   </v-dialog>

  </div>
</template>

<script>
import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
  props:{
    dialog:{
      type:Boolean,
      required:true
    }
  },
  data(){
    return{
      img: null,
      coordinates:null,
    }
  },
  computed:{

  },
  methods:{
    closeModal(){
     this.$emit('closeModal', false)
    },
    changeFromCropper({ coordinates, canvas }) {
			console.log(coordinates, canvas);
      this.coordinates = coordinates
		},
    onPickFile(){
      this.$refs.fileInput.click()
    },
    onFileSelected(event){
      try{
        const selectedFile = event.target.files[0]
        this.img = URL.createObjectURL(selectedFile)
      } catch {
        this.img = null
      }
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