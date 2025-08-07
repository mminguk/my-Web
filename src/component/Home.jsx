import { Link } from "react-router-dom";
import Header from "./Header";
import ItemCard from "./ItemCard";
import { getItems } from "../data";
export default function Home(){
    const items=getItems();
    return (
        <div>
            <Header></Header>
            <h2>상품목록</h2>
            <div id="content">
                        {items.map((item)=>(
                            <div key={item.id} className='item'>
                                <Link to={`/item/${item.id}`}>
                                    <ItemCard item={item} />
                                </Link>
                            </div>
                        ))}
                    </div>
        </div>
    );
}