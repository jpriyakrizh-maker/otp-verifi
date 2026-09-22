import { motion } from "framer-motion";

function OTPInput({ otp }) {
  return (
    <div className="otp-input-wrapper">

      <div className="otp-boxes">

        {[0, 1, 2, 3].map((index) => (

          <motion.div
            key={index}
            className={`otp-box ${otp[index] ? "active" : ""}`}
            animate={
              otp[index]
                ? {
                    scale: [1, 1.12, 1],
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
          >
            {otp[index] || (
              <span className="empty-dot">•</span>
            )}
          </motion.div>

        ))}

      </div>

      <div className="otp-status">
        <span className={otp ? "status-active" : ""}>
          {otp ? "CODE GENERATED" : "AWAITING CODE"}
        </span>

        <span>4 DIGITS</span>
      </div>

    </div>
  );
}

export default OTPInput;