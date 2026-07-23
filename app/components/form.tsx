"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { printServer } from "@/lib/printServer";

type SurveyData = {
  input: string;
};

export default function Form() {
  // Check local storage during state creation
  const [formData, setFormData] = useState<SurveyData>(() => {
    const savedData = localStorage.getItem("survey");
    return savedData ? JSON.parse(savedData) : { input: "" };
  });

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

    printServer(formData.input);

    localStorage.removeItem("survey");
    setFormData({ input: "" });
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
      <button className="px-2 py-1 rounded-sm bg-gray-300 w-min">Submit</button>
    </form>
  );
}
