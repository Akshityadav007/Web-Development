

export function Appbar(){
    return <div className="flex shadow-sm justify-between h-10">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-2">
                Hello, User
            </div>
            <div className="flex flex-col w-6 h-6 justify-center text-center border rounded-full bg-slate-300 mr-1 mt-2">
                U
            </div>
        </div>
    </div>
}