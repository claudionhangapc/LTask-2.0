
<template>
  <div>
    <v-navigation-drawer
         app
         temporary
         v-model="drawer"
         
        >
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-toolbar-title>
                  <NuxtLink to="/" style="color:#101010">
                    L<span style="color:#FF8700">Task</span>
                  </NuxtLink>
                </v-toolbar-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider />
          <v-list dense>
            <v-list-item
              v-for="([icon, text, link], i) in items"
              :key="i"
              link
              @click = "$vuetify.goTo(link)"
            >
              <v-list-item-icon class="justify-center">
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="subtitile-1">{{
                  text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  
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
        <div  class="ml-5" v-if="isIndexPage && !isXs">
          <v-btn text 
            @click = "$vuetify.goTo('#home')"
          >
            <span class="mr-2">Home</span>
          </v-btn>
          <v-btn text 
            @click = "$vuetify.goTo('#about')"
          >
            <span class="mr-2">Sobre</span>
          </v-btn>
          <v-btn text 
            @click = "$vuetify.goTo('#task')"
          >
            <span class="mr-2">Tarefas</span>
          </v-btn>
          <v-btn text
            @click = "$vuetify.goTo('#testimony')"
          >
            <span class="mr-2">Testemunhas</span>
          </v-btn>
          <v-btn  text 
            @click = "$vuetify.goTo('#news')"
          >
            <span class="mr-2">Contate-nos</span>
          </v-btn>
        </div>
        
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon   
        @click.stop="drawer = !drawer"
        v-if="isXs" >
        </v-app-bar-nav-icon>
        <div v-else>
          <v-btn text to="/login" >
            <span class="mr-2">Entrar</span>
          </v-btn>
          <v-btn text outlined to="/signup">
            <span class="mr-2">Criar conta</span>
          </v-btn>
        </div>
      </v-app-bar>
    </div>
</template>
<script>
  
  export default {
    data: () => ({
      drawer: null,
      isXs: true,
      isIndexPage:true,
      items: [
        ["mdi-home-outline", "Home", "#home"],
        ["mdi-information-outline", "Sobre", "#about"],
        ["mdi-clipboard-edit-outline", "Tarefas", "#task"],
        ["mdi-star-check-outline", "Testemunhas", "#testimony"],
        ["mdi-email-outline", "Contate-nos", "#news"],
      ]
    }),
    methods:{
      setMenu(){
        this.$emit('displayAsideMenu', !this.drawer)
      },
      
      onResize() {
        this.isXs = window.innerWidth < 980;  
      }

    },
    watch: {
      isXs(value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false;
          }
        }
      },
      indexRoute(value){
        if (value =="/"){
          this.isIndexPage = true
        }else{
          this.isIndexPage = false
        }
      }
    },
    computed:{
      indexRoute(){
        return this.$route.path
      }
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
