'use client'
import Card from "../card";
import Design from "../animatedIcon/design";
import Code from "../animatedIcon/code";
import Art from "../animatedIcon/art";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <section id="service" className="w-full min-h-screen md:min-h-[600px] flex items-bottom justify-center pt-[10rem] px-5 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[4rem] gap-[1rem] items-start">

        {/* Card 1: Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <Card title="Design" desc={`Creating visually-driven interfaces that are actually pleasant to use.`}>
            <Design />
          </Card>
        </motion.div>

        {/* Card 2: Programmer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card title="Programmer" desc={`Turning ideas into interactive products with clean and scalable code.`}>
            <Code />
          </Card>
        </motion.div>

        {/* Card 3: Artist */}
        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card title="Artist" desc={`Visual storytelling through illustration and creative experimentation.`}>
            <Art />
          </Card>
        </motion.div>

      </div>
    </section>
  );
}