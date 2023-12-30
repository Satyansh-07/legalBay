export default function SearchBar(){
    return(
        <div className="h-[50px] rounded-full flex mx-auto">
            <input type="text" className="rounded-l-full p-3 bg-[#f2f1f0] focus:outline-none focus-visible:border-slate-500" id="search-inp" placeholder="Search cases"/>
            <button className="search-btn rounded-r-full bg-slate-600 leading-[12px] text-white p-3" id="search-inp-btn">Search</button>
        </div>
    )
}