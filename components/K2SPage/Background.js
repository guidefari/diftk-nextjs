import React from "react"

const Background = () => {
  return (
    <section>
      <div className="container flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <div className="flex justify-center">
              <h1 className="max-w-sm text-2xl text-center border-b-4 lg:text-5xl border-highlight">
                #Kids2school Background
              </h1>
            </div>
            {/* <h1 className="text-2xl text-center border-b-4 lg:text-5xl border-highlight">
              #Kids2school Background
            </h1> */}
            <h2>Our Findings</h2>
            <p>
              Our research into the plight of education opportunities in
              Zimbabwe shows that children most adversely impacted are those who
              are orphaned; or have parents that are widowed; or those living
              with disabilities. Some parents are erratically informally
              employed with no reliable streams of income, or out of work
              completely, thus, affecting their ability to send their children
              to school.
            </p>
            <h2>(ZimVAC) 2019 report.</h2>
            <p>
              These findings are supported by the Zimbabwe Vulnerability
              Assessment Committee (ZimVAC) 2019 report. The report shows that
              despite a government pronouncement to the effect that no child
              should be turned away from school for non-payment, the proportion
              of children being turned away for non-payment of school fees is at
              a staggering 61%.
            </p>
            <h2>Conclusion</h2>
            <p>
              The report shows that the major reason for children not being in
              school, is either the expense of tuition or the mere cost
              associated with being able to enrol in a school. The reasons
              ‘expensive, or no money’ represent 62-63% of why most 7-17 year
              olds are not in school. Other reasons being negligible in
              comparison include: distance, and lack of interest in schooling
              and education.
            </p>
            <p>
              In light of the above, #kids2school is an initiative aimed at
              making a contribution towards addressing this challenge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background
