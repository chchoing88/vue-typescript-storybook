<template>
  <div :class="{ done: todo.isDone }">
    <input type="checkbox" :checked="todo.isDone" />
    <span>{{ todo.text }}</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {
  @Prop({
    default: {
      text: 'default',
      isDone: false,
    },
  })
  readonly todo!: object;
}
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>
