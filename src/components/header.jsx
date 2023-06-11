import { FaRobot } from 'react-icons/fa'

export default function Header(props) {
    return <div className="w-full flex flex-col align-center justify-center">
        <header className="text-center w-full p-5 bg-violet-700 flex flex-col align-center justify-center gap-3 text-xl text-white">

            <div className="flex align-center justify-center">
                <FaRobot className="text-5xl font-normal" />
            </div>
            <h1 className="font-medium uppercase">Welcome to autobot</h1>
            <p className="text-base">The most versatile practice website for test automation.</p>
        </header>
    </div>
}