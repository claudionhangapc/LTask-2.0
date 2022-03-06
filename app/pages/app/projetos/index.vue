<template>
  <div>
    <v-card 
     v-for="task in tasks" 
     :key="task.id"
     outlined
     class="mb-5 px-3"

     >
            <v-list >
               <template >
                  <v-list-item
                     :key="task.id"
                     >
                      <v-row >
                        <v-col cols="12" md="11" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{task.name}}</v-list-item-title>
                            <div class="d-flex justify-start mt-1">
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-calendar
                                  </v-icon> 
                                  <span>seg, 10 de jan</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-clipboard-edit-outline
                                  </v-icon> 
                                  <span>3</span>
                                  </v-list-item-subtitle>
                              </div>
                              
                            </div>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="12" md="1" class="ma-0 px-0">
                         <v-checkbox
                          disabled
                            class="ml-13"
                            hide-details
                            :on-icon="'mdi-star'"
                            :off-icon="'mdi-folder-outline'"
                          >
                          </v-checkbox>
                        </v-col>
                      </v-row>
                     
                  </v-list-item>      
               </template>
            </v-list>
         </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed:{
    tasks(){
      return this.$store.state.task.tasks
    }
  },
 
}
</script>