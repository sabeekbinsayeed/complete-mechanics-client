import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${service._id}`}>     <button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;