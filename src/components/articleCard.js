import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCards(props){
    let authorImage = props.AnonymousImage.src;
    let articleId = props.articleId;
    return(
        <article className="p-5 border-y-[1px] first:mt-0 mt-4 cursor-pointer relative">
            <h4 className="pb-3 text-xl">This would be the title</h4>
            <div className="pb-3 text-sm">This is the description. For now i am putting some random text here. Just like some random words. The data here would be populated using backend...</div>
            <div className="justify-between flex">
                <div className="flex items-center">
                    <div className="relative w-6 h-6">
                        <Image
                        src={authorImage}
                        fill
                        className="rounded-full"
                        alt="Picture of the author" />
                    </div>
                    <span className="ml-2 text-xs">Author Name</span>
                </div>
                <div className="text-xs text-[#C0C2C9]">This would be the date</div>
            </div>  
            <Link className="after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0" href={"/cases/" + articleId}></Link>
        </article>
    )
}