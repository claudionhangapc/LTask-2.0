<template>
  <div class="section-container">
    <v-form
     ref="form"
     v-model="valid"
    lazy-validation
    >
      <v-container class="class-container elevation-1 " >
        
        <v-row class="">
          <v-col cols="12">
            <p class="text-center"> 
            Fazer Login no LTask
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
             <v-text-field
                label="Insira o email"
                required
                hide-details
                dense
                outlined
                v-model='login.email'
                :rules="rules.email"
              ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
            label="Insira Senha"
            required
            hide-details
            dense
            outlined
            v-model='login.password'
            :rules="rules.password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="error">
          <v-col cols="12">
            <v-alert
            dense
            type="error"
            class="mb-0"
            >
              E-mail ou senha incorreta
            </v-alert>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
            color="#101010"
            class="white--text"
            block
            @click="validationForm">
              Fazer login
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="text-center">
           <v-col cols="12" class="ma-0 pa-0">
            <p class="text-center ma-0 pa-0">
              ou
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
            block
            elevation="0"
            @click="UserLoginGoogle()"
            >
              <v-icon
                right
                dark
                class="mr-3"
                color="blue darken-2"
              >
              mdi-google
              </v-icon>
              Continuar com Google
            </v-btn>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" class="text-center">
            <NuxtLink to="/" style="text-decoration: none; color:#101010">Venha saber mais</NuxtLink>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" >
            <v-divider ></v-divider>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" class="text-center">
            <ul class="d-flex justify-center">
              <li>
                <NuxtLink to="/" style="text-decoration: none; color:#101010">Não Conseguiu Entrar?</NuxtLink>
              </li>
              <li class="li-content">  
                <NuxtLink to="/signup" style="text-decoration: none; color:#101010">Criar uma conta</NuxtLink>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import _, { map } from 'underscore';
export default {
  layout: 'landingpage',
  data(){
    return{
      valid: true,
      error:false,
      login:{
        email:'emaildteste@gmail.com',
        password:'12#rer'
      },
      rules:{
          email:[
            v => !!v || 'email é obrigatório',
          ],
          password:[
            v => !!v || 'A palavra passe é obrigatorio'
           
          ]
      }
    }
  },
  computed: {
    googleQuery(){ return this.$route.query },
  },
  created: function () {
     /*if(!_.isEmpty(this.googleQuery)){
      this.UserLoginGoogleLocalApi()
    }*/
    
  },
  mounted() {
    if(!_.isEmpty(this.googleQuery)){
      this.UserLoginGoogleLocalApi()
    }
  },
  methods:{
    async userLogin(){
      try{
        const response = await this.$auth.loginWith('local',{
          data:this.login
        })
        const user = await this.$store.dispatch('user/getUser')
        this.$router.replace("/app")
      }catch(err){
        this.error = true
        //console.log(err)
      }
    },
    async UserLoginGoogle(){

      const state = this.randomString(10);
      localStorage.setItem('my_pkce_state', JSON.stringify(state))

      const query = new URLSearchParams();
      query.append('protocol', process.env.GOOGLE.protocol);
      query.append('response_type', process.env.GOOGLE.response_type);
      query.append('client_id', process.env.GOOGLE.client_id);
      query.append('redirect_uri', process.env.GOOGLE.redirect_uri);
      query.append('scope', process.env.GOOGLE.scope);
      query.append('state', state);
      query.append('code_challenge_method', process.env.GOOGLE.code_challenge_method);
      const url = "https://accounts.google.com/o/oauth2/auth?" + query.toString();

      window.location.replace(url)
      //window.location.href =  url;
     
    },
    async UserLoginGoogleLocalApi(){

     if( !_.has(this.googleQuery, 'state') || ! _.has(this.googleQuery, 'code')){
        return ;
      } 
 
      const {state} = this.googleQuery
      const {code} = this.googleQuery

      let  app_pkce_state = localStorage.getItem('my_pkce_state');
      my_pkce_state = JSON.parse(app_pkce_state)
      
      localStorage.removeItem('my_pkce_state')

      if(state !== app_pkce_state){
        return ;
      } 

      try{

        const result = await this.$store.dispatch('user/loginWithGoogleCode', {code})

         this.$auth.strategy.token.set(result.token) //console.log(result);
         this.$auth.setUser(true)
         window.location.replace('http://localhost:8000/app')
    
        }catch(err){
         
      }

    },
    validationForm(){
        if(this.$refs.form.validate()){
          this.userLogin()
        }
    },
    validateEmail(text){
    let message= null
    const emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if(text.length===0){
      message = "email deve ser preenchido"
    }
    if(!emailPattern.test(text)){
        message = "email incorreto";
    } 
    return  message;
    },

    randomString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
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



</style>
