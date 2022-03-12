<template>
  <div v-if="fetched">
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent  
    max-width="700" >
      <v-card>
        <v-card-title class="text-h5 header-background">
          Editar Projeto
        </v-card-title>

        <v-card-text class="pt-2">
           <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            class="mb-2"
            label="Nome do projeto"
            required
            :rules="rules.name"
            v-model="project.name"
          ></v-text-field>

          <v-select
          item-value="id"
          item-text="name"
          :items="colors"
           label="Cor do projeto"
          dense
          :rules="rules.color_id"
          v-model="project.color_id"
         >
          <template v-slot:append>
              <v-icon :color="defaultColor">mdi-chevron-down</v-icon>
          </template>
         
         </v-select>
        </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="closeModal()"
          >
           fechar
          </v-btn>
          <v-btn
            color="#FF8700"
            outlined
            @click="validationForm()"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
       
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
      fetched:false,
      error:false,
      defaultColor:'#000',
      project:{
        name:'',
        color_id:''
      },
      rules:{
        name:[
            v => !!v || 'Nome é obrigatório',
          ],
        color_id:[
            v => !!v || 'Cor é obrigatório',
          ],
      }
    }
  },
  created(){   
    this.fetchSingleProject()
  },
  computed:{
      colors(){
        return this.$store.state.color.colors
      },
      id() {
      return this.$route.params.id;
      },
  },
  methods:{
    closeModal(){
     this.$emit('closeModalProject', false)
    },
    updateColor(value){
      this.defaultColor = value
    },
    async fetchSingleProject(){
      try{
        let projectSingle = this.$store.getters["project/find"](this.id);
        if(!projectSingle){
          projectSingle = await this.$store.dispatch('project/fetchSingle',this.id)

          if(!projectSingle || projectSingle.length == 0 ){
            this.$router.replace('/app/projetos');
          }
        }
        this.project.name = projectSingle.name
        this.project.color_id = projectSingle.color_id
        this.fetched = true

      }catch(err){
        this.closeModal()
      }
    },
    async updateProject(){
      
      try{
        const {name} = this.project
        const {color_id} = this.project

        await this.$store.dispatch('project/update', {
          payload:{
            name,
            color_id,
            tasks:[]
          },
          id:this.id
        })
        this.closeModal()
      }catch(err){
        this.error = true
      }
    },
    validationForm(){
      if(this.$refs.form.validate()){
        this.updateProject()
      }
    }
  },
  
}
</script>

<style scoped>

  .header-background{
    background-color: #DEDEDE;
  }
</style>