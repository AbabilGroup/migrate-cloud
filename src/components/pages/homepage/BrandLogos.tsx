import Image from "next/image";

const BrandLogos = () => {
  return (
    <section className="py-10 pb-20">
      <div className="container">
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-40 lg:grid-cols-3">
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/creator_group.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/creator_group.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/creator_group.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
