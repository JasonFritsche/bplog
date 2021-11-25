<template>
  <div class="row mb-lg-3">
    <div class="col-sm-10 col-lg-6 mb-3">
      <Calendar
        mode="time"
        iconClass="bi-clock-history"
        @datetime="handleDatetimeChange($event)"
      />
    </div>
    <div class="col-sm-10 col-lg-6 mb-3 mb-lg-0">
      <div class="input-group input-group-sm">
        <span class="input-group-text" id="inputGroup-sizing-sm">
          Heart Rate
        </span>
        <input
          type="text"
          class="form-control"
          v-model="bpform.inputHeartRate"
        />
      </div>
    </div>

    <div class="col-sm-10 col-lg-6 mb-3 mb-lg-0">
      <div class="input-group input-group-sm">
        <span class="input-group-text" id="inputGroup-sizing-sm">
          Systolic
        </span>
        <input
          type="text"
          class="form-control"
          v-model="bpform.inputSystolic"
        />
      </div>
    </div>

    <div class="col-sm-10 col-lg-6 mb-3 mb-lg-0">
      <div class="input-group input-group-sm">
        <span class="input-group-text" id="inputGroup-sizing-sm">
          Diastolic
        </span>
        <input
          type="text"
          class="form-control"
          v-model="bpform.inputDiastolic"
        />
      </div>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-sm-10 col-lg-12">
      <div class="input-group input-group-sm">
        <span class="input-group-text"> Notes </span>
        <textarea
          type="text"
          class="form-control"
          v-model="bpform.inputNotes"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-10 col-lg-12 d-grid">
      <button
        type="button"
        class="btn btn-outline-primary block"
        @click="onBpFormSubmit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Calendar,
  },
  setup() {
    const store = useStore();
    const bpform = reactive({
      inputHeartRate: null,
      inputSystolic: null,
      inputDiastolic: null,
      inputNotes: "",
    });

    const onBpFormSubmit = () => {
      console.log(bpform);
      const payload = {
        ...bpform,
        time: "5:55",
      };
      store.dispatch("addBloodPressureEntry", payload);
    };

    const handleDatetimeChange = (event) => console.log(event);
    return {
      bpform,
      onBpFormSubmit,
      handleDatetimeChange,
    };
  },
};
</script>
