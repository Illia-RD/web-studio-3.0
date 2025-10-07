import { firestore } from 'components/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import {
  Overlay,
  FormContainer,
  CloseButton,
  Form,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from './Feedback.styled';

export const FeedbackForm = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      // Початкові значення полів форми
      name: '',
      email: '',
      phone: '',
      comment: '',
      sendDate: new Date(),
    },

    onSubmit: async values => {
      try {
        console.log(`values \n `, values);
        // Додаємо дані до Firestore
        const docRef = await addDoc(collection(firestore, 'feedback'), {
          name: values.name,
          email: values.email,
          phone: values.phone,
          comment: values.comment,
          sendDate: values.sendDate,
        });
        console.log('Document written with ID: ', docRef.id);

        // Очищаємо значення полів після відправлення форми
        formik.resetForm();

        // Закриваємо форму
        onClose();
      } catch (error) {
        console.error('Error adding data to Firestore:', error);
      }
    },
  });

  // Сховати форму, якщо isOpen дорівнює false
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <FormContainer>
        <CloseButton onClick={onClose}>Close Form</CloseButton>
        <Form onSubmit={formik.handleSubmit}>
          {/* Поля форми */}
          <Label htmlFor="name"> Name:</Label>
          <Input
            required
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Label htmlFor="email"> E-mail:</Label>
          <Input
            required
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <Label htmlFor="phone"> Phone Number:</Label>
          <Input
            required
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <Label htmlFor="comment"> Comment:</Label>
          <TextArea
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
          {/* Кнопка відправки форми */}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </Overlay>
  );
};
