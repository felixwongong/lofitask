import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";
import { required } from "@vee-validate/rules";

export default {
  install(app) {
    //app reference to vue application
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    //defined Rule allow to define rule globally
    defineRule("required", required);
  },
};
