import * as Yup from "yup";
export const userValidationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  address: Yup.string().required("Required"),
  telephone: Yup.string().required("Required"),
  dateCreated: Yup.string().notRequired(),
  dateModified: Yup.string().notRequired(),
  userRoles: Yup.string().required("Required"),
});
