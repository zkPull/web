"use client";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import generatingProofAnimation from "../../../../../public/images/Animation/generating-proof-animation.json";

interface GeneratingProofPopupProps {
  isVisible: boolean;
}

export default function GeneratingProofPopup({
  isVisible,
}: GeneratingProofPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4 border border-gray-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6">
                  <Lottie
                    animationData={generatingProofAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Generating Proof
                </h3>
                
                <p className="text-gray-600">
                  Please wait while we generate your proof using zkTLS technology
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}