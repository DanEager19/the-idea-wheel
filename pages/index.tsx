import type { NextPage } from 'next'
import Form from './form'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <Form />
    </div>
  )
}

export default Home
