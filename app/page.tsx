"use client";

import Image from "next/image";
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    credits={{ enabled: false }}
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section text-center bg-emerald-500">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section flex items-center justify-center bg-yellow-200">
            <p className="text-center">Section 2</p>
          </div>
          <div className="section flex items-center justify-center bg-gray-300">
            <div className="max-w-md text-center">
              <img
                src="https://picsum.photos/seed/funny/640/360"
                alt="Funny meme"
                className="mx-auto rounded shadow-lg"
              />
              <p className="mt-4 font-semibold">Meme break!</p>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default function Home() {
  return (
    <Fullpage />
  );
}
