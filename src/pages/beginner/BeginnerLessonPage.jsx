import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { lessons } from './beginner-lessons';

export default function BeginnerLessonPage() {
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
    System.out.println("Hello!");
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
      '5-4': { q1: 'Executes code only if a condition is true', q2: 'Checks a new condition if the first one is false', q3: 'The else block will run', q4: 'if (x > 5) { System.out.println("Hi"); }'},
      '6-6': { q1: 'for', q2: '012', q3: 'do-while' },
      '7-4': { q1: 'A value passed into a method', q2: 'The type of value it returns', q3: 'void hello(String name)', q4: 'greet();' },
      '8-1': { q1: 'if (condition) { }', q2: 'do-while', q3: 'To organize and reuse code', q4: 'Checks another condition if the first was false'}
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

  /** === UNIT 5 === **/
  if (lessonId === '5-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3 text-purple-900">
        <strong>Welcome to Conditionals!</strong> Imagine you’re playing a game. If your score is over 100, you level up. If you touch lava, you lose a life. That’s what conditionals do in coding — they let your program make decisions based on what’s happening! 
      </p>

      <p className="text-lg mb-3 text-blue-900">
        In Java, the most basic type of conditional is an <code className="bg-blue-100 px-1 rounded text-black font-mono">if</code> statement. Here's the idea:
      </p>

      <div className="bg-yellow-100 p-4 rounded-lg text-black mb-4 font-mono text-base shadow-md">
        if (somethingIsTrue) &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;// do this!<br />
        &#125;
      </div>

      <p className="text-lg mb-3">
        Let’s break that down. The code inside the curly braces <code className="font-mono">&#123; &#125;</code> will only run if the thing inside the parentheses is true. 
      </p>

      <p className="text-lg mb-3 text-green-800">
        <strong>Example time!</strong> Let’s say we want to check the weather:
      </p>

      <div className="bg-green-100 p-4 rounded-lg text-black mb-4 font-mono text-base shadow-md">
        boolean isRaining = true;<br />
        if (isRaining) &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(" Don't forget your umbrella!");<br />
        &#125;
      </div>

      <p className="text-lg mb-3">
        Since <code className="font-mono">isRaining</code> is true, Java will run the code inside and print the reminder. If it were false, it would skip that part. No umbrella needed! 
      </p>

      <p className="text-lg mb-3 text-red-800">
        What if we want to do something else when it’s not raining? That’s where <code className="font-mono">else</code> comes in!
      </p>

      <div className="bg-pink-100 p-4 rounded-lg text-black mb-4 font-mono text-base shadow-md">
        if (isRaining) &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Don't forget your umbrella!");<br />
        &#125; else &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Sunglasses time!");<br />
        &#125;
      </div>

      <p className="text-lg mb-3">
        Java will choose one path or the other — like a choose-your-own-adventure book! 
      </p>

      <p className="text-lg mb-3 text-blue-800">
        You can also stack more choices using <code className="font-mono">else if</code>. For example:
      </p>

      <div className="bg-indigo-100 p-4 rounded-lg text-black mb-4 font-mono text-base shadow-md" >
        
        int score = 85;<br />
        if (score &gt;= 90) &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("You got an A!");<br />
        &#125; else if (score &gt;= 80) &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("You got a B!");<br />
        &#125; else &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Keep trying!");<br />
        &#125;
      </div>

      <p className="text-lg mb-3">
        This lets your program respond to <strong>many different situations</strong>! Think of it like your brain making decisions all day:
        <ul className="list-disc ml-6 mt-2 text-base text-purple-900">
          <li>If it’s cold → wear a jacket </li>
          <li>Else if it’s hot → wear shorts </li>
          <li>Else → hoodie time! </li>
        </ul>
      </p>

      <p className="text-lg">
         <strong>Conditionals are like traffic lights for your code.</strong> They help control the flow and decide which direction to take based on what’s going on.
      </p>

      <p className="text-lg mt-4">
        Next, we’ll start combining conditionals with <strong>loops</strong>, so your programs can start doing even more smart things!
      </p>
    </div>
  );
} else if (lessonId === '5-2') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Using If Statements in Java</strong><br />
        Sometimes in coding, you only want something to happen *if* a certain condition is true. That’s where <code className="bg-gray-200 px-1">if</code> statements come in!  
        They let you tell the computer: “Only do this when a specific thing is true.”
      </p>

      <p className="text-lg mb-3">
        You write an <code className="bg-gray-200 px-1">if</code> statement by checking a condition inside parentheses <code>()</code>. If that condition is true, the code inside the curly braces <code>{`{}`}</code> will run.
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
    int age = 18;
    if (age >= 13) {
      System.out.println("You are a teenager or older!");
    }
  }
}`}
        </pre>
      )}

      <p className="text-lg mb-3">
        Try it below! Paste the code into the editor, then try changing the value of <code>age</code> and see how the output changes.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int age = 10;
    // Write an if statement that says "You're a kid!" if age is less than 13
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
} else if (lessonId === '5-3') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>Understanding else and else if in Java</strong><br />
        In Java, <code className="bg-gray-200 px-1">if</code> statements allow you to run a block of code only when a specific condition is true. 
        But what if that condition is false? That’s where <code className="bg-gray-200 px-1">else</code> and <code className="bg-gray-200 px-1">else if</code> come in!
      </p>

      <p className="text-lg mb-3">
        <strong>🔸 else if:</strong> This gives you a way to check more than one condition. Java will check each <code>else if</code> in order, and it will run the first one that’s true. If none of the <code>if</code> or <code>else if</code> blocks are true, then it moves to the <code>else</code> (if you have one).
      </p>

      <p className="text-lg mb-3">
        <strong>🔹 else:</strong> This is used when none of the <code>if</code> or <code>else if</code> conditions are true. It's a backup plan—Java runs the <code>else</code> block only when all other conditions fail.
      </p>

      

      <p className="text-lg mb-3">
        <strong>When to use them:</strong> Use <code>if</code> when checking the first condition, <code>else if</code> when you have other possible cases to check, and <code>else</code> to handle everything else.
      </p>

      <p className="text-lg mb-3">
        In this example, we use <code>if</code>, <code>else if</code>, and <code>else</code> to determine a grade based on a score:
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <div>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int score = 85;

    if (score >= 90) {
      System.out.println("You got an A!");
    } else if (score >= 80) {
      System.out.println("You got a B!");
    } else {
      System.out.println("Keep trying!");
    }
  }
}`}
        </pre>
        <p className="text-lg mb-3">
        <strong>How this works:</strong><br />
        ➤ If <code>score</code> is 90 or higher, it prints "You got an A!" <br />
        ➤ If <code>score</code> is 80 or higher but less than 90, it prints "You got a B!" <br />
        ➤ If <code>score</code> is less than 80, it prints "Keep trying!"<br />
      </p>

        </div>
        
      )}

      

      <p className="text-lg mb-3">
        Now it’s your turn! Paste the code below into the editor and change the value of <code>score</code> to see how the output changes.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    int score = 70;
    // Write if, else if, and else statements below to check for A, B, or lower grades.
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
} else if (lessonId === '5-4') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. What does an <code>if</code> statement do?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Executes code only if a condition is true')} /> Executes code only if a condition is true</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Repeats code forever')} /> Repeats code forever</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Ends the program')} /> Ends the program</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'Skips to the next line')} /> Skips to the next line</label>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. What is the purpose of an <code>else if</code>?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Ends the program')} /> Ends the program</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Starts a loop')} /> Starts a loop</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Checks a new condition if the first one is false')} /> Checks a new condition if the first one is false</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'Always runs after if')} /> Always runs after if</label><br/>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. What happens if none of the <code>if</code> or <code>else if</code> conditions are true, but there is an <code>else</code>?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'The program crashes')} /> The program crashes</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'The first if runs anyway')} /> The first if runs anyway</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'Nothing happens')} /> Nothing happens</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'The else block will run')} /> The else block will run</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">4. Which of the following is a valid Java conditional?</p>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'if (x > 5) { System.out.println("Hi"); }')} /> if (x &gt; 5) &#123; System.out.println("Hi"); &#125;</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'if x > 5 then print("Hi")')} /> if x &gt; 5 then print("Hi")</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'if x > 5: print("Hi")')} /> if x &gt; 5: print("Hi")</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'print("Hi") if x > 5')} /> print("Hi") if x &gt; 5</label>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
        Submit Quiz
      </button>
    </div>
  );
}


/** === UNIT 6 === **/

else if (lessonId === '6-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4">
        Imagine you need to print <code>"Hello!"</code> 100 times. Typing the same line 100 times would take forever and be super boring.
        Instead, you can use a <strong>loop</strong> to repeat the same action multiple times — <em>automatically</em>!
      </p>

      <p className="text-lg mb-4">
        A <strong>loop</strong> in Java lets your code run over and over again — either a set number of times or until a condition is no longer true.
        This makes your code shorter, cleaner, and way more powerful.
      </p>

      <p className="text-lg mb-3">
        For example, this loop prints <code>"Hello!"</code> five times:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-3">
{`for (int i = 1; i <= 5; i++) {
  System.out.println("Hello!");
}`}
      </pre>

      <p className="text-lg mb-3">
        This code means:
        <ul className="list-disc ml-6 mb-3">
          <li><code>int i = 1;</code> → Start with i = 1</li>
          <li><code>i &lt;= 5;</code> → Keep going while i is 5 or less</li>
          <li><code>i++;</code> → After each loop, add 1 to i</li>
        </ul>
      </p>

      <p className="text-lg mb-4">
        Loops are useful when:
        <ul className="list-disc ml-6">
          <li>You want to repeat something multiple times</li>
          <li>You want to go through a list of items (like numbers, names, etc.)</li>
          <li>You want your program to run until a user gives a certain input</li>
        </ul>
      </p>

      <p className="text-lg mb-4">
        Without loops, you'd have to write the same code over and over again.
        With loops, your program can do so much more — with less effort!
      </p>

      <img
        className="w-64 my-4"
        src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
        alt="Looping cat"
      />
    </div>
  );
}
else if (lessonId === '6-2') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>What is a <code>while</code> loop?</strong><br />
        A <code>while</code> loop repeats a block of code <strong>as long as a condition is true</strong>. It’s useful when you want to repeat something but don’t know ahead of time how many times it should run.
      </p>

      <p className="text-lg mb-4">
        Here’s the structure of a <code>while</code> loop:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`while (condition) {
  // Code to repeat
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
{`int counter = 1;
while (counter <= 5) {
  System.out.println(counter);
  counter++;
}`}
        </pre>
      )}

      <p className="text-lg mb-2 text-blue-900">
        <strong>Now you try!</strong> Use the code below as your starting point. Paste it into the editor and complete the missing lines.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    // Step 1: Declare a variable called count and set it to 1

    // Step 2: Create a while loop that runs while count is less than or equal to 3

    // Step 3: Inside the loop, print count

    // Step 4: Increase count by 1
  }
}`}
      </pre>

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
}

else if (lessonId === '6-3') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-4 text-blue-900">
        <strong>What is a <code>for</code> loop?</strong><br />
        A <code>for</code> loop repeats code a specific number of times. You use it when you know in advance how many times you want to loop.
      </p>

      <p className="text-lg mb-3">
        The structure of a <code>for</code> loop looks like this:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`for (initialization; condition; update) {
  // Code to repeat
}`}
      </pre>

      <p className="text-lg mb-3">
        It has three parts:
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Initialization</strong>: sets up a loop control variable</li>
          <li><strong>Condition</strong>: runs the loop as long as it’s true</li>
          <li><strong>Update</strong>: changes the loop variable each time</li>
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
{`// This loop prints numbers from 1 to 5
for (int i = 1; i <= 5; i++) {
  System.out.println(i);
}`}
        </pre>
      )}

      <p className="text-lg mb-3 text-blue-900">
        <strong>Now you try!</strong> Use the starter code below. Fill in the missing parts to create a loop that prints numbers from 1 to 3.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    // Step 1: Write a for loop that runs from 1 to 3
    // Step 2: Inside the loop, print the current number
  }
}`}
      </pre>

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
}else if (lessonId === '6-4') {
  content = (
    <div className="p-6">

      <p className="mb-4">
        A <code>do-while</code> loop is like a <code>while</code> loop, but it always runs the code at least once, even if the condition is false.
      </p>

      <p className="mb-4">
        Syntax:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`do {
  // code to run
} while (condition);`}
      </pre>

      <p className="mb-4">
        This is helpful when you want your code to run once before checking a condition. Here's an example:
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`int i = 1;
do {
  System.out.println(i);
  i++;
} while (i <= 5);`}
      </pre>

      <p className="text-lg mb-3">
        Try it: Write a <code>do-while</code> loop that prints numbers from 1 to 3 using the starter code below.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Write your do-while loop here
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
        <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    int i = 1;
    do {
      System.out.println(i);
      i++;
    } while (i <= 3);
  }
}`}
        </pre>
      )}

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
}
else if (lessonId === '6-5') {
  content = (
    <div className="p-6">
      <p className="mb-4">
        A <strong>nested loop</strong> means putting one loop inside another. This is useful when you want to repeat a task inside another repeated task.
        For example, printing a grid or multiplying elements in rows and columns.
      </p>

      <p className="mb-4">
        The inner loop runs completely every time the outer loop runs once.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`for (int i = 1; i <= 3; i++) {
  for (int j = 1; j <= 2; j++) {
    System.out.println("i: " + i + ", j: " + j);
  }
}`}
      </pre>

      <p className="text-lg mb-3">
        Try it: Create a nested loop that prints a simple rectangle of stars like this:
        <br />
        <code>
          *****<br />
          *****<br />
        </code>
        (2 rows, 5 stars each)
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Write your nested loops here
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
        <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 2; i++) {
      for (int j = 0; j < 5; j++) {
        System.out.print("*");
      }
      System.out.println(); // moves to the next line
    }
  }
}`}
        </pre>
      )}

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
}
else if (lessonId === '6-6') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. Which loop is best to use when you know exactly how many times to repeat?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'while')} /> while</label><br />
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'do-while')} /> do-while</label><br />
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'foreach')} /> foreach</label><br />
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'for')} /> for</label>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. What is the output of this loop?<br/>
          <code>for(int i = 0; i &lt; 3; i++) {'{'} System.out.print(i); {'}'}</code>
        </p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '0123')} /> 0123</label><br />
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '123')} /> 123</label><br />
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '321')} /> 321</label><br />
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', '012')} /> 012</label>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. Which loop guarantees to run at least once?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'for')} /> for</label><br />
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'while')} /> while</label><br />
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'do-while')} /> do-while</label><br />
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'foreach')} /> foreach</label>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
        Submit Quiz
      </button>
    </div>
  );
}


// === UNIT 7 ===

else if (lessonId === '7-1') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        <strong>Let’s learn about methods!</strong> In Java, a <strong>method</strong> is a reusable block of code that performs a specific task.
      </p>

      <p className="text-lg mb-3">
        You’ve already used methods like <code>System.out.println()</code>! But you can also write your own.
      </p>

      <p className="text-lg mb-3">
        A method has this structure:
        <br />
        <code>public static returnType methodName(parameters) {'{'} code to run {'}'}</code>
      </p>

      <p className="text-lg mb-3">
        Let’s break that down:
        <ul className="list-disc pl-6">
          <li><code>public static</code>: standard for now — we'll explain more later!</li>
          <li><code>returnType</code>: what the method gives back (like <code>int</code>, <code>String</code>, or <code>void</code> if nothing)</li>
          <li><code>methodName</code>: name you give your method (like <code>greet</code>)</li>
          <li><code>parameters</code>: info your method needs to run (like a name or number)</li>
        </ul>
      </p>

      <p className="text-lg mb-3 font-bold">Here’s a simple example:</p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
  }

  public static void main(String[] args) {
    greet("Alex");
  }
}`}
      </pre>

      <p className="text-lg mb-3">
        This program defines a method called <code>greet</code> that takes a name and prints a greeting.  
        Then it calls that method from <code>main</code> and prints <code>Hello, Alex!</code>.
      </p>

      <p className="text-lg mb-3">
        You can reuse the method with different inputs:
        <br />
        <code>greet("Taylor");</code> ➝ <code>Hello, Taylor!</code><br />
        <code>greet("Jordan");</code> ➝ <code>Hello, Jordan!</code>
      </p>

    </div>
  );
} else if (lessonId === '7-2') {
  content = (
    <div className="p-6">

      <p className="text-lg mb-3">
        Here’s how you <strong>define</strong> a method:
        <br />
        <code>public static void greetUser() { }</code>
      </p>

      <p className="text-lg mb-3">
        And here’s how you <strong>call</strong> that method:
        <br />
        <code>greetUser();</code>
        <br />
        This line runs everything inside the <code>greetUser</code> method.
      </p>

      <p className="text-lg mb-3">
        You can even pass data into methods using <strong>parameters</strong>!
        For example:
        <br />
        <code>public static void greetUser(String name) { }</code>
      </p>

      <p className="text-lg mb-3 font-bold">Here’s a quick example:</p>

      <pre className="bg-gray-100 p-3 rounded mb-4">
{`public class Main {
  public static void main(String[] args) {
    greetUser("Alex");  // calling the method with a name
  }

  // method definition
  public static void greetUser(String name) {
    System.out.println("Hello, " + name + "!");
  }
}`}
      </pre>

      <p className="text-lg mb-4">
        In this program:
        <ul className="list-disc pl-6">
          <li><code>greetUser</code> is the name of our method</li>
          <li><code>String name</code> is a parameter the method uses</li>
          <li><code>System.out.println()</code> prints a greeting using the name</li>
        </ul>
      </p>

      <p className="text-lg mb-3">
        You’ll write your own method now. Try changing the name passed to the method!
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Starting Code' : 'Show Starting Code'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Call your method here!
  }

  // Define your method here!
}`}
        </pre>
      )}

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
} else if (lessonId === '7-3') {
  content = (
    <div className="p-6">

      <p className="text-lg mb-3">
        Here’s how you <strong>define</strong> a method:
        <br />
        <code>public static void greetUser() &#123; &#125;</code>
      </p>

      <p className="text-lg mb-3">
        And here’s how you <strong>call</strong> that method:
        <br />
        <code>greetUser();</code>
        <br />
        This line runs everything inside the <code>greetUser</code> method.
      </p>

      <p className="text-lg mb-3">
        You can even pass data into methods using <strong>parameters</strong>!
        For example:
        <br />
        <code>public static void greetUser(String name) &#123; &#125;</code>
      </p>

      <p className="text-lg mb-3 font-bold">Starting Code:</p>
      <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    // Call your method here!
  }

  // Define your method here!
}`}
      </pre>

      <p className="text-lg mb-3">
        Try writing your own method and calling it! You can pass your name into the method and print a message.
      </p>

      <button
        onClick={() => setShowHint(!showHint)}
        className="bg-yellow-500 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-600"
      >
        {showHint ? 'Hide Example' : 'Show Example'}
      </button>

      {showHint && (
        <pre className="bg-gray-100 p-3 rounded mb-3">
{`public class Main {
  public static void main(String[] args) {
    greetUser("Alex");  // calling the method with a name
  }

  // method definition
  public static void greetUser(String name) {
    System.out.println("Hello, " + name + "!");
  }
}`}
        </pre>
      )}

      <div data-pym-src="https://www.jdoodle.com/embed/v1/9beec9c9519134ae" />
    </div>
  );
} else if (lessonId === '7-4') {
  content = (
    <div className="p-6">
      <div className="mb-6">
        <p className="font-bold mb-2">1. What is a method parameter?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'A value returned from a method')} /> A value returned from a method</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'A value passed into a method')} /> A value passed into a method</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'A type of loop')} /> A type of loop</label><br/>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'A method name')} /> A method name</label><br/>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">2. What does a method's return type indicate?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The name of the method')} /> The name of the method</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The parameters used')} /> The parameters used</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The type of value it returns')} /> The type of value it returns</label><br/>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'The number of lines in the method')} /> The number of lines in the method</label><br/>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">3. Which of these is a correct method declaration?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'void hello(String name)')} /> void hello(String name)</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'hello(String name) void')} /> hello(String name) void</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'method void hello()')} /> method void hello()</label><br/>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'String hello void()')} /> String hello void()</label><br/>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">4. How do you call a method named <code>greet</code> that takes no parameters?</p>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'greet;')} /> greet;</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'greet[]')} /> greet[]</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'call greet()')} /> call greet()</label><br/>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'greet();')} /> greet();</label><br/>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button onClick={submitQuiz} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Submit Quiz</button>
    </div>
  );
}


// === UNIT 8 ===

 else if (lessonId === '8-1') {
  content = (
    <div className="p-6">
      {/* Question 1 */}
      <div className="mb-6">
        <p className="font-bold mb-2">1. What is the correct syntax for a basic if statement in Java?</p>
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'if (condition) { }')} /> if (condition) {'{ }'}</label><br />
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'if condition then')} /> if condition then</label><br />
        <label><input type="radio" name="q1" onChange={() => handleQuizChange('q1', 'if: condition =>')} /> if: condition =&gt;</label>
        {quizFeedback.q1 && <p className="text-sm mt-1">{quizFeedback.q1}</p>}
      </div>

      {/* Question 2 */}
      <div className="mb-6">
        <p className="font-bold mb-2">2. Which loop will always run at least once?</p>
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'while')} /> while</label><br />
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'for')} /> for</label><br />
        <label><input type="radio" name="q2" onChange={() => handleQuizChange('q2', 'do-while')} /> do-while</label>
        {quizFeedback.q2 && <p className="text-sm mt-1">{quizFeedback.q2}</p>}
      </div>

      {/* Question 3 */}
      <div className="mb-6">
        <p className="font-bold mb-2">3. What is a method used for in Java?</p>
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'To store user input')} /> To store user input</label><br />
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'To repeat code automatically')} /> To repeat code automatically</label><br />
        <label><input type="radio" name="q3" onChange={() => handleQuizChange('q3', 'To organize and reuse code')} /> To organize and reuse code</label>
        {quizFeedback.q3 && <p className="text-sm mt-1">{quizFeedback.q3}</p>}
      </div>

      {/* Question 4 */}
      <div className="mb-6">
        <p className="font-bold mb-2">4. What does the else if keyword do?</p>
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Ends the program')} /> Ends the program</label><br />
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Repeats the if block')} /> Repeats the if block</label><br />
        <label><input type="radio" name="q4" onChange={() => handleQuizChange('q4', 'Checks another condition if the first was false')} /> Checks another condition if the first was false</label>
        {quizFeedback.q4 && <p className="text-sm mt-1">{quizFeedback.q4}</p>}
      </div>

      <button
        onClick={submitQuiz}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Submit Quiz
      </button>
    </div>
  );
} else if (lessonId === '8-2') {
  content = (
    <div className="p-6">
      <p className="text-lg mb-3">
        <strong>Final mini project:</strong> Build a number guessing game!
      </p>

      <p className="text-lg mb-3">
        The computer will randomly choose a number between 1 and 10. 
        Use a loop to keep asking until they guess correctly or run out of 5 attempts. 
      </p>

      <p className="text-lg mb-3">
        Enter your 5 inputs in the "STDIN Input" field with each number on a new line, and use <code>Scanner</code> for input.
      </p>

      <pre className="bg-gray-100 p-3 rounded mb-3">
{`import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // Write code here
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
            <strong>Hint 1:</strong> Use <code>(int)(Math.random() * 10) + 1</code> to generate a random number between 1 and 10.
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
            <strong>Hint 2:</strong> Use a <code>while</code> loop that runs until the user guesses the number or reaches 5 guesses.
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
            <strong>Hint 3:</strong> Inside the loop, compare the guess to the secret number and give feedback if it’s wrong.
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
    int secret = (int)(Math.random() * 10) + 1;
    int guess = 0;
    int attempts = 0;
    int maxAttempts = 5;

    while (guess != secret && attempts < maxAttempts) {
      System.out.print("Guess a number between 1 and 10: ");
      guess = input.nextInt();
      attempts++;

      if (guess != secret && attempts < maxAttempts) {
        System.out.println("Wrong! Try again.");
      }
    }

    if (guess == secret) {
      System.out.println("Correct! The number was " + secret + ".");
    } else {
      System.out.println("Out of attempts! The number was " + secret + ".");
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



  return (
    <div className="p-[80px] bg-champagne font-quicksand py-[50px]">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-lg mb-8">{lesson.content}</p>
      {content}
      <div className="flex justify-between mt-12">
        {prevLesson ? (
          <Link to={`/beginner/${prevLesson.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">← Back</Link>
        ) : (
          <button onClick={() => navigate(-1)} className="inline-block bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">← Back</button>
        )}
        {nextLesson ? (
          <Link to={`/beginner/${nextLesson.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next →</Link>
        ) : (
          <p className="text-green-700 font-bold text-xl">Great job! You have now finished the Beginner level!</p>
        )}
      </div>
    </div>
  );
}
