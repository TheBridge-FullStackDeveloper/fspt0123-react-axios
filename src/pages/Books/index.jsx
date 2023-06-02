import { useState } from "react";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../../services/books";
import { BookList } from "./BookList";
import Button from "react-bootstrap/Button";

const Books = () => {
  const { data } = useQuery(["books"], () => getBooks());

  const [payload, setPayload] = useState({});

  const queryClient = useQueryClient();

  const { mutate: createMutate } = useMutation({
    mutationFn: () => {
      createBook({ payload });
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
    mutationFn: () => updateBook({ payload }),
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
        setPayload={setPayload}
      />
      <div>
        <label htmlFor="">
          Author
          <input
            type="text"
            name="author"
            value={payload.author}
            onChange={(e) => {
              setPayload({
                ...payload,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Name
          <input
            value={payload.name}
            type="text"
            name="name"
            onChange={(e) => {
              setPayload({
                ...payload,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          isbn
          <input
            value={payload.isbn}
            type="text"
            name="isbn"
            onChange={(e) => {
              setPayload({
                ...payload,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </label>
      </div>
      <Button
        onClick={() => {
          createMutate();
        }}
        variant="secondary"
      >
        Submit
      </Button>
      <Button
        onClick={() => {
          updateMutate();
        }}
        variant="primary"
      >
        Update
      </Button>
    </div>
  );
};

export default Books;
