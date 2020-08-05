<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';

@Component
export default class TodoList extends Vue {}
</script>

<style lang="scss" scoped></style>
