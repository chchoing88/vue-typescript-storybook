import { withKnobs, object } from '@storybook/addon-knobs';
import TodoItem from '../../src/components/todo/TodoItem.vue';

export default {
  title: 'TodoItem',
  decorators: [withKnobs],
};

const todoData = {
  text: 'todo1',
  isDone: true,
};
const todoTemplate = `<TodoItem :todo="todo"></TodoItem>`;

export const Default = () => ({
  components: {
    TodoItem,
  },
  props: {
    todo: {
      default: object('todoData', { ...todoData }),
    },
  },
  template: todoTemplate,
});
