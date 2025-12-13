import Image from "next/image";
import Card from "../card";
import Design from "../animatedIcon/design";
import Code from "../animatedIcon/code";
import Art from "../animatedIcon/art";

export default function Section2() {
  return (
    <section id="me" className="w-full min-h-[400px] flex items-bottom justify-center  mt-[10rem]">
      <div className="max-w-7xl w-full grid grid-cols-3 gap-[3rem] items-start">
        <Card title="Design" desc={`Creating visually-driven interfaces that are actually pleasant to use.`}>
          <Design />
        </Card>
        <Card title="Programmer" desc={`Turning ideas into interactive products with clean and scalable code.`}>
          <Code />
        </Card>
        <Card link="/artworks" title="Artist" desc={`Visual storytelling through illustration and creative experimentation.`}>
          <Art />
        </Card>
      </div>
    </section>
  );
}
