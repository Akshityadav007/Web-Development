

export const SearchBar = () => {
    // below code was copied from "https://flowbite.com/docs/forms/search-input/", and then modified accordingly(used chatgpt)
    // we can get svg icons from "https://tailwindcss.com/resources", choose any and copy + paste here

    return  <div className="flex items-center justify-center">
                <form>
                    <div className="max-sm:hidden block sm:w-48 lg:w-96 flex border border-gray-700 rounded-full items-center w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-grow px-4 py-2 border border-neutral-900 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-600 bg-neutral-900"
                        />
                        <button className="px-4 py-2 bg-zinc-800 text-white rounded-r-full hover:bg-zinc-950">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.29a1 1 0 01-1.42 1.42l-4.29-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
}