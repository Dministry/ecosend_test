import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'


export default function FormView({ formData, setFormInfo }) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">User ID</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A table displaying userData collected from the form above
            </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
            </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        User ID
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Name
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Description
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Address
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Country
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        State
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        City
                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Zip
                    </th>
                                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {formData.map((userData) => (
                                    <tr key={userData.id}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{userData.id}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                            {userData.name}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                            {userData.description}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            {userData.address}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            {userData.countryCode}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            {userData.stateCode}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            {userData.city}</td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            {userData.zip}</td>
                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <button href="#" className="text-indigo-600 hover:text-indigo-900">
                                                <PencilIcon className="h-4 w-4 text--400" /> <span className="sr-only">, {userData.id}</span>
                                            </button>
                                        </td>
                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <button onClick={() => {
                                                const data = formData.filter((item) => item.id != userData.id)
                                                setFormInfo(data)
                                            }} className="text-indigo-600 hover:text-indigo-900">
                                                <TrashIcon className="h-4 w-4 text-red-400" /> <span className="sr-only">, {userData.id}</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
