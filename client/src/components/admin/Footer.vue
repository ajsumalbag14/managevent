<template>
      <div class="text-center">
        <small>Copyright © Managevent&trade; {{ year }}</small>
      </div>
</template>

<script>
export default {
  data () {
      return {
          year: (new Date()).getFullYear()
      }
  }
}
</script>

