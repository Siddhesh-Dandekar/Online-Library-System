import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bookcard from "./bookcard";


function Category() {

    const param = useParams();
    const bookdata = useSelector(item => item.book.items).filter(a => a.genre.toLowerCase() == param.category.toLowerCase())
    return (
        <>
            {bookdata.length != 0 ? <div>
                <div className="mx-5 sm:mx-10 my-2 gap-2">
                    <h1 className="text-3xl tracking-wider handjet-font sm:mb-2">{param.category.toUpperCase()}</h1>
                </div>
                <div className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid justify-center mx-5 sm:mx-10 my-2 gap-3">
                    {bookdata.map(x => {
                        return (
                            <Link to={`/book/${x.id}`} key={x.id} className="grid"><Bookcard key={x.id} book={x} /></Link>
                        )
                    })}
                </div>
            </div> :  <div className="bg-gray-100 h-screen flex items-center justify-center p-2">
            <div className="text-center flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-800">No Books Available for this Category</h1>
                <p className="text-gray-500 mt-4 mb-8">The book you are looking for might have been removed or is temporarily unavailable.</p>
                <Link to="/browsebooks"><button href="/" className="px-2 py-1 rounded text-xl border-2 inter-tight-f bg-lime-300 border-black  hover:border-lime-500">
                    Browse Books Page
                </button></Link>
            </div>
        </div>}

        </>
    )
}

export default Category;