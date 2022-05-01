<template>
  <div>Button 示例</div>
  <h1>button</h1>
  <div>
    <Button>默认普通</Button>
    <Button theme="button" size="small">小小</Button>
    <Button theme="button">普通</Button>
    <Button theme="button" size="big">大大</Button>
  </div>
  <h1>link</h1>
  <div>
    <Button theme="link" size="small">小小</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="big">大大</Button>
  </div>
  <h1>text</h1>
  <div>
    <Button theme="text" size="small">小小</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="big">大大</Button>
  </div>
</template>
<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {};
    return { onClick };
  },
};
</script>