import SearchBar from '@/components/searchBar';

export default function HeroSection(){
    return(
    <form action="" className={`flex items-center flex-col text-bg-slate-600 justify-center h-full`}>
        <div className={`text-3xl pb-8 text-slate-500 text-center`}>Your legal search ends here</div>
        <SearchBar />
    </form>
    )
}