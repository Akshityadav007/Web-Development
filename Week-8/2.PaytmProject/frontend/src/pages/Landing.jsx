import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-center p-2 h-max px-4">
                <div className="font-bold text-lg">
                    Welcome to Paytm
                </div>
                <div className='mt-8'>
                    <button onClick={() => {
                        navigate('/signin');
                    }} className="w-full h-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-center me-2 mb-2 mt-4">Login</button>
                    <button onClick={() => {
                        navigate('/signup');
                    }} className="w-full h-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-center me-2 mb-2">Sign up</button>
                    </div>
            </div>
        </div>
    </div>
}