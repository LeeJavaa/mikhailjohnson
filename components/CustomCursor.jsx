import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const path = useRouter().asPath;

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  }, []);

  return (
    <div
      className={`app-cursor z-20 rounded-full w-4 h-4 pointer-events-none overflow-hidden translate-x-0 translate-y-0 fixed blur-[0.5px] ease-in-out duration-[30ms] hidden lg:block ${
        path.toLowerCase().includes('about') ? 'bg-black' : 'bg-white'
      }`}
      ref={cursorRef}
    />
  );
}
