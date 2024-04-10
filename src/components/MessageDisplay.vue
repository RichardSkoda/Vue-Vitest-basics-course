<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script lang="ts">
import { getMessage } from '@/services/axios.ts'

export default {
  data() {
    return {
      message: {},
      error: null
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  }
}
</script>