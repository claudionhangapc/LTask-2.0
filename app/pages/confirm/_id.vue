<template>
  <div>
    <v-form
    ref="form"
     v-model="valid"
    lazy-validation
    class="section-container"
    >
      <div v-if="!processed">
        <v-container class="class-container-progress " >
           <v-row align="center"
              justify="center">
               <v-col  align="center"
              justify="center">
                 <v-progress-circular
                  indeterminate
                  color="red"
                ></v-progress-circular>
               </v-col>
            </v-row> 
        </v-container>
      </div>
      <div v-else>
        <v-container class="class-container-sucess elevation-1" v-if="!error">
          <div>
            <v-alert
              prominent
              type="success"
            > Conta foi ativada com sucesso!</v-alert>
          </div>
          <div>
            <p >
              Parabens! A sua conta foi ativada com sucesso. Por favor faça login para começar a gerenciar suas atividades
            </p>
            <v-row style="margin:10px 0px">
              <v-col cols="12" style="padding-left:0px; padding-right:0px; margin-top:10px;">
                <v-btn
                color="#101010"
                class="white--text"
                block
                to="/login">
                  Fazer login
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-container>
        <v-container class="class-container-worning elevation-1 " v-else>
          <div>
            <v-alert
              prominent
              type="warning"
            > {{page.header}}</v-alert>
          </div>
          <div>
            <p >
             {{page.body}}
            </p>
            <v-row style="margin:10px 0px">
              <v-col cols="12" style="padding-left:0px; padding-right:0px; margin-top:10px;">
                <v-btn
                color="#101010"
                class="white--text"
                block
                :to="page.route">
                  {{page.btnText}}
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'landingpage',
  auth: false,
  data(){
    return{
      valid: true,
      error:false,
      processed:false,
      page:{
        header:'',
        body:'',
        route:'',
        btnText:''
      }
     
    } 
  },
  computed:{
     id(){
      return this.$route.params.id
      }
  },
  created(){
    this.activateUser();
  },
  methods:{
    async activateUser(){
      try{
        const response = await this.$store.dispatch('user/activateUser',this.id)
        console.log(response)
        }catch(err){
          console.log(err.response)
          this.setPage(err.response)
          this.error = true
        }finally {
            this.processed = true
        }
    },

    setPage(data){
      if(data.status==401){
        this.page.header='Esta conta já se encontra ativo!'
        this.page.body='Esta conta já esta ativada. Por favor faça login para começar a gerenciar suas atividades'
        this.page.route = '/login'
        this.page.btnText='Fazer Login'
      }

      if(data.status==404){
        this.page.body='Conta não encontrada. Por favor cria uma nova conta para começar a gerenciar suas atividades'
        this.page.header='Usuário não encontrado!'
        this.page.route = '/signup'
        this.page.btnText='Criar conta'
      }
    }
    
  } 
 
}
</script>
<style scoped>
  .section-container{
    padding:30px 30px !important;
  }
  .class-container{
     max-width: 410px !important;
     padding: 40px;
  }
  .li-content::before{
    content: "\2022";
    margin: 0 8px 0px 4px;

  }
  
  ul{
    list-style: none;
    padding-left:0;
  }
  .sucess-register{
    background-color: blue;
    color:green
  }

  .class-container-sucess{
    max-width: 410px !important;
    padding: 0;
  }
  .class-container-sucess > div:nth-of-type(1){
    padding: 40px 40px;
    background-color: #4caf50 !important;
  }
  .class-container-sucess > div:nth-of-type(2){
    padding: 40px 40px;
    
  }

  .class-container-worning{
    max-width: 410px !important;
    padding: 0;
  }

  .class-container-worning > div:nth-of-type(1){
    padding: 40px 40px;
    background-color: #fb8c00 !important;
  }
  .class-container-worning > div:nth-of-type(2){
    padding: 40px 40px;
    
  }

  .class-container-progress{
    max-width: 410px !important;
   
  }

</style>
