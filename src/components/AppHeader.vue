<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4" to="/"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li @click.prevent="singout">
              <a class="px-2 text-white" href="#">Logout</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li></template
          >
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores, mapActions, mapState } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore),
    ...mapState(useUserStore, ['userLoggedIn']),
  },
  methods: {
    ...mapActions(useUserStore, ['singout']),

    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
  },
}
</script>
