
<template>
  <v-app-bar
        color="#101010"
        dark
        fixed 
        clipped-left
        app
        elevation="0"
      >

        <v-toolbar-title>
          <NuxtLink to="/">
            L<span style="color:#FF8700">Task</span>
          </NuxtLink>
        </v-toolbar-title>
      
        <div  class="ml-5" v-if="!isXs">
          <v-btn text >
            <span class="mr-2">Home</span>
          </v-btn>
          <v-btn text >
            <span class="mr-2">Sobre</span>
          </v-btn>
          <v-btn text >
            <span class="mr-2">Tarefas</span>
          </v-btn>
          <v-btn text>
            <span class="mr-2">Testemunhas</span>
          </v-btn>
          <v-btn  text >
            <span class="mr-2">Contate-nos</span>
          </v-btn>
        </div>
        
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon   v-if="isXs" ></v-app-bar-nav-icon>
        <div v-else>
          <v-btn text to="/login" >
            <span class="mr-2">Entrar</span>
          </v-btn>
          <v-btn text outlined to="/signup">
            <span class="mr-2">Criar conta</span>
          </v-btn>
        </div>
      </v-app-bar>
</template>
<script>
  
  export default {
    data: () => ({
      drawer: null,
      isXs: true,
    }),
    methods:{
      setMenu(){
        this.$emit('displayAsideMenu', !this.drawer)
      },
      
      onResize() {
        this.isXs = window.innerWidth < 980;  
      },

    },
    watch: {
      isXs(value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false;
          }
        }
      },
    },
    mounted() {
      this.onResize();
      window.addEventListener("resize", this.onResize, { passive: true });  
    }
  }
</script>
<style scoped>
a{
  text-decoration: none;
  color:#fff;
}
.dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-style: solid;
    border-width: 4px 4px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}

</style>
