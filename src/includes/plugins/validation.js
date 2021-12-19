import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  alpha_dash as alphaDash,
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
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("tos", required);
    defineRule("alpha_dash", alphaDash);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} is required.`,
          min: `The ${ctx.field} is too short.`,
          max: `The ${ctx.field} is too long.`,
          alpha_spaces: `The ${ctx.field} may only contain alphanbetic characters and spaces`,
          alpha_dash: `The ${ctx.field} may contain alphabetic characters or numbers.`,
          email: `The ${ctx.field} must be valid email`,
          min_value: `The ${ctx.field} is too low`,
          max_value: `The ${ctx.field} is too high`,
          passwords_mismatch: "The passwords don't match",
          tos: "You must accept the Terms of Service",
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
