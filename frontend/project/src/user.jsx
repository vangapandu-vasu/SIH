import { useState } from "react";

function User(){

    const [email,setEmail]= useState("");
    const [password, setPassword]=useState("");
    const [errmsg,setErrmsg] = useState("");

    let handlelogin=(e)=>{
        e.prventDefault();
        // database pass
    }
    return(
    <>
        <div className="formone">
            <div className="loginone" id="logo">
                <h5>LOGIN</h5>
            </div>
            <form onSubmit={(e)=>handlelogin(e)}>
                <div className="loginone" id="namee">
                    <input className="email"
                        placeholder="enter your email"
                        type="text"
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="loginone" id="password">
                    <input className="password"
                        placeholder="enter your password"
                        type="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    ></input>   
                </div>
                {errmsg && <p className="error-msg">{errmsg}</p>}
                <div className="loginone" id="buttonn">
                    <button  type="submit">login</button>
                </div>
            </form>
        </div>
    </>
    );
}

export default User;