'use client'

import { useState } from "react";
import { printServer } from "@/lib/printServer";

export default function Home() {
    const [input, setInput] = useState("")

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        printServer(input);

        setInput("");
    }

    return (
        <div className="m-auto">
            <div className="m-auto flex flex-col">
                <div className="text-9xl">FISH</div>
                <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="border border-black rounded-sm"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="px-2 py-1 rounded-sm bg-gray-300 w-min">Submit</button>
                </form>
            </div>
        </div>
    );
}
