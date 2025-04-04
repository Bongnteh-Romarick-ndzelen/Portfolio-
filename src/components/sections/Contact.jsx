import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormdata] = useState(
    {
      name: "",
      email: "",
      message: "",
    }
  );


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.VITE_SERVICE_ID, import.meta.VITE_TEMPLATE_ID, e.target, import.meta.VITE_PUBLIC_KEY).then((result) => {
      alert("Message Sent Successfully!")
      setFormdata({name: "", email: "", message: ""})
    }).catch(() => alert("Oops, Something went wrong. please try again!"));
  }
  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='px-4 w-[150px] md:w-[400px]'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
              Get in Touch
            </h2>
            <form action="" className='space-y-6' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      value={formData.name}
                      required 
                      className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                      placeholder='Enter Your Name...'
                      onChange={(e) => setFormdata({...formData, name: e.target.value})}
                    />
                </div>

                <div className='relative'>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      value={formData.email}
                      required 
                      className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                      placeholder='Enter Your Email...'
                      onChange={(e) => setFormdata({...formData, email: e.target.value})}
                    />
                </div>

                <div>
                  <textarea 
                      name="message" 
                      id="message" 
                      rows={5}
                      value={formData.message}
                      required 
                      className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                      placeholder='Type Your Message...'
                      onChange={(e) => setFormdata({...formData, message: e.target.value})}
                >

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