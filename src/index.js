import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const BookList = () => {
  return (
    <section className="Body">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Img />
      <Author />
      <br />
      <Title />
    </article>
  );
};
//jsx inline styles
const Author = () => <h2 style={{ color: "orange" }}>Abuthair</h2>;
const Title = () => "How to Become Rich";
const Img = () => (
  <img
    src="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg"
    alt="img"
  />
);

ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
