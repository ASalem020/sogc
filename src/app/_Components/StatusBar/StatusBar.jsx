"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatusBar() {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start animation when 30% visible
  });

  const stats = [
    { title: "Clients Served", value: 250, color: "text-blue-600" ,bg:"bg-blue-600"},
    { title: "Projects Completed", value: 180, color: "text-green-600" ,bg:"bg-green-600"},
    { title: "Satisfied Clients", value: 230, color: "text-yellow-600" ,bg:"bg-yellow-600"},
    { title: "Years of Experience", value: 10, color: "text-red-600" ,bg:"bg-red-600"},
  ];

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-16 grid grid-cols-4  items-center  text-center"
    >
      {stats.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col items-center w-full   p-6    transition-all duration-300`}
        >
          <h3 className={`text-4xl font-extrabold  `}>
            {inView ? <CountUp end={item.value} duration={5} /> : 0}+
          </h3>
          <p className="text-gray-700 font-semibold mt-2">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
