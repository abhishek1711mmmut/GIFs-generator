import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <h1 className="bg-white w-11/12 rounded-lg text-center mt-[40px] px-10 py-2 text-4xl font-bold mx-auto">RANDOM GIFS</h1>
      <div className="flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
