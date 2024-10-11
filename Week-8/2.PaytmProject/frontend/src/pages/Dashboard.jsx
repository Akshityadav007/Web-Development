import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from 'axios';


export function Dashboard(){
    const [balance, setBalance] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [id, setId] = useState(0);

    useEffect(() => {
        async function fetchBalance() {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        }
        
        async function fetchUserInfo() {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/me", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setFirstName(response.data.firstName);
                setlastName(response.data.lastName);
                setId(response.data.id);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        }

        Promise.all([fetchBalance(), fetchUserInfo()]);             // to run both the async functions parallely
    }, []);

    

    return <div>
        <Appbar firstName={firstName} lastName={lastName} />
        <div className="m-8">
            <Balance value={balance} />
            <Users userId={id} />
        </div>
    </div>
}