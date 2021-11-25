<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Log</h1>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-10 col-lg-12">
        <Calendar mode="date" iconClass="bi-calendar3" />
      </div>
    </div>
    <BloodPressureForm />
  </div>
</template>

<script>
import Calendar from "../components/Calendar.vue";
import BloodPressureForm from "../components/BloodPressureForm.vue";
export default {
  components: { Calendar, BloodPressureForm },
  setup() {},
};
</script>

<style scoped></style>
