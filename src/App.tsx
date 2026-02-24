/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail, MailOpen, Volume2, VolumeX } from 'lucide-react';

const ANNIVERSARY_TEXT = `Happy 3rd Anniversary, Love ❤️

Thank you for these three beautiful years of always being my favorite person in every chapter of my life. When I really sit down and think about it, grabe… ang layo na natin from who we were three years ago. We were younger, more unsure, still figuring out life, ourselves, and even love. And yet, somehow, we found each other and chose to stay.

Ang dami na nating pinagdaanan. We’ve had misunderstandings, overthinking moments, stubborn days, silent treatments, emotional talks, and times when things felt heavy. But what makes me proud of us is this: we never gave up on each other. Kahit minsan mahirap, kahit minsan nakakapagod, kahit minsan hindi tayo magkaintindihan — we stayed. We talked. We fixed things. We chose love.

Thank you for being my safe place.
Sa mundo na minsan magulo at overwhelming, ikaw ang pahinga ko. Ikaw yung comfort ko after a long day. Ikaw yung taong pwede kong sabihan ng lahat — my fears, my dreams, my frustrations, my random thoughts at 2AM. With you, I don’t have to pretend. I can just be me.

Thank you for supporting my goals, my work, my dreams — even my random ideas in life. Kahit minsan magulo plans ko, kahit minsan risky, you always believe in me. You cheer for me when I win, and you stay beside me when I feel like I’m losing. That kind of support? That kind of love? Hindi siya common. And I don’t take that for granted.

I want you to know this, and I mean this deeply:

I don’t just love you because you make me happy.
I love you because you make me grow.

You challenge me to be better. You help me become more patient, more understanding, more mature. Because of you, I learned how to communicate better. I learned how to stay calm. I learned that love is not just kilig and sweet messages — it’s commitment, consistency, and choosing each other every single day.

As we celebrate our 3rd anniversary, I pray for us.

I pray for more patience when things get tough.
More understanding when emotions are high.
More adventures together — new places, new memories, new experiences.
More late-night talks about life, dreams, and our future.
More laughter until our stomachs hurt.
More comfort hugs.
More prayers together.
More dreams achieved side by side.

I pray that we never lose the softness we have for each other. I pray that no matter how busy life gets, we always find our way back to us. I pray that years from now, we’ll look back at this season and smile, knowing we held on and built something strong and beautiful.

I’m still choosing you.
Not just today. Not just because it’s our anniversary.
But every day. In good days. In bad days. In easy seasons and hard ones.

You are my peace.
You are my answered prayer.
You are my home.

I love you so much, my luz clarita.
Happy 3rd anniversary to us, love. 🤍`;

const BACKGROUND_IMAGES = [
  'src/images/12.jpg',
  'src/images/20.heic',
    'src/images/16.jpeg',
  'src/images/6.heic',
 'src/images/10.jpg',
];

const PHOTO_URLS = [
  'src/images/1.jpg',
  'src/images/2.jpg',
  'src/images/3.jpg',
  'src/images/4.jpg',
  'src/images/5.png',
  'src/images/6.jpg',
   'src/images/7.jpg',
    'src/images/8.jpg',
   'src/images/9.jpg',
    'src/images/10.jpg',
 'src/images/11.jpg',
  'src/images/12.jpg',
  'src/images/13.jpg',
  'src/images/14.jpg',
  'src/images/15.jpg',
  'src/images/16.jpg',
   'src/images/17.jpeg',
    'src/images/18.jpg',
   'src/images/19.jpg',
    'src/images/20.jpg',
     'src/images/21.jpg',
       'src/images/22.jpg',
        'src/images/23.jpg',
 
];

const COLLAGE_IMAGES = PHOTO_URLS.map((url, i) => ({
  url,
  rotation: ((i * 7) % 22) - 7.5, // Deterministic rotation based on index
  size: 180 + ((i * 13) % 70), // Deterministic size based on index
  shape: i % 3 === 0 ? 'rounded-2xl' : i % 3 === 1 ? 'rounded-full aspect-square' : 'rounded-sm',
}));

// const COLLAGE_IMAGES = Array.from({ length: 15 }, (_, i) => ({
//   url: `https://picsum.photos/seed/couple${i + 1}/600/800`,
//   rotation: (Math.random() - 0.5) * 15, // -7.5 to 7.5 degrees
//   size: 150 + Math.random() * 100, // 150px to 250px
//   shape: i % 3 === 0 ? 'rounded-2xl' : i % 3 === 1 ? 'rounded-full aspect-square' : 'rounded-sm',
// }));

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFCF0]">
      {/* Background Music */}
      {isOpen && (
        <audio autoPlay loop>
          <source src="src/images/Ben&Ben - Araw-Araw (Lyrics).mp3" type="audio/mpeg" />
          {/* To use your own uploaded song, replace the URL above with: "/src/anniversary-song.mp3" */}
        </audio>
      )}

      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={BACKGROUND_IMAGES[currentImageIndex]}
              alt="Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF0]/80 via-transparent to-[#FDFCF0]/80" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-2xl px-4 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope-wrapper"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0, y: -50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="relative cursor-pointer group perspective-1000"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
              >
                {/* Envelope Container */}
                <div className="relative w-80 h-52 bg-[#e6d5b8] rounded-b-lg shadow-2xl border border-[#d4c3a3] flex items-center justify-center overflow-visible">
                  {/* Paper Texture Overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] pointer-events-none rounded-b-lg" />
                  
                  {/* Heart Seal */}
                  <Heart className="w-16 h-16 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform duration-500 z-40 drop-shadow-lg" />
                  
                  {/* Envelope Flap */}
                  <div 
                    className="absolute top-0 left-0 w-full h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-t-[110px] border-t-[#d4c3a3] origin-top z-50 transition-all duration-700 ease-in-out group-hover:-rotate-x-180 group-hover:z-10"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  
                  {/* Internal Pocket Shadow */}
                  <div className="absolute top-0 left-0 w-full h-full border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[208px] border-b-[#f0e6d2]/60 z-20 rounded-b-lg" />
                  
                  {/* Subtle Letter Peeking Out */}
                  <motion.div 
                    className="absolute top-2 w-[90%] h-20 bg-white shadow-sm z-10 rounded-t-sm"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <div className="mt-10 text-center font-serif italic space-y-2">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-[#5A5A40]"
                >
                  Hi, love.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-[#5A5A40]/80"
                >
                  This is what happens when a developer falls in love.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-base text-rose-500 font-medium animate-pulse"
                >
                  Click it to open the long message 😁
                </motion.p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 100, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="w-full max-h-[80vh] overflow-y-auto shadow-2xl rounded-sm p-8 md:p-12 letter-paper relative border border-gray-200"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-rose-500/10" />
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-4xl md:text-5xl font-serif text-center mb-12 text-rose-800 italic"
              >
                3 Years of Us
              </motion.h1>

              <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-800 whitespace-pre-wrap">
                {ANNIVERSARY_TEXT}
              </div>

              {/* Photo Collage Section */}
              <div className="mt-16 pt-16 border-t border-gray-100">
                <h2 className="text-3xl font-serif text-center mb-12 text-[#5A5A40] italic">Our Memories</h2>
                <div className="flex flex-wrap justify-center gap-8 px-4">
                  {COLLAGE_IMAGES.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: img.rotation }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      style={{ width: img.size }}
                      className={`relative p-2 bg-white shadow-lg border border-gray-100 ${img.shape} overflow-hidden hover:z-30 hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    >
                      <img 
                        src={img.url} 
                        alt={`Memory ${idx + 1}`} 
                        className="w-full h-full object-cover rounded-[inherit]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-12 flex justify-center"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 border border-[#5A5A40] text-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-white transition-colors duration-300 font-serif italic"
                >
                  Close Letter
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Hearts Decoration */}
      <AnimatePresence>
        {isOpen && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              y: -100,
              x: (Math.random() - 0.5) * 200 + (window.innerWidth / 2)
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: i * 2
            }}
            className="absolute pointer-events-none z-20"
          >
            <Heart className="text-rose-400/30 fill-rose-400/20" size={24 + Math.random() * 24} />
          </motion.div>
        ))}
      </AnimatePresence>
    </main>
  );
}
