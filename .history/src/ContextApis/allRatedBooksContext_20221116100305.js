
import React from 'react'
import { createContext } from "react";
import { getAllRatedBooks } from "../servieces"
export const allRatedBooksContext = createContext();

export default function BooksContext({ children }) {
    const [allRatedBookContextData, setBooks] = React.useState("nothing")

    /**
    * *get allRattedbook Promis call
    */
    const fillData = async () => {
        const { data } = await getAllRatedBooks()
        setBooks(data)
    }

    React.useEffect(() => {
        fillData()
    }, [])


    if (allRatedBookContextData !== "nothing") {
        return (
            <allRatedBooksContext.Provider value={{ allRatedBookContextData, setBooks }}>{children}</allRatedBooksContext.Provider>
        )

    }
}
