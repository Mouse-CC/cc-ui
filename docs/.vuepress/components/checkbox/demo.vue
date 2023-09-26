<template>
  <div>
    <cc-checkbox v-model="checked1" label="Option 1" size="large" />
    <cc-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <cc-checkbox v-model="checked3" label="Option 1" />
    <cc-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <cc-checkbox v-model="checked5" label="Option 1" size="small" />
    <cc-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <cc-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <cc-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
    }
  },
}
</script>
