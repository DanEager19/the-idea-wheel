import type { NextPage } from 'next'


const List: NextPage = ({ideas}: any) => {
  const notstarted = [], inprogress = [], completed = [];
  for (let i in ideas) {
    if (ideas[i].status === 'Not Started') notstarted.push(ideas[i]);
    else if (ideas[i].status === 'In Progress') inprogress.push(ideas[i]);
    else if (ideas[i].status === 'Completed') completed.push(ideas[i]);
  }

  const markNotStarted = async (event: any) => {
    event.preventDefault();
    const data = {
      id: event.target.id.value,
      status: 'Not Started'
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    await fetch('/api/updatestatus', options);
    window.location.reload();
  }

  const markInProgress = async (event: any) => {
    event.preventDefault();
    const data = {
      id: event.target.id.value,
      status: 'In Progress'
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    await fetch('/api/updatestatus', options);
    window.location.reload();
  }
  
  const markComplete = async (event: any) => {
    event.preventDefault();
    const data = {
      id: event.target.id.value,
      status: 'Completed'
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    await fetch('/api/updatestatus', options);
    window.location.reload();
  }
  return (
    <div className='bg-gray-400'>
      <div className="grid place-items-center h-screen bg-gray-400">
        <div className='w-10/12 align-middle inline-block mb-4 bg-white shadow rounded mx-4 px-2 py-2 divide-y-2 divide-gray-900'>
          <h1 className='font-bold'>Not Started</h1>
          <ul className='mt-1 mb-1.5 divide-y divide-gray-900'>
            {notstarted.map((idea: any) => (
              <li className='mb-1 mt-1.5' key={idea.id}> 
                <div className='font-bold pr-2'>
                  <h2 className="mx-2 underline underline-offset-8">{idea.title}</h2>
                </div>
                <div className="flex py-4 pr-1">
                  <p className="mx-2 flex-1">{idea.description}</p>
                  <p className="mx-2 flex-1 text-center">{idea.duration}</p>
                  <form onSubmit={markInProgress} className="mx-0.5 flex-0">
                    <input type="hidden" id="id" value={idea.id} />
                    <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                      In Progress
                    </button>
                  </form>
                  <form onSubmit={markComplete} className="mx-0.5 flex-0">
                    <input type="hidden" id="id" value={idea.id} />
                    <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                      Complete
                    </button>
                  </form>
                </div>      
              </li>
            ))}
          </ul>
        </div>
        <div className='w-10/12 align-middle inline-block mb-4 bg-white shadow rounded mx-4 px-2 py-2 divide-y-2 divide-gray-900'>
          <h1 className='font-bold'>In Progress</h1>
          <ul className='mt-1 mb-1.5 divide-y divide-gray-900'>
            {inprogress.map((idea: any) => (
              <li className='mb-1 mt-1.5' key={idea.id}> 
                <div className='font-bold pr-2'>
                  <h2 className="mx-2 underline underline-offset-8">{idea.title}</h2>
                </div>
                <div className="flex py-4 pr-1">
                  <p className="mx-2 flex-1">{idea.description}</p>
                  <p className="mx-2 flex-1 text-center">{idea.duration}</p>
                  <form onSubmit={markNotStarted} className="mx-0.5 flex-0">
                    <input type="hidden" id="id" value={idea.id} />
                    <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                      Not Started
                    </button>
                  </form>
                  <form onSubmit={markComplete} className="mx-0.5 flex-0">
                    <input type="hidden" id="id" value={idea.id} />
                    <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                      Complete
                    </button>
                  </form>
                </div>      
              </li>
            ))}
          </ul>
        </div>
        <div className='w-10/12 align-middle inline-block mb-4 bg-white shadow rounded mx-4 px-2 py-2 divide-y-2 divide-gray-900'>
          <h1 className='font-bold'>Completed</h1>
          <ul className='mt-1 mb-1.5 divide-y divide-gray-900'>
            {completed.map((idea: any) => (
              <li className='mb-1 mt-1.5' key={idea.id}> 
                <div className='font-bold pr-2'>
                  <h2 className="mx-2 underline underline-offset-8">{idea.title}</h2>
                </div>
                <div className="flex py-4 pr-1">
                  <p className="mx-2 flex-1">{idea.description}</p>
                  <p className="mx-2 flex-1 text-center">{idea.duration}</p>
                  <form onSubmit={markNotStarted} className="mx-0.5 flex-0">
                    <input type="hidden" id="id" value={idea.id} />
                    <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                      Not Started
                    </button>
                  </form>
                  <form onSubmit={markInProgress} className="mx-0.5 flex-0">
                    <input type="hidden" id="id" value={idea.id} />
                    <button type="submit" className="bg-transparent hover:bg-blue-600 text-gray-700 font-semibold hover:text-white py-2 px-1 mx-1 border border-blue-600 hover:border-transparent rounded">
                      In Progress
                    </button>
                  </form>
                </div>      
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
  
export const getServerSideProps = async () => {
  const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
  }
  
  const res = await fetch('http://localhost:3000/api/getinprogress', options)
  const ideas = await res.json()
  console.log(ideas)
  return { props: { ideas } }
}
  
export default List
  