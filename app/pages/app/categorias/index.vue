<template>
  <div>
    <v-card 
     v-for="category in categories" 
     :key="category.id"
     outlined
     class="mb-5 px-3"
     >
            <v-list >
               <template >
                 <v-hover v-slot="{ hover }">
                  <v-list-item
                     :key="category.id"
                     >
                      <v-row >
                        <v-col cols="12" md="6" class="ma-0 px-0">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{category.name}}</v-list-item-title>
                            <div class="d-flex justify-start mt-1">
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
                        <v-col cols="12" md="6" class="ma-0 px-0 d-flex align-content-center flex-wrap flex-row-reverse" color="">
                          <v-btn class="ml-5"
                            :to="`/app/projetos/${category.id}/tarefas`"  
                            elevation="0" 
                            v-if="hover"
                            small
                            link>
                            Tarefas
                          </v-btn>
                          <v-btn 
                          :to="`/app/categorias/editar/${category.id}`"
                          v-if="hover"
                          class="ml-5"  
                          elevation="0" 
                          small
                          link>
                            Editar
                          </v-btn>
                         <!-- <v-icon
                            large
                            small
                            v-if="!hover"
                          >
                            mdi-folder-outline
                          </v-icon> -->
                        </v-col>
                      </v-row>
                  </v-list-item>
                  </v-hover>     
               </template>
            </v-list>
         </v-card>
         <NuxtChild/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed:{
    categories(){
        return this.$store.state.category.categories
      }
  },
 
}
</script>

<style scoped>

</style>