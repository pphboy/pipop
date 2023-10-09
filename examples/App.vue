<script setup lang="ts">
 // import  {PiPop} from '../PiPop'

 import {ref} from 'vue'
 import PiPop from '../packages/pop/src/Pop.vue'

 const show = ref(false)
 const show2 = ref(false)
 function close() {
   console.log("close")
   show.value = false
 }
 function close2() {
   console.log("close")
   show2.value = false
 }
</script>

<template>
  <br/><br/>
	
  <PiPop v-model:disable="show" :placement="'bottom'"  @close="close" :key="123">
	  <template #button>
		<div style="width:30px;">
          <button @click="show=!show">Show</button>
        </div>
	  </template>
	  <template #content>
		<div>
		  <h1>K1kK</h1>
		</div>
	  </template>
	</PiPop>

    
    <PiPop v-model:disable="show2" :placement="'bottom'" width="200px" @close="close2" :key="234">
	  <template #button>
		<div style="width:30px;">
          <button @click="show2=!show2">Show2</button>
        </div>
	  </template>
	  <template #content>
		<div>
		  
          <label for="asdf" style="display:flex;background:#ccc;">
            <input type="radio" id="asdf" /> <div>asdf</div>
          </label>

          <label for="asdf1" style="display:flex;background:#ccc;">
            <input type="radio" id="asdf1" /> <div>asdf</div>
          </label>

          
		</div>
	  </template>
</PiPop>


</template>

<style scoped>

</style>
