<script setup>
import { reactive, ref, watch } from "vue";

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
  { icon: "material-symbols:wifi" },
  { icon: "material-symbols:wifi-calling-1-sharp" },
  { icon: "material-symbols:zoom-out-map-rounded" },
  { icon: "material-symbols:escalator-warning" },
  { icon: "material-symbols:view-in-ar-rounded" },
  { icon: "material-symbols:cloudy-snowing" },
  { icon: "material-symbols:cardiology-rounded" },
  { icon: "material-symbols:distance" },
  { icon: "material-symbols:distance" },
  { icon: "material-symbols:charging-station" },
  { icon: "grommet-icons:pin" },
  { icon: "grommet-icons:safari-option" },
  { icon: "grommet-icons:storage" },
  { icon: "grommet-icons:update" },
  { icon: "mdi:fruit-grapes-outline" },
  { icon: "mdi:format-text-variant-outline" },
  { icon: "mdi:television-play" },
  { icon: "mdi:palette" },
  { icon: "mdi:bow-arrow" },
  { icon: "mdi:dump-truck" },
  { icon: "mdi:account-group" },
  { icon: "mdi:account-lock-open" },
  { icon: "mdi:chart-pie" },
  { icon: "mdi:hand-wash-outline" },
  { icon: "mdi:headphones" },
  { icon: "mdi:headphones" },
  { icon: "mdi:cassette" },
  { icon: "mdi:spider" },
  { icon: "mdi:family-tree" },
  { icon: "mdi:stadium-variant" },
  { icon: "mdi:printer" },
  { icon: "mdi:flask" },
  { icon: "mdi:dance-pole" },
  { icon: "mdi:dance-pole" },
  { icon: "mdi:human-scooter" },
]);
// COVERT COLOR TO HEX SECTION SECTION
const style = reactive({
  fontSize: 60,
  color: "rgb(0,0,0)",
  colorHex: "",
});
const pureColor = ref("rgb(255,254,255)");
watch([pureColor], () => {
  const arrayRGBColor = pureColor.value.match(/\d+/g);
  const convertNumberHex = arrayRGBColor.map((x) => parseInt(x).toString(16));
  const colorHex = "#" + convertNumberHex.join("");
  style.colorHex = colorHex;
});

// ROTATION SECTION
const rotation = ref(0);
const options = ref([
  { text: "Orginal", value: 0 },
  { text: "90 deg", value: 1 },
  { text: "180 deg", value: 2 },
  { text: "270 deg", value: 3 },
]);
// MIRROR SECTION
const mirrorX = ref(false);
const mirrorY = ref(false);
function mirrorOnX() {
  mirrorX.value = !mirrorX.value;
}
function mirrorOnY() {
  mirrorY.value = !mirrorY.value;
}
function randomColor() {
  pureColor.value = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}
</script>

<template>
  <div>
    <div>
      <h1 :style="`color:${pureColor}`">
        Change color {{ pureColor }} {{ style.colorHex }}
      </h1>
      <h1 :style="`color:${pureColor}`">size: {{ style.fontSize }}</h1>
      <input
        type="range"
        v-model="style.fontSize"
        min="40"
        max="240"
        style="width: 100%"
      />
      <div class="checkbox-container">
        <color-picker v-model:pureColor="pureColor" />
        <button :style="`color:${pureColor}`" class="btn" @click="randomColor">
          Random color
        </button>
      </div>
    </div>
    <div class="checkbox-container">
      <select v-model="rotation">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      Rotation value: {{ rotation }}
    </div>
    <div class="checkbox-container">
      <label>
        <input type="checkbox" :value="mirrorX" @change="mirrorOnX" />
        <span class="switch" :class="{ 'is-active': mirrorX }"
          >Mirror on x axis</span
        >
      </label>
      <label>
        <input type="checkbox" :value="mirrorY" @change="mirrorOnY" />
        <span class="switch" :class="{ 'is-active': mirrorY }"
          >Mirror on y axis</span
        >
      </label>
    </div>
    <div class="icon-box">
      <Icon
        v-bind="item"
        v-for="item in iconList"
        :key="item.index"
        :rotate="rotation"
        :horizontalFlip="mirrorX"
        :verticalFlip="mirrorY"
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
