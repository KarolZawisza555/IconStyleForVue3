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
]);
const style = reactive({
  fontSize: 40,
  color: "white",
});
</script>

<template>
  <div>
    <div>
      <h1 :style="`color:${pureColor}`">Change color and size</h1>
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
        :style="{ color: pureColor, fontSize: style.fontSize + 'px' }"
      />
    </div>
  </div>
</template>

<style>
.icon-box {
  width: 100%;
}
</style>
