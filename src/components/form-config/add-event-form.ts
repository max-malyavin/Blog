import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddEventFormValues {
  name: string;
  year: string;
  type: string;
  placeholder: string;
  label: string;
}

export const AddEventForm = (
  onSubmit: (
    values: AddEventFormValues,
    formikHelpers?: FormikHelpers<AddEventFormValues>
  ) => void | Promise<any>,
  intialValues?: Partial<AddEventFormValues>
): any => {
  const onClose = () => {
    formik.resetForm();
  };

  const formik = useFormik<any>({
    initialValues: {
      name: "",
      year: "",
      ...intialValues,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is a Required Field"),
      year: Yup.string().required("Year is a Required Field"),
    }),
    // onSubmit(values) {
    //   onSubmit(values);
    //   onClose();
    // },
    onSubmit,
  });
  return { onClose, formik };
};
