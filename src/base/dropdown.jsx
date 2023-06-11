export default function Dropdown(props) {
    return (
        <div>
            <p className="font-medium my-3 ">Input - Dropdown</p>
            <select name="test" id="test" className="p-2 w-full rounded border border-gray-300 shadow-inner shadow-gray-100 bg-gray-50">
                <option value="test">Test</option>
                <option value="test2">Test2</option>
                <option value="test3">Test3</option>
                <option value="test4">Test4</option>
            </select>
        </div>
    );
}