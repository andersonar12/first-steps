import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About decription",
};

export default function About() {
  return (
    <div>
      <h1 className="text-7xl font-bold underline">About</h1>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-4 bg-red-500 text-white p-4">
          <h2 className="font-bold text-xl mb-2">Columna 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
        <div className="col-span-8 bg-blue-500 text-white p-4">
          <h2 className="font-bold text-xl mb-2">Columna 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est. Sed euismod, nunc
            a interdum condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
        <div className="col-span-6 bg-green-500 text-white p-4 mt-4">
          <h2 className="font-bold text-xl mb-2">Columna 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
        <div className="col-span-6 bg-yellow-500 text-white p-4 mt-4">
          <h2 className="font-bold text-xl mb-2">Columna 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
      </div>
    </div>
  );
}
