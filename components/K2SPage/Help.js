import React from "react"
import Image from "next/image"
import sponsor from "../../public/sponsor.png"
import donate from "../../public/donate.png"
import add from "../../public/add.png"

const Help = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="flex justify-center mb-5">
          <h1 className="max-w-sm text-2xl text-center border-b-4 lg:text-5xl border-highlight">
            How to Help #Kids2school
          </h1>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <a href="mailto:k2s@doit4thekidz.org?subject=Sponsor a child">
              <div className="help-card">
                <div className="flex-shrink-0">
                  <Image
                    className="object-cover w-full h-48 rounded-lg"
                    src={sponsor}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex-1">
                    <div className="mt-2 space-y-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-writing">
                        {" "}
                        Sponsor a child
                      </h3>
                      {/*-----*/}
                      <p>
                        This option affords one the opportunity to support a
                        child’s schooling for the foreseeable future, covering
                        their primary needs, through a monthly stipulated
                        donation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="/https://www.paynow.co.zw/Payment/MakeBillPayment/5528"
            >
              <div className="help-card">
                <div className="flex-shrink-0">
                  <Image
                    className="object-cover w-full h-48 rounded-lg"
                    src={donate}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-writing">
                        {" "}
                        Donate{" "}
                      </h3>
                      {/*-----*/}
                      <p>
                        This option allows one to make a donation to the
                        #kids2school fund at any given juncture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="mailto:k2s@doit4thekidz.org?subject=Additional Support">
              <div className="help-card">
                <div className="flex-shrink-0">
                  <Image
                    className="object-cover w-full h-48 rounded-lg"
                    src={add}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex-1">
                    <div className="block mt-2 space-y-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-writing">
                        {" "}
                        Additional support{" "}
                      </h3>
                      {/*-----*/}
                      <p>
                        School stationery and school related products & Services
                        that may be beneficial to the cause.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help
