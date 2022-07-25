import type {NextPage} from 'next'

const Form: NextPage = () => {
    return (
        <div className="w-full max-w-md bg-white shadow rounded">
            <form className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-blue-600  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="title" type="text" placeholder="Title" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description:
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-blue-600 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="description" rows={3} placeholder="Description"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                        Duration:
                    </label>
                    <select className="form-select appearance-none shadow w-full px-3 py-2 text-gray-700 bg-white bg-clip-padding bg-no-repeat leading-tight focus:shadow-outline border rounded transition ease-in-out focus:border-blue-600 focus:shadow-outline" 
                        id="duration">
                        <option selected>Duration</option>
                        <option value="1">One Meeting</option>
                        <option value="2">Multiple Meetings</option>
                        <option value="3">One Semester</option>
                        <option value="4">Multiple Semesters</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
} 

export default Form;