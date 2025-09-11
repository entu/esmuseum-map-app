export const useUser = () => {
  const token = useLocalStorage('token')
  const user = useLocalStorage('user', {})

  const userId = computed(() => user.value?._id)
  const userName = computed(() => user.value?.name)

  function logOut () {
    token.value = undefined
    user.value = undefined
  }

  return {
    logOut,
    token,
    user,
    userId,
    userName
  }
}
