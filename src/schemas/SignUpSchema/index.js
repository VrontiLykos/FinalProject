import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape(
  {
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(5, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    // employeeID: yup.string().when('employeeID', (val, schema) => {
    //   if (val?.length > 0) {
    //     return yup
    //       .string()
    //       .min(5, 'min 5')
    //       .max(255, 'max 255')
    //       .required('Required');
    //   } else {
    //     return yup.string().notRequired();
    //   }
    // }),
  },
  //   [['employeeID', 'employeeID']],
);
