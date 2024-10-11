import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';


export const SendMoney = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);

    // get the params from search params
    const [params] = useSearchParams();
    const id = params.get("id");
    const firstName = params.get("firstName");
    const lastName = params.get("lastName");

    

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className='p-3'>
                    <div className='flex items-center space-x-4'>
                        <div className = 'w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium flex items-center justify-center'>
                            <span className='text-2xl text-white'>{firstName[0].toUpperCase()}</span>
                        </div>
                        <h3 className='text-2xl font-semibold'>{firstName} {lastName}</h3>
                    </div>
                    <div className='space-y-4 pt-2'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-sllowed peer-disabled:opacity-70'>
                                Amount (in ₹)
                            </label>
                            <input onChange={(e) => { setAmount(e.target.value) }} type="number" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" id="amount" placeholder={"Enter amount"} />
                        </div>
                        <button onClick={ async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                to: id,
                                amount
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            });
                            if(response.data.status === "success"){
                                navigate("/dashboard");
                            }
                        }} type="button" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Initiate transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}