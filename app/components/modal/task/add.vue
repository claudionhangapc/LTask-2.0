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
            hide-details
            label="Nome da tarefa"
            required
            class="mb-2"
            :rules="rules.name"
            v-model="task.name" 
          ></v-text-field>
           <v-menu
              class="my-0 py-0"
              content-class="elevation-0"
              v-model="menuDate"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }" class="my-0 py-0">
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
            item-id="id"
            item-text="name"
            :items="categories"
            label="Categoria"
            dense
            v-model="task.category_id" 
          ></v-combobox>
          <v-combobox
            v-model="task.project_id"
            item-text="name"
            item-value="value"
            :items="projectsItems"
            label="Projeto"
            dense
          ></v-combobox>
          
          <v-row>
            <v-col cols="12" md="3" class="ma-0 py-0" >
              <v-checkbox
                label="Importante"
                :on-icon="'mdi-star'"
                :off-icon="'mdi-star-outline'"
                v-model="task.important"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" md="4" class="ma-0 py-0">
              <v-checkbox
                label="Receber notificação"
                :on-icon="'mdi-bell'"
                :off-icon="'mdi-bell-outline'"
                v-model="task.remember_me"
              ></v-checkbox>
            </v-col>
          </v-row>
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
            @click="validationForm()"
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
      projectsItems:[],
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
  created(){
    this.setProjectsItems()
  },
  computed:{
      dateToStartBrasil(){
        return this.formatDate(this.dateToStart)
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
     this.$emit('closeModalTask', false)
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

    setProjectsItems(){
      this.projectsItems = this.projects.map(item=>{
        const name = item.name
        const value = item.id
       return {name,value}
     })
    },
    createTask(){
      alert("ola teste")
    }
  }
}
</script>

<style scoped>

  .header-background{
    background-color: #DEDEDE;
  }
</style>