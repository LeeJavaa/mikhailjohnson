import React, { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { CursorContext } from './CursorManager';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const path = useRouter().asPath;

  const { size } = useContext(CursorContext);

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
      className={`app-cursor z-20 rounded-full pointer-events-none overflow-hidden translate-x-0 translate-y-0 fixed blur-[0.5px] ease-linear duration-[50ms] hidden lg:block ${
        path.toLowerCase().includes('about') ? 'bg-black' : 'bg-white'
      } ${size === 'small' ? 'w-4 h-4' : ' w-28 h-28'}`}
      ref={cursorRef}
    >
      {size !== 'small' && (
        <div
          className="w-full h-full grid place-content-center animate-cursorRotate"
          style={{
            animationFillMode: 'forwards',
          }}
        >
          {/* eslint-disable react/jsx-no-constructed-context-values */}
          <IconContext.Provider value={{ size: 24 }}>
            <AiOutlineArrowRight />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}
