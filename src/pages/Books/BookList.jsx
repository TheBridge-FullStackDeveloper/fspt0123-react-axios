import React from "react";

export const BookList = ({ data, deleteMutate, setPayload }) => {
  return (
    <div>
      {data.map((book) => {
        return (
          <div key={book.id}>
            <p>
              {book.author} - {book.name} -{" "}
              <button
                onClick={() => {
                  deleteMutate({ bookId: book.id });
                }}
              >
                Delete
              </button>
              -
              <button
                onClick={() => {
                  setPayload({
                    author: book.author,
                    name: book.name,
                    isbn: book.isbn,
                    id: book.id,
                  });
                }}
              >
                Update
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};
