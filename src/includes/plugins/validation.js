import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
} from "@vee-validate/rules";

export default {
  install(app) {
    //app reference to vue application
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    //defined Rule allow to define rule globally
    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
  },
};
