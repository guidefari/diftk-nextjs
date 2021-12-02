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
              To get started with sponsoring a child, reach out via email and
              our team will be of assistance.
            </div>
            <div className="h-16 my-5">
              <a href="mailto:k2s@doit4thekidz.org?subject=Sponsor a child">
                <button className="w-48 px-4 py-2 text-lg font-medium text-center bg-yellow-500 rounded shadow-md cursor-pointer text-secondary hover:bg-yellow-400">
                  Sponsor a child
                </button>
              </a>
            </div>
          </div>
          <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
            <div className="bg-dots">
              <div className="z-10 flex flex-col max-w-md mt-6 ml-4 rounded-full shadow-2xl">
                <img
                  alt="a few kids smiling at the camera"
                  className="rounded-t"
                  src="/k2s-hero.png"
                />
                <div className="p-10 text-2xl bg-writing ">
                  <img
                    alt="quote"
                    className="float-left mr-1"
                    src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                  />{" "}
                  <p className="text-secondary">
                    The proportion of children being turned away for non-payment
                    of school fees is at a staggering 61%.
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
