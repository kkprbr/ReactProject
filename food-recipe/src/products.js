import React from "react";

const Products = ({data}) => {
    return (
        <div>
            <div className="row">
                {data.map(data =>
                    <div className="col-md-4 recipe-container">
                        <div className="card" style={{"width": "22rem", "height": "37rem"}}>
                        <img className="card-img-top mb-3" src={data.recipe.image} alt="Card Image Cap"/>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">{data.recipe.label}</h5>
                                <p className="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                                <a href="#" className="btn btn-primary">Buy</a>
                            </center>
                        </div>
                        </div>
                        </div>
                )}
            </div>
        </div>
    )
}

export default Products;