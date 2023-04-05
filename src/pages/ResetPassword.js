import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
    return (
        <>
            <Meta title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <Container class1="auth-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="title text-center mb-3">
                                Reset Password
                            </h3>
                            <form
                                action=""
                                className="d-flex flex-column gap-15"
                            >
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <CustomInput
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                                <div>
                                    <div className="d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0">
                                            Ok
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

export default ResetPassword;
