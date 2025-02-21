"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/public/store/FormData";
import Preloader from "@/components/elements/Preloader";
import Confetti from "react-confetti";
export default function PlaidSuccess() {
  const router = useRouter();
  const { updateFormData, setCurrentStep } = useFormStore();
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handlePlaidSuccess = async () => {
      // Extract any query parameters if needed
      const { public_token, metadata } = router.query;

      if (public_token) {
        try {
          // Exchange the public token for an access token
          const response = await fetch("/api/plaid/exchange-public-token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ public_token }),
          });

          if (!response.ok) {
            throw new Error("Failed to exchange token");
          }

          const data = await response.json();

          // Update form data with the access token or any other relevant information
          updateFormData({ plaidAccessToken: data.access_token });

          // Move to the next step in your funnel
          setCurrentStep(1); // or whatever your next step is

          // Redirect back to the main application page
          router.push("/apply");
        } catch (error) {
          console.error("Error handling Plaid success:", error);
          // Handle error (e.g., show error message, redirect to error page)
        }
      }
    };

    handlePlaidSuccess();
  }, [router.query]);

  return (
    <div>
      <h1>Success!</h1>
      <p>Your bank account has been connected.</p>

      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={400}
      />
    </div>
  );
}
