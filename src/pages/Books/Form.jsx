import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    // reset de los valores del formulario si defaultValues cambia
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <Form
      style={{ padding: "0 25%", marginTop: "24px" }}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mb-3" htmlFor="">
          Author
        </Form.Label>
        <Form.Control
          style={{ borderColor: errors.author && "red" }}
          placeholder="Nombre Apellido"
          {...register("author", { required: true })}
        />
        {errors.author && <p style={{ color: "red" }}>Author is required</p>}
      </Form.Group>
      <Form.Label className="mb-3" htmlFor="">
        Name
      </Form.Label>
      <Form.Control
        style={{ borderColor: errors.name && "red" }}
        placeholder="Nombre Apellido"
        {...register("name", { required: true })}
      />
      {errors.name && <p style={{ color: "red " }}>name is required</p>}
      <Form.Label className="mb-3" htmlFor="">
        isbn
      </Form.Label>
      <Form.Control
        style={{ borderColor: errors.isbn && "red" }}
        placeholder="1234"
        {...register("isbn", { required: true })}
        maxLength={4}
        minLength={4}
      />
      {errors.isbn && <p style={{ color: "red " }}>isbn is required</p>}
      <Button style={{ marginTop: "24px" }} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormBook;
