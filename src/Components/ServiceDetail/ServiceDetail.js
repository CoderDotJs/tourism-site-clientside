import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Card from '../Card/Card';

const ServiceDetail = () => {

        // get the parameter form the url 

    const {service_name} = useParams();

    console.log(service_name)
        // state management with state 

    const [service, setService] = useState([])


        // fetching json data 

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[]);

    // filter the clicked data and show them 

    // const filterdService = service.filter(ser=>{
    //     return ser.service_name.toLowerCase() === service_name.toLowerCase()
    // })

    // console.log(filterdService)

    return (

            // show the doctors that mathes the type on click on services 

        <div>
            <h1 className="text-center fw-bold my-5 services__heading">The Doctors of <span className="underline-highlight">{service_name.toUpperCase()}</span></h1>
        <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4 my-5">

            {/* dynamic data show form the clicked service  */}


            {/* {
                filterdService.map((ser)=>{
                    return (
                        <Card prop={ser} key={ser.id}></Card>
                    )
                })
            } */}
        </div>
        </div>
    );
};

export default ServiceDetail;