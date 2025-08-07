import Header from "./Header";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { getItems } from "../data";

export default function Item(){
    const {id}=useParams();
    const itemList= getItems();
    const item=itemList.find((it)=>it.id === parseInt(id));
    console.log(id);
    return (
        <div>
            <Header></Header>
            <img src="https://picsum.photos/150/150" alt="" />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
            <div>
                <input type="button" value="구매하기" />
                <input type="button" value="장바구니" />
            </div>
            <Review></Review>
        </div>
    )
}
