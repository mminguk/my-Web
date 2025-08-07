import { useForm } from "react-hook-form";
import Header from "./Header";

export default function Register(){
    const {
        register,
        handleSubmit,
        formState: {errors},
    }=useForm();
    const onSubmit=(data)=>{
        const existingUser=JSON.parse(localStorage.getItem(data.email));
        if(existingUser) {
            console.log("이메일이 이미 있습니다!!");
        } else {
            const userData = {
                name: data.name,
                email: data.email,
                password: data.password,
            };
            localStorage.setItem(data.email, JSON.stringify(userData));
            console.log(data.name + " has been successfully registered");
        }
    }
    return (
        <>
            <Header></Header>
            <h3>회원가입</h3>
            <form action="/welcome" onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input 
                        type="text" 
                        {...register("name", {required: true})}
                        placeholder="Name"
                    />
                    {errors.name && <span style={{ color: "red" }}>*Name* is mandatory</span>}
                </p>
                <p>
                    <input type="password" 
                        {...register("password", {required: true})}
                        placeholder="Password"
                    />
                    {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}
                </p>
                <p>
                    <input 
                        type="email" 
                        {...register("email", {required: true})}
                        placeholder="Email"
                    />
                    {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                </p>
                <p>
                    <input type="submit" value="가입"/>
                </p>
            </form>
        </>
    )
}