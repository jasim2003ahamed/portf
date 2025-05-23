import React from "react";

const technologies = [
  { name: "HTML", img: process.env.PUBLIC_URL + "/icons/html.svg" },
  { name: "CSS", img: process.env.PUBLIC_URL + "/icons/css.svg" },
  { name: "JavaScript", img: process.env.PUBLIC_URL + "/icons/javascript.svg" },
  { name: "Python", img: process.env.PUBLIC_URL + "/icons/python.svg" },
  { name: "SQL", img:process.env.PUBLIC_URL + "/icons/mysql.svg" },
  { name: "Git", img: process.env.PUBLIC_URL + "/icons/Git.svg" },
  { name: "MongoDB", img:process.env.PUBLIC_URL + "/icons/mongodb.svg" },
  { name: "Express.js", img:process.env.PUBLIC_URL + "/icons/express.svg" },
  { name: "React", img:process.env.PUBLIC_URL + "/icons/react.svg" },
  { name: "Node.js", img: process.env.PUBLIC_URL +"/icons/nodejs.svg" },
  { name: "TypeScript", img: process.env.PUBLIC_URL +"/icons/typeScript.svg" },
  { name: "Tailwind CSS", img: process.env.PUBLIC_URL +"/icons/tailWindcss.svg" },
  { name: "OpenAi", img: process.env.PUBLIC_URL + "/icons/openai.svg" },
  { name: "Replit", img: process.env.PUBLIC_URL + "/icons/replit.png" },
  { name: "Lovable", img: process.env.PUBLIC_URL + "/icons/lovable.png" },
  { name: "Cursor", img: process.env.PUBLIC_URL + "/icons/cursor.jpeg" },
];

const Languages = () => {
  return (
    <section className="bg-white py-12 px-4" id="tools">
      <h2 className="text-3xl font-bold text-center mb-10">Tools & Technologies</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="flex flex-col items-center"
            data-aos="fade-in"
            data-aos-delay={index * 100}
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="sm:w-12,h-12 object-contain mb-2"
              loading="lazy"
            />
            {/* <span className="text-sm">{tech.name}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
