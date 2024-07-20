// ce facem noi pt clientii nostri
// de ce este avantajos sa lucrezi cu noi

import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-16 md:py-24 w-full flex flex-col gap-16 ">
      <h1 className="text-4xl  w-full  font-semibold slide-left">
        Cum ne ajutăm clienții ?
      </h1>

      <div className="flex md:flex-row flex-col gap-8 md:gap-24 w-full md:items-top md:justify-between">
        <div className="md:w-5/12  p-8 flex flex-col  rounded-md bg-gray-300/10">
          <div className="flex w-full gap-4 items-center justify-between">
            <h3 className="text-2xl font-semibold text-teal-500">
              Prin Economisirea Timpului{" "}
            </h3>
            <div className="w-1/12">
              <Image
                width={300}
                height={400}
                src="/clepsidra_icon.svg"
                className="hidden md:block w-full md:w-10/12"
              />
            </div>
          </div>
          <p className="w-full mt-8 ">
            Compania noastră preia sarcinile legate de software și imaginea
            online, economisindu-le clienților timpul prețios. Astfel, aceștia
            se pot concentra pe activitățile esențiale ale afacerii lor, având
            siguranța că ne ocupăm de toate aspectele tehnice cu profesionalism
            și eficiență.
          </p>
        </div>
        <div className=" md:w-5/12 p-8 flex flex-col  rounded-md bg-gray-300/10">
          <div className="flex gap-4 w-full items-center justify-between">
            <h3 className="text-2xl font-semibold text-teal-500">
              Prin Calitatea Oferită{" "}
            </h3>
            <div className="w-1/12">
              <Image
                width={140}
                height={210}
                src="/quality_icon.svg"
                className=" hidden md:block w-full md:w-10/12"
              />
            </div>
          </div>
          <p className="w-full mt-8 ">
            Ne mândrim cu calitatea excepțională a software-ului pe care îl
            producem, datorită echipei noastre de experți care utilizează
            tehnologiile de ultimă generație. Fiecare proiect este realizat cu o
            atenție meticuloasă la detalii, asigurând soluții fiabile, scalabile
            și ușor de întreținut, care aduc clienților noștri un avantaj
            competitiv clar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
