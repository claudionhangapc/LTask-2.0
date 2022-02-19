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
      <v-container class="class-container elevation-1 " >
        
        <v-row class="">
          <v-col cols="12">
            <p class="text-center">
            Criar Conta no LTask
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
            label="Insira o nome de usuário"
            required
            hide-details
            v-model='user.name'
            :rules="rules.userName"
            dense
            outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
             <v-text-field
                label="Insira o email"
                required
                hide-details
                dense
                v-model='user.email'
                :rules="rules.email"
                outlined
              ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
            label="Insira a Senha"
            required
            hide-details
            v-model='user.password'
            :rules="rules.password"
            dense
            outlined
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
            @click="validationForm()"
            block>
              Criar Conta
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
        <v-row>
          <v-col cols="12" >
            <v-divider ></v-divider>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12" class="text-center">
            <ul class="d-flex justify-center">
              <li>
                <NuxtLink to="/login" style="text-decoration: none; color:#101010">Já tem uma conta ? Entre</NuxtLink>
              </li>

            </ul>
          </v-col>
        </v-row>
      </v-container>
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
      rules:{
          userName:[
            v => !!v || 'nome do usuário é obrigatório',
          ],
          email:[
            v => !!v || 'email é obrigatório',
            this.validateEmail
          ],
          password:[
            v => !!v || 'A palavra passe é obrigatorio'  
          ]
      }
    } 
  },
  methods:{
    async createUser(){
      try{
        const response = await this.$store.dispatch('user/create',this.user)
        }catch(err){
          this.error = true
        }
    },
    validationForm(){
        if(this.$refs.form.validate()){
          this.createUser();
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
