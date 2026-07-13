export default function Home() {
  return (
      <div className="m-auto">
          <div className="m-auto flex flex-col">
            <div className="text-9xl">FISH</div>
            <form className="flex flex-col gap-1">
                <input type="text" className="border border-black rounded-sm"/>
                <button className="px-2 py-1 rounded-sm bg-gray-300 w-min">Submit</button>
            </form>
          </div>
      </div>
  );
}
