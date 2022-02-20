<template>
  <div>
    <v-form
    ref="form"
     v-model="valid"
    lazy-validation
    >
      <v-row  >
          <v-col class="text-center text-h4 mb-3">
                L<span style="color:#FF8700">Task</span>
          </v-col>
      </v-row>
      <div v-if="false">
        <v-container class="class-container-sucess elevation-1 ">
        processando ..
        </v-container>
      </div>
      <div>
        <v-container class="class-container-sucess elevation-1 " v-if="false">
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
        <v-container class="class-container-worning elevation-1 " >
          <div>
            <v-alert
              prominent
              type="warning"
            > Conta não encontrada ou usuário já ativo! </v-alert>
          </div>
          <div>
            <p >
             A conta foi ativada com sucesso. Por favor faça login para começar a gerenciar suas atividades
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
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'public',
  auth: false,
  data(){
    return{
      valid: true,
      error:false,
      user:{
        email:"",
        name:"",
        password:""
      },
     
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

        }catch(err){
          this.error = true
        }
    },
    
  } 
 
}
</script>
<style scoped>
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

</style>
