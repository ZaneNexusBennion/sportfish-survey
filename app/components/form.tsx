"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { printServer } from "@/lib/printServer";
import { useNetworkStatus } from "@/lib/useNetworkStatus";

type SurveyData = {
  input: string;
};

export default function Form() {
  // Check local storage during state creation
  const [formData, setFormData] = useState<SurveyData>(() => {
    const savedData = localStorage.getItem("survey");
    return savedData ? JSON.parse(savedData) : { input: "" };
  });
  const isOnline = useNetworkStatus();

  useEffect(() => {
    localStorage.setItem("survey", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isOnline) {
      printServer(formData.input);

      localStorage.removeItem("survey");
      setFormData({ input: "" });
    }
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        className="border border-black rounded-sm"
        value={formData.input}
        onChange={handleChange}
      />
      <button
        className={`px-2 py-1 rounded-sm w-min ${
          isOnline
            ? "bg-gray-300 hover:bg-gray-400"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isOnline ? "Submit" : "Offline"}
      </button>
      {isOnline ? null : <span>You&aposre currently offline</span>}
    </form>
  );
}
