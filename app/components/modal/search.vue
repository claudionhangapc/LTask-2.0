<template>
  <div>
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent
    max-width="800"
    >
      <v-card height="80vh">
        <v-card-text class="pt-2">
           <v-form
          ref="form"
          lazy-validation
        >
         <v-container >
          <v-row>
            <v-col cols="10">
              <v-text-field
              dense
              prepend-inner-icon="mdi-magnify"
              label = "Procurar"
              >
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn
              elevation="0"
              class="text-none"
              >
                Sair
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-0">
              <v-btn
              outlined
              class="text-none mr-2"
              >
                Todos
              </v-btn>
              <v-btn
              outlined
              class="text-none mr-2"
              >
                Tarefas
              </v-btn>
              <v-btn
              outlined
              class="text-none mr-2"
              >
                Projetos
              </v-btn>
              <v-btn
              outlined
              class="text-none"
              >
                Categorias
              </v-btn>
            </v-col>
          </v-row>
         </v-container>
        </v-form>
        </v-card-text>

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
  computed:{
      colors(){
        return this.$store.state.color.colors
      },   
  },
  methods:{
    closeModal(){
     this.$emit('closeModalProject', false)
      this.$router.push('/app/projetos');
    },
    updateColor(value){
      this.defaultColor = value
    },
    async createProject(){
      
      try{
        const {name} = this.project
        const {color_id} = this.project

        await this.$store.dispatch('project/create', {
          name,
          color_id,
          tasks:[]
        })
        this.closeModal()
      }catch(err){
        this.error = true
        //console.log(err)
      }
    },
    validationForm(){
      if(this.$refs.form.validate()){
        this.createProject()
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