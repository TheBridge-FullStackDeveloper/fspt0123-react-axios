import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

// Componente per a mostrar la lista de libros
export const BookList = ({ data, deleteMutate, setIsUpdate }) => {
  return (
    <ListGroup>
      {data.map((book) => {
        return (
          <ListGroup.Item key={book.id}>
            <p>
              {book.author} - {book.name} -{" "}
              <Button
                onClick={() => {
                  deleteMutate({ bookId: book.id });
                }}
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                style={{ margin: "0 8px" }}
                onClick={() => {
                  setIsUpdate({
                    author: book.author,
                    name: book.name,
                    isbn: book.isbn,
                    id: book.id,
                  });
                }}
              >
                Update
              </Button>
            </p>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
