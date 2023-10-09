<script setup lang="ts">

  defineOptions({
   name:"Pop"
 })

 interface Props {
   disable:boolean
 }

 const props = defineProps<Props>()
 
</script>
<template>
  <div>
	<slot name="button"></slot>

	<transition appear>
	  <div class="pop-card" style="" v-show="disable">
		<div >
		  asdfaasd
		</div>
	  </div>
	</transition>
  </div>

</template>

<style scoped>
 .pop-card {
	 position:fixed;

	 
	 background: white;
	 border:1px solid gray;
	 padding: 10px;
	 border-radius: 3px;
	 box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);

 }
 .v-enter-active,
 .v-leave-active {
	 transition: opacity 0.5s ease;
 }

 .v-enter-from,
 .v-leave-to {
	 opacity: 0;
 }
</style>

