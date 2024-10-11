import { useNavigate } from "react-router-dom";


export function Appbar({firstName, lastName}){
    const navigate = useNavigate();

    return <div className="flex shadow-sm justify-between h-10">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-2">
                Hello, {firstName} {lastName}
            </div>
            <div className="flex flex-col w-6 h-6 justify-center text-center border rounded-full bg-slate-300 mr-1 mt-2">
                {firstName[0]}
            </div>
            <div className="flex flex-col justify-center">
                <button onClick={() => {
                    localStorage.clear();
                    navigate('/');
                }} type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                    <svg className="w-2.5 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                    </button>
                </div>
        </div>
    </div>
}