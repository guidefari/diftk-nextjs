import React from "react"

const Goals = () => {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="max-w-sm text-2xl text-center border-b-4 lg:text-5xl border-highlight">
          3 Goals + Strategies
        </h1>
      </div>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 ">
        <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 rounded-full text-highlight bg-yellow-50">
              1
            </div>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none text-neutral-600 lg:text-3xl">
              {" "}
              Enrol, retain, and facilitate progress of children in school.{" "}
            </h1>
            <ul className="mx-auto text-base leading-relaxed list-disc">
              {" "}
              <li>
                Subsidising the costs related to enrolling in school. This will
                include, but is not limited to, paying for school fees, buying
                uniforms, and supplementing stationery related costs.
              </li>
              <li>
                Working with the community to foster and encourage continuous
                interest in education.
              </li>
            </ul>
          </div>
          <div className="p-6">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 rounded-full text-highlight bg-yellow-50">
              2
            </div>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none text-neutral-600 lg:text-3xl">
              {" "}
              Provide a well rounded education for the children using
              extracurricular activities.{" "}
            </h1>
            <ul className="mx-auto text-base leading-relaxed list-disc">
              <li>
                Hosting camps of various durations for self-development and
                mentorship. These include, but are not limited to, etiquette
                classes, career guidance, and public speaking workshops.
              </li>
            </ul>
          </div>
          <div className="p-6">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 rounded-full text-highlight bg-yellow-50">
              3
            </div>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none text-neutral-600 lg:text-3xl">
              {" "}
              Furnish feedback to and from involved stakeholders.{" "}
            </h1>
            <ul className="mx-auto text-base leading-relaxed list-disc">
              <li>
                Community engagement through conversations that supply, and
                receive feedback.
              </li>
              <li>Social media updates.</li>
              <li>
                Periodical newsletters to the corporate sector, and not for
                profit organisations such as churches and NGOs for partnership
                opportunities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals
