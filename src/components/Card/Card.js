import React from 'react';

const Card = (props) => {
    const {name, description, img} = props.info;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer d-flex justify-content-center border-0 bg-white">
                <button type="button" class="btn btn-primary">Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Card;