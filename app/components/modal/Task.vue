<template>
  <div>
   <v-dialog :value="dialog"
    overlay-opacity="0.8"
    persistent  
    max-width="700" >
      <v-card>
        <v-card-title class="text-h5 header-background">
          Adicionar Nova Tarefa
        </v-card-title>

        <v-card-text class="pt-2">
           <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            class="mb-2"
            label="Nome da tarefa"
            required
          ></v-text-field>
           <v-menu
              content-class="elevation-0"
              v-model="menuDate"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                  <v-text-field 
                    append-icon="mdi-calendar"
                    class="mb-2" 
                    label="Data de inicio da atividade"
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date = null"
                    :value="dateToStartBrasil"
                    slot="activator">
                </v-text-field>
              </template>
              <v-date-picker
                :min="minDate"
                overlay-opacity="0.3"
                v-model="dateToStart"
                @change="menuDate = false"
                locale="pt-BR"
              ></v-date-picker>
            </v-menu>

          <v-combobox
            class="mb-2"
            item-value="value"
            item-text="name"
            :items="items"
            label="Categoria"
            dense
          ></v-combobox>

          <v-combobox
            item-value="value"
            item-text="name"
            :items="items"
            label="Projeto"
            dense
          ></v-combobox>
       
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
      menuDate:false,
      dateToStart:null,
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
  computed:{
      dateToStartBrasil(){
        return this.formatDate(this.dateToStart)
      },
      minDate(){
      return   new Date().toISOString().slice(0,10)
      },
    },
  methods:{
    closeModal(){
     this.$emit('closeModalTask', false)
    },
    formatDate(date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
    },
  }
}
</script>

<style scoped>

  .header-background{
    background-color: #DEDEDE;
  }
</style>