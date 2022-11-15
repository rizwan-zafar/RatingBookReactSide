import React from "react";
import { insertData } from "../servieces";
import { allRatedBooksContext } from "../ContextApis/allRatedBooksContext"

function Form() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [bookName, setBookName] = React.useState('');
    const [rating, setRating] = React.useState("Select Rating");
    const { allRatedBookContextData, setBooks } = React.useContext(allRatedBooksContext)

    /**
     * * Book Submit
     * @params onClick Handler
     * @returns update allBook Context 
     */
    async function submitHandler(e) {
        e.preventDefault()
        if (rating === "Select Rating") {
            alert("Select the Rating")
            return false
        }
        else {
            const data = {
                name: name,
                book: bookName,
                rating: rating,
            }
            let submitedData = await insertData(data)
            if (submitedData) {
                const updatedContextData = allRatedBookContextData.push(submitedData);
                setBooks(updatedContextData)
                setName('')
                setBookName('')
                setEmail('')
                setRating('Select the Rating')

            }

        }


    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="contact_form-container">
                    <div>
                        <div>
                            <input type="text" placeholder="Your Name" value={name} required={true} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required={true} />
                        </div>
                        <div>
                            <input type="text" placeholder="Book Name" value={bookName} required={true} onChange={(e) => { setBookName(e.target.value) }} />
                        </div>
                        <div className="dropdown" >
                            <a className="btn btn-secondary dropdown-toggle" style={{ width: "100%" }} href="/#" role="button" data-toggle="dropdown" aria-expanded="false">
                                {rating}
                            </a>

                            <div className="dropdown-menu" style={{ width: "100%" }}>
                                <p className="dropdown-item" onClick={() => { setRating(5) }}>⭐⭐⭐⭐⭐</p>
                                <p className="dropdown-item" onClick={() => { setRating(4) }} >⭐⭐⭐⭐</p>
                                <p className="dropdown-item" onClick={() => { setRating(3) }}>⭐⭐⭐</p>
                                <p className="dropdown-item" onClick={() => { setRating(2) }}>⭐⭐</p>
                                <p className="dropdown-item" onClick={() => { setRating(1) }}>⭐</p>
                            </div>
                        </div>
                        <div>
                            <button type="submit">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
