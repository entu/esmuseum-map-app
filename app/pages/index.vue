<script setup>
const { t } = useI18n()
const { userId } = useUser()
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center gap-10">
    <template v-if="userId">
      <h2 class="text-lg">
        Hello!
      </h2>

      <nuxt-link
        to="/auth/exit"
        class="link"
      >
        {{ t('exit') }}
      </nuxt-link>
    </template>

    <nuxt-link
      v-else
      to="/auth"
      class="link"
    >
      {{ t('enter') }}
    </nuxt-link>
  </div>
</template>

<i18n lang="yaml">
  en:
    enter: Sign In
    exit: Sign Out
  et:
    enter: Sisene
    exit: Välju
</i18n>
