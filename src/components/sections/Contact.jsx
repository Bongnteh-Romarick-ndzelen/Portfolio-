import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='px-4 w-[150px] md:w-[400px]'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
              Get in Touch
            </h2>
            <form action="" className='space-y-6'>
                <div className='relative'>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                      placeholder='Enter Your Name...'
                    />
                </div>

                <div className='relative'>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                      placeholder='Enter Your Email...'
                    />
                </div>

                <div>
                  <textarea 
                      name="message" 
                      id="message" 
                      rows={5}
                      required 
                      className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                      placeholder='Type Your Message...'>

                  </textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition relative overflow-hidden hover: -translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,4)]"
                >
                  Send Message
                </button>
            </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Contact