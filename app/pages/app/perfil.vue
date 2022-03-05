<template>
  <v-container>
    <v-row>
      <h1 >Tasks {{this.$auth.user}}</h1>
    </v-row>
    <v-row >
      <v-col 
         cols="4"
         >
         <v-card  class="pb-3" outlined>
           <div class=" d-flex justify-center  pt-3">
             <v-avatar
                height="150"
                width="150"
             >
                <img
                  
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
           </div>
           <v-card-title class="justify-center">
             Claudio Nhanga
           </v-card-title>
           <v-card-subtitle style="text-align: center" class="pb-1">
             claudionhangapc@gmail.com
           </v-card-subtitle>
           <v-card-text style="text-align: center">
             Registrado em 22/01/1998
           </v-card-text>    
         </v-card>   
      </v-col>
      <v-col
         cols="8"
         >
         <v-card outlined>
            
           <v-list  >
               <template v-for="(items, index) in userItems">
                  <v-list-item
                     :key="index"
                     
                     >
                      <v-row >
                        <v-col cols="12" md="4" class="ma-0 px-3">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{items.key}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="12" md="8" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title>{{items.value}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                      </v-row>
                  </v-list-item>
                  <v-divider  :key="`divider-${index}`" v-if="index < userItems.length - 1" ></v-divider>       
               </template>
            </v-list>
         </v-card>
      </v-col>
   </v-row>
   <v-row >
      <v-col 
         cols="7"
         >
          <v-card outlined>
            <v-card-title>Projetos</v-card-title>
           <v-list>
               <template v-for="(items, index) in projetosResumo">
                  <v-list-item
                     :key="index"
                     >
                      <v-row >
                        <v-col cols="12" md="11" class="ma-0 px-3">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{items.key}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="12" md="1" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title>{{items.value}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                      </v-row>
                  </v-list-item>
                  <v-divider  :key="`divider-${index}`" v-if="index < projetosResumo.length - 1" ></v-divider>       
               </template>
            </v-list>
         </v-card> 
      </v-col>
      <v-col
         cols="5"
         >
         <v-card outlined>
            <v-card-title>Tarefas</v-card-title>
           <v-list >
               <template v-for="(items, index) in tarefasResumo">
                  <v-list-item
                     :key="index"
                     >
                      <v-row >
                        <v-col cols="12" md="11" class="ma-0 px-3">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{items.key}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="12" md="1" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title>{{items.value}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                      </v-row>
                  </v-list-item>
                  <v-divider  :key="`divider-${index}`" v-if="index < tarefasResumo.length - 1" ></v-divider>       
               </template>
            </v-list>
         </v-card>
      </v-col>
   </v-row>
  </v-container>
  
</template>

<script>
export default {
  data(){
    return{
      userItems:[
        {key:'Primeiro nome', value:'claudio' },
        {key:'ultimo nome', value:'claudio' },
        {key:'username', value:'claudionhangapc' },
        {key:'email', value:'claudionhangapc@gmail.com' },
      ],
      projetosResumo:[
        {key:'Total', value:3 },
        {key:'Concluido', value:1 },
        {key:'Não concluido', value:2 }
      ],
      tarefasResumo:[
        {key:'Total', value:6 },
        {key:'Concluidas', value:5 },
        {key:'Não concluido', value:1 }
      ]
    }
  },
  computed:{
      tasks(){
        return this.$store.state.task.tasks
      }
  },
 
}
</script>
