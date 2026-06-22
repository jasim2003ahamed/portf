import React, { useEffect } from 'react';
import DealUniversalImg from '../assests/deal_universal.png';
import SmartwayImg from '../assests/smartway.png';
import T2FMarineImg from '../assests/t2f_marine.png';
import CoreWarriorImg from '../assests/corewarrior.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const clientsData = [
  {
    name: "Deal Universal Services",
    location: "Singapore",
    image: DealUniversalImg,
    description: "Developed and currently maintain the company website and a small ERP system.",
    website: "https://dealuniversal.com",
    badge: "Web App & ERP"
  },
  {
    name: "Smartway Consultancy",
    location: "Singapore",
    image: SmartwayImg,
    description: "Developed an invoice management desktop application using React and Electron.",
    website: null,
    badge: "Desktop App"
  },
  {
    name: "T2F Marine",
    location: "Mumbai",
    image: T2FMarineImg,
    description: "Developed and maintained the company website.",
    website: "https://t2fmarine.com",
    badge: "Company Website"
  },
  {
    name: "CoreWarrior Infra",
    location: null,
    image: CoreWarriorImg,
    description: "Currently developing the company website and related web solutions.",
    website: "https://corewarriorinfra.com",
    badge: "Corporate Website"
  }
];

function Clients() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='py-16 border-b-2 border-collapse w-full bg-slate-50' id='Clients'>
        <div className='flex flex-col md:px-16 px-8 '>
            <h1 className='text-3xl font-bold text-center mb-4'>Clients Supported</h1>
            <p className='text-zinc-600 font-semibold text-center mb-10 max-w-2xl mx-auto'>
              These are some of the professional client projects I have developed, ranging from company websites to desktop applications and ERP solutions.
            </p>
        </div>

        <div className='w-auto px-5 py-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
              {clientsData.map((client, index) => (
                <div 
                  key={index}
                  className='relative shadow-lg bg-white rounded-md overflow-hidden flex flex-col justify-between h-[300px]'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  {/* Image section */}
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <img src={client.image} className='h-[200px] w-full object-cover' alt={client.name} />
                    
                    {/* Hover Overlay */}
                    <div className='project-desc !bottom-0 flex flex-col justify-center items-center px-4 text-center'>
                      <h4 className="text-white font-bold text-lg mb-1">{client.name}</h4>
                      {client.location && (
                        <span className="text-xs text-orange-400 font-semibold mb-2">{client.location}</span>
                      )}
                      <p className='text-white text-sm leading-relaxed'>{client.description}</p>
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className='flex justify-center items-center h-[100px] bg-white border-t border-slate-100 px-4'>
                    {client.website ? (
                      <a target='_blank' rel='noreferrer' href={client.website} className="w-full text-center">
                        <button className='border-2 rounded-3xl w-40 h-11 bg-primary text-white font-semibold shadow hover:opacity-90 transition-opacity'>
                          Visit Website
                        </button>
                      </a>
                    ) : (
                      <span className="text-zinc-500 font-bold bg-slate-100 px-6 py-2 rounded-3xl text-sm border">
                        {client.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  );
}

export default Clients;
