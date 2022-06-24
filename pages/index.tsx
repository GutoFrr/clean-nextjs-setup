import Head from 'next/head'
import Link from 'next/link'
import ExampleHome from '../components/example-home'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>NextJS App | Home</title>
      </Head>

      <h1>This is the Homepage!</h1>
      <ExampleHome />
      <Link href="/about">
        <h2>Go to About page!</h2>
      </Link>
    </Container>
  )
}

export default Home