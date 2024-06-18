'use client'

import { useEffect } from "react";

const RazorpayComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_Neb519ebFYMSx2');
    script.async = true;

    script.onerror = () => {
      console.error('Error loading Razorpay script');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form>
      
    </form>
  );
};

export default RazorpayComponent;