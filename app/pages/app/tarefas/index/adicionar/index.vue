<template>
  <div>
    <ModalTask :dialog="dialogTask" @closeModalTask="updatedialogTask($event)"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogTask:true
    }
  },
  methods:{
      openModalTask(){
        this.dialogTask = true
      },
      updatedialogTask(value){
        this.dialogTask = value
         this.$router.replace('/app/tarefas');
      },  
    }
 
}
</script>