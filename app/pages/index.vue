<template>

  <v-row>
    <v-col
           
            cols="12"
          >
          <p class="texto">ola</p>
          <h1 class="texto">Tasks</h1>
          </v-col> 
          
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card elevation="0">
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item

                    :key="n"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col> 
        </v-row> 
</template>
<script>
  
  export default {
    data: () => ({

      cards: ['Today', 'Yesterday'],
    }),
   
  }
</script>

<style scoped>
.texto{
  background: green !important;
  color:black !important;
}
</style>