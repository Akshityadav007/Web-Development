
export function Users(){
    return <div className="pt-8">
        <div className="py-2 font-bold">
            Users
        </div>
        <input placeholder="Search users..." className="border font-semibold w-full h-7 rounded-md pl-1 text-xs" />
        <div>
            <div className="flex pt-4 justify-between font-medium">
                <div className="flex">
                    <div className="w-6 h-6 text-center text-xs border rounded-full bg-slate-300 mr-1 pt-1">U1</div>
                    <div className="font-bold">User 1</div>
                </div>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-xs rounded-md px-3 py-1 text-center me-2 mb-2">Send Money</button>
            </div>
        </div>
    </div>
}