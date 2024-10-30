import { Form as VeeForm, Field as VeeFeild } from 'vee-validate'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeFeild)
  },
}
