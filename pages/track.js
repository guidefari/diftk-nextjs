import Head from "next/head"

const track = () => {
  return (
    <>
      <Head>
        <script src="https://www.trackitforward.com/site/637127/embed.js"></script>
      </Head>

      <main className="h-screen max-w-4xl mx-auto bg-white lg:px-36">
        <iframe
          style={{ border: "0px none", height: "100%", width: "100%" }}
          src="https://www.trackitforward.com/site/637127/embed"
        />
      </main>
    </>
  )
}

export default track
