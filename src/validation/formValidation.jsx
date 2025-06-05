import * as Yup from "yup";

export const contactFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short (min length - 2 chars)")
    .max(50, "Name is too long (max length - 50 chars)")
    .required("Name is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      new RegExp("^\\+?\\d{10,15}$"),
      "Phone number must contain only digits and may start with + (no spaces, dashes, or special characters)"
    ),
});
