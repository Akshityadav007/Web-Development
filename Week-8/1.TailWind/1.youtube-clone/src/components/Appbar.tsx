import { SearchBar } from "./SearchBar"


export const Appbar = () => {
    return <div className="flex justify-between pt-1 p-3">
        <div className = "text-md inline-flex items-center pb-2">
        <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="h-6 w-6"
            >
                <path d="M941.7 296.2c-11.3-42.6-44.7-76-87.3-87.3C792 192 512 192 512 192s-280 0-342.4 16.8c-42.6 11.3-76 44.7-87.3 87.3C66.5 358.6 66.5 512 66.5 512s0 153.4 16.8 215.8c11.3 42.6 44.7 76 87.3 87.3 62.4 16.8 342.4 16.8 342.4 16.8s280 0 342.4-16.8c42.6-11.3 76-44.7 87.3-87.3 16.8-62.4 16.8-215.8 16.8-215.8s0-153.4-16.8-215.8zM444.8 654.8V369.2l225.3 142.8-225.3 142.8z" />
            </svg>
        </button>
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
        <button className="px-4 py-2 bg-transparent border border-gray-500 text-gray-400 rounded-full hover:bg-gray-500 hover:text-white">
            Sign In
        </button>

        </div>
    </div>
}