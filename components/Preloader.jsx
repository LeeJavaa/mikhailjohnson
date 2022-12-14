export default function Preloader() {
  return (
    <main className="w-screen h-screen bg-white text-black text-[200px] lg:text-[250px] 2xl:text-[300px] uppercase leading-none font-bold whitespace-nowrap overflow-hidden">
      <div className="flex">
        <h1 className=" animate-marque">Mikhail Johnson</h1>
        <h1 className=" animate-marque">Mikhail Johnson</h1>
      </div>
      <div
        className="flex"
        style={{
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeWidth: '4px',
          WebkitTextStrokeColor: 'black',
        }}
      >
        <h1 className="animate-marque">Mikhail Johnson</h1>
        <h1 className="animate-marque">Mikhail Johnson</h1>
      </div>
      <div className="flex">
        <h1 className=" animate-marque">Mikhail Johnson</h1>
        <h1 className=" animate-marque">Mikhail Johnson</h1>
      </div>
    </main>
  );
}
