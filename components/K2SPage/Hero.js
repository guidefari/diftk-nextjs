import React from "react"
import Image from "next/image"
import heroImage from "../../public/k2s-hero.png"

const K2SHero = () => {
  return (
    <div>
      <div className="max-w-6xl p-12 m-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center max-w-md md:w-1/2">
            <div className="text-2xl font-black uppercase md:text-5xl">
              #Kids2school
            </div>
            <div className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="h-16 my-5">
              <button className="w-48 px-4 py-2 text-lg font-medium text-center bg-yellow-500 rounded shadow-md cursor-pointer text-secondary hover:bg-yellow-400">
                Sponsor a child
              </button>
            </div>
          </div>
          <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
            <div className="bg-dots">
              <div className="z-10 flex flex-col max-w-md mt-6 ml-4 rounded-full shadow-2xl">
                <Image
                  alt="a few kids smiling at the camera"
                  className="rounded-t"
                  src={heroImage}
                />
                <div className="p-10 text-2xl bg-writing ">
                  <img
                    alt="quote"
                    className="float-left mr-1"
                    src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                  />{" "}
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default K2SHero
