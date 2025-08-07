export default function ItemCard(props){
    return (
        <>
            <div>
                <img src="https://picsum.photos/150/150" alt=""/>
                <h4>{props.item.title}</h4>
                <p>{props.item.price}</p>
            </div>

        </>
    )
}