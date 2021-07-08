import * as Yup from "yup";
export const organizationValidationSchema = Yup.object({
  organizationName: Yup.string().required("Required"),
  dateCreated: Yup.string().notRequired(),
  dateModified: Yup.string().notRequired(),
});
