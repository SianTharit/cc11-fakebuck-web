import { useContext, useRef, useState } from "react";
import { Modal } from "bootstrap";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";

function LoginForm() {
    const modalElement = useRef();
    const [modal, setModal] = useState(null);
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);

    const handleClickModal = () => {
        const modalObj = new Modal(modalElement.current);
        setModal(modalObj);
        modalObj.show();
    };

    const handleSubmitLogin = async (el) => {
        try {
            el.preventDefault();
            await login(emailOrPhone, password);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const closeModal = () => {
        modal.hide();
    };

    return (
        <>
            <form
                className="border border-1 shadow p-3 rounded-lg bg-white mx-auto max-w-99"
                onSubmit={handleSubmitLogin}
            >
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control rounded-md h-13"
                        placeholder="Email address or phone number"
                        value={emailOrPhone}
                        onChange={(el) => setEmailOrPhone(el.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control rounded-md h-13"
                        placeholder="Password"
                        value={password}
                        onChange={(el) => setPassword(el.target.value)}
                    />
                </div>
                <div className="mb-2 d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary rounded-md h-12 fw-bold text-4.5"
                    >
                        Log In
                    </button>
                </div>
                <div className="text-center">
                    <a href="/" className="text-decoration-none">
                        <small>Forgotten password?</small>
                    </a>
                </div>
                <hr className="hr-sm" />
                <div className="text-center tw-py-2.5">
                    <button
                        className="btn btn-green rounded-md h-12 fw-bold"
                        type="button"
                        onClick={handleClickModal}
                    >
                        Create New Account
                    </button>
                </div>
            </form>

            {/*------------ Modal คล้ายๆ 1 page ref ไปที่ modalElement โดยใช้ Hook useRef ------------*/}
            <div
                className="modal fade"
                id="modal-register"
                tabIndex="-1"
                ref={modalElement}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <RegisterForm closeModal={closeModal} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginForm;
