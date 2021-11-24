import React from "react"
import Layout from "../components/layout"
import Hero from "../components/K2SPage/Hero"
import Background from "../components/K2SPage/Background"
import Goals from "../components/K2SPage/Goals"
import Help from "../components/K2SPage/Help"

const k2s = () => {
  return (
    <Layout>
      <Hero />
      <Goals />
      <Background />
      <Help />
    </Layout>
  )
}

export default k2s
