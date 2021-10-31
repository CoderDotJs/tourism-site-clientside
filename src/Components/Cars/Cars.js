import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Cars = () => {

    // using state to save cars data 

    const [cars, setCars] = useState([])
    const { isLoading, setIsLoading} = useAuth();

    // getting the cars data from server 

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://boiling-sierra-33157.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => {
            setCars(data)
            setIsLoading(false)
        })
    }, [])

    console.log('all cars', cars)
    return (
       <div>
            <h1 className="text-center fw-bold my-5 services__heading">Find A Perfect <span className="underline-highlight">Car</span></h1>
            

            {
                isLoading
                ?
                <div className="text-center my-5"><Spinner className="my-5" animation="border" variant="primary" className="text-center"/></div> 
                :
                <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto my-5">
                    {
                        cars.map((car)=>{
                            return(
                                <div className="col" key={car.name}>
                                    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
                                      <img src={car.image.original} className="card-img-top img-fluid w-75 d-block mx-auto" alt="..."/>
                                      <div className="card-body">
                                        <h5 className="card-title text-center">{car.name}</h5>
                                      </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }


       </div>
    );
};

export default Cars;