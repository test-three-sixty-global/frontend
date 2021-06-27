import * as Yup from "yup";
export const smsValidationSchema = Yup.object({
  smsListName: Yup.string().required("Required"),
  smsList: Yup.string().required("Required"),
  dateCreated: Yup.string().notRequired(),
  dateModified: Yup.string().notRequired(),
});
