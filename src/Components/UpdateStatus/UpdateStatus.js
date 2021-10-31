import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';


const UpdateStatus = () => {

    const { id } = useParams()
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [updatedOrders, setUpdatedOrders] = useState({});

    const onSubmit = (data) => {
        
        console.log(updatedOrders.status)
        console.log(data.status)
        updatedOrders.status = data.status;
        console.log(updatedOrders)


        fetch(`https://boiling-sierra-33157.herokuapp.com/update-status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedOrders)
        }).then(res =>{
            res.json()
        }).then(data => {
            alert('Update success');
            history.push('/manage-orders')
        });
        

        // console.log(updatedOrders, data)
    };


    const url = `https://boiling-sierra-33157.herokuapp.com/orders/${id}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdatedOrders(data))
    }, [updatedOrders])


    return (
        <div className="my-5">
            <h1 className="text-center services__heading">Update The Status of travel to <span className="underline-highlight ">{updatedOrders?.service_name}</span></h1>
        
            <div className="my-5 container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1">
                <div key={updatedOrders?._id} style={{"textDecoration": "none"}} className="text-left col d-flex flex-column justify-content-between align-items-start py-5">
                                <div>
                                    <div className="service__icon_container">
                                    {/* <i className={`${img} fa-3x services__icon`}></i> */}
                                    <img src={updatedOrders?.img} alt="" className="img-fluid service__img"/>
                                    </div>
                                    <h4 className="my-3">{updatedOrders?.service_name} <span className="badge bg-warning">{updatedOrders?.status}</span></h4>
                                    <p>{updatedOrders?.subtitle}</p>
                                    <h3><b>${updatedOrders?.price}</b></h3>
                                    <p>Ordered by: {updatedOrders?.email}</p>


                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <span className="fw-bold">Mark Order As:</span> <select {...register("status")}>
                                            <option value="Pending" defaultValue>Pending</option>
                                            <option value="Processing">Processing</option>
                                            <option value="Completed">Completed</option>
                                        </select><br /><br />
                                        <input type="submit" className="btn btn-secondary"/>
                                    </form>
                                </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatus;