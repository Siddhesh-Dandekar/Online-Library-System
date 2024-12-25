import { useState } from "react";
import { useSelector } from "react-redux";
import Bookcard from "./bookcard";
import { Link } from "react-router-dom";


function Browsebooks() {
    const data = useSelector(item => item.book.items);
    const [filtereddata, setFilteredData] = useState(data);
    function handlesearch(word) {
        if (word) {
            setFilteredData(data.filter(x => x.title.toUpperCase().includes(word.toUpperCase()) || x.author.toUpperCase().includes(word.toUpperCase())));
        }
        else {
            setFilteredData(data)
        }
    }
    return (
        <>

            <div className="mx-5 sm:mx-10 my-2 gap-2">
                <span className="new-amsterdam-regular text-2xl sm:text-3xl my-2">Categories</span>
                <div className="bg-slate-300 sm:text-xl w-full p-3 flex gap-2 new-amsterdam-regular justify-center rounded-sm">
                    <Link to="/books/fiction"><button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" >Fiction</button></Link>
                    <Link to="/books/sci-fi"><button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" >Sci-Fi</button></Link>
                    <Link to="/books/trading"><button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" >Trading</button></Link>
                    <Link to="/books/biographies"><button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" >Biographies</button></Link>
                </div>
                <h1 className="text-3xl handjet-font sm:mb-2">Browse Books</h1>
                <input type="text" id="add" onChange={(e) => handlesearch(e.target.value)} placeholder="Search by title or author" className="border-2 w-full md:w-auto rounded-sm font-serif border-black text-xl p-1 text-black" />

            </div>
            <div className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid justify-center mx-5 sm:mx-10 my-2 gap-3">
                {filtereddata.map(x => {
                    return (
                        <Link to={`/book/${x.id}`} key={x.id} className="grid"><Bookcard key={x.id} book={x} /></Link>
                    )
                })}
            </div>
        </>
    )
}

export default Browsebooks;