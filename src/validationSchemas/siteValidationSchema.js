import * as Yup from "yup";
export const siteValidationSchema = Yup.object({
  siteName: Yup.string().required("Required"),
  dateCreated: Yup.string().notRequired(),
  dateModified: Yup.string().notRequired(),
});
