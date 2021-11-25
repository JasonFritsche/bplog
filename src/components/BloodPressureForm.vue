<template>
  <div class="row mb-lg-3">
    <div class="col-sm-10 col-lg-3 mb-3">
      <Calendar mode="date" iconClass="bi-calendar3" />
    </div>

    <div class="col-sm-10 col-lg-3 mb-3">
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
          v-model="bpForm.inputHeartRate"
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
          v-model="bpForm.inputSystolic"
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
          v-model="bpForm.inputDiastolic"
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
          v-model="bpForm.inputNotes"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-10 col-lg-12 d-grid">
      <button
        type="button"
        class="btn btn-outline-primary block"
        @click="onbpFormSubmit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: {
    Calendar,
  },
  setup() {
    const store = useStore();
    const bpForm = reactive({
      inputHeartRate: null,
      inputSystolic: null,
      inputDiastolic: null,
      inputNotes: "",
    });

    const formRules = {
      inputHeartRate: { required },
      inputSystolic: { required },
      inputDiastolic: { required },
    };

    const v$ = useVuelidate(formRules, bpForm);

    const onbpFormSubmit = async () => {
      const valid = await v$.value.$validate();
      console.log(valid);
      if (!valid) {
        alert("form has errors");
      } else {
        alert("form is good");
      }
      console.log(bpForm);
      const payload = {
        ...bpForm,
        time: "5:55",
      };
      // store.dispatch("addBloodPressureEntry", payload);
    };

    const handleDatetimeChange = (event) => console.log(event);
    return {
      bpForm,
      v$,
      onbpFormSubmit,
      handleDatetimeChange,
    };
  },
};
</script>
