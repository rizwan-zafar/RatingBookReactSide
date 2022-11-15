import axios from "axios"


    /**
     * *Fetching all books from DB
     * @returns promise of all books
     */
    export const getAllRatedBooks = async () => {
    try{
        const { data } = await axios.get('http://localhost:1000/books/api/v1')
        return data
    }
    catch(e)
    {
        console.log("Error "+e)
    }
    }




    /**
     * *Searching Book in DB
     * @params name of book in string
     * @returns promise of found book
     */
    export async function SearchingBooks(e) {
    try{ 
        const { data } = await axios.get('http://localhost:1000/books/api/v1/search/' + e.target.value)
        return data;
        }
        catch(e)
        {
            console.log("Error "+e)
        }

    }



    /**
     * *Deleting Book in DB
     * @params Book ID
     * @returns promise confirmation msg
     */
    export async function deleteDataService(_id) {
        try {   
            if (_id) {

                const { data } = await axios.delete('http://localhost:1000/books/api/v1/' + _id)
                return data;
            }

        }
        catch (e) {
            console.log("Error" + e)
        }

    }



    /**
     * *Insert Book in DB
     * @params Body 
     * @returns promise confirmation msg
     */
    export async function insertData(data) {

        const requestBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                book: data.book,
                rating: data.rating,
            })
        };

        try {
            let res = await fetch("http://localhost:1000/books/api/v1", requestBody);
            let resJson = await res.json();
            if (res.status === 200) {
                alert("Data Submited Successfully")
                return resJson;
            } else {
                alert("Someting Went To Wrong")
            }
        } catch (err) {
            console.log("Error" + err);
        }
        console.log("iam insert data")

    }



    /**
     * *Updating Book in DB
     * @params Book ID
     * @returns promise confirmation msg
     */
    export async function updateData(data) {
        const _id = data._id;
        console.log("id", _id)
        const requestBody = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                book: data.book,
                rating: data.rating,
            })
        };
        try {
            let res = await fetch("http://localhost:1000/books/api/v1/" + _id, requestBody);
            let resJson = await res.json();
            console.log("rejson", resJson)
            if (res.status === 200) {
                alert("Data Updated Successfully")
                return resJson;
            } else {
                alert("Someting Went To Wrong")
            }
        } catch (err) {
            console.log("Error" + err);
        }

    }

