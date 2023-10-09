<script setup lang="ts">

 import {onMounted,ref,computed, onUnmounted} from 'vue'

 const pipop = ref(null)

 defineOptions({
   name:"Pop"
 })

 const emit = defineEmits(['close'])

 interface Props {
   disable:boolean;
   placement?: string;
   //width?: string;
 }
 
 const props = defineProps<Props>()

 const button = ref(null)
 const popcard = ref(null)
 const closeEvent = (e:Event) => {
   console.log(e.target, props)
   if(!(pipop.value as unknown as HTMLElement).contains(e.target as unknown as HTMLElement))
     emit('close')
 }
 
 // close pop in other whitespace
 onMounted(()=>{
   console.log(popcard.value)
   document.body.addEventListener('click', closeEvent)
 })
 // remove whitespace click event
 onUnmounted(()=>{
   document.body.removeEventListener("click", closeEvent);
 })
 
 const topVar = computed({
   get(){
	 let btn = button.value as unknown as HTMLElement
     let card  = popcard.value as unknown as HTMLElement
     console.log(btn?.clientHeight,btn)
	 if(props.placement == 'top' ) {
	   return `-${btn?.offsetHeight + card?.offsetHeight}px`	   
	 } else if(props.placement == 'bottom') {
       return `${btn?.offsetHeight+3}px`	   
     } else {
       return `${btn?.offsetHeight+3}px`
       // 因为来日方长，这里只是给你的选择
     }
   },
   set(){}
 })



</script>
<template>
  
  <div  tabindex="-1" ref="pipop" class="pipop">
    <div ref="button" class="pibtn">
      <slot name="button" ></slot>	  
    </div>

	<div style="float:left;" >
      <transition appear mode="out-in">
	    <div class="pop-card" ref="popcard" style="" v-if="disable" :style="{
																    top:topVar,
																	}">
		  <slot name="content" ></slot>
	    </div>
	  </transition>
    </div>
  </div>

</template>

<style scoped>
 .pop-card {
	 position: absolute;
	 background: white;
	 /* border:1px solid gray; */
	 padding: 10px;
	 border-radius: 3px;
     z-index: 100;
     left:0;
	 box-shadow: 0px 0px 12px rgba(0, 0, 0, .20);
 }
 .pipop {
     width:0;
     position:relative;
 }
 .pibtn {
  
 }
 .v-enter-active ,
 .v-leave-active {

	 transition: opacity 0.5s ease;
 }

 .v-enter-from,
 .v-leave-to {
	 opacity: 0;
 }
</style>

