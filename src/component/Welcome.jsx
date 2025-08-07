import { Link } from "react-router-dom";

export default function Welcome(){
    return (
        <>
            <h2>가입을 환영합니다!!!</h2>
            <Link to="/login">로그인</Link>
        </>

    );
}