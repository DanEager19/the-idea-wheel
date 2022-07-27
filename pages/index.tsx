import type { NextPage } from 'next'
import InProgress from '../components/inProgress'
import Form from './form'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <Form />
      <InProgress />
    </div>
  )
}

export default Home
