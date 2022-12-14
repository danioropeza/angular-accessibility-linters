
var htmlValidate = require('html-validate');

module.exports = htmlValidate.definePlugin({
  name: "your-app-name-a11y",
  configs: {
    recommended: {
      rules: {
        "area-alt": "error",
        "aria-hidden-body": "error",
        "aria-label-misuse": "error",
        "deprecated-rule": "error",
        "empty-heading": "error",
        "empty-title": "error",
        "input-missing-label": "error",
        "meta-refresh": "error",
        "multiple-labeled-controls": "error",
        "no-autoplay": "error",
        "no-dup-id": "error",
        "no-redundant-for": "error",
        "no-redundant-role": "error",
        "prefer-native-element": "error",
        "svg-focusable": "error",
        "text-content": "error",
        "wcag/h30": "error",
        "wcag/h32": "error",
        "wcag/h36": "error",
        "wcag/h37": "error",
        "wcag/h63": "error",
        "wcag/h67": "error",
        "wcag/h71": "error",
      },
    },
  },
});
