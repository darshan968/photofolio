import { useEffect } from "react";
export default function SuccessAlert({ message, state, dispatch }) {
  useEffect(() => {
    // Automatically hide the alert after 3 seconds
    const timer = setTimeout(() => {
      dispatch({ type: "hideAlert" });
    }, 1000);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center">
      <p>{message}</p>
    </div>
  );
}
