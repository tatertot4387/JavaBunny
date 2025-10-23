import React from 'react';
import { Link } from 'react-router-dom';
import {FaLaptopCode,FaQuestionCircle,FaBook,FaCode,
} from 'react-icons/fa';

function Beginner() {
  return (
    <div className="p-[150px] bg-champagne font-quicksand py-[70px]">
      <h1 className="text-4xl font-bold text-center mb-4 text-blush">Beginner Java Lessons</h1>
      <p className="text-center text-blush text-xl mb-4">Keep building your Java basics step by step!</p>

      <div className="text-left font-bold text-golden space-y-8">

        {/* Unit 5 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 5: Conditions & Decisions</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '5-1', title: '5.1: What are Conditions?', desc: 'Learn how to make choices in your programs using conditions.', icon: <FaBook className="text-2xl mr-3 text-blue-500" /> },
              { id: '5-2', title: '5.2: If Statements', desc: 'Write simple `if` statements to check if something is true.' },
              { id: '5-3', title: '5.3: Else and Else If', desc: 'Handle other options using "else" and "else if".' },
              { id: '5-4', title: '5.4: Unit 5 Quiz', desc: 'Check your understanding of Java conditions.', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/beginner/${id}`} key={id}>
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


        {/* Unit 6 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 6: Loops</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '6-1', title: '6.1: Why Use Loops?', desc: 'Understand why repeating code is useful and efficient.' , icon: <FaBook className="text-2xl mr-3 text-blue-500" />},
              { id: '6-2', title: '6.2: While Loops', desc: 'Use `while` loops to repeat actions while a condition is true.' },
              { id: '6-3', title: '6.3: For Loops', desc: 'Repeat actions a certain number of times using `for` loops.' },
              { id: '6-4', title: '6.4: Do-While Loops', desc: 'Run a loop at least once using `do-while`.' },
              { id: '6-5', title: '6.5: Nested Loops', desc: 'Try loops inside other loops if you feel ready!' },
              { id: '6-6', title: '6.6: Unit 6 Quiz', desc: 'Quiz yourself on Java loops and repetition.', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/beginner/${id}`} key={id}>
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

        {/* Unit 7 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 7: Methods</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '7-1', title: '7.1: What is a Method?', desc: 'Understand why methods help you organize and reuse code.', icon: <FaBook className="text-2xl mr-3 text-blue-500" /> },
              { id: '7-2', title: '7.2: Create & Call Methods', desc: 'Learn how to write a simple method and use it in your program.' },
              { id: '7-3', title: '7.3: Parameters & Return', desc: 'Pass data into methods and get your results back.' },
              { id: '7-4', title: '7.4: Unit 7 Quiz', desc: 'Quiz yourself on Java methods.', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/beginner/${id}`} key={id}>
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

        {/* Unit 8 */}
        <div>
          <h1 className="text-left text-golden text-2xl mb-4">Unit 8: Review & Practice</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '8-1', title: '8.1: Beginner Review Quiz', desc: 'Wrap up your beginner lessons with a quiz!', icon: <FaQuestionCircle className="text-2xl mr-3 text-green-500" /> },
              { id: '8-2', title: '8.2: Mini Project: Guessing Game', desc: 'Practice using conditions and loops!', icon: <FaCode className="text-2xl mr-3 text-red-500" /> },
            ].map(({ id, title, desc, icon }) => (
              <Link to={`/beginner/${id}`} key={id}>
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

export default Beginner;
