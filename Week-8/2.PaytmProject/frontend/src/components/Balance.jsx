

export function Balance({value}){
    return <div className="flex text-sm font-bold">
        <div>
            Your balance is
        </div>
        <div className="ml-2 text-green-600">
            ₹{value}
        </div>
    </div>
}