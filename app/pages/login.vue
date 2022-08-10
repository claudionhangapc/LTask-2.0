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
            Fazer Login no LTask {{this.$route.query}}
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
      //this.$auth.loginWith('google')
      //this.$router.replace('https://accounts.google.com/o/oauth2/auth?protocol=oauth2&response_type=code&access_type&client_id&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin&scope=openid%20profile%20email&state=tRRsqM7Sme&code_challenge_method=')
      //console.log(this.$router)
      //this.$redirect('https://www.google.com')
      window.location.href = "https://accounts.google.com/o/oauth2/auth?protocol=oauth2&response_type=code&access_type&client_id=322340038052-ggato5uephq7cv0b2fjcfv43k5rje6tt.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin&scope=openid%20profile%20email&state=F6qGJULo6s&code_challenge_method=";
     
    },
    async UserLoginGoogleLocalApi(){
      if( !_.has(this.googleQuery.state, 'state') || ! _.has(this.googleQuery.state, 'code')){
        return ;
      } 
      const state = this.googleQuery.state
      const code = this.googleQuery.code

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
