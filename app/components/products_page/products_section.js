// fiecare produs
const Products = () => {
  return (
    <div className="py-24">
      <h1 className="text-4xl md:text-4xl mb-12 font-semibold slide-in">
        Soluțiile Noastre{" "}
      </h1>

      {/* lista produse  */}
      <div className="flex flex-col md:gap-24 gap-16">
        <Produs_Componenta nume="Website Prezentare" descriere="Descriere" />
        <Produs_Componenta nume="Aplicatie Web" descriere="Descriere" />
        <Produs_Componenta nume="Aplicatie Mobila" descriere="Descriere" />
        <Produs_Componenta
          nume="Aplicatie Windows / Mac"
          descriere="Descriere"
        />
        <Produs_Componenta nume="Software Management" descriere="Descriere" />
      </div>
    </div>
  );
};

const Produs_Componenta = (props) => {
  const { nume, descriere, imagine } = props;
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
          <p className="text-center md:text-left">{descriere}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
