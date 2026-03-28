import { useState } from "react";

export function Todolist() {
    const [list, setList] = useState<string[]>([]);
    const [text, setText] = useState('')


    return <>
    <input type="text" value={text} onChange={(event) => 
        setText(event.target.value)
    } />
    <button onClick={() => {setList([...list,text]);
        setText('');
    }}>Добавить</button>

    <ul>
    {
    list.map((item, index) => {
return <li>{item} <button onClick={() => {
    const newList = [...list];
    newList[index] = ' '


    setList(newList.filter(Boolean))
}}>-</button></li>
})
}
    </ul>
    </>
}