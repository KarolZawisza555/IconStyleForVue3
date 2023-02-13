<script setup>
import { reactive, ref } from "vue";

const pureColor = ref("white");
const iconList = reactive([
  { icon: "bxl:amazon" },
  { icon: "bxl:apple" },
  { icon: "bxl:django" },
  { icon: "bxl:android" },
  { icon: "bxl:codepen" },
  { icon: "bxl:bing" },
  { icon: "mdi-light:home" },
  { icon: "mdi:youtube" },
  { icon: "mdi:pen" },
  { icon: "mdi:home" },
  { icon: "bi:bell-fill" },
  { icon: "bx:bx-home" },
  { icon: "bi:stopwatch" },
  { icon: "simple-icons:actigraph" },
  { icon: "simple-icons:aerlingus" },
  { icon: "simple-icons:zabka" },
  { icon: "simple-icons:vuetify" },
  { icon: "simple-icons:vuedotjs" },
  { icon: "simple-icons:lighthouse" },
  { icon: "simple-icons:quasar" },
  { icon: "simple-icons:sass" },
  { icon: "simple-icons:visualstudiocode" },
  { icon: "simple-icons:gnubash" },
  { icon: "simple-icons:linux" },
  { icon: "simple-icons:python" },
  { icon: "simple-icons:postgresql" },
  { icon: "simple-icons:mysql" },
  { icon: "simple-icons:3m" },
  { icon: "simple-icons:dragonframe" },
  { icon: "fa6-brands:bluetooth" },
  { icon: "fa6-brands:bitcoin" },
  { icon: "fa6-brands:xbox" },
  { icon: "fa6-brands:black-tie" },
  { icon: "nonicons:node-16" },
  { icon: "nonicons:javascript-16" },
  { icon: "nonicons:babel-16" },
  { icon: "arcticons:airvisual" },
  { icon: "arcticons:alarmclockxtreme" },
  { icon: "file-icons:json5" },
]);
const style = reactive({
  fontSize: 60,
  color: "white",
});
</script>

<template>
  <div>
    <div>
      <h1 :style="`color:${pureColor}`">
        Change color {{ pureColor }} and size {{ style.fontSize }}
      </h1>
      <color-picker v-model:pureColor="pureColor" />
      <input
        type="range"
        v-model="style.fontSize"
        min="40"
        max="240"
        style="width: 100%"
      />
    </div>
    <div v-memo="[pureColor, style.fontSize]" class="icon-box">
      <Icon
        v-bind="item"
        v-for="item in iconList"
        :key="item.index"
        :style="{
          color: pureColor,
          fontSize: style.fontSize + 'px',
          margin: '10px',
        }"
      />
    </div>
  </div>
</template>

<style>
.icon-box {
  width: 100%;
}
</style>