import fork from '../../assets/img/ForkKnife.png';
import timer from '../../assets/img/Timer.png';
import play from '../../assets/img/PlayCircle.png';
import box from '../../assets/img/image 14.png';
import badge from '../../assets/img/Badge.png';
export default function BigRecipeCard({ recipe }) {
  return (
 
    <div className="relative flex-auto
    min-w-[90%] md:min-w-[700px] lg:min-w-[1100px] xl:min-w-[1280px]
    h-[400px] md:h-[500px] lg:h-[580px] xl:h-[640px]
   rounded-3xl overflow-hidden flex bg-[#E7FAFE] top-[150]">
    <div className='absolute left-1/2 -translate-x-1/2 top-8 md:top-10 lg:top-12 z-10'>
       <img src={badge} alt="badge" className="w-24 h-24 md:w-40 md:h-36"/>

    </div>
  
     <div className='w-full flex h-full'>
      <div className="w-1/2 h-full py-3 md:py-10 pr-3 md:pr-10 pl-3 md:pl-8 flex flex-col justify-center space-y-6">
   
      

         <button className="flex items-center gap-1 md:gap-2 bg-white px-2 py-1 rounded-full text-[12px] md:text-lg w-fit font-semibold whitespace-nowrap">
          <img src={box} alt="" className="w-3 md:w-5 h-3 md:h-5" />
          Hot Recipe
        </button>
       
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          {recipe.title}
        </h2>

      
        <p className="text-gray-600 text-lg max-w-[80%]">
          {recipe.description}
        </p>

      
        <div className="flex gap-6 text-gray-700 text-lg">
        <button className="flex items-center gap-1 md:gap-2 bg-gray-300 px-2 py-1 rounded-full text-sm md:text-lg w-fit whitespace-nowrap">
          <img src={timer} alt="" className="w-3 md:w-5 h-3 md:h-5" />
          {recipe.time}
        </button>

        <button className="flex items-center gap-1 md:gap-2 bg-gray-300 px-3 py-0 rounded-full text-sm md:text-lg w-fit whitespace-nowrap">
          <img src={fork} alt="" className="w-3 md:w-5 h-3 md:h-5" />
          {recipe.category}
        </button>
      </div>

      <div className='flex justify-start'>
        <div className="flex flex-auto gap-0 items-center justify-start">  
          <img
            src={recipe.author.avatar}
            alt={recipe.author.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-300"
          />
          <span className="ml-3 text-gray-800 text-sm md:text-xl font-medium">
            {recipe.author.name}
          
          <br/>
          <div src={recipe.posted_at} className="ml-3 text-gray-500 text-[10px] md:text-base">
            {recipe.posted_at}
          </div>
          </span>


        </div>
       <div className="flex flex-auto items-end justify-end">
        <button className="bg-black  flex items-center gap-1 md:gap-2 text-white px-1 md:px-8 py-3 rounded-xl text-[10px] md:text-lg w-fit whitespace-nowrap">
         <img src={play} alt="" className="w-5 h-5" />
         View Recipe
       </button>

      </div></div></div>
      
      <div className="flexw-1/2 h-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>
     </div>
    </div>
  );
}
