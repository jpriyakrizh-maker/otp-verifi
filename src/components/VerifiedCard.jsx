import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

function VerifiedCard({ resetOTP }) {
  return (
    <motion.section
      className="verified-card"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >

      <motion.div
        className="success-ring"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
        }}
      >
        <Check size={34} />
      </motion.div>

      <div className="verified-label">
        <ShieldCheck size={14} />
        AUTHENTICATION SUCCESSFUL
      </div>

      <h2>Number Verified</h2>

      <p>
        Your identity has been successfully verified.
        You can continue securely.
      </p>

      <div className="verified-line"></div>

      <motion.button
        className="continue-btn"
        onClick={resetOTP}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Continue
        <ArrowRight size={17} />
      </motion.button>

      <button className="back-btn" onClick={resetOTP}>
        Generate New OTP
      </button>

    </motion.section>
  );
}

export default VerifiedCard;