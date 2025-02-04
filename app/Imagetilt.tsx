'use client'
import Script from "next/script";
import Image from "next/image";
export default function Card() {
    return (
    <div className=" mx-auto overflow-x-hidden overflow-y-visible hidescroll" >
      <Script
        src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.0/dist/vanilla-tilt.min.js"
        strategy="afterInteractive" // Load after the page is interactive
      />
      <div className="w-full h-full flex items-center justify-center" data-tilt>

        <div className="w-7/12 aspect-video  rounded-3xl overflow-hidden relative ">
          <Image src={'/dashboard.webp'} alt="dummy" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
