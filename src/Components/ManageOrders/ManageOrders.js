import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    const history = useHistory()
    
    

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/my-orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    // const filteredOrders = orders.filter((order)=> order.email.toString() === email.toString())

    // console.log(filteredOrders)

    const handleDelete = (id, status) =>{
        const procced = window.confirm("Do you want to Cancel this order?")

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
        console.log(id)
    }


    // const url = `https://boiling-sierra-33157.herokuapp.com/orders/${getId}`;


    // useEffect(()=>{
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setUpdatedOrder(data))
    // }, [])

    // console.log(updatedOrder)

    


    

    return (
        <div>
            <div id="services" className="my-5">
                <h1 className="text-center services__heading">You Got <span className="underline-highlight ">{orders?.length}</span> orders to Manage</h1>

                <p className="text-center my-3" style={{"color": "gray"}}>You can cancel these orders at any time, but cant cancel completed orders</p>

            <div className="container mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-sm-1">
                
                
                {
                    orders.map(order=>{
                        return (
                            <div key={order?._id}
                            style={{"textDecoration": "none"}}  
                            className="text-left col d-flex flex-column justify-content-between align-items-start py-5"
                            >
                            <div>
                                <div className="service__icon_container">
                                {/* <i className={`${img} fa-3x services__icon`}></i> */}
                                <img src={order?.img} alt="" className="img-fluid service__img"/>
                                </div>
                                <h4 className="my-3">{order?.service_name} <span className="badge bg-warning">{order?.status}</span></h4>
                                <p>{order?.subtitle}</p>
                                <h3><b>${order?.price}</b></h3>
                                <p>Ordered by: {order?.email}</p>
                                
                                
                                {
                                    order?.status === 'Completed' ? <h6 className="text-success">Can't Update after completed</h6>
                                    : 
                                    <Button as={Link} data-id={order?._id} to={`/update-status/${order?._id}`} 
                                    variant="secondary" 
                                    style={{"padding": "5px 15px", "background": "", "color": "white",         "textDecoration": "none"}} 
                                    >
                                    Update <i className="fas fa-edit"></i>
                                    </Button>
                                }
                                {
                                    order?.status === 'Completed' ? '' : <Button  
                                    variant="danger" 
                                    style={{"padding": "5px 15px", "background": "", "color": "white",  "textDecoration":                "none"}} onClick={(e)=>handleDelete (order?._id, order?.status)}
                                    >
                                    Cancel <i className="fas fa-window-close"></i>
                                    </Button>
                                }
                            </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        </div>
    );
};

export default ManageOrders;