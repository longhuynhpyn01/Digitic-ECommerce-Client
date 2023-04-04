import React from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Color from "../components/Color";

const SingleProduct = () => {
    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
    };
    const [orderedProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log("text", text);
        let textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-image-2">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Kids headphones bulk 10 pack multi
                                        colored for students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">
                                            ( 2 Reviews )
                                        </p>
                                    </div>
                                    <a href="#review" className="review-btn">
                                        Write a Review
                                    </a>
                                </div>
                                <div className="my-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Type:{" "}
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Brand:{" "}
                                        </h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Category:{" "}
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Tags:{" "}
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Availablity:{" "}
                                        </h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Size:{" "}
                                        </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                S
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                M
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XL
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XXL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Color:{" "}
                                        </h3>
                                        <Color />
                                    </div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Quantity:{" "}
                                        </h3>
                                        <div>
                                            <input
                                                type="number"
                                                name="quantity"
                                                id=""
                                                defaultValue="1"
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{ width: "70px" }}
                                            />
                                        </div>
                                        <div className="d-flex align-items-center gap-30">
                                            <button className="button border-0">
                                                Add To Cart
                                            </button>
                                            <button className="button signup">
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center">
                                        <div>
                                            {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                            <a href="">
                                                <TbGitCompare className="fs-5 me-2" />
                                                Add To Compare
                                            </a>
                                        </div>
                                        <div>
                                            {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                            <a href="">
                                                <AiOutlineHeart className="fs-5 me-2" />
                                                Add To Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-3">
                                        <h3 className="product-heading">
                                            Shipping & Returns:{" "}
                                        </h3>
                                        <p className="product-data">
                                            Free shipping and returns available
                                            on all orders. We ship all US
                                            domestic orders within{" "}
                                            <b>5-10 business days!</b>
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">
                                            Product Link:{" "}
                                        </h3>
                                        {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                        <a
                                            /* eslint-disable no-script-url */
                                            href="javascript:void(0);"
                                            onClick={() => {
                                                copyToClipboard(
                                                    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                );
                                            }}
                                        >
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus sint enim
                                    voluptate, exercitationem eum a totam fugiat
                                    qui corporis repudiandae, dignissimos sunt
                                    facilis magnam animi, blanditiis quas minus
                                    tempora? Alias!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review">Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">
                                            Customer Reviews
                                        </h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">
                                                Based on 2 Reviews
                                            </p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="text-dark text-decoration-underline"
                                                href="#"
                                            >
                                                Write a Review
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form py-4">
                                    <h4 className="mb-2">Write a Reviews</h4>
                                    <form
                                        action=""
                                        className="d-flex flex-column gap-15"
                                    >
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className="w-100 form-control"
                                                cols={30}
                                                rows={4}
                                                placeholder="Comments"
                                            />
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-end">
                                                <button className="button border-0">
                                                    Submit Review
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">
                                                Long Huynhhh
                                            </h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Ex,
                                            sint, veritatis est corrupti
                                            repudiandae aperiam assumenda minima
                                            labore fugiat nesciunt obcaecati
                                            nihil mollitia. Libero laborum dolor
                                            reiciendis nisi! Autem, magnam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 popular-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
