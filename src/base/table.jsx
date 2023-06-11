
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
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase bg-indigo-700 text-white">City</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase bg-indigo-700 text-white">State</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase bg-indigo-700 text-white">Country</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">Coimbatore</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Tamilnadu</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">India</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">Trivandrum</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Kerala</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">India</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">Sydney</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600"> New South Wales</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Australia</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}