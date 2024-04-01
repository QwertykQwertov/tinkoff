import {ref} from 'vue'

export const message = ref('')
export const isVisible = ref(false)
export const type = ref('')

export function showToast (newMessage, newType) {
  isVisible.value = true;
  type.value = newType;
  message.value = newMessage;
}

