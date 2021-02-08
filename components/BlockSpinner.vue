<template>
  <div class="rounded-t-xl overflow-hidden py-10">
    <div class="flex flex-col text-center">
      <div>
        <font-awesome-icon
          :icon="['far', 'snowflake']"
          spin
          class="fa-3x text-green-400"
          :class="classes"
        />
      </div>
      <div class="mt-8 font-bold">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    classes: String
  }
}
</script>

<style>
</style>