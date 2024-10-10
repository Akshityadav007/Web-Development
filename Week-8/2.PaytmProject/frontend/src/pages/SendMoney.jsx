import { InputBox } from "../components/InputBox"


export const SendMoney = () => {
    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class='p-3'>
                    <div class='flex items-center space-x-4'>
                        <div class = 'w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium flex items-center justify-center'>
                            <span class='text-2xl text-white'>A</span>
                        </div>
                        <h3 class='text-2xl font-semibold'>Friend's Name</h3>
                    </div>
                    <div class='space-y-4 pt-2'>
                        <div class='space-y-2'>
                            <label class='text-sm font-medium leading-none peer-disabled:cursor-not-sllowed peer-disabled:opacity-70' for='amount'>
                                Amount (in ₹)
                            </label>
                            <input type="number" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" id="amount" placeholder={"Enter amount"} />
                        </div>
                        <button type="button" class="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Initiate transfer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}