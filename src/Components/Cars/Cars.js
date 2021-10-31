import React, { useEffect, useState } from 'react';

const Cars = () => {

    // using state to save cars data 

    const [cars, setCars] = useState([])

    // getting the cars data from server 

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])

    console.log('all cars', cars)
    return (
       <div>
            <h1 className="text-center fw-bold my-5 services__heading">Find A Perfect <span className="underline-highlight">Car</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">


                        {/* adding cars dynamically  */}


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
       </div>
    );
};

export default Cars;