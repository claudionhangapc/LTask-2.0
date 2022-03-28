<template>
   <v-row>
       <v-col 
         cols="12"
         class="my-0 pb-0"
         >
         <h3 >Meu dia</h3>
        <p class="my-0">domingo, 27 de março</p>
      </v-col>
      <v-col
         v-for="card in cards"
         :key="card"
         cols="12"
         class="py-0"
         >
         <v-card elevation="0">
            <v-list >
               <template v-for="task in tasks">
                  <v-list-item
                     :key="task.id"
                     link
                     >
                      <v-row >
                        <v-col cols="12" md="1" class=" ma-0 px-0">
                          <v-checkbox class="ml-1"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="10" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title>{{task.name}}</v-list-item-title>
                            <div class="d-flex justify-start ">
                              <div class="mr-2" v-show="task.project_name">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-folder-outline
                                  </v-icon> 
                                  <span>{{task.project_name}}</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2" v-show="task.category_name">
                                  <v-list-item-subtitle>
                                  <v-icon
                                    small
                                    
                                  >
                                    mdi-circle-outline
                                  </v-icon> 
                                  <span>{{task.category_name}}</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-calendar
                                  </v-icon> 
                                  <span >seg, 10 de jan</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-bell-outline
                                  </v-icon> 
                                  </v-list-item-subtitle>
                              </div>
                            </div>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="12" md="1" class="ma-0 px-0">
                         <v-checkbox
                            class="ml-13"
                            hide-details
                            :on-icon="'mdi-star'"
                            :off-icon="'mdi-star-outline'"
                            v-model="task.important"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                     
                  </v-list-item>
                  <v-divider  :key="`divider-${task.id}`"></v-divider>       
               </template>
            </v-list>
         </v-card>
      </v-col>
      <v-col 
         cols="12"
         class="py-0 my-0 mt-5"
         >
         <h4 >Atrasada</h4>
      </v-col>
      <v-col
         v-for="card in cards"
         :key="card"
         cols="12"
         class="py-0"
         >
         <v-card elevation="0">
            <v-list >
               <template v-for="task in tasks">
                  <v-list-item
                     :key="task.id"
                     link
                     >
                      <v-row >
                        <v-col cols="12" md="1" class=" ma-0 px-0">
                          <v-checkbox class="ml-1"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="10" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title>{{task.name}}</v-list-item-title>
                            <div class="d-flex justify-start ">
                              <div class="mr-2" v-show="task.project_name">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-folder-outline
                                  </v-icon> 
                                  <span>{{task.project_name}}</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2" v-show="task.category_name">
                                  <v-list-item-subtitle>
                                  <v-icon
                                    small
                                    
                                  >
                                    mdi-circle-outline
                                  </v-icon> 
                                  <span>{{task.category_name}}</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                    color="#8B0000"
                                  >
                                    mdi-calendar
                                  </v-icon> 
                                  <span style="color:#8B0000">seg, 10 de jan</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-bell-outline
                                  </v-icon> 
                                  </v-list-item-subtitle>
                              </div>
                            </div>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="12" md="1" class="ma-0 px-0">
                         <v-checkbox
                            class="ml-13"
                            hide-details
                            :on-icon="'mdi-star'"
                            :off-icon="'mdi-star-outline'"
                            v-model="task.important"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                     
                  </v-list-item>
                  <v-divider  :key="`divider-${task.id}`"></v-divider>       
               </template>
            </v-list>
         </v-card>
      </v-col>
   </v-row>
</template>
<script>
   export default {
     data() {
       return{
       cards: ['Today']
       }
     },
    created(){
      this.fetchTasks()
    },
    computed:{
      tasks(){
        return this.$store.state.task.tasks
      }
    },
    methods:{
      fetchTasks(){
        this.$store.dispatch('task/fetch')
      }  
    }
    
   }
</script>
<style scoped>
   .texto{
   background: green !important;
   color:black !important;
   }
</style>