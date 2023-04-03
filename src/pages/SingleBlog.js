import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
    return (
        <>
            <Meta title="Dynamic Blog Name" />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className="single-blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link
                                    to="/blogs"
                                    className="d-flex align-items-center gap-10"
                                >
                                    <HiOutlineArrowLeft className="fs-5" /> Go
                                    back to Blogs
                                </Link>
                                <h3 className="title">
                                    A Beautiful Sunday Morning Renaissanse
                                </h3>
                                <img
                                    src="/images/blog-1.jpg"
                                    alt="blog"
                                    className="img-fluid w-100 my-4"
                                />
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aperiam dolores ut ipsam
                                    doloremque, excepturi veritatis delectus
                                    mollitia consequatur eligendi? Quia dolores
                                    atque similique necessitatibus optio, earum
                                    sequi dicta deserunt nihil!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
