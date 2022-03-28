<template>
  <v-row>
       <v-col 
         cols="12"
         class="my-0 d-flex align-center"
         >
         <v-icon >
          mdi-folder-outline
        </v-icon>
        <h3 class="ml-2">  
          {{this.project.name}}  
        </h3>
      </v-col>
      <v-col
         cols="12"
         class="py-0"
         >
         <project :project="this.project" />
      </v-col>
   </v-row>
</template>

<script>
export default {
  data(){
    return{
      project:{

      }
    }
  },
  created(){
     this.fetchProject()
  },
  mounted() {
    //this.$router.replace('/app/projetos');
  },
  computed:{
    id(){
      return this.$route.params.id
      },   
  },
  methods:{
    async fetchProject(){
      this.project = await this.$store.dispatch('project/fetchSingle', this.id)
    }
  }
 
}
</script>