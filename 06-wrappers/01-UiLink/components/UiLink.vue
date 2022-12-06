<template>
  <a class="link" v-bind="$attrs" v-if="tag === 'a'">
    <slot></slot>
  </a>
  <router-link class="link" v-bind="$attrs" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'UiLink',

  props: {
    tag: {
      type: String,
      default: 'RouterLink'
    },
  }
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
