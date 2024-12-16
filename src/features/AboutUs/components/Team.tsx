"use client"
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import image1 from 'public/images/Rectangle 4228.png';
import image2 from 'public/images/Rectangle 4228 (1).png';
import image3 from 'public/images/Rectangle 4228 (2).png';
import image4 from 'public/images/Rectangle 4228 (3).png';
import image5 from 'public/images/Rectangle 4228 (2).png';

const images = [
  { src: image1, name: 'Oginni Laughter', post: 'Co-founder/CEO' },
  { src: image2, name: 'Abdulazeez Boss', post: 'Lead' },
  { src: image3, name: 'Tobi Man', post: 'Frontend Lead' },
  { src: image4, name: 'Name', post: 'Interviewer' },
  { src: image5, name: 'Name', post: 'Interviewer' },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | number>(-1);
  const size = useMemo(() => images.length, []);

  useEffect(() => {
    timer.current = setInterval(
      () => setActiveIndex((cur) => (cur + 1) % size),
      5000
    );

    return () => clearInterval(timer.current as number);
  }, [size]);

  const map = useMemo(() => {
    const map = new Map<number, number>();
    const len = images.length;
    let i = len;

    if (len < activeIndex || activeIndex < 0)
      throw new Error('Invalid index set as active index');

    while (i > 0) {
      map.set((activeIndex + len - i) % len, --i);
    }

    return map;
  }, [activeIndex]);

  return (
    <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:h-[450px] lg:w-[600px] lg:mx-10">
      {images.map((imageData, i) => {
        const factor = size - 1 - map.get(i)!;
        const isPreviousActiveIndex = (activeIndex + size - 1) % size === i;

        return (
          <div
            key={i}
            style={{
              width: "inherit",
              height: "inherit",
              position: "absolute",
              top: 0,
              right: 0 - 0.2 * factor * 580,
              // transform: `scale(${1 - 0.075 * factor})`,
              zIndex: map.get(i),
              transition: `z-index 0.6s ease, transform 0.6s ease${
                isPreviousActiveIndex ? ", right 0.3s ease" : ""
              }`
            }}
          >
            <div className="flex flex-col items-center ">
              <Image
                src={imageData.src}
                alt={imageData.name}
                layout="fill"
                objectFit="cover"
                className='rounded-t-2xl rounded-b-2xl'
              />
              <div id='back' className="absolute text-white bottom-0 pt-10 h-24 lg:w-[600px] text-center  w-[300px] rounded-b-2xl">
                  <p>{imageData.name}</p>
                  <p>{imageData.post}</p>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;

