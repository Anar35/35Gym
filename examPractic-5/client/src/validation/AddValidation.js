import * as yup from "yup";

export const AddSchema = yup.object().shape({
  title: yup.string().min(5).required(),
  desc: yup.string().min(10).max(100).required(),
  imageURL: yup.string().url().required(),
});
