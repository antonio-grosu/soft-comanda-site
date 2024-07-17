// fiecare produs
import Image from "next/image";

const Products = () => {
  return (
    <div className="py-24">
      <h1 className="text-4xl md:text-4xl mb-12 font-semibold slide-in">
        Soluțiile Noastre{" "}
      </h1>

      {/* lista produse  */}
      <div className="flex flex-col md:gap-24 gap-16">
        <Produs_Componenta
          nume="Website Prezentare / CV Online"
          descriere_1="Cui Oferim?"
          descriere_2="Ce Oferim?"
        />
        <Produs_Componenta
          nume="Website tip Configurator"
          descriere_1="Cui Oferim?"
          descriere_2="Ce Oferim?"
        />
        <Produs_Componenta
          nume="Ecommerce"
          descriere="Descriere"
          descriere_1="Cui Oferim?"
          descriere_2="Ce Oferim?"
        />
        <Produs_Componenta
          nume="Automatizarea serviciilor de Management & Gestiune"
          descriere_1="Cui Oferim?"
          descriere_2="Ce Oferim?"
        />
        <Produs_Componenta
          nume="Automatizarea diverselor procese în mediul digital"
          descriere_1="Cui Oferim?"
          descriere_2="Ce Oferim?"
        />
      </div>
    </div>
  );
};

const Produs_Componenta = (props) => {
  const { nume, descriere_1, descriere_2, imagine } = props;
  return (
    <>
      <div className="hidden md:block pt-1 bg-teal-500/40 rounded-full w-1/12"></div>
      <div className="flex md:flex-row  w-full flex-col gap-8">
        <div className="w-1/2">
          {imagine ? (
            <Image src={imagine} width={400} height={400}></Image>
          ) : (
            <div className="w-56 h-56 rounded-md hidden md:block bg-black/10"></div>
          )}
        </div>
        <div className="md:w-1/2">
          <h3 className="md:mb-4 mb-12  md:text-left text-center font-semibold text-2xl">
            {nume}
          </h3>
          {imagine ? (
            <Image
              src={imagine}
              className="md:hidden mb-4"
              width={400}
              height={400}
            ></Image>
          ) : (
            <div className=" md:hidden w-44 h-44 p-1 mb-12 md:mb-4  mx-auto bg-black/10 rounded-md"></div>
          )}
          <p className="text-center md:text-left">{descriere_1}</p>
          <p className="text-center md:text-left mt-4">{descriere_2}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
