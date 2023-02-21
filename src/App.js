import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "@firebase/auth";
import firebase from "./firebase";

const auth = getAuth();

export default function App() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [conf, setConf] = useState();

  useEffect(() => {
    window.recaptcha = new RecaptchaVerifier("captcha", {}, auth);
    window.recaptcha.render().then((widget) => {
      window.authWidget = widget;
    });
  }, []);

  const signing = () => {
    signInWithPhoneNumber(auth, code + phone, window.recaptcha)
      .then((confirmationCode) => {
        setConf(confirmationCode);
        // console.log(confirmationCode);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifying = () => {
    conf
      .confirm(otp)
      .then((res) => {
        console.log(`Succesfully Loged in`);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authView = () => {
    return (
      <div>
        <h2>Sign in to Whatsapp</h2>
        <h2>Enter your phone number</h2>
        <div>
          <select
            value={code}
            onChange={(event) => setCode(event.target.value)}
          >
            {Countries.map((elm, idx) => {
              return (
                <option key={idx} value={elm.Iso}>
                  {elm.Iso}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="000 000 0000"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className={`captchas`} id={`captcha`}></div>
        <button onClick={signing}>Continue</button>
      </div>
    );
  };
  const verifyView = () => {
    return (
      <div>
        <h2>Verify Phone Number</h2>
        <h2>
          We have sent an verification code to <span>{code + phone}</span>
        </h2>
        <div>
          <input
            type="text"
            placeholder="Enter Code Here"
            value={otp}
            onChange={(evt) => {
              setOtp(evt.target.value);
            }}
          />
        </div>
        <button onClick={verifying}>Submit</button>
      </div>
    );
  };
  return conf ? verifyView() : authView();
}
