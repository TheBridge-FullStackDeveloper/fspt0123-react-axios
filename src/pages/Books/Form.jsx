import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';

const FormBook = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <label className="mb-3"  htmlFor="">
        Author
        <input
          placeholder="Nombre Apellido"
          {...register("author", { required: true })}
        />
        {errors.author && <p style={{ color: "red" }}>Author is required</p>}
      </label>
      <label htmlFor="">
        Name
        <input
          style={{ borderColor: errors.name && "red" }}
          placeholder="Nombre Apellido"
          {...register("name", { required: true })}
        />
        {errors.name && <p style={{ color: "red " }}>name is required</p>}
      </label>
      <label htmlFor="">
        isbn
        <input
          placeholder="1234"
          {...register("isbn", { required: true })}
          maxLength={4}
          minLength={4}
        />
        {errors.isbn && <p style={{ color: "red " }}>isbn is required</p>}
      </label>
      <input type="submit" />
    </Form>
  );
};

export default FormBook;
