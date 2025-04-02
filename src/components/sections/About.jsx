import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    const frontendSkills = ["React", "HTML", "Tailwindcss", "CSS", "Bootstrap"];
    const backendSkills = ["Django", "Laravel", "MongoDB", "GraphQL", "MySQL"];
    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
                    <div className=' rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                        <p className='text-gray-300 mb-6 text-left'>
                            Passionate developer with expertise in building scalable web applications and creating inovative solutions.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {frontendSkills.map( (tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {backendSkills.map( (tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-2 text-left'>
                                <li>
                                    <strong>Currently Enroll in Bachelor in Engineering Program ( B.Eng )</strong> at National Higher 
                                    Polytechnic Institute (NAHPI), University of Bamenda (2022-date)
                                </li>
                                <li>
                                    <strong>Microsoft suit Certification</strong> at Giddis Computer training Center, Yaounde (2022)
                                </li>
                                <li>
                                    <strong>Cameroon Advance Level GCE certificate</strong> at Government High School (GHS) Buea (2020-2021)
                                </li>
                                <li>
                                    <strong>Cameroon Ordinary Level GCE certificate</strong> at Government High School (GHS) Nseh-Kumbo (2010-2015)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className='space-y-4 text-gray-300'>
                                <div>
                                    <h4 className='font-semibold'>Software Engineering Intern at A&T Humanitarian Legacy Foundation (2023), Douala </h4>
                                    <p className='text-left'> 
                                        Developed and maintained cloud base applications using bootstrapcss,
                                        Django rest framework. also used Laravel framework on another project...
                                    </p>
                                </div>
                                <div>
                                    <h4 className='font-semibold'> Networking and Cybersecurity Intern at Bitech company (2024) Douala </h4>
                                    <p className='text-left'> 
                                        Assisted in network infrastructure setup and maintenance, including configuring 
                                        routers, switches, and firewalls. Monitored network traffic and security logs to detect
                                        and mitigate potential threats...
                                    </p>
                                </div>
                                <div>
                                    <h4 className='font-semibold'>Software Engineering Intern at Zotech company (2025) Buea </h4>
                                    <p className='text-left'> 
                                    Developed and maintained web applications using React.js for the 
                                    frontend and Django for the backend. Designed and implemented responsive UI 
                                    components with Tailwind CSS, ensuring a seamless user experience...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default About
