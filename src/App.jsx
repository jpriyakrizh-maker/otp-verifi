import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OTPCard from "./components/OTPCard";
import VerifiedCard from "./components/VerifiedCard";

import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const generateOTP = () => {
    const newOtp = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    setOtp(newOtp);
    setIsVerified(false);
  };

  const verifyOTP = () => {
    if (otp.length === 4) {
      setIsVerified(true);
    }
  };

  const resetOTP = () => {
    setOtp("");
    setIsVerified(false);
  };

  return (
    <main className="app">

      <div className="aurora aurora-one"></div>
      <div className="aurora aurora-two"></div>

      <motion.div
        className="app-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >


        <h1 className="main-title">
          OTP <span>Verification</span>
        </h1>

        <p className="main-subtitle">
          Verify your identity with a secure one-time code.
        </p>

        <AnimatePresence mode="wait">

          {!isVerified ? (

            <motion.div
              key="otp"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <OTPCard
                otp={otp}
                generateOTP={generateOTP}
                verifyOTP={verifyOTP}
              />
            </motion.div>

          ) : (

            <motion.div
              key="verified"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <VerifiedCard resetOTP={resetOTP} />
            </motion.div>

          )}

        </AnimatePresence>

        <p className="footer-text">
          POWERED BY <span>NEXORA SECURITY</span>
        </p>

      </motion.div>

    </main>
  );
}

export default App;