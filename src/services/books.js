import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const getBooks = () => {
  return instance
    .get("/books")
    .then((res) => res.data)
    .catch((err) => err);
};

const createBook = ({ payload }) => {
  return instance
    .post("/books", payload)
    .then((res) => res.data)
    .catch((err) => err);
};

const updateBook = ({ payload }) => {
  return instance
    .put("/books/" + payload.id, payload)
    .then((res) => res.data)
    .catch((err) => err);
};

const deleteBook = ({ bookId }) => {
  return instance
    .delete("/books/" + bookId)
    .then((res) => res.data)
    .catch((err) => err);
};

export { getBooks, createBook, deleteBook, updateBook };
