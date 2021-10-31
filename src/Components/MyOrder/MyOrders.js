import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {


    // all state for save data 

    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const {email} = user;


    // get the data 

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/my-orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

        // filter the data to show the my orders for loged in mail 


    const filteredOrders = orders.filter((order)=> order.email.toString() === email.toString())

    console.log(filteredOrders)

    // handle delete btn for cancel the order 

    const handleDelete = (id, status) =>{
        const procced = window.confirm("Do you want to Cancel This order?")

        if(procced && status.toString() === 'Pending'){
            const url = `https://boiling-sierra-33157.herokuapp.com/cancel-order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const filtered = orders.filter((u)=> u._id !== id)
            setOrders(filtered)
            console.log(data)
        });
        }
        else if(procced && status.toString() === 'Processing'){
            alert(`Can't Cancel Processing Order`)
        }
        console.log(id)
    }

    return (
        <div>
            <div id="services" className="my-5">
            <h1 className="text-center services__heading">You Have Booked <span className="underline-highlight ">{filteredOrders.length}</span> Places To Travel</h1>

            <p className="text-center my-3" style={{"color": "gray"}}>You can cancel this orders before it becomes processing.</p>

            <div className="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1">
                


                    {/* dynamic data show on my orders  */}

                {
                    filteredOrders.map((order)=>{
                        return (
                            <div style={{"textDecoration": "none"}} className=" col d-flex flex-column justify-content-between align-items-start py-5">
                                <div className="service__icon_container">
                                    {/* <i className={`${img} fa-3x services__icon`}></i> */}
                                    <img src={order?.img} alt="" className="img-fluid service__img"/>
                                </div>
                                <h4 className="my-3">{order?.service_name} <span className="badge bg-warning">{order?.status}</span></h4>
                                <p>{order?.subtitle}</p>
                                <h3><b>${order?.price}</b></h3>
                                {
                                    order?.status.toString() === 'Completed' ? <h6 className="text-center text-success">Thanks for Traveling with us.</h6>
                                    :
                                    <Button  
                                    variant="danger" 
                                    style={{"padding": "5px 15px", "background": "", "color": "white",      "textDecoration":                "none"}} onClick={(e)  =>handleDelete (order?._id, order?.status)}
                                    >
                                    Cancel <i className="fas fa-window-close"></i>
                                    </Button>
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
            
        </div>
    );
};

export default MyOrders;