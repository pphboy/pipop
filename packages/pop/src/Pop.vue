<script setup lang="ts">

 import {onMounted,ref,computed} from 'vue'

 defineOptions({
   name:"Pop"
 })

 interface Props {
   disable:boolean;
   placement?: string;
   width?: string;
 }

 const props = defineProps<Props>()

 const button = ref(null)
 const popcard = ref(null)

 onMounted(()=>{
   console.log(popcard.value)

 })

 const topVar = computed({
   get(){

	 console.log(button.value?.offsetHeight)
	 if(props.placement == 'top' ) {
	   return `-${button.value?.offsetHeight + popcard.value?.offsetHeight}px`	   
	 }
   },
   set(){}
 })
</script>
<template>
  <div >
	{{props}}
	<div ref="button">
	  <slot name="button" ></slot>	  
	</div>

	<transition appear>
	  <div class="pop-card" ref="popcard" style="" v-if="disable" :style="{
																  top:topVar,width:width
																	}">
		<slot name="content"></slot>
	  </div>
	</transition>
  </div>

</template>

<style scoped>
 .pop-card {
	 float:left;
	 position:relative;
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

