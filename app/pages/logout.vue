<template>
  <div>
   
  </div>
</template>

<script>
export default {
  layout: 'landingpage',
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


