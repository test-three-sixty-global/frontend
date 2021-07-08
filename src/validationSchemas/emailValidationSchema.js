import * as Yup from "yup";
export const emailValidationSchema = Yup.object({
  emailListName: Yup.string().required("Required"),
  emailList: Yup.string().required("Required"),
});
