import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Users({userId}){
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    // can add debouncing here (so i did)
    let timeout;
    function debounce(filterName){
        clearTimeout(timeout);
        timeout = setTimeout(() => setFilter(filterName), 1 * 1000);
    }

    // now useEffect will only trigger after user waits for 1 sec before changing the input

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then(response => {
            setUsers(response.data.user);
        });
    }, [filter]);

    return <>
        <div className="text-lg mt-6 font-bold">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => { debounce(e.target.value) }} type="text" placeholder="Search users..." className="border border-slate-200 rounded w-full px-2 py-1" />
        </div>
        <div>
            {users.map(user => user._id != userId ? <User key={user._id} user={user} /> : null)}
        </div>
    </>
}


function User({user}){
    const navigate = useNavigate();

    return <div>
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col font-light justify-center h-full">
                    {user.firstName + " " + user.lastName}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button onPress={() => {
                    navigate('/send?id=' + user._id + "&firstName=" + user.firstName + "&lastName=" + user.lastName);
                }} label={"Send Money"}/>
            </div>
             </div>
    </div>
}