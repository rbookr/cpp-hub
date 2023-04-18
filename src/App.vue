<script setup lang="ts">
import { get_md } from './axios'
import { cppMenu } from './menu'
import {ref} from 'vue'

import treeMenuWrapper from './components/treeMenuWrapper.vue'

const raw_html = ref('')

const deal_link_click = (src:string)=>{
  get_md(src).then( html => {
    raw_html.value = html
  })
}
</script>

<template>
  <div class="main-body flex flex-row min-h-screen container">
    <div id="sidebar" class="md:w-72 dark:text-red-500 px-6">
        <h1 class="text-center m-5"> 目录 </h1>
        <treeMenuWrapper :menuArray="cppMenu.child" @linkClick="deal_link_click"></treeMenuWrapper>
    </div>
    <div id="right-body" class="bg-red-100 w-full">
      <div class="main-body flex justify-center">
        <div v-html="raw_html" id="write"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
