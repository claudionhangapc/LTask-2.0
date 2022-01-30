<template>
  <div>
    <v-form>
      <v-row  >
          <v-col class="text-center">
                LTask
          </v-col>
      </v-row>
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
              ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
            label="Nome do projeto"
            required
            hide-details
            dense
            outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
            block>
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
            block>
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
            <NuxtLink to="/" style="text-decoration: none;">Venha saber mais</NuxtLink>
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
                <NuxtLink to="/" style="text-decoration: none;">Não Conseguiu Entrar?</NuxtLink>
              </li>
              <li class="li-content">  
                <NuxtLink to="/" style="text-decoration: none;">Criar uma conta</NuxtLink>
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
  };

</style>
