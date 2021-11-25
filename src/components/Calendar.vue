<template>
  <DatePicker
    class="inline-block"
    :mode="mode"
    v-model="datetime"
    @input="$emit('datetime', datetime)"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <div class="input-group input-group-sm">
        <button
          class="btn btn-outline-primary"
          id="calendar-input-group"
          @click="togglePopover()"
        >
          <i :class="iconClass" style="font-size: 1rem"></i>
        </button>
        <input
          type="text"
          class="form-control border border-primary"
          aria-label="calendar selected date input"
          aria-describedby="calendar-input-group"
          :value="inputValue"
          readonly
        />
      </div>
    </template>
  </DatePicker>
</template>

<script>
import { ref } from "vue";
import { DatePicker } from "v-calendar";
export default {
  components: { DatePicker },
  props: {
    mode: String,
    iconClass: String,
  },
  setup(props) {
    const datetime = ref(new Date());

    return {
      datetime,
    };
  },
};
</script>
