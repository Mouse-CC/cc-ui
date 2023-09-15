import { getCurrentInstance } from 'vue'

export const useCheckboxEvent = () => {
  const { emit } = getCurrentInstance()!
  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    emit('change', target.checked ? true : false)
  }

  return {
    handleChange,
  }
}
