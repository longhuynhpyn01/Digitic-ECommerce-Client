import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const SignUp = () => {
    return (
        <>
            <Meta title="Sign Up" />
            <BreadCrumb title="Sign Up" />
            <Container class1="auth-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="title text-center mb-3">Sign Up</h3>
                            <form
                                action=""
                                className="d-flex flex-column gap-15"
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile phone"
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SignUp;
