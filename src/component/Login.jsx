import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login(){
  const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
                
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
  };
  return (
    <>
      <Header></Header>
      <h2>로그인</h2>
      <form action="/user_home" onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label for="User_email">이메일</label>
          <input 
            type="text" 
            {...register("email", {required: true})}
          />
          {errors.email && <span style={{color: 'red'}}>*Email* is mandatory</span>}
        </p>
        <p>
          <label for="User_password">비밀번호</label>
          <input 
            type="password"
            {...register("password", {required:true})}
          />
          {errors.password && <span style={{color: 'red'}}>*Password is mandatory</span>}
        </p>
        <p>
          <input type="submit" value="로그인"/>
        </p>
      </form>
      <p>계정이 없으신가요?<Link to="/register">회원가입</Link></p>
    </>
  );
}