import { useState } from "react";
import { useSelector } from "react-redux";
import Bookcard from "./bookcard";
import { Link } from "react-router-dom";

function Body() {

    const dataa = useSelector(item => item.book);
    const [ genre, setGenere] = useState('')
    return (
        <>
            <main className="bg-violet-100 h-auto mx-2 flex flex-col items-center rounded-sm p-2">
                <div className="w-full hover:scale-[1.01] duration-300 flex flex-col justify-center p-5 bg-cover bg-white rounded-sm text-center" id="book-frame">
                    <h1 className="text-4xl sm:text-5xl oleo-script-regular mb-1 text-red-800">welcome to online library</h1>
                    <p className="text-xl sm:text-2xl playwrite-nz-cl fil">The more that you read,
                        <br />
                        the more things you will know.
                        <br />
                        The more that you learn,
                        <br />
                        the more places you’ll go.

                        —Dr. Seuss</p>
                </div>
                <span className="new-amsterdam-regular text-2xl sm:text-3xl my-2">Categories</span>
                <div className="bg-slate-300 sm:text-xl w-full p-3 flex gap-2 new-amsterdam-regular justify-center rounded-sm">
                    {genre == 'Fiction' ? <button className="border-2 bg-gray-500 border-black px-2 text-white rounded-sm hover:border-gray-500" onClick={() => setGenere('')}>Cancel</button> : <button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" onClick={() => setGenere('Fiction')}>Fiction</button>}
                    {genre == 'Sci-Fi' ? <button className="border-2 bg-gray-500 border-black px-2 text-white rounded-sm hover:border-gray-500" onClick={() => setGenere('')}>Cancel</button> : <button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" onClick={() => setGenere('Sci-Fi')}>Sci-Fi</button>}
                    {genre == 'Trading' ? <button className="border-2 bg-gray-500 border-black px-2 text-white rounded-sm hover:border-gray-500" onClick={() => setGenere('')}>Cancel</button> : <button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" onClick={() => setGenere('Trading')}>Trading</button>}
                    {genre == 'Biographies' ? <button className="border-2 bg-gray-500 border-black px-2 text-white rounded-sm hover:border-gray-500" onClick={() => setGenere('')}>Cancel</button> : <button className="border-2 bg-lime-300 border-black px-2 rounded-sm hover:border-lime-500" onClick={() => setGenere('Biographies')}>Biographies</button>}
                </div>
                <br />
                <div className="flex justify-center flex-wrap gap-3">
                    {
                        genre ? dataa.items.filter(g => g.genre == genre).map(x => {
                            return (<Link to={`/book/${x.id}`} key={x.id} className="flex"><Bookcard key={x.id} book={x} style={"wid"}/></Link> )
                        }) : 
                        dataa.items.map(x => {
                            return (<Link to={`/book/${x.id}`} key={x.id} className="flex"><Bookcard key={x.id} book={x} style={"wid"}/></Link>)
                        })
                    }

                </div>

            </main>
        </>
    )
}
export default Body;