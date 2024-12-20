import { defineStore } from 'pinia'
import { usersCollection, auth } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password,
      )

      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        singer: values.singer,
        country: values.country,
      })

      await userCred.user.updateProfile({
        displayName: values.name,
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },

    async singout() {
      await auth.signOut()

      this.userLoggedIn = false
    },
  },
})
