<script setup lang="ts">
 // import  {PiPop} from '../PiPop'

 import {ref} from 'vue'
 import PiPop from '../packages/pop/src/Pop.vue'

 const show = ref(false)
 const show2 = ref(false) 
</script>

<template>
  {{show}}
  <div style="height:45vh;"></div>
  <div style="margin-left:50px;">

	<PiPop :disable="show" :placement="'top'" width="200px">
	  <template #button>
		<button @click="show=!show">Show</button>
	  </template>
	  <template #content>
		<div>
		  <h1>KkK</h1>
		</div>
	  </template>
	</PiPop>

	<!-- <PiPop :disable="show2" :placement="'top'">
		 <template #button>
		 <button @click="show2=!show2">Show</button>
		 </template>
		 <template #content>
		 fasdkfjsdlkfj
		 </template>
		 </PiPop> -->

  </div>



</template>

<style scoped>

</style>
