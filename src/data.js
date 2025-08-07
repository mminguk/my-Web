let items=[
    {id:1,title:'아이폰11',price:'2,000,000원'},
    {id:2,title:'아이폰12',price:'2,000,000원'},
    {id:3,title:'아이폰13',price:'2,000,000원'},
    {id:4,title:'아이폰14',price:'2,000,000원'},
];
export function getItems(){
    return items;
}
export function getItem(id){
    return items.find((item)=>item.id === id);
}