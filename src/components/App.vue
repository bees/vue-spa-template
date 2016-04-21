<template lang="pug">
#application
  router-view(transition="fade", transition-mode="out-in", keep-alive)
</template>

<script>

export default {
}
</script>

<style lang="sass">
@import "~bourbon/app/assets/stylesheets/bourbon";
@import "~bourbon-neat/app/assets/stylesheets/neat";

body
  font-family: $helvetica
  font-size: golden-ratio(14px,  1)

#application
  @include outer-container

</style>
