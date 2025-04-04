import React from 'react'
import RevealOnScroll from '../RevealOnScroll'


const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
            <div className='max-w-5xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Feature Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-2'>Cloud Platform Event App</h3>
                        <p className='text-gray-400 mb-4 text-left'>
                        Event App is a modern event management application designed to help users create, discover, and manage events effortlessly. 
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["HTML", "CSS", "Bootstrapcss", "Laravel", "JS"].map( (tech, key) => (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <a href="https://github.com/Bongnteh-Romarick-ndzelen/EventApp" className='text-blue-400 hover:text-blue-300 transition-colors justify-center text-center items-center'>View Project </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-2'>Suscam Project</h3>
                        <p className='text-gray-400 mb-4 text-left'>
                        SUSCAM is a comprehensive course designed to equip learners with essential skills in cybersecurity and online selling. This unique blend of training ensures that participants not only understand how to secure digital platforms 
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["HTML", "CSS", "Bootstrapcss", "Django", "JS"].map( (tech, key) => (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <a href="https://github.com/Bongnteh-Romarick-ndzelen/Suscam" className='text-blue-400 hover:text-blue-300 transition-colors justify-center text-center items-center'>View Project </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-2'>GreenField Web Project</h3>
                        <p className='text-gray-400 mb-4 text-left'>
                        Green Field, a school management website that help students to register, and create their accounts, login, pay fees .... 
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["HTML", "CSS", "Bootstrapcss", "Laravel", "JS"].map( (tech, key) => (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <a href="https://github.com/Bongnteh-Romarick-ndzelen/Greenfield" className='text-blue-400 hover:text-blue-300 transition-colors justify-center text-center items-center'>View Project </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-2'>BookStore</h3>
                        <p className='text-gray-400 mb-4 text-left'>
                         
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["HTML", "CSS", "Bootstrapcss", "Laravel", "JS"].map( (tech, key) => (
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <a href="" className='text-blue-400 hover:text-blue-300 transition-colors justify-center text-center items-center'>View Project </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects
