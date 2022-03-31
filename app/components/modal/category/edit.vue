<template>
  <div>
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent  
    max-width="700" >
      <v-card>
        <v-card-title class="text-h5 header-background">
          Adicionar Categoria
        </v-card-title>

        <v-card-text class="pt-2">
           <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            class="mb-2"
            label="Nome da categoria"
            required
            :rules="rules.name"
            v-model="category.name"
          ></v-text-field>
        </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="closeModal"
          >
           fechar
          </v-btn>
          <v-btn
            color="#FF8700"
            outlined
            @click="validationForm"
          >
            Adicionar
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
      error:false,
      defaultColor:'#000',
      category:{
        name:'',
      },
      rules:{
        name:[
            v => !!v || 'Nome é obrigatório',
          ],
      }
    }
  },
  methods:{
    closeModal(){
     this.$emit('closeModalCategory', false)
     this.$router.push('/app/categorias');
    },
    updateColor(value){
      this.defaultColor = value
    },
    async createCategory(){
      
      try{
        const {name} = this.category
        await this.$store.dispatch('category/create', {
          name,
        })
        this.closeModal()
      }catch(err){
        this.error = true
        //console.log(err)
      }
    },
    validationForm(){
      if(this.$refs.form.validate()){
        this.createCategory()
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