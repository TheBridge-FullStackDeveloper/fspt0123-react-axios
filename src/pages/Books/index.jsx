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
  const { data } = useQuery(["books"], () => getBooks());
  const [updatePayload, setUpdatePayload] = useState({});

  const queryClient = useQueryClient();

  const { mutate: createMutate, isError } = useMutation({
    mutationFn: (data) => {
      createBook({ payload: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: (payload) => deleteBook(payload),
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  const { mutate: updateMutate } = useMutation({
    mutationFn: (data) => updateBook({ payload: data }),
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  if (!data) {
    return <p>No hay libros</p>;
  }

  return (
    <div>
      <BookList
        data={data}
        deleteMutate={deleteMutate}
        setIsUpdate={setUpdatePayload}
      />
      <BookForm onSubmit={createMutate} defaultValues={{}} />
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
    </div>
  );
};

export default Books;
