<script setup lang="ts">
import { get_md } from './axios'
import { cppMenu } from './menu'
import {ref,onMounted} from 'vue'

import treeMenuWrapper from './components/treeMenuWrapper.vue'
import { MenuInter } from './menu';

const raw_html = ref('')

const set_raw_html = (src:string) => get_md(src).then ( html => raw_html.value = html)

const deal_link_click = set_raw_html

onMounted( ()=>{
  set_raw_html('readme.md')
})

</script>

<template>
  <div class="main-body flex flex-row min-h-screen container">
    <div id="sidebar" class="md:w-72 dark:text-red-500 px-6">
        <h1 class="text-center m-5"> 目录 </h1>
        <treeMenuWrapper :menuArray="<MenuInter[]>cppMenu.child" @linkClick="deal_link_click"></treeMenuWrapper>
    </div>
    <div id="right-body" class="w-full">
      <div class="main-body flex justify-center">
        <div v-html="raw_html" id="write"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
