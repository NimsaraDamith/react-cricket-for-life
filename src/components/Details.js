import React, {Component} from 'react';
import {ProductConsumer} from "../Context";
import {ProductProvider} from "../Context";
import {Link} from "react-router-dom";
export  default  class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart}=value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*title ends*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="img" className="img-fluid"/>
                                </div>
                                {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-blod mt-3 mb-0">
                                        Info about the " {title} " :
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*button*/}
                                    <Link to="/">
                                        <button className="cartButton">
                                            Back to product
                                        </button>
                                    </Link>
                                    <button className="cartButton AddTocartButton" disabled={inCart?true:false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                    >
                                        {inCart?"inCart" :"add to cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

