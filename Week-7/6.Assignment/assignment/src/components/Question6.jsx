import { useState } from "react";

export function Question6(){
    const [otpSent, setOtpSent] = useState(false);

    const renderPage = () => {
        return otpSent ? <OTPpage /> : <LoginPage sendOtp={() => setOtpSent(true)}/>;
    };

    return (
        <div>
            <h2>Login via OTP</h2>
            <div>{renderPage()}</div>
        </div>
    );
}

function LoginPage({ sendOtp }) {
    return (
        <div>
            <div>
                <input type = "number" placeholder="Enter your mobile number" />
            </div>
            <div>
                <button onClick={sendOtp}>Send OTP</button>
            </div>
        </div>
    );
}

function OTPpage() {
    return (
        <div>
            <div>
                <input placeholder="Enter OTP" />
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
}
