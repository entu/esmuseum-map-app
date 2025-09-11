<script setup>
import { NSpin } from 'naive-ui'

const { public: { entuUrl } } = useRuntimeConfig()
const { t } = useI18n()

onMounted(async () => {
  useHead({ title: t('title') })

  await navigateTo(`${entuUrl}/auth/smart-id?next=${window.location.origin}/auth/callback?key=`, { external: true })
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
