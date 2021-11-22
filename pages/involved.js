import Layout from "../components/layout"
import Link from "next/link"

function Involved() {
  return (
    <Layout>
      <section id="sponsors" className=" body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <h2 className="mb-8 text-2xl font-medium sm:text-3xl title-font ">
            Get Involved
          </h2>

          <div className="mb-8 main-images ">
            <div className="grid grid-cols-1 gap-8 images md:grid-cols-3">
              <Link href="/volunteer">
                <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer image bg-secondary">
                  <img
                    src="/volunteer.jpg"
                    alt="A volunteer in a red t-shirt"
                    title="Become a DIFTK Volunteer"
                  />
                  <span className="inline-block w-full p-2 text-sm text-center">
                    Volunteer
                  </span>
                </div>
              </Link>

              <Link href="/donate">
                <div
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer image bg-secondary"
                  title="Donate to DIFTK"
                >
                  <img
                    src="/donate.jpg"
                    alt="A type writer with a paper written donations"
                  />
                  <span className="inline-block w-full p-2 text-sm text-center">
                    Donate
                  </span>
                </div>
              </Link>

              <Link href="/blogger">
                <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer image bg-secondary">
                  <img
                    src="/blogger.jpg"
                    alt="laptop, phone, and coffee on a table"
                    title="Become A DIFTK Blogger"
                  />
                  <span className="inline-block w-full p-2 text-sm text-center">
                    Become A DIFTK Blogger
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* </div> */}
      </section>
    </Layout>
  )
}

export default Involved
