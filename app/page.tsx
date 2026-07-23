"use client";

import dynamic from "next/dynamic";

// Form will only render client-side so form can be instantly
// populated with localstorage data
const ClientForm = dynamic(() => import("./components/form"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="m-auto">
      <div className="m-auto flex flex-col">
        <div className="text-9xl">FISH</div>
        <ClientForm />
      </div>
    </div>
  );
}
