export default function Home() {
  return (
    <main className="text-center ">
      <h1 className="text-7xl font-bold underline mb-5">Home</h1>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-4 bg-red-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam est culpa eveniet odio
          cumque, temporibus vel nesciunt ex ducimus, accusamus laudantium unde quas qui consequatur
          dolore, ipsam quia sed commodi?
          {/* Contenido del primer div (4 columnas en pantalla pequeña y arriba, 12 en móvil)  */}
        </div>
        <div className="col-span-12 sm:col-span-8 bg-blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui tempora eius harum officia
          quas ad. Minima, expedita eaque accusamus amet exercitationem veniam blanditiis porro
          optio dolores asperiores esse at.\
          {/* Contenido del segundo div (8 columnas en pantalla pequeña y arriba, 12 en móvil)  */}
        </div>
      </div>
    </main>
  );
}
