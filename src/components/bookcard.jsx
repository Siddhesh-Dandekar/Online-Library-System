

function Bookcard(props) {
    return (
        <>
            <div id={props.style} className="max-w-60 hover:scale-[1.02] duration-500 text-sm h-auto rounded-lg inter-tight-f shadow border border-gray-200 hover:bg-gray-100 overflow-hidden bg-white">
                <img src={props.book.cover_image} alt="" className="min-w-full h-64 " />
                <div className="p-2" >
                    <h2 className="text-base font-semibold">{props.book.title}</h2>
                    <span>by {props.book.author}</span>
                </div>
            </div>
        </>
    )
}

export default Bookcard