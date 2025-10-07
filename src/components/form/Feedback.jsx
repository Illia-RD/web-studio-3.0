import { firestore } from 'components/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import { Overlay, FormContainer, CloseButton, Form } from './Feedback.styled';

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
    <FormContainer>
      <CloseButton onClick={onClose}>Close Form</CloseButton>
      <Form onSubmit={formik.handleSubmit}>
        {/* Поля форми */}
        <label htmlFor="name"> Name:</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email"> E-mail:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="phone"> Phone Number:</label>
        <input
          required
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <label htmlFor="comment"> Comment:</label>
        <input
          type="comment"
          id="comment"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
        {/* Кнопка відправки форми */}
        <button type="submit">Submit</button>
      </Form>
    </FormContainer>
  );
};
