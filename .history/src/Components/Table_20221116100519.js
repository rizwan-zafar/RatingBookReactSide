import React from "react";
import { SearchingBooks, updateData, getAllRatedBooks } from "../servieces";
import { deleteDataService } from "../servieces";
import { allRatedBooksContext } from "../ContextApis/allRatedBooksContext";

function Table() {
  const { allRatedBookContextData } = React.useContext(allRatedBooksContext);
  const [ratedBooks, setRatedBooks] = React.useState(allRatedBookContextData);
  const [sorting, setSorting] = React.useState();

  /**
   * *States to Update Record
   */
  const [_id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [bookName, setBookName] = React.useState("");
  const [rating, setRating] = React.useState("Select Rating");

  /**
   * *Seting allratedContext in State
   * @params AllratedContext Data
   */
  function setingData(data) {
    if (data) {
      setRatedBooks(data);
    }
    console.log("seting Data");
  }

  /**
   * *Sorting in Asc/Desc
   */
  function sortingArray() {
    if (sorting === "A") {
      ratedBooks.sort((p1, p2) =>
        p1.rating < p2.rating ? 1 : p1.rating > p2.rating ? -1 : 0
      );
    } else if (sorting === "D") {
      ratedBooks.sort((p1, p2) =>
        p1.rating > p2.rating ? 1 : p1.rating < p2.rating ? -1 : 0
      );
    }
  }

  sortingArray();

  /**
   * *Searching book with name
   * @params name of book
   */
  async function getData(e) {
    try {
      if (e.target.value) {
        const { data } = await SearchingBooks(e);
        setRatedBooks(data);
      } else {
        setingData(allRatedBookContextData);
      }
    } catch (e) {
      console.log("Error" + e);
    }
    console.log("getData");
  }

  /**
   * *Delete Ratedbook Promis call
   * @params book id
   */
  async function deleteData(_id) {
    try {
      alert("Do you really want to Delete Book ?");
      if (_id) {
        const { data } = await deleteDataService(_id);
        const dataAfterDelete = ratedBooks.filter((item) => {
          return item._id !== data;
        });
        setRatedBooks(dataAfterDelete);
      }
    } catch (e) {
      console.log("Error" + e);
    }
    console.log("Deleted Data");
  }

  /**
   * *Edit  Book
   * @params book id
   */
  function editHandler(_id) {
    const data = ratedBooks.find((item) => {
      return item._id === _id;
    });

    setId(data._id);
    setName(data.name);
    setBookName(data.book);
    setRating(data.rating);
  }

  /**
   * *Submit Update Form Promis call
   * @params onClick Handler
   */
  async function updateHandler(e) {
    e.preventDefault();
    if (rating === "Select Rating") {
      alert("Select the Rating");
      return false;
    } else {
      const data = {
        _id: _id,
        name: name,
        book: bookName,
        rating: rating,
      };
      const ack_update = await updateData(data);
      if (ack_update) {
        const updated = await getAllRatedBooks();
        console.log("check upate", updated);
        setRatedBooks(updated.data);
      }
    }
  }

  return (
    <div>
      <section className="contact_section layout_padding-bottom tableContainer">
        <div className="container-fluid">
          <br /> <br /> <br />
          <div className="row">
            <div className="offset-lg-2 col-md-10 offset-md-1">
              <div className="heading_container">
                <hr />
                <h2>LIST OF PUBLIC VIEWS</h2>
              </div>
            </div>
          </div>
          <br /> <br />
          <br />
          <div className="d-flex justify-content-between container ">
            <div className="input-group mb-3 col-lg-4">
              <input
                type="text"
                className="form-control"
                placeholder="Book"
                aria-label="Username"
                onChange={(e) => getData(e)}
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle btn-lg mt-2"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By Rating
              </button>
              <div className="dropdown-menu">
                <p
                  className="dropdown-item"
                  onClick={() => {
                    setSorting("A");
                  }}
                >
                  Ascending{" "}
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => {
                    setSorting("D");
                  }}
                >
                  Descending{" "}
                </p>
              </div>
            </div>
          </div>
          <div className>
          <table className="table table-striped table-light container">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Books</th>
                <th scope="col" className="text-center">
                  Rating
                </th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {ratedBooks
                ? ratedBooks.map((ratedBook, key) => {
                    return (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{ratedBook.name}</td>
                        <td>{ratedBook.book}</td>
                        <td className="text-center">
                          {Array.from(Array(ratedBook.rating)).map(
                            (_, i) => "⭐"
                          )}
                        </td>
                        <td className="d-flex justify-content-around">
                          <i
                            className="fa-solid fa-pen-to-square"
                            onClick={() => {
                              editHandler(ratedBook._id);
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          ></i>
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteData(ratedBook._id)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })
                : "loading. . . "}
            </tbody>
          </table>
          </div>
          {/* popup modal */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Update Book
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* FORM IN MAODAL FOR UPDATE  */}
                  <div>
                    <form onSubmit={updateHandler}>
                      <div className="contact_form-container">
                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Your Name"
                              value={name}
                              required={true}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              placeholder="Book Name"
                              value={bookName}
                              required={true}
                              onChange={(e) => {
                                setBookName(e.target.value);
                              }}
                            />
                          </div>
                          <div>
                            <input type="hidden" value={_id} />
                          </div>
                          <div className="dropdown">
                            <a
                              className="btn btn-secondary dropdown-toggle"
                              style={{ width: "100%" }}
                              href="/#"
                              role="button"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {rating}
                            </a>

                            <div
                              className="dropdown-menu"
                              style={{ width: "100%" }}
                            >
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  setRating(5);
                                }}
                              >
                                ⭐⭐⭐⭐⭐
                              </p>
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  setRating(4);
                                }}
                              >
                                ⭐⭐⭐⭐
                              </p>
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  setRating(3);
                                }}
                              >
                                ⭐⭐⭐
                              </p>
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  setRating(2);
                                }}
                              >
                                ⭐⭐
                              </p>
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  setRating(1);
                                }}
                              >
                                ⭐
                              </p>
                            </div>
                          </div>
                          <div>
                            <button type="submit">
                              <span data-dismiss="modal">Send</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end popup modal */}
        </div>
      </section>
    </div>
  );
}

export default Table;
