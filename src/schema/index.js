import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must be at least 3 chars")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "others"], "I")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "please accept the terms of services"),
});
