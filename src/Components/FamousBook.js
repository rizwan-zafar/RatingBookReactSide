const famousBooks = [
  {
    image: "f-1.jpg",
    book: "HISTORY",
    link: "https://www.bookrix.com/book.html?bookID=pze440c6ab16e95_1512565158.0799920559#0,558,728280",
  },
  {
    image: "f-2.jpg",
    book: "GAT GENERAL",
    link: "https://www.bookrix.com/book.html?bookID=pze440c6ab16e95_1512565158.0799920559#0,558,728280",
  },
  {
    image: "f-3.png",
    book: "BACKYARD",
    link: "https://www.bookrix.com/book.html?bookID=pze440c6ab16e95_1512565158.0799920559#0,558,728280",
  },
  {
    image: "f-4.jpeg",
    book: "History",
    link: "https://www.bookrix.com/book.html?bookID=pze440c6ab16e95_1512565158.0799920559#0,558,728280",
  },
  {
    image: "f-5.jpg",
    book: "REACT NATIVE",
    link: "https://www.bookrix.com/book.html?bookID=pze440c6ab16e95_1512565158.0799920559#0,558,728280",
  },
  {
    image: "f-6.jpg",
    book: "NIGHT",
    link: "https://www.bookrix.com/book.html?bookID=pze440c6ab16e95_1512565158.0799920559#0,558,728280",
  },
];
function FamousBook() {
  return (
    <div>
      <section className="fruit_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <hr />
            <h2>MOST RED IN 2022</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
            {famousBooks ? (
              famousBooks.map((books, key) => {
                return (
                  <div className="box" key={key}>
                    <img src={"assests/images/" + books.image} alt="" />
                    <div className="link_box">
                      <h5>{books.book}</h5>
                      <a href={books.link} target="_blank" rel="noreferrer">
                        {" "}
                        READ BOOK ONLINE{" "}
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading . . .</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FamousBook;
