<script setup lang="ts">
 // import  {PiPop} from '../PiPop'

 import {ref} from 'vue'
 import PiPop from '../packages/pop/src/Pop.vue'

 const show = ref(true)
 
</script>

<template>
  {{show}}
  <div style="height:45vh;"></div>
  <div style="margin-left:50px;">
	<PiPop :disable="show">
	  <template #button>
		<button @click="show=!show">Show</button>
	  </template>
	</PiPop>
	asdfsdf
  </div>



</template>

<style scoped>

</style>
