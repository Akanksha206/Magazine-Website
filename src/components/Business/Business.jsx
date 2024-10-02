import React from 'react'

const Business = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-32 px-32">
      
      {/* Card 1 */}
      <div>
        <img 
          src="/src/assets/images/b1.jpg" 
          alt="Giles Pruett" 
          className="w-full h-56 object-cover  transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            Giles Pruett: An Educational Leader
          </h3>
          <p className="text-gray-700">
            Arcadia School, Dubai was founded by its inspirational Chairman Mohan Valrani. After chairing the Board of Governors at the Indian [...]
          </p>
          <p className="mt-4 text-gray-500 text-sm">December 19, 2023</p>
        </div>
      </div>

      {/* Card 2 */}
      <div>
        <img 
          src="/src/assets/images/b2.png" 
          alt="Kevin Steer" 
          className="w-full h-56 object-cover  transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            KEVIN STEER - Redifing FinTech And InsurTech To Create A Smarter World
          </h3>
          <p className="text-gray-700">
            THE INCEPTION OF 121ADVISOR After graduating from Cambridge University in 1978, Kevin commenced his Schlumberger journey and worked there for [...]
          </p>
          <p className="mt-4 text-gray-500 text-sm">December 8, 2023</p>
        </div>
      </div>

      {/* Card 3 */}
      <div>
        <img 
          src="/src/assets/images/b3.webp" 
          alt="Rohit Nanda" 
          className="w-full h-56 object-cover  transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            Rohit Nanda
          </h3>
          <p className="text-gray-700">
            The business was set up in 2019. We recognised that Small and Medium businesses were really struggling to grow and [...]
          </p>
          <p className="mt-4 text-gray-500 text-sm">December 8, 2023</p>
        </div>
      </div>

    </div>
  );
};

export default Business