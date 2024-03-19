import express from "express";
import mysql from "mysql";
const app = express();
const port = 8080;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "petShop",
  database: "test",
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  const q = "select * from books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.send(data);
  });
});

app.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const q = "select * from books where id =?";
  db.query(q, bookId, (err, data) => {
    if (err) return res.json(err);
    res.send(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `decs`,`cover`) VALUES(?)";
  const values = [req.body.title, req.body.decs, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    res.send(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM books WHERE id=?";
  db.query(q, id, (err, data) => {
    if (err) return res.json(err);
    res.send(data);
  });
});
