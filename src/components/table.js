import React, { useState } from "react";
import Iframes from "./iframes";
import './table.css'

const Table = () => {
    const [image, setImage] = useState(null);

    return (
        <div className="container-fluid">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date of Last feeding</th>
                        <th scope="col">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="cursor" onClick={() => {
                            setImage('dog')
                        }}>Dog</td>
                        <td>09/04/2024</td>
                        <td>25kg</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td className="cursor" onClick={() => {
                            setImage('cat')
                        }}>cat</td>
                        <td>05/04/2024</td>
                        <td>15kg</td>
                    </tr>
                    <tr>
                        <th  scope="row">3</th>
                        <td className="cursor" onClick={() => {
                            setImage('cow')
                        }}>cow</td>
                        <td>07/04/2024</td>
                        <td>125kg</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div><Iframes image={image} /></div>
        </div>
    );
};

export default Table;
