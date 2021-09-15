import React, { useState } from "react";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function Main() {
  const [store, setStore] = useState([])
  // const[workingHours,setworkingHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  // const [sales ,setSale]=useState([])
  function handleForm(event) {
    event.preventDefault();
    const store_loc = {
      Location: event.target.Location.value,
      Minimum: event.target.Minimum.value,
      Maximum: event.target.Maximum.value,
      Average: event.target.Average.value
    }

    const hours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
 
    const hourly_sales=hours.map(()=>{
      return Math.floor((store_loc.Average*((Math.random()*(store_loc.Maximum-store_loc.Minimum)+store_loc.Minimum))))
    })
    // console.log(hourly_sales)

           
    const objectData={
      Location:event.target.Location.value,
      hourly_sales:hourly_sales,
      sum:hourly_sales.reduce((a, b) => a + b, 0)
      
    }
    setStore(store => [...store, objectData])

  }
      return (
        <div>
          <CreateForm handleForm={handleForm}/>
          <ReportTable store={store}/>
        </div>
 
  )
}