
/**
 * *Loader in Lazy Loading
 */
import React from 'react'

export default function Loader() {
    return (
        <>
            <span className="placeholder col-12 placeholder-lg"></span>


            <table className="table container">
                <thead>
                    <tr style={{ backgroundColor: "#dee2e6" }}>
                        <th scope="col"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <th scope="col"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <th scope="col"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <th scope="col"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <th scope="col"><span className="placeholder col-12 placeholder-lg"></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: "rgb(199 199 199)" }}>
                        <th scope="row"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                    </tr>
                    <tr style={{ backgroundColor: "#dee2e6" }}>
                        <th scope="row"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                    </tr>
                    <tr style={{ backgroundColor: "rgb(199 199 199)" }}>
                        <th scope="row"><span className="placeholder col-12 placeholder-lg"></span></th>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                        <td><span className="placeholder col-12 placeholder-lg"></span></td>
                    </tr>
                </tbody>
            </table>
        </>


    )
}
