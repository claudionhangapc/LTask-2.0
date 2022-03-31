<template>
  <div>
    <ModalProjectEdit :dialog="dialogProject" @closeModalProject="updatedialogProject($event)"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogProject:true,
    }
  },
  methods:{
    updatedialogProject(value){
        this.dialogProject = value
        this.$router.replace('/app/projetos');
    },
  }
}
</script>