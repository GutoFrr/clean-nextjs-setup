import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ExampleAbout from '../../components/example-about'
import { Container } from '../../styles/pages/About'
import openBeck from '../../public/open-beck.jpg'

const About = () => {
  return (
    <Container>
      <Head>
        <title>NextJS App | About</title>
      </Head>

      <h1>This is the About page!</h1>
      <ExampleAbout />
      <Link href="/">
        <h2>Back to Home page!</h2>
      </Link>
      <img src={openBeck} alt="Open Beck" className="beck" />
    </Container>
  )
}

export default About
