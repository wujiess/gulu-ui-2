<template>
  <button><span></span></button>
</template>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: blue;
  border-radius: calc($h / 2);
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background-color: white;
  border-radius: calc($h2 / 2);
}
</style>