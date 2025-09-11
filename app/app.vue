<script setup>
const runtimeConfig = useRuntimeConfig()
const { locale, setLocale } = useI18n({ useScope: 'global' })

onMounted(() => {
  let targetLocale = localStorage.getItem('locale')

  if (!targetLocale) {
    const defaultLocale = navigator?.language?.split('-')?.at(0) || 'en'

    targetLocale = ['en', 'et'].includes(defaultLocale) ? defaultLocale : 'en'
    localStorage.setItem('locale', targetLocale)
  }

  if (locale.value !== targetLocale) {
    setLocale(targetLocale)
  }
})

useHead({
  titleTemplate: (title) => {
    return (!title || title === runtimeConfig.public.title) ? runtimeConfig.public.title : `${title} · ${runtimeConfig.public.title}`
  }
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
