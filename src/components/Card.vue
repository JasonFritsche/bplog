<template>
  <div class="card" style="width: 19em">
    <div class="card-header" v-if="header">{{ header }}</div>
    <div class="card-body">
      <h5 class="card-title" v-if="title">{{ title }}</h5>
      <p class="card-text" v-if="text">{{ text }}</p>
      <router-link :to="link" class="btn btn-primary">{{
        linkText
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    title: String,
    text: String,
    link: String,
    linkText: String,
  },
  setup(props) {},
};
</script>
