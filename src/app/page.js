import Image from 'next/image';
import heroImage from 'public/hammerImage.jpg';
import HeroSection from '@/components/heroSection';
import ArticleCard from '@/components/articleCard';
import anonymousImage from 'public/anonymous.webp';
function multipleRenderForAricles(){
  let collection = [];
  for(let i = 0; i < 10; i++){
    collection.push(<ArticleCard key={i} articleId={i} AnonymousImage={anonymousImage}/>);
  }
  return collection; 
}
export default function Home() {
  let listOfAricle = multipleRenderForAricles();
  return (
    <main className="max-w-screen-xl">
      <div className="relative flex justify-center items-center h-[400px]">
        <Image
          src={heroImage}
          fill
          className="absolute z-[-1] min-h-[400px] lg:max-h-[800px] md:max-h-[600px] opacity-50"
          alt="Hero Image"
        />
        <HeroSection />
      </div>
      <div className="mt-4">
        {listOfAricle}
      </div>
    </main>
  )
}
