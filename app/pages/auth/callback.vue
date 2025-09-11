<script setup>
import { NSpin } from 'naive-ui'

const { query: { key } } = useRoute()
const { public: { entuDb } } = useRuntimeConfig()
const { t } = useI18n()
const { token, user } = useUser()

onMounted(async () => {
  useHead({ title: t('title') })

  const authResponse = await apiRequest('/api/auth', { db: entuDb }, { Authorization: `Bearer ${key}` })

  user.value = authResponse.accounts.find((x) => x._id === entuDb)?.user

  if (user.value) {
    token.value = authResponse.token
  }
  else {
    user.value = undefined
    token.value = undefined
  }

  await navigateTo({ path: '/' })
})
</script>

<template>
  <n-spin
    class="size-full"
    show
    :delay="1000"
  />
</template>

<i18n lang="yaml">
  en:
    title: Sign In
  et:
    title: Sisene
</i18n>
