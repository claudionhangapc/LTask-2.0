<template>
   <v-row>
      <v-col 
         cols="12"
         >
         <h1 >Tasks</h1>
      </v-col>
      <v-col
         v-for="card in cards"
         :key="card"
         cols="12"
         >
         <v-card elevation="0">
            <v-list >
               <template v-for="n in 12">
                  <v-list-item
                     :key="n"
                     link
                     >
                      <v-row >
                        <v-col cols="12" md="1" class=" ma-0 px-0">
                          <v-checkbox
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="10" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title>Message {{ n }}</v-list-item-title>
                            <div class="d-flex justify-start ">
                              <div class="mr-2">
                                 <v-list-item-subtitle>
                                  <v-icon
                                    small
                                  >
                                    mdi-folder-outline
                                  </v-icon> 
                                  <span>nome de projeto</span>
                                  </v-list-item-subtitle>
                              </div>
                              <div class="mr-2">
                                  <v-list-item-subtitle>
                                  <v-icon
                                    small
                                    
                                  >
                                    mdi-circle-outline
                                  </v-icon> 
                                  <span>nome da categoria</span>
                                  </v-list-item-subtitle>
                              </div>
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
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                     
                  </v-list-item>
                  <v-divider  :key="`divider-${n}`"></v-divider>       
               </template>
            </v-list>
         </v-card>
      </v-col>
   </v-row>
</template>
<script>
   export default {
     data: () => ({
   
       cards: ['Today'],
     }),
    
   }
</script>
<style scoped>
   .texto{
   background: green !important;
   color:black !important;
   }
</style>