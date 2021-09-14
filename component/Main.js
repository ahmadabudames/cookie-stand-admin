import React, { useState } from "react";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function Main() {
    const [store, setStore] = useState([])
    function handelForm(event) {
        event.preventDefault();
        const cityStore = {
            Location: event.target.Location.value,
            Minimum: event.target.Minimum.value,
            Maximum: event.target.Maximum.value,
            Average: event.target.Average.value
        }
        let string = cityStore
        string = JSON.stringify(string)
        setStore(string)
    }
    return (
        <div>
           <CreateForm handelForm={handelForm}/>
           <ReportTable/>
        </div>
    )
}
