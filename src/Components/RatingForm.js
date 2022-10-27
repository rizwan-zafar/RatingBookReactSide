import React from "react";
import Form from "./Form";
import { allRatedBooksContext } from "../ContextApis/allRatedBooksContext"
const topRatedBooks = [
    {
        book: "Book 1",
        rating: "30%",
    },
    {
        book: "Book 2",
        rating: "90%",
    },
    {
        book: "Book 3",
        rating: "40%",
    }
]
function RatingForm() {
    const { allRatedBookContextData } = React.useContext(allRatedBooksContext)
    const [allBooks] = React.useState(allRatedBookContextData);

    /**
     * * Get TopRated Books
     */
    function getTopRatedData() {
        let totalbooks = null;
        if (allBooks) {
            totalbooks = allBooks.length;
            const topData = allBooks.filter((item) => {
                return item.rating === 5;
            })
            console.log("top Rating", topData)
            console.log("total record", totalbooks)
        }




    }


    getTopRatedData();


    return (
        <div>
            <section className="contact_section layout_padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="offset-lg-2 col-md-10 offset-md-1">
                            <div className="heading_container">
                                <hr />
                                <h2>
                                    RATE A BEST BOOK YOU RED IN 2022
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="layout_padding2-top">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1"><br />
                                <Form />
                            </div>
                            <div className="col-md-5 col-lg-5 px-0">
                                <div>
                                    <h2>Customre Reviews <strong>Top Rated % Books</strong></h2>

                                    {topRatedBooks ? topRatedBooks.map((book, key) => {
                                        return (<div key={key}>
                                            <strong>{book.book}</strong>
                                            <div className="progress" style={{ height: 35 }}  >
                                                <div className="progressBars" role="progressbar" style={{ width: book.rating }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{book.rating}</div>
                                            </div><br /></div>)
                                    }) : ""}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RatingForm;
