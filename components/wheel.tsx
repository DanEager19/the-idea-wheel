import type { NextPage } from 'next'

const Wheel: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
        <svg height="500" width="500" className='spinning'>
            <g stroke="black" strokeWidth="3">
              <path d="M 250 250 L 250 50 391.42 108.57 250 250 Z"/>
            </g>
        </svg> 
    </div>
  )
}

export default Wheel
