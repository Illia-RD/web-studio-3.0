import { useFormik } from 'formik';

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

    onSubmit: values => {
      // Логіка обробки поданих даних
      console.log(values);
      // Очистіть значення полів після відправлення форми
      formik.resetForm();
      onClose(); // Закриття форми після відправки
    },
  });

  // Сховати форму, якщо isOpen дорівнює false
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <button onClick={onClose}>Close Form</button>
      <form onSubmit={formik.handleSubmit}>
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
      </form>
    </div>
  );
};
