<template>
  <div>
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent  
    max-width="700" 
    >
      <v-card>
        <v-card-title class="text-h5 header-background">
          Editar foto do Perfil
        </v-card-title>
        
         
          <div class="pa-6">
            <cropper
              :src="img"
             class="upload-example-cropper"
            />
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
import { Cropper } from 'vue-advanced-cropper';
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
      img: 'https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg',
      menuDate:false,
      task:{
        name:'',
        date_to_start:null,
        important:null,
        remember_me:null,
        category_id:null,
        project_id:null
      },
      rules:{
        name:[
            v => !!v || 'Nome é obrigatório',
          ],
        category:[
            v => !!v || 'Cor é obrigatório',
          ],
        projeto:[
          v => !!v || 'Cor é obrigatório',
        ]
      },
      
    }
  },
  computed:{
      dateToStartBrasil(){
        return this.formatDate(this.task.date_to_start)
      },
      minDate(){
      return   new Date().toISOString().slice(0,10)
      },
      projects(){
        return this.$store.state.project.projects
      },
      categories(){
        return this.$store.state.category.categories
      }
  },
  methods:{
    closeModal(){
     this.$emit('closeModal', false)
    },
    formatDate(date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
    },

    validationForm(){
      if(this.$refs.form.validate()){
        this.createTask()
      }
    },
    async createTask(){
      try{

        const {
          name,
          category_id,
        } = this.task

        const date_to_start = this.task.date_to_start
        const  remember_me  = this.task.remember_me ? 1 : 0 
        const  important  = this.task.important ? 1 : 0 

        await this.$store.dispatch('task/create', {
          name,
          important,
          remember_me,
          category_id,
          date_to_start,
          status_id:1     
        })

        this.closeModal()
      }catch(err){
        this.error = true
        //console.log(err)
      }
    },
    setTaskCategoryID(event){
      this.task.category_id = event.id
    },
    setTaskProjectID(event){
      this.task.project_id = event.id
    },  

  }
}
</script>

<style scoped>
 
 .upload-example-cropper {
    border: solid 1px #eee;
    height: 300px;
    width: 100%;
  }

  .header-background{
    background-color: #DEDEDE;
  }
</style>