import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-image">
                <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
                <p className="date">1 Dec, 2022</p>
                <h5 className="title">
                    A Beautiful Sunday Morning Renaissance
                </h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    amet in a ipsa id suscipit, aliquam quaerat.
                </p>
                <Link to="#" className="button">
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
