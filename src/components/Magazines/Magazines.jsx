import React from 'react';

const Magazines = () => {
  return (
    <div className="relative">
      
     <div>
     <img 
        src="/src/assets/images/Main.jpg" 
        alt="Magazines Background" 
        className="w-full h-[250px] sm:h-[200px] md:h-[250px] lg:h-[250px] xl:h-[256px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 bg-zinc-700 w-full h-64">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold px-4 py-2">M A G A Z I N E S</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl mt-2 px-4 py-2">Where Words and Creativity Collide: Unleashing the Power of Print!</p>
      </div>
     </div>
      
     <div className="bg-gray-200 m-28 my-10 px-2 rounded-lg shadow-lg">
        {/* Years Section */}
        <div className="flex justify-center space-x-6 py-4">
          {['2024', '2023', '2022', '2021'].map((year) => (
            <button
              key={year}
              className="border-2 border-red-700 text-red-700 font-semibold py-2 px-6 rounded-full hover:bg-slate-700 hover:text-white transition hover:border-slate-700"
            >
              {year}
            </button>
          ))}
        </div>

        {/* Magazine Covers Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
  {/* Sample magazine images */}
  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m1.webp" 
      alt="Magazine 1" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
      Visionary Male Leaders Shaping the Future in 2024
    </div>
  </div>

  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m2.webp" 
      alt="Magazine 2" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
      Top 5 Rising Leaders Driving Innovation in Business Industry 2024
    </div>
  </div>

  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m3.webp" 
      alt="Magazine 3" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
      Top 5 Most Inspirational CEOs Shaping The Future 2024
    </div>
  </div>

  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m4.webp" 
      alt="Magazine 4" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
      Upcoming FinTech CEO to Watch in 2024
    </div>
  </div>
  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m5.webp" 
      alt="Magazine 4" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
    Top Leaders to Watch in 2024
    </div>
  </div>
  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m6.webp" 
      alt="Magazine 4" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
    The Most Visionaries Leader Empowering The Educational Sector, 2024
    </div>
  </div>
  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m7.webp" 
      alt="Magazine 4" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
    Visionary Male Leaders Shaping the Future in 2024
    </div>
  </div>
  <div className="w-12/12 group">
    <img 
      src="/src/assets/images/m8.webp" 
      alt="Magazine 4" 
      className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    />
    <div className="px-2 py-4 font-semibold">
    Business Pioneers: 2024’s Most Admired Leaders
    </div>
  </div>
</div>
</div>      
</div>
  );
}

export default Magazines;
