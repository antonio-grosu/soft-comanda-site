// sectiunea de prezentare a felului in care construim
// si utilizam tehnologii pentru a alcatui produse
// customizabile pentru nevoile clientilor nostri
const Presentation = () => {
  return (
    <div className="w-full min-h-screen  justify-center flex flex-col gap-8 md:gap-16">
      <div className="w-full flex md:flex-row items-center flex-col gap-8 md:gap-0">
        <h1 className="text-4xl  md:mb-0 font-semibold slide-in">
          Înflorim Afaceri 🌸 prin calitatea produselor noastre
        </h1>
        <p className="md:w-5/12 md:ml-4 slide-in">
          Produsele noastre sunt realizate la cele mai înalte standarde de
          calitate, beneficiind de expertiza echipei noastre și de utilizarea
          tehnologiilor de ultimă generație.{" "}
        </p>
      </div>
      {/* pentru laptop in sus */}
      <div className="hidden md:flex gap-4 w-full justify-center">
        <div className="flex flex-col items-center slide-in justify-center w-44 h-44 mt-4 rounded-full bg-teal-500 p-1 border-teal-600 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
        <div className=" flex flex-col items-center slide-in justify-center w-44 h-44 mt-12 rounded-full bg-black p-1 border-teal-900 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
        <div className=" flex flex-col items-center slide-in justify-center w-44 h-44  rounded-full bg-teal-500 p-1 border-teal-600 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
        <div className=" flex flex-col items-center slide-in justify-center w-44 h-44 -mt-4 rounded-full bg-black p-1 border-teal-900 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
      </div>
      {/* pentru mobile  */}
      <div className="md:hidden grid grid-cols-2 gap-12 w-full items-center justify-center">
        <div className="flex flex-col items-center slide-in justify-center w-36 h-36  mt-12 rounded-full bg-teal-500 p-1 border-teal-600 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
        <div className=" flex flex-col items-center slide-in justify-center w-36 h-36  rounded-full bg-black p-1 border-teal-900 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
        <div className=" flex flex-col items-center slide-in justify-center w-36 h-36  rounded-full bg-black p-1 border-teal-900 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
        <div className=" flex flex-col items-center slide-in justify-center w-36 h-36 -mt-12  rounded-full bg-teal-500 p-1 border-teal-600 border-2 hover:border-teal-300 hover:shadow-teal-300 transition-all hover:scale-105">
          <h3 className="text-white font-semibold">Expertiza</h3>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-8 items-top justify-between">
        <p className=" slide-left">
          Prin automatizarea sarcinilor și îmbunătățirea interacțiunii cu
          clienții, soluțiile noastre contribuie la creșterea eficienței și
          productivității, oferind un avantaj competitiv semnificativ.{" "}
        </p>
        <p className=" slide-right">
          Prin integrarea celor mai noi tehnologii și oferirea de soluții
          personalizate, ne asigurăm că fiecare client beneficiază de
          instrumentele necesare pentru a-și atinge obiectivele și a-și dezvolta
          afacerea în mod sustenabil.{" "}
        </p>
      </div>
    </div>
  );
};

export default Presentation;
