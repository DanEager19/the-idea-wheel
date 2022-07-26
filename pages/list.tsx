import type { NextPage } from 'next'

const List: NextPage = ({ideas}: any) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <ul>
        {ideas.map((idea: any) => (
          <li key={idea.id} className="flex">
            <p className="mx-4">{idea.title}</p>
            <p className="mx-4">{idea.description}</p>
            <p className="mx-4">{idea.duration}</p>
            <p className="mx-4">{idea.status}</p>
          </li>
        ))}
      </ul>
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

  const res = await fetch('http://localhost:3000/api/getall', options)
  const ideas = await res.json()

  return { props: { ideas } }
}
  
export default List
  