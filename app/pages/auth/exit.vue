<script setup>
import { NSpin } from 'naive-ui'

const { t } = useI18n()
const { token, user } = useUser()

onMounted(async () => {
  useHead({ title: t('title') })

  user.value = undefined
  token.value = undefined

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
    title: Sign Out
  et:
    title: Välju
</i18n>
