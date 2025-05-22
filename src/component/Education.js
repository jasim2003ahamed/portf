import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationData = [
  {
    title: 'MCA (Correspondence)',
    year: '2024 - 2026',
    details: 'Bharathidasan University, Trichy',
    color: 'indigo',
  },
  {
    title: 'BCA - 75%',
    year: '2021 - 2024',
    details: 'Jamal Mohamed College, Trichy',
    color: 'green',
  },
  {
    title: 'HSC - 80%',
    year: '2020 - 2021',
    details: 'Tan Sri Ubaidullah Matric Hr. Sec. School, Thanjavur',
    color: 'yellow',
  },
  {
    title: 'SSLC - 72%',
    year: '2018 - 2019',
    details: 'Tan Sri Ubaidullah Matric Hr. Sec. School, Thanjavur',
    color: 'rose',
  },
];

const classNameMap = {
  indigo: {
    // bg: 'bg-indigo-50',
    border: 'border-indigo-600',
    text: 'text-indigo-700',
  },
  green: {
    // bg: 'bg-green-50',
    border: 'border-green-600',
    text: 'text-green-700',
  },
  yellow: {
    // bg: 'bg-yellow-50',
    border: 'border-yellow-500',
    text: 'text-yellow-700',
  },
  rose: {
    // bg: 'bg-rose-50',
    border: 'border-rose-600',
    text: 'text-rose-700',
  },
};

const Education = () => {
  useEffect(() => {
    AOS.init({duration: 800 });
  }, []);

  return (
    <section id="education" className="bg-gradient-to-b from-white to-slate-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Education</h2>
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-500"></div>

          <div className="flex flex-col md:grid md:grid-cols-9 md:gap-4">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`md:col-span-4 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} mb-12 md:mb-20`}
                data-aos="fade-up"
              >
                <div className={`${classNameMap[item.color].bg} p-6 rounded-xl shadow-md ${classNameMap[item.color].border} border-l-4`}>
                  <h3 className={`text-xl font-bold ${classNameMap[item.color].text}`}>{item.title}</h3>
                  <p className="text-gray-600">{item.year}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
