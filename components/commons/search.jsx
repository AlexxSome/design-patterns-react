import {useState} from "react";

const SearchProduct = (search())

export function search(Component, data){
    // eslint-disable-next-line react/display-name
    return function () {
        const [query, setQuery] = useState("");

        const handleChange = (e) => {
            setQuery(e.target.value);
        }

        return (
            <>
                <input onChange={handleChange} value={query}/>
                <Component query={query} data={data} />
            </>
        )
    }
}