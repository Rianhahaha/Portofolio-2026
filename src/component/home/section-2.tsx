import Image from "next/image";
import Card from "../card";
import Design from "../animatedIcon/design";
import Code from "../animatedIcon/code";
import Art from "../animatedIcon/art";

export default function Section2() {
  return (
    <section id="service" className="w-full min-h-screen md:min-h-[400px] flex items-bottom justify-center  mt-[10rem]  px-5 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-[1rem] items-start">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <Card title="Design" desc={`Creating visually-driven interfaces that are actually pleasant to use.`}>
            <Design />
          </Card>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">

          <Card title="Programmer" desc={`Turning ideas into interactive products with clean and scalable code.`}>
            <Code />
          </Card>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <Card link="/artworks" title="Artist" desc={`Visual storytelling through illustration and creative experimentation.`}>
            <Art />
          </Card>
        </div>
      </div>
    </section>
  );
}
