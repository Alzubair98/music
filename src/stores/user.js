import { defineStore } from 'pinia'
import { usersCollection, auth } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.email, values.password)

      await usersCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        singer: values.singer,
        country: values.country,
      })
      this.userLoggedIn = true
    },
  },
})
