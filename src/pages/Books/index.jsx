import { useState } from "react";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../../services/books";
import { BookList } from "./BookList";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BookForm from "./Form";

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const Books = () => {
  // hook de react-query para hacer la petición y recoger los datos dentro de la variable data
  const { data = [] } = useQuery(["books"], () => getBooks());
  const [updatePayload, setUpdatePayload] = useState({});

  const queryClient = useQueryClient();

  const onSuccess = (data) => {
    if (data.code === "ERR_BAD_RESPONSE") {
      throw new Error(data.message);
    }
    // Invalidar la query para que se vuelva a hacer la petición
    queryClient.invalidateQueries("books");
  };

  // hook de react-query para hacer un POST a la API
  const { mutate: createMutate, isError } = useMutation({
    mutationFn: (data) => createBook({ payload: data }),
    onSuccess,
  });

  // hook de react-query para hacer un DELETE a la API
  const { mutate: deleteMutate } = useMutation({
    mutationFn: (payload) => deleteBook(payload),
    onSuccess,
  });

  // hook de react-query para hacer un PUT a la API
  const { mutate: updateMutate } = useMutation({
    mutationFn: (data) => updateBook({ payload: data }),
    onSuccess,
  });

  if (data.message) {
    return <p>{data.message} - el backend esta corriendo?</p>;
  }

  if (!data) {
    return <p>No hay libros</p>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <BookList
            data={data}
            deleteMutate={deleteMutate}
            setIsUpdate={setUpdatePayload}
          />
        </Col>
        <Col>
          <BookForm onSubmit={createMutate} defaultValues={{}} />
        </Col>
      </Row>

      <Modal show={!isEmpty(updatePayload)} onHide={() => setUpdatePayload({})}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BookForm onSubmit={updateMutate} defaultValues={updatePayload} />
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
      {isError && (
        <Alert key="danger" variant="danger">
          Error on submit the book
        </Alert>
      )}
    </Container>
  );
};

export default Books;
