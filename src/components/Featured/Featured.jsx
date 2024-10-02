import React from 'react'

const leaders = [
  {
    id: 1,
    name: "Elizabeth Cowper",
    title: "A Driven Leader Transforming Workplace Inclusion",
    image: "/src/assets/images/f1.jpeg",
    description: "While most of us are happy discussing how space tourism can be made feasible over say next 10 years, a [...]",
  },
  {
    id: 2,
    name: "MARINA WORRE",
    title: "A Virtual Experience Like No Other",
    image: "/src/assets/images/f2.png",
    description: "The DAWN OF WORRE STUDIOS. Worre Studios is a state-of-the-art 25,000 square foot facility that brings virtual and traditional events [...]",
  },
  {
    id: 3,
    name: "Sanjib Sahoo",
    title: "A Transformative, Growth-Minded Leader",
    image: "/src/assets/images/f3.jpg",
    description: "Transformation is inevitable for a business if it is to survive and thrive in changing times. Most companies and leaders [...]",
  },
  {
    id: 4,
    name: "Dr. Melissa Hortman",
    title: "A Purposefully Driven Disruptor",
    image: "/src/assets/images/f4.jpg",
    description: "The Purposefully Driven Disruptor Leads Higher Education Transformation Innovation for Students of Today and Tomorrow As a purposefully driven disruptor, [...]",
  },
  {
    id: 5,
    name: "Anouk Vastert",
    title: "Customer Centricity Transformation Leader Driving Outside-In Culture Change",
    image: "/src/assets/images/f5.jpg",
    description: "A motivator, planner, and connector, Anouk Vastert, Global Customer Experience Advisor at SAP, believes in the importance of bringing people [...]",
  },
  {
    id: 6,
    name: "Melinda Fouts",
    title: "Helping Business Leaders Achieve Their Peak Performance",
    image: "/src/assets/images/f6.jpg",
    description: "“A coach is someone that sees beyond your limits and guides you to greatness!” – Michael Jordan [...]",
  }
];
const Featured = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 px-36 py-16">
      {leaders.map((leader) => (
        <div key={leader.id} className="flex  overflow-hidden">
          <img src={leader.image} alt={leader.name} className="w-40 h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg">{leader.name}</h3>
            <p>{leader.title}</p>
            <p className="text-gray-600 text-sm mt-2">{leader.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured