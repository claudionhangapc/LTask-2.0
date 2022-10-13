<template>
  <v-container>
    <v-row >
      <v-col 
         cols="12"
         md = "4"
         >
         <v-card  class="pb-3" outlined>
           <div 
            class=" d-flex justify-center  pt-3" 
           >
           <div style="position:relative;">
              <v-avatar
                  height="150"
                  width="150"
              >
                  <img
                    
                    :src="user.url_profile_picture"
                    :alt="`foto do prefil do ${user.name}`"
                  >
                </v-avatar>
                <v-btn
                    fab
                    dark
                    small
                    absolute
                    style = "bottom:10px; right:0px" 
                    @click="openModal"                
                  >
                  <v-icon dark>
                    mdi-camera-outline
                  </v-icon>
                </v-btn>
              </div>
           </div>
           <v-card-title class="justify-center">
             {{user.name}}
           </v-card-title>
           <v-card-subtitle style="text-align: center" class="pb-1">
              {{user.email}}
           </v-card-subtitle>    
         </v-card>   
      </v-col>
      <v-col
         cols="12"
         md = "8"
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
         cols="12"
         sm = "7"
         >
          <v-card outlined>
            <v-card-title>Projetos</v-card-title>
           <v-list>
               <template v-for="(items, index) in projetosResumo">
                  <v-list-item
                     :key="index"
                     >
                      <v-row >
                        <v-col cols="11" md="11" class="ma-0 px-3">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{items.key}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="1" md="1" class="ma-0 px-0">
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
         cols="12"
         sm = "5"
         >
         <v-card outlined>
            <v-card-title>Tarefas</v-card-title>
           <v-list >
               <template v-for="(items, index) in tarefasResumo">
                  <v-list-item
                     :key="index"
                     >
                      <v-row >
                        <v-col cols="11" md="11" class="ma-0 px-3">
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{items.key}}</v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="1" md="1" class="ma-0 px-0">
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
   <ModalProfileEditPicture :dialog="dialogEditProfilePicture" @closeModal="updatedialog($event)"/>
  </v-container>
  
</template>

<script>
import _, { map } from 'underscore';
export default {
  data(){
    return{
      dialogEditProfilePicture:false,
      userItems:[
        {key:'Primeiro nome', value:'claudio' },
        {key:'Ultimo nome', value:'claudio' },
        {key:'Username', value:'claudionhangapc' },
        {key:'Email', value:'claudionhangapc@gmail.com' },
      ],
      projetosResumo:[
        {key:'Total', value:3 },
        {key:'Concluido', value:1 },
        {key:'Não concluido', value:2 }
      ],
      tarefasResumo:[
        {key:'Total', value:6 },
        {key:'A fazer', value:5 },
        {key:'Em progresso', value:1 },
        {key:'Feito', value:0 }
      ]
    }
  },
  created(){
    if(_.isEmpty(this.user)){
      this.getUser()
    }
  },
  computed:{
      tasks(){
        return this.$store.state.task.tasks
      },
      user(){
        return this.$store.state.user.user
      }
  },
  methods:{
      openModal(){
        this.dialogEditProfilePicture = true
      },
      updatedialog(value){
        this.dialogEditProfilePicture = value
      },
      async getUser(){
        await this.$store.dispatch('user/getUser')
      }
    }
 
}
</script>
