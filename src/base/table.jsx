
export default function Table(props) {
    return (
        <div className="flex flex-col">
            <p className="text-center text-gray-600 uppercase  text-xl font-medium my-3">{props.title}</p>
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase bg-indigo-700 text-white">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase bg-indigo-700 text-white">Age</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase bg-indigo-700 text-white">Address</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">Gopalakrishnan</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">29</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Coimbatore</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">Jim Green</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">27</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">London No. 1 Lake Park</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">Joe Black</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">31</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Sidney No. 1 Lake Park</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}