import * as Yup from 'yup'

export const contactFormSchema = Yup.object({
  name: Yup.string().required().label('name'),
  email: Yup.string().email().required().max(320).label('email'),
  text: Yup.string().required().max(5000).label('message'),
});