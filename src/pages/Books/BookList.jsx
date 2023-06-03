import React from "react";
import Button from "react-bootstrap/Button";

export const BookList = ({ data, deleteMutate, setIsUpdate }) => {
  return (
    <div>
      {data.map((book) => {
        return (
          <div key={book.id}>
            <p>
              {book.author} - {book.name} -{" "}
              <Button
                onClick={() => {
                  deleteMutate({ bookId: book.id });
                }}
              >
                Delete
              </Button>
              -
              <Button
                variant="secondary"
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
          </div>
        );
      })}
    </div>
  );
};
