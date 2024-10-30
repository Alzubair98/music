import {
  Form as VeeForm,
  Field as VeeFeild,
  defineRule,
  ErrorMessage,
} from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  alpha_spaces as alphaSpaces,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeFeild)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('confirmed', confirmed)
  },
}
