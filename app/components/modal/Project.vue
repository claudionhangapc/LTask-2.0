<template>
  <div>
   <v-dialog :value="dialog"
    persistent  
    max-width="700" >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Adicionar Novo Projeto
        </v-card-title>

        <v-card-text class="pt-2">
           <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            label="Nome do projeto"
            required
          ></v-text-field>

          <v-select
          item-value="value"
          item-text="name"
          :items="items"
           label="Cor do projeto"
          dense
          @change="updateColor($event)"
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
            @click="dialog = false"
          >
           fechar
          </v-btn>
          <v-btn
          color="pink"
            text
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
      defaultColor:'#000',
      items:[
        {
        name:'Verde escuro',
        value:'#006400'
        },
        {
        name:'Vermelho escuro',
        value:'#8B0000'
        },
        {
        name:'Dourado',
        value:'#FFD700'
        },
        {
        name:'HotPink3',
        value:'#8B3A62'
        },
        {
        name:'Ivory4',
        value:'#8B8B83'
        }
      ]
    }
  },
  methods:{
    closeModal(value){
     this.$emit('change', false)
    },
    updateColor(value){
      this.defaultColor = value
    }
  }
}
</script>