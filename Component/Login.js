import { useAuth } from "../assest/auth"

export default function Login() {
    const { login } = useAuth();
    function onLogin(event) {
        event.preventDefault();
        let user_name = event.target.user_name.value
        let password = event.target.password.value
        login(user_name, password)
    }

    return (

        <form onSubmit={onLogin} className="grid justify-center w-1/3 grid-rows-3 p-5 mx-auto font-semibold text-center bg-green-200 border-2 border-green-500 border-solid rounded-lg m-9 my-7">
            <div className="grid grid-rows-2 ">
                <label >Username</label>
                <input type="text" name="user_name"  required className=""/>
            </div>
            <div className="grid grid-rows-2 ">
                <label >Password</label>
                <input type="password" name="password" required className="w-full" />
            </div>
            <div>
                <button className="w-full p-2 mt-5 text-white bg-green-700 rounded">Login</button>
            </div>



        </form>
    )
}    