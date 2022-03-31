<template>
  <div>
   <ModalCategoryAdd :dialog="dialogCategory" @closeModalCategory="updatedialogCategory($event)"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogCategory:true,
    }
  },
  methods:{
    updatedialogCategory(value){
        this.dialogCategory = value
    },
  }
 
}
</script>