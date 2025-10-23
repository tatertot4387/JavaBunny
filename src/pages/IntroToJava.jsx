import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaQuestionCircle, FaBook, FaCode } from 'react-icons/fa';

function IntroToJava() {
  return (
    <div className="p-[150px] bg-champagne font-quicksand py-[70px]">
      <h1 className="font-bold text-center mb-4 text-blush text-4xl">Introduction to Java</h1>
      <p className="text-center text-blush text-xl mb-4">
        Learn what Java is and how to write your first simple programs!
      </p>

      <div className="text-left font-bold text-golden">
        <div className="space-y-8">

          {/* Unit 1 */}
          <div>
            <h1 className="text-left text-golden text-2xl mb-4">Unit 1: Getting Started</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/intro/1-1" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaBook className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">1.1: What is Java?</p>
                </div>
                <p className="text-lg text-gray-700">Discover where Java is used and why it’s great for beginners.</p>
              </Link>

              <Link to="/intro/1-2" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaBook className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">1.2: Installing Java</p>
                </div>
                <p className="text-lg text-gray-700">Install Java step by step.</p>
              </Link>

              <Link to="/intro/1-3" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">1.3: Hello World</p>
                </div>
                <p className="text-lg text-gray-700">Write your first program!</p>
              </Link>

              <Link to="/intro/1-4" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                  <p className="text-lg">1.4: Unit 1 Quiz</p>
                </div>
                <p className="text-lg text-gray-700">Quiz on Java basics.</p>
              </Link>
            </div>
          </div>

          {/* Unit 2 */}
          <div>
            <h1 className="text-left text-golden text-2xl mb-4">Unit 2: Variables & Data Types</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/intro/2-1" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaBook className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">2.1: Variables</p>
                </div>
                <p className="text-lg text-gray-700">Learn about variables in Java.</p>
              </Link>

              <Link to="/intro/2-2" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">2.2: Integers & Doubles</p>
                </div>
                <p className="text-lg text-gray-700">Whole & decimal numbers.</p>
              </Link>

              <Link to="/intro/2-3" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">2.3: Strings & Booleans</p>
                </div>
                <p className="text-lg text-gray-700">Words & true/false values.</p>
              </Link>

              <Link to="/intro/2-4" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">2.4: Simple Operations</p>
                </div>
                <p className="text-lg text-gray-700">Basic math in Java.</p>
              </Link>

              <Link to="/intro/2-5" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">2.5: Printing Variables</p>
                </div>
                <p className="text-lg text-gray-700">Show variable values.</p>
              </Link>

              <Link to="/intro/2-6" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                  <p className="text-lg">2.6: Unit 2 Quiz</p>
                </div>
                <p className="text-lg text-gray-700">Test yourself.</p>
              </Link>
            </div>
          </div>

          {/* Unit 3 */}
          <div>
            <h1 className="text-left text-golden text-2xl mb-4">Unit 3: Input & Output</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/intro/3-1" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">3.1: User Input</p>
                </div>
                <p className="text-lg text-gray-700">Scanner & user input.</p>
              </Link>

              <Link to="/intro/3-2" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">3.2: Combining Input & Output</p>
                </div>
                <p className="text-lg text-gray-700">Make interactive programs.</p>
              </Link>

              <Link to="/intro/3-3" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                  <p className="text-lg">3.3: Unit 3 Quiz</p>
                </div>
                <p className="text-lg text-gray-700">Check your understanding.</p>
              </Link>
            </div>
          </div>

          {/* Unit 4 */}
          <div>
            <h1 className="text-left text-golden text-2xl mb-4">Unit 4: Review & Practice</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/intro/4-1" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-2xl mr-3 text-blue-500" />
                  <p className="text-lg">4.1: Debugging Basics</p>
                </div>
                <p className="text-lg text-gray-700">Fixing typos & mistakes.</p>
              </Link>

              <Link to="/intro/4-2" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-3 text-green-500" />
                  <p className="text-lg">4.2: Intro to Java Review Quiz</p>
                </div>
                <p className="text-lg text-gray-700">Final quiz review.</p>
              </Link>

              <Link to="/intro/4-3" className="bg-white p-6 rounded-lg shadow-lg block">
                <div className="flex items-center mb-4">
                  <FaCode className="text-2xl mr-3 text-red-500" />
                  <p className="text-lg">4.3: Mini Project: Age Calculator</p>
                </div>
                <p className="text-lg text-gray-700">Build an age calculator!</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default IntroToJava;
