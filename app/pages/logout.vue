<template>
  <div>
   
  </div>
</template>

<script>
export default {
  layout: 'public',
  auth: false,
  data(){
    return{
      
    }
  },
  mounted() {
    this.$auth.logout();
    this.$router.push("/login")
  },
 
}
</script>


