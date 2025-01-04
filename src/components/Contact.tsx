import React, { useState } from 'react';
import { GlitchText } from './GlitchText';
import { MessageSquare, Send } from 'lucide-react';

export function Contact() {
  const [message, setMessage] = useState('');
  const [isEasterEgg, setIsEasterEgg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setIsEasterEgg(e.target.value.toLowerCase().includes('heisenberg'));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <GlitchText className="text-3xl md:text-4xl font-bold mb-12">
          Hit Me Up, Yo!
        </GlitchText>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-blue-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-zinc-800/50 border border-blue-500/20 rounded-lg px-4 py-3 text-blue-400 focus:outline-none focus:border-blue-500"
                placeholder="Your name, b**ch!"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-800/50 border border-blue-500/20 rounded-lg px-4 py-3 text-blue-400 focus:outline-none focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-blue-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={handleMessageChange}
                className="w-full bg-zinc-800/50 border border-blue-500/20 rounded-lg px-4 py-3 text-blue-400 focus:outline-none focus:border-blue-500"
                placeholder="Say my name..."
              />
            </div>
            <button
              type="submit"
              className={`flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg transition-all duration-300 ${
                isEasterEgg 
                  ? 'bg-yellow-500 hover:bg-yellow-400 text-black' 
                  : 'bg-blue-500 hover:bg-blue-400 text-black'
              }`}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
          {isEasterEgg && (
            <div className="mt-6 text-center">
              <p className="text-yellow-500 text-xl">You're goddamn right!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}