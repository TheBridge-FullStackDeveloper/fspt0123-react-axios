import axios from "axios";

const getBooks = () => {
  return axios.get("http://localhost:3000/books").then((res) => res.data);
};

const createBook = ({ payload }) => {
  return axios
    .post("http://localhost:3000/books", payload)
    .then((res) => res.data);
};

const updateBook = ({ payload }) => {
  return axios
    .put("http://localhost:3000/books/" + payload.id, payload)
    .then((res) => res.data);
};

const deleteBook = ({ bookId }) => {
  return axios
    .delete("http://localhost:3000/books/" + bookId)
    .then((res) => res.data);
};

export { getBooks, createBook, deleteBook, updateBook };
