import type { NextPage } from 'next'

const Wheel: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
        <svg height="100" width="100" className='spinning'>
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        </svg> 
    </div>
  )
}

export default Wheel
