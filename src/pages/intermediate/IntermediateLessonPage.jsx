import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { lessons } from './intermediate-lessons';

export default function IntermediateLessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const index = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[index];
  const nextLesson = lessons[index + 1];
  const prevLesson = lessons[index - 1];
  const [showHint, setShowHint] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFeedback, setQuizFeedback] = useState({});
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showHint3, setShowHint3] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const [code, setCode] = useState(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello!");
  }
}`);
  const [output, setOutput] = useState('');
  
  useEffect(() => {
    setTimeout(() => {
      if (window.pym && window.pym.autoInit) {
        window.pym.autoInit();
      }
    }, 0);
  }, [lessonId]);

  useEffect(() => {
    setQuizAnswers({});
    setQuizFeedback({});
    setCode(`public class Main {
  public static void main(String[] args) {
    //Enter your code here
  }
}`);
    setOutput('');
  }, [lessonId]);

  if (!lesson) return <p>Lesson not found!</p>;

  const handleQuizChange = (q, value) => {
    setQuizAnswers({ ...quizAnswers, [q]: value });
  };

  const submitQuiz = () => {
    const answerKey = {
      '9-6': { q1: 'int[] numbers = new int[5];', q2: 'scores[2]', q3: 'for loop', q4: 'The number of items in the array'},
      '10-3': { q1: 'Hello Alex!', q2: 'The number of characters in a string', q3: 'toUpperCase()', q4: 'Returns "ding"' },
      '11-1': { q1: 'CodeLab', q2: '5', q3: "nums[2]", q4: 'Java is Fun' }
    }[lessonId] || {};

    const feedback = {};
    Object.entries(answerKey).forEach(([q, correct]) => {
      const userAnswer = quizAnswers[q];
      if (userAnswer === correct) {
        feedback[q] = `✅ Correct!`;
      } else {
        feedback[q] = `❌ Not quite. Correct: ${correct}`;
      }
    });

    setQuizFeedback(feedback);
  };

  const runCode = async () => {
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: 'java', code })
      });
      const result = await response.json();
      setOutput(result.output || result.error);
    } catch (err) {
      setOutput('Error running code.');
    }
  };

  let content;

  /** === UNIT 9 === **/
  if (lessonId === '9-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        Imagine you want to store your top 5 favorite numbers. Instead of making 5 separate variables (number1, number2, etc.), you use an array to keep them all together. It’s like having a row of mailboxes, each with its own number!
      </p>
      <p className="text-lg mb-3">
        In Java, an array holds multiple values of the same type, like all <code>int</code>s or all <code>String</code>s. You can then use an index (starting at 0) to get or change each item.
      </p>
      <p className="text-lg mb-3 font-bold">Here’s how you create an int array for 5 numbers:</p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int[] favoriteNumbers = new int[5];`}
      </pre>

      <p className="text-lg mb-3">
        This line says: "Make a new array named <code>favoriteNumbers</code> that can hold 5 integers."
      </p>

      <p className="text-lg mb-3 font-bold">To put values in, you can do:</p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`favoriteNumbers[0] = 7;  // first box
favoriteNumbers[1] = 42; // second box`}
      </pre>

      <p className="text-lg mb-3">
        And to get the value from the third box, use:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int thirdNumber = favoriteNumbers[2];`}
      </pre>

      <p className="text-lg mb-3">
        Remember, arrays start counting at 0, so <code>favoriteNumbers[0]</code> is the first item.
      </p>

      <p className="text-lg mb-3 font-bold">Here’s a quick example putting it all together:</p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    int[] favoriteNumbers = new int[5];
    favoriteNumbers[0] = 7;
    favoriteNumbers[1] = 42;
    favoriteNumbers[2] = 3;
    favoriteNumbers[3] = 12;
    favoriteNumbers[4] = 99;

    System.out.println("My favorite number is " + favoriteNumbers[1]);
  }
}`}
      </pre>

      <p className="text-lg mb-3">
        When you run this, it prints: <code>My favorite number is 42</code>
      </p>

      <p className="text-lg">
        Arrays help you organize many pieces of related data efficiently. Next, you’ll learn how to loop through arrays to process each item easily!
      </p>
    </div>
  );
  } else if (lessonId === '9-2') {
  content = (
    <div className="p-6">

      <p className="text-lg mb-3">
        To declare an array, tell Java the type and how many items it will hold:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int[] numbers = new int[3]; // creates an int array with 3 spots`}
      </pre>

      
      <p className="text-lg mb-3">
        To initialize values, use the index (starting at 0):
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`numbers[1] = "20";`}
      </pre>

      <p className="text-lg mb-3">
        You can also create and fill it right away:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`String[] fruits = {"apple", "banana", "cherry"};`}
      </pre>


      <p className="text-lg mb-3 font-bold">
        Practice: Declare an int array of size 3, set the second item to 10, and print it!
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Write your code here
  }
}`}
      </pre>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int[] numbers = new int[3];
    numbers[2] = 10;
    System.out.println(numbers[2]);
  }
}`}
        </pre>
      )}


      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
  } else if (lessonId === '9-3') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        <strong>Accessing Array Elements</strong>
        <ul className="list-disc list-inside mt-1">
          <li><code>names[0]</code> gets the first element → "Alice"</li>
          <li><code>System.out.println(nums[2]);</code> prints the third value</li>
        </ul>
      </p>

      <p className="text-lg mb-3">
        <strong>Changing Values</strong>
        <ul className="list-disc list-inside mt-1">
          <li><code>names[1] = "Ben";</code> replaces "Bob" with "Ben"</li>
          <li>Use <code>=</code> to overwrite a specific index</li>
        </ul>
      </p>

      <p className="text-lg mb-3">
        <strong>Array Length</strong><br/>
        Use <code>array.length</code> to get the number of elements. Note: no parentheses!
        <br/><code>System.out.println(names.length);</code> → 3
      </p>

      <p className="text-lg mb-3">
        <strong>Calling or Printing</strong>
        <ul className="list-disc list-inside mt-1">
          <li><code>System.out.println(names[2]);</code> → prints one element</li>
        </ul>
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    String[] colors = {"Red", "Green", "Blue"};
    
    System.out.println("Total colors: " + colors.length); // .length tells us how many elements
  }
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        <strong>Try It Yourself:</strong><br/>
        Using the starter code, declare and initialize an array and print the length:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    // Declare and modify an array here
  }
}`}
      </pre>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
} else if (lessonId === '9-4') {

  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Looping Through Arrays in Java</strong><br />
        Arrays let you store multiple values of the same type in one variable. You can use loops to go through each item in the array and perform actions on them.
      </p>

      <p className="mb-3">
        The <code className="bg-gray-200 px-1">for</code> loop is most common for arrays. It lets you repeat actions for each index. Java also offers a simpler "enhanced for loop" that goes through each element directly.
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Examples' : 'Show Examples'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-4 whitespace-pre-wrap">
{`// Traditional for loop:
String[] fruits = {"Apple", "Banana", "Cherry"};
for (int i = 0; i < fruits.length; i++) {
  System.out.println(fruits[i]);
}

// Enhanced for loop (for-each):
for (String fruit : fruits) {
  System.out.println(fruit);
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        Try it below! Fill in the loop to print out each number in the array. Change or add values if you like!
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int[] numbers = {3, 7, 1, 9, 4};

    // Loop through and print each number
    // Your code here
  }
}`}
      </pre>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
} else if (lessonId === '9-5') {
  content = (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black-800 mb-4">Common Array Problems in Java</h2>

      {/* Max Value */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">1. Find the Maximum Value</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] numbers = {4, 9, 2, 17, 6};
    int max = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    System.out.println("Max value: " + max);
  }
}

`}
      </pre>
      <p className="mb-4">
         This code starts by assuming the first value is the max. It loops through the rest of the array and updates <code>max</code> whenever it finds a larger number.
      </p>

      {/* Count Occurrences */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2"> 2. Count Occurrences of a Value</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] scores = {1, 3, 4, 3, 5, 3};
    int count = 0;

    for (int score : scores) {
      if (score == 3) {
        count++;
      }
    }

    System.out.println("Number of 3s: " + count);
  }
}

`}
      </pre>
      <p className="mb-4">
        This code uses a <code>for-each</code> loop to go through the array and count how many times the number 3 appears.
      </p>

      {/* Sum All Elements */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">3. Sum All Elements</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] values = {2, 4, 6, 8};
    int sum = 0;

    for (int value : values) {
      sum += value;
    }

    System.out.println("Sum: " + sum);
  }
}

`}
      </pre>
      <p className="mb-4">
        This loop adds up every number in the array using <code>sum += value</code>. A common pattern when processing numbers.
      </p>

      {/* Average */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">4. Calculate Average</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] grades = {90, 85, 80};
    int total = 0;

    for (int grade : grades) {
      total += grade;
    }

    double average = (double) total / grades.length;
    System.out.println("Average: " + average);
  }
}

`}
      </pre>
      <p className="mb-4">
        Sum all values first, then divide by <code>grades.length</code>. Use <code>(double)</code> to make sure the division isn’t rounded.
      </p>

      {/* Search for a Value */}
      <h3 className="text-xl font-semibold text-black-700 mt-6 mb-2">5. Check if a Value Exists</h3>
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    int[] data = {7, 12, 19, 23};
    int target = 19;
    boolean found = false;

    for (int num : data) {
      if (num == target) {
        found = true;
        break;
      }
    }
    System.out.println("Found? " + found);
  }
}
`}
      </pre>
      <p className="mb-4">
        This loop checks if <code>target</code> is in the array. If found, it sets <code>found</code> to true and exits early using <code>break</code>.
      </p>

      <p className="mb-4 text-xl">
        Try it yourself! Copy the examples into the code editor below and examine the outputs.
      </p>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>

    </div>
  );
}
 else if (lessonId === '9-6') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. What is the correct way to declare an array of integers in Java?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'int numbers = [5];')} /> int numbers = [5];</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'array int numbers = 5;')} /> array int numbers = 5;</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'int[] numbers = new int[5];')} /> int[] numbers = new int[5];</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'int numbers[] = 5;')} /> int numbers[] = 5;</label><br/>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. How do you access the third element of an array called <code>scores</code>?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores[2]')} /> scores[2]</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores(3)')} /> scores(3)</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores{2}')} /> scores{2}</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'scores[3]')} /> scores[3]</label>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. Which loop is commonly used to go through every element in an array?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'if statement')} /> if statement</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'for loop')} /> for loop</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'switch case')} /> switch case</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'do-while loop')} /> do-while loop</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">4. What does <code>array.length</code> return?</p>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'The last item in the array')} /> The last item in the array</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Always 10')} /> Always 10</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'The index of the last element')} /> The index of the last element</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'The number of items in the array')} /> The number of items in the array</label><br/>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Submit Quiz</button>
    </div>
  );
}


/** === UNIT 10 === **/

else if (lessonId === '10-1') {
  content = (
    <div className="p-6">

      <p className="text-lg mb-3">
        <code>.toUpperCase</code> turns all letters into uppercase — prints <code>"HELLO"</code>.
      </p>

      {/* toUpperCase */}
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    String greeting = "hello";
    System.out.println(greeting.toUpperCase());
  }
}
`}
      </pre>
      <p className="text-lg mb-3">
        <code>.length</code> returns the number of characters — prints <code>6</code>.
      </p>

      {/* length */}
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    String word = "banana";
    System.out.println(word.length());
  }

`}
      </pre>
      <p className="text-lg mb-3">
        <code>.substring(#)</code> cuts out part of the string starting at index 5 — prints <code>"morning"</code>.
      </p>

      {/* substring */}
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    String phrase = "good morning";
    System.out.println(phrase.substring(5));
  }
`}
      </pre>
      <p className="text-lg mb-3">
        <code>.equals(x)</code> checks if two strings are exactly the same — this prints <code>false</code> because of the capital "H".
      </p>

      {/* equals */}
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    String a = "hi";
    String b = "Hi";
    System.out.println(a.equals(b));
  }
`}
      </pre>
      <p className="text-lg mb-3">
        <code>.charAt(#)</code> returns the character at a certain position (starts at 0) — prints <code>'S'</code>.
      </p>

      {/* charAt */}
      <pre className="bg-gray-100 p-3 rounded mb-2">
{`public class Main {
  public static void main(String[] args) {
    String name = "Sophie";
    System.out.println(name.charAt(0));
  }

`}
      </pre>

      <p className="text-lg mt-6 text-black-800 font-medium">
        Try using these methods in the code editor below!
      </p>

      <div
        data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
}

else if (lessonId === '10-2') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-black-900">
        Concatenation means combining strings (text) together using the <code>+</code> operator.
        It’s how you can build longer messages by joining words, variables, or even numbers!
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    String firstName = "Tony";
    String lastName = "Stark";
    int age = 47;

    // Combine first and last name
    System.out.println("Name: " + firstName + " " + lastName);

    // Add text and a number
    System.out.println("Age: " + age);

    // Build a full sentence
    System.out.println(firstName + " is " + age + " years old.");
  }
}`}
      </pre>

      <p className="text-lg mb-3 font-semibold text-purple-800">What this code does:</p>
      <ul className="list-disc ml-6 mb-4 text-lg">
        <li><code>String firstName = "Tony";</code> – Creates a string variable to hold the first name.</li>
        <li><code>System.out.println("Name: " + firstName + " " + lastName);</code> – Combines strings and variables to print a full name.</li>
        <li><code>" + age</code> – Converts the number to text and adds it into the sentence.</li>
        <li>Java automatically turns numbers into strings when you use <code>+</code> with text.</li>
      </ul>

      <p className="text-lg mb-3">
        Try it yourself! Paste this into the code editor and change the name or age to make it your own.
      </p>

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
} else if (lessonId === '10-3') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. What is the result of the following code?</p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
{`String name = "Alex";
System.out.println("Hello " + name + "!");`}
        </pre>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Hello Alex!')} /> Hello Alex!</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Hello name!')} /> Hello name!</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Alex Hello!')} /> Alex Hello!</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Syntax Error')} /> Syntax Error</label><br/>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. What does the <code>length()</code> method return?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The number of words in a string')} /> The number of words in a string</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The size of an array')} /> The size of an array</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The number of characters in a string')} /> The number of characters in a string</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The number of lines in a program')} /> The number of lines in a program</label><br/>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. Which method makes all characters in a string uppercase?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'makeUpper()')} /> makeUpper()</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'toUpperCase()')} /> toUpperCase()</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'upper()')} /> upper()</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'capAll()')} /> capAll()</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">4. What does <code>substring(2)</code> do on the string <code>"Coding"</code>?</p>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Returns "Coding"')} /> Returns "Coding"</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Returns "Cod"')} /> Returns "Cod"</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Returns "ing"')} /> Returns "ing"</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Returns "ding"')} /> Returns "ding"</label><br/>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Submit Quiz</button>
    </div>
  );
}


// === UNIT 11 ===

else if (lessonId === '11-1') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. What does the following line output?</p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`String name = "Code";\nSystem.out.println(name + "Lab");`}
        </pre>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'nameLab')} /> nameLab</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Code Lab')} /> Code Lab</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Error')} /> Error</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'CodeLab')} /> CodeLab</label><br/>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. What is the output of this code?</p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`String s = "hello";\nSystem.out.println(s.length());`}
        </pre>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '5')} /> 5</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '4')} /> 4</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '6')} /> 6</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Error')} /> Error</label><br/>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. How do you access the third element in this array?</p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
          {`int[] nums = {2, 4, 6, 8};`}
        </pre>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'nums(3)')} /> nums(3)</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'nums[2]')} /> nums[2]</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'nums[3]')} /> nums[3]</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'nums[1]')} /> nums[1]</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">4. What does the following code print?</p>
        <pre className="bg-gray-100 p-2 rounded mb-2">
{`String a = "Java";
String b = "Fun";
System.out.println(a + " is " + b);`}
        </pre>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Java is Fun')} /> Java is Fun</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'JavaFun')} /> JavaFun</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Java + is + Fun')} /> Java + is + Fun</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Error')} /> Error</label><br/>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
        Submit Quiz
      </button>
    </div>
  );
}
 else if (lessonId === '11-2') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        <strong>Final mini project:</strong> Build a grade calculator!
      </p>

      <p className="text-lg mb-3">
        Your program should ask the user to enter 5 assignment scores (from 0 to 100). 
        Then, calculate the average and print the letter grade based on this scale:
      </p>

      <ul className="list-disc ml-6 mb-3">
        <li><strong>A</strong>: 90-100</li>
        <li><strong>B</strong>: 80-89</li>
        <li><strong>C</strong>: 70-79</li>
        <li><strong>D</strong>: 60-69</li>
        <li><strong>F</strong>: Below 60</li>
      </ul>

      <p className="text-lg mb-3">
        Enter your 5 scores in the "STDIN Input" field with each number on a new line, and use <code>Scanner</code> for input.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // Write your code here
  }
}`}
      </pre>

      <div className="mb-4">
        <button
          onClick={() => setShowHint1(!showHint1)}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        >
          {showHint1 ? 'Hide Hint 1' : 'Show Hint 1'}
        </button>
        {showHint1 && (
          <p className="bg-gray-100 p-3 rounded mt-2">
            <strong>Hint 1:</strong> You can use a loop to read 5 numbers and add them together.
          </p>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => setShowHint2(!showHint2)}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        >
          {showHint2 ? 'Hide Hint 2' : 'Show Hint 2'}
        </button>
        {showHint2 && (
          <p className="bg-gray-100 p-3 rounded mt-2">
            <strong>Hint 2:</strong> After collecting the scores, divide the total by 5 to get the average.
          </p>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => setShowHint3(!showHint3)}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        >
          {showHint3 ? 'Hide Hint 3' : 'Show Hint 3'}
        </button>
        {showHint3 && (
          <p className="bg-gray-100 p-3 rounded mt-2">
            <strong>Hint 3:</strong> Use <code>if</code>/<code>else if</code> statements to determine the letter grade.
          </p>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution && (
          <pre className="bg-gray-100 p-3 rounded mt-2">
{`import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int total = 0;

    for (int i = 1; i <= 5; i++) {
      System.out.print("Enter score " + i + ": ");
      int score = input.nextInt();
      total += score;
    }

    double average = total / 5.0;
    System.out.println("Average score: " + average);

    if (average >= 90) {
      System.out.println("Grade: A");
    } else if (average >= 80) {
      System.out.println("Grade: B");
    } else if (average >= 70) {
      System.out.println("Grade: C");
    } else if (average >= 60) {
      System.out.println("Grade: D");
    } else {
      System.out.println("Grade: F");
    }
  }
}`}
          </pre>
        )}
      </div>

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
}
// === UNIT 12 ===

 else if (lessonId === '12-1') {
  content = (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-2">Congratulations on Completing JavaBunny!</h2>
      <p>You've built a solid foundation in Java programming. Here's what you can explore next—completely free:</p>

      <div>
        <h3 className="font-semibold">1. Learn Java Deeper with Free Textbooks</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            <a href="https://introcs.cs.princeton.edu/java/home/" target="_blank" className="text-blue-600 underline">Intro to Programming in Java - Princeton</a> — a beginner-friendly textbook with examples and exercises.
          </li>
          <li>
            <a href="https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf" target="_blank" className="text-blue-600 underline">Teach Yourself Java in 21 days textbook</a> — great for learning the basics in less than a month
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">2. Take Free Java Courses</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            <a href="https://www.edx.org/learn/java" target="_blank" className="text-blue-600 underline">Java Courses on edX (free audit)</a> — real university-level content.
          </li>
          <li>
            <a href="https://www.codecademy.com/learn/learn-java" target="_blank" className="text-blue-600 underline">Codecademy Learn Java</a> — interactive and visual.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">3. Practice with Projects & Challenges</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Build small games (Tic Tac Toe, Guess the Number, Hangman).
          </li>
          <li>
            Solve Java problems on <a href="https://leetcode.com/problemset/all/" target="_blank" className="text-blue-600 underline">LeetCode</a> and <a href="https://codingbat.com/java" target="_blank" className="text-blue-600 underline">CodingBat</a>.
          </li>
          <li>
            Create a simple portfolio website to display your code using GitHub Pages.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">4. Learn About Java Frameworks and Tools</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Explore basic Android development using <a href="https://developer.android.com/codelabs/build-your-first-android-app" target="_blank" className="text-blue-600 underline">Android Studio</a>.</li>
          <li>Learn about JavaFX to make GUI apps (desktop programs with buttons and menus).</li>
          <li>Read official docs: <a href="https://docs.oracle.com/javase/tutorial/" target="_blank" className="text-blue-600 underline">Oracle’s Java Tutorials</a>.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">5. What's Next?</h3>
        <p>Now that you know the basics, it's time to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Pick a specialization — like Android apps, games, or backend servers.</li>
          <li>Work on bigger projects with classes, files, and APIs.</li>
          <li>Stay curious and keep learning!</li>
        </ul>
      </div>

      <p className="mt-4 font-bold">You’ve officially outgrown JavaBunny. Time to hop into your next adventure!</p>
    </div>
  );
}


  return (
    <div className="p-[80px] bg-champagne font-quicksand py-[50px]">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-lg mb-8">{lesson.content}</p>
      {content}
      <div className="flex justify-between mt-12">
        {prevLesson ? (
          <Link to={`/intermediate/${prevLesson.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">← Back</Link>
        ) : (
          <button onClick={() => navigate(-1)} className="inline-block bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">← Back</button>
        )}
        {nextLesson ? (
          <Link to={`/intermediate/${nextLesson.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next →</Link>
        ) : (
          <p className="text-green-700 font-bold text-xl">Congratulations on completing every lesson in JavaBunny!</p>
        )}
      </div>
    </div>
  );
}
