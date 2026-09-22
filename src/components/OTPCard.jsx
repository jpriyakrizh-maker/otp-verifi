import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

import OTPInput from "./OTPInput";

function OTPCard({ otp, generateOTP, verifyOTP }) {
  return (
    <motion.section
      className="otp-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="card-top">

        <div className="brand-area">
          <div className="brand-icon">
            <ShieldCheck size={21} />
          </div>

          <div>
            <h3>NEXORA</h3>
            <p>IDENTITY PROTECTION</p>
          </div>
        </div>

        <div className="secure-badge">
          <Sparkles size={13} />
          SECURE
        </div>

      </div>

      <div className="card-heading">
        <p className="section-number">01 / AUTHENTICATION</p>

        <h2>Verify Number</h2>

        <p>
          Enter the one-time code sent to
          <strong> +91 98401 *** 810</strong>
        </p>
      </div>

      <OTPInput otp={otp} />

      <div className="code-message">

        <div className="message-content">
          <span className="message-label">VERIFICATION CODE</span>

          <p>
            {otp
              ? `NEXORA — ${otp} is your verification code`
              : "Generate your secure verification code"}
          </p>
        </div>

        <motion.button
          className="generate-btn"
          onClick={generateOTP}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Sparkles size={15} />
          {otp ? "Regenerate" : "Get OTP"}
        </motion.button>

      </div>

      <motion.button
        className="verify-btn"
        onClick={verifyOTP}
        disabled={!otp}
        whileHover={otp ? { scale: 1.02 } : {}}
        whileTap={otp ? { scale: 0.98 } : {}}
      >
        Verify OTP
        <ArrowRight size={17} />
      </motion.button>

      <div className="card-bottom">
        Your code is valid for this session only.
      </div>

    </motion.section>
  );
}

export default OTPCard;