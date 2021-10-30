import React, { useEffect,  useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css'

const PlaceOreder = () => {

    const {service_name} = useParams();
    const history = useHistory()
    const [service, setService] = useState({})
    const {error, setError, user, status, setStatus} = useAuth();
    const { register, handleSubmit } = useForm()
    

    

    useEffect(()=>{
        fetch(`https://boiling-sierra-33157.herokuapp.com/services/place-order/${service_name}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[service_name]);


    
    // const filterdService = service.filter(ser=>{
    //         return ser._id.toString() === service_name.toString()
    //     })
    
    //     console.log(filterdService)

    //     const orderedData = filterdService[0]

    //     console.log(orderedData)

    //https://boiling-sierra-33157.herokuapp.com
    //https://boiling-sierra-33157.herokuapp.com

        const onSubmit = async (data, e) => {
            service.email = data.email;
            service.status = status;
            service._id = Number(service._id + 1);
            
            console.log('clicked')

            await fetch('https://boiling-sierra-33157.herokuapp.com/place-order',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)    
            })
            .then(res=>{
                if(!res.ok){
                    alert('connection error')
                }
                else{
                    console.log(res.json())
                    alert("Order Successful, Our agent will contact you shortly")
                    history.push('/my-orders')
                }
            }).then(data=>{
              console.log(data)
            }).catch((e)=>{
              setError(e.message)
              alert(error)
            })
        };

    return (
        <div className="container mx-auto my-5">
            <h1 className="text-center services__heading my-5"><span className="underline-highlight">Place</span> Order</h1>
            
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 h-100">
                    <div key={service?._id}>
                        <h1><b>Place:</b> <i>{service?.service_name}</i></h1>
                        <p><b>Duration:</b> <i>{service?.subtitle}</i></p>
                        <h2 className="my-3">${service?.price} </h2>
                        <img src={service?.img} alt="" className="img-fluid w-75 d-block mx-auto my-2"/>
                        <p><b>Short Description:</b> {service?.desc}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 h-100 d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <section className="order-form my-4 mx-4">
                        <div className="container pt-4">

                          <div className="row">
                            <div className="col-12">
                              <h1>Fill the form below</h1>
                              <span>with some explanation below</span>
                              <hr className="mt-1"/>
                            </div>
                            <div className="col-12">

                              <div className="row mx-4">
                                <div className="col-12 mb-2">
                                  <label className="order-form-label">Name</label>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <input className="order-form-input" {...register("name", { required: true })} placeholder="Your Name" value={user.displayName}/>
                                </div>
                                <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                  <input className="order-form-input" {...register("email", { required: true })} placeholder="Email" value={user.email}/>
                                </div>
                              </div>

                              <div className="row mt-3 mx-4">
                                <div className="col-12">
                                  <label className="order-form-label">Address</label>
                                </div>
                                <div className="col-12">
                                  <input className="order-form-input" {...register("address", { required: true })} placeholder="Street Address"/>
                                </div>
                                <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                  <input className="order-form-input" {...register("city", { required: true })} placeholder="City"/>
                                </div>
                                <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                  <input className="order-form-input" {...register("region", { required: true })} placeholder="Region"/>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-12">
                                  <input type="submit" value="Submit" className="btn btn-dark d-block mx-auto btn-submit"/>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOreder;