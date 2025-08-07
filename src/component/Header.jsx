import { Link } from "react-router-dom"

export default function Header(){
    return (
        <div id="container">
        <Link to='/'>
          <h2>Minguk Mall</h2>
        </Link>
        <Link to='/login'>로그인</Link>
        <Link to='/shopping_list'>장바구니</Link>
      </div>
    );
}