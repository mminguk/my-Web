import { useState } from "react";
export default function Create(){
    return (
        <>
            <form onSubmit={(event)=>{
                event.preventDefault();
                const title=event.target.title.value;
                const body=event.target.body.value;
            }}>
                <p>
                    <input type="text" name="title"/>
                </p>
                <p>
                    <textarea name="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="추가"/>
                </p>
            </form>
        </>
    );
}