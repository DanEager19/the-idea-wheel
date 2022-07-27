import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getOptions, postOptions } from './httpOptions'

const InProgress: NextPage = () => {
  const [ideas, setIdeas] = useState([]);
  
  useEffect(() => {
    if (ideas.length === 0) {
      getIdeas();
    }
  });

  const markNotStarted = async (id: any) => {
    const data = {
      id: id,
      status: 'Not Started'
    }

    await fetch('/api/updatestatus', postOptions(data));

    const res = await fetch('/api/getinprogress', getOptions);
    const ideas = await res.json();

    setIdeas(ideas);
  }

  const getIdeas = async () => {
    const res = await fetch('/api/getinprogress', getOptions);
    const ideas = await res.json();

    setIdeas(ideas);
  }

  return (
    <div className='w-10/12 align-middle inline-block mb-4 bg-white shadow rounded mx-4 px-2 py-2 divide-y-2 divide-gray-900'>
      <h1 className='font-bold'>In Progress</h1>
      <ul className='mt-1 mb-1.5 divide-y divide-gray-900'>
        {ideas.map((idea: any) => (
          <li className='mb-1 mt-1.5' key={idea.id}> 
            <div className='font-bold pr-2'>
                <h2 className="mx-2 underline underline-offset-8">{idea.title}</h2>
            </div>
            <div className="flex py-4 pr-1">
                <p className="mx-2 flex-1">{idea.description}</p>
                <p className="mx-2 flex-1 text-center">{idea.duration}</p>
                <button type="submit" onClick={() => {markNotStarted(idea.id)}} className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                    Not Started
                </button>
                <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                    Complete
                </button>
            </div>      
          </li>
        ))}
      </ul>
    </div>
  )
}
  
export default InProgress
  