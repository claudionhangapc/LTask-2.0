<template>
  <div>
   <ModalProjectAdd :dialog="dialogProject" @closeModalProject="updatedialogProject($event)"/>
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
    },
  }
 
}
</script>