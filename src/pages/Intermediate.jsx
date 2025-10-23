import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaQuestionCircle, FaBook, FaCode } from 'react-icons/fa';

function Intermediate() {
  return (
    <div className="p-[150px] bg-champagne font-quicksand py-[70px]">
      <h1 className="font-bold text-center mb-4 text-blush text-4xl">Intermediate Java Lessons</h1>
      <p className="text-center text-blush text-xl mb-4">Level up your Java skills!</p>

      <div className="text-left font-bold text-golden space-y-8">

        {/* Unit 9 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 9: Arrays</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '9-1', title: '9.1: What is an Array?', desc: 'Learn how to store many items in one variable using arrays.' , icon: <FaBook className="text-2xl mr-3 text-blue-500" />},
              { id: '9-2', title: '9.2: Declaring Arrays', desc: 'Create an array and understand its function and importance.' },
              { id: '9-3', title: '9.3: Access & Change', desc: 'Access elements and change their values in an array.' },
              { id: '9-4', title: '9.4: Loop Through Arrays', desc: 'Use loops to handle each item in an array one by one.' },
              { id: '9-5', title: '9.5: Common Array Problems', desc: 'Solve simple problems using arrays (finding max, counting, etc).' },
              { id: '9-6', title: '9.6: Unit 9 Quiz', desc: 'Test your knowledge of arrays in Java with a quick quiz!', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/intermediate/${id}`} key={id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    {icon || <FaLaptopCode className="text-2xl mr-3 text-blue-500" />}
                    <p className="text-lg">{title}</p>
                  </div>
                  <p className="text-lg text-gray-700">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Unit 10 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 10: Strings Usage</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '10-1', title: '10.1: String Methods', desc: 'Learn about helpful String methods.', icon: <FaBook className="text-2xl mr-3 text-blue-500" /> },
              { id: '10-2', title: '10.2: String Concatenation', desc: 'Combine strings together to make new ones.' },
              { id: '10-3', title: '10.3: Unit 10 Quiz', desc: 'Test your knowledge of the usage of Strings.', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/intermediate/${id}`} key={id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    {icon || <FaLaptopCode className="text-2xl mr-3 text-blue-500" />}
                    <p className="text-lg">{title}</p>
                  </div>
                  <p className="text-lg text-gray-700">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Unit 11 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 11: Review & Project</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '11-1', title: '11.1: Intermediate Quiz', desc: 'Review what you learned with an intermediate quiz.', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
              { id: '11-2', title: '11.2: Mini Project: Grade Calculator', desc: 'Use arrays, loops, and methods to build a simple grade calculator.', icon: <FaCode className="text-2xl mr-3 text-red-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/intermediate/${id}`} key={id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    {icon || <FaLaptopCode className="text-2xl mr-3 text-blue-500" />}
                    <p className="text-lg">{title}</p>
                  </div>
                  <p className="text-lg text-gray-700">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Unit 12 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 12: Course Completion</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '12-1', title: "12.1: What's next?", desc: "Learn what's next to continue your Java journey.", icon: <FaBook className="text-2xl mr-3 text-blue-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/intermediate/${id}`} key={id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    {icon || <FaLaptopCode className="text-2xl mr-3 text-blue-500" />}
                    <p className="text-lg">{title}</p>
                  </div>
                  <p className="text-lg text-gray-700">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Intermediate;
