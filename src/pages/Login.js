import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Login = () => {
    return (
        <>
            <Meta title="Login" />
            <BreadCrumb title="Login" />
            <Container class1="auth-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="title text-center mb-3">Login</h3>
                            <form
                                action=""
                                className="d-flex flex-column gap-15"
                            >
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
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    <Link to="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                    <div className="d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0">
                                            Login
                                        </button>
                                        <Link
                                            to="/signup"
                                            className="button signup"
                                        >
                                            Signup
                                        </Link>
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

export default Login;
