const questions =[
    {
  category: "Python",
  questions: [
    {
      question: "What is the correct file extension for Python files?",
      options: [".pyth", ".pt", ".pyt", ".py"],
      correctAnswer: 3,
    },
    {
      question: "How do you start a comment in Python?",
      options: ["//", "#", "<!--", "/*"],
      correctAnswer: 1,
    },
    {
      question: "What keyword is used to define a function in Python?",
      options: ["function", "func", "define", "def"],
      correctAnswer: 3,
    },
    {
      question: "Which of the following is a valid list in Python?",
      options: ["{1,2,3}", "[1,2,3]", "(1,2,3)", "<1,2,3>"],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to handle exceptions?",
      options: ["error", "catch", "except", "handle"],
      correctAnswer: 2,
    },
    {
      question: "Which function is used to get the length of a list?",
      options: ["count()", "length()", "len()", "size()"],
      correctAnswer: 2,
    },
    {
      question: "How do you insert comments in Python?",
      options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is a mutable data type?",
      options: ["tuple", "str", "list", "int"],
      correctAnswer: 2,
    },
    {
      question: "How do you create a dictionary in Python?",
      options: ["[]", "()", "{}", "<>"],
      correctAnswer: 2,
    },
    {
      question: "Which method adds an item to a list?",
      options: ["insert()", "append()", "add()", "include()"],
      correctAnswer: 1,
    },
    {
      question: "What is the output of: 2 ** 3?",
      options: ["5", "6", "8", "9"],
      correctAnswer: 2,
    },
    {
      question: "What is the output of bool(0)?",
      options: ["True", "False", "0", "None"],
      correctAnswer: 1,
    },
    {
      question: "How do you start a for loop in Python?",
      options: ["for (x in y)", "foreach x in y", "for x in y:", "loop x in y"],
      correctAnswer: 2,
    },
    {
      question: "Which built-in function returns the type of a variable?",
      options: ["typeof()", "type()", "check()", "varType()"],
      correctAnswer: 1,
    },
    {
      question: "What does the 'pass' statement do?",
      options: ["Skips code execution", "Exits loop", "Does nothing", "Returns a value"],
      correctAnswer: 2,
    },
    {
      question: "What keyword is used to create a class?",
      options: ["define", "object", "create", "class"],
      correctAnswer: 3,
    },
    {
      question: "Which of the following is a Python tuple?",
      options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
      correctAnswer: 0,
    },
    {
      question: "What does 'None' represent in Python?",
      options: ["0", "False", "An empty string", "Null value"],
      correctAnswer: 3,
    },
    {
      question: "What is the result of '3' + '4'?",
      options: ["7", "34", "12", "Error"],
      correctAnswer: 1,
    },
    {
      question: "What is a lambda function?",
      options: ["A named function", "An anonymous function", "A loop", "A class"],
      correctAnswer: 1,
    },
    {
      question: "What is used to import modules?",
      options: ["include", "require", "import", "attach"],
      correctAnswer: 2,
    },
    {
      question: "Which method removes the last item from a list?",
      options: ["delete()", "remove()", "pop()", "cut()"],
      correctAnswer: 2,
    },
    {
      question: "What is the output of: type([])?",
      options: ["dict", "list", "set", "array"],
      correctAnswer: 1,
    },
    {
      question: "Which operator is used for floor division?",
      options: ["/", "//", "%", "**"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is not a core data type?",
      options: ["lists", "dictionary", "tuples", "class"],
      correctAnswer: 3,
    },
  ],
},

{
  category: "Java",
  questions: [
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["define", "class", "object", "struct"],
      correctAnswer: 1,
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["start()", "main()", "run()", "begin()"],
      correctAnswer: 1,
    },
    {
      question: "Which data type is used to store true/false values?",
      options: ["int", "boolean", "char", "bit"],
      correctAnswer: 1,
    },
    {
      question: "What is the size of an int in Java?",
      options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
      correctAnswer: 0,
    },
    {
      question: "Which symbol is used to import packages in Java?",
      options: ["#", "@", "import", "*"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to inherit a class?",
      options: ["this", "super", "extends", "implements"],
      correctAnswer: 2,
    },
    {
      question: "What is JVM short for?",
      options: ["Java Variable Memory", "Java Virtual Machine", "Java Verified Module", "Java Visual Method"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is a valid access modifier?",
      options: ["static", "void", "private", "final"],
      correctAnswer: 2,
    },
    {
      question: "Which class is the superclass of all Java classes?",
      options: ["Main", "Base", "Object", "Class"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is a loop structure?",
      options: ["repeat", "do-while", "run", "iterate"],
      correctAnswer: 1,
    },
    {
      question: "What is the default value of a boolean in Java?",
      options: ["true", "false", "0", "null"],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to create an object?",
      options: ["create", "make", "new", "construct"],
      correctAnswer: 2,
    },
    {
      question: "What does the 'final' keyword do?",
      options: ["Ends the program", "Makes value constant", "Defines final class", "Both 2 and 3"],
      correctAnswer: 3,
    },
    {
      question: "What does 'static' mean in Java?",
      options: ["Runs first", "Shared across instances", "Hidden", "Ignored by JVM"],
      correctAnswer: 1,
    },
    {
      question: "What is method overloading?",
      options: ["Multiple classes", "Same name, different parameters", "Return type changes", "Inheritance"],
      correctAnswer: 1,
    },
    {
      question: "Which interface is used to achieve multiple inheritance?",
      options: ["class", "interface", "extends", "abstract"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is not a primitive data type?",
      options: ["float", "double", "String", "char"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is not a loop in Java?",
      options: ["for", "while", "foreach", "loop"],
      correctAnswer: 3,
    },
    {
      question: "How do you handle exceptions?",
      options: ["try-catch", "handle-catch", "throw-catch", "error-catch"],
      correctAnswer: 0,
    },
    {
      question: "What is the extension of compiled Java classes?",
      options: [".java", ".class", ".exe", ".jv"],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to stop a loop?",
      options: ["exit", "stop", "break", "terminate"],
      correctAnswer: 2,
    },
    {
      question: "Which of these supports garbage collection?",
      options: ["JVM", "JRE", "JDK", "JAR"],
      correctAnswer: 0,
    },
    {
      question: "Which operator is used for comparison?",
      options: ["=", "==", "!=", "<>"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is used for inheritance?",
      options: ["super", "inherits", "extends", "clone"],
      correctAnswer: 2,
    },
    {
      question: "What is the correct way to declare an array?",
      options: ["int arr()", "int[] arr", "arr[] int", "int arr[];"],
      correctAnswer: 3,
    },
  ],
},

{
  category: "JavaScript",
  questions: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["int", "var", "define", "v"],
      correctAnswer: 1,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "##", "<!--", "**"],
      correctAnswer: 0,
    },
    {
      question: "How do you write 'Hello' in an alert box?",
      options: ["msg('Hello')", "alertBox('Hello')", "alert('Hello')", "prompt('Hello')"],
      correctAnswer: 2,
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"],
      correctAnswer: 2,
    },
    {
      question: "How do you call a function in JavaScript?",
      options: ["call myFunction()", "myFunction()", "execute.myFunction()", "run myFunction()"],
      correctAnswer: 1,
    },
    {
      question: "What does 'typeof' return?",
      options: ["Data type", "Variable name", "Value", "Reference"],
      correctAnswer: 0,
    },
    {
      question: "Which one is not a JavaScript data type?",
      options: ["string", "number", "boolean", "float"],
      correctAnswer: 3,
    },
    {
      question: "How do you write an if statement in JavaScript?",
      options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i === 5:"],
      correctAnswer: 1,
    },
    {
      question: "What does NaN stand for?",
      options: ["No assigned Name", "Not a Null", "Not a Number", "Name and Number"],
      correctAnswer: 2,
    },
    {
      question: "Which of the following is a loop in JavaScript?",
      options: ["loop()", "iterate()", "while", "cycle()"],
      correctAnswer: 2,
    },
    {
      question: "How do you write a single-line comment?",
      options: ["<!-- comment -->", "// comment", "# comment", "' comment"],
      correctAnswer: 1,
    },
    {
      question: "Which is not a valid variable name?",
      options: ["_num", "num123", "123num", "num_"],
      correctAnswer: 2,
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function = myFunc()", "function myFunc()", "create myFunc()", "method myFunc()"],
      correctAnswer: 1,
    },
    {
      question: "How do you round a number?",
      options: ["Math.round()", "Math.circle()", "Math.fix()", "Math.floorup()"],
      correctAnswer: 0,
    },
    {
      question: "What is the output of '2' + 2?",
      options: ["4", "22", "Error", "NaN"],
      correctAnswer: 1,
    },
    {
      question: "What is the default value of an uninitialized variable?",
      options: ["null", "undefined", "0", "false"],
      correctAnswer: 1,
    },
    {
      question: "What does `===` check?",
      options: ["Only value", "Only type", "Value and type", "None"],
      correctAnswer: 2,
    },
    {
      question: "Which method converts JSON to JavaScript object?",
      options: ["JSON.convert()", "JSON.toJS()", "JSON.parse()", "JSON.stringify()"],
      correctAnswer: 2,
    },
    {
      question: "Which of these adds a value to an array?",
      options: ["push()", "add()", "insert()", "append()"],
      correctAnswer: 0,
    },
    {
      question: "Which method removes the last item in an array?",
      options: ["pop()", "remove()", "delete()", "shift()"],
      correctAnswer: 0,
    },
    {
      question: "What will `typeof null` return?",
      options: ["null", "undefined", "object", "string"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to define constants?",
      options: ["const", "let", "static", "var"],
      correctAnswer: 0,
    },
    {
      question: "Which function converts string to number?",
      options: ["stringToNumber()", "parseInt()", "toNumber()", "cast()"],
      correctAnswer: 1,
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Management", "Direct Object Mapper", "DOMinator"],
      correctAnswer: 0,
    },
    {
      question: "Which method sets a timer to run a function once?",
      options: ["setTimeout()", "runAfter()", "setInterval()", "delay()"],
      correctAnswer: 0,
    },
  ],
},

{
  category: "SQL",
  questions: [
    {
      question: "What does SQL stand for?",
      options: ["Structured Question Language", "Sequential Query Language", "Structured Query Language", "Standard Query Language"],
      correctAnswer: 2,
    },
    {
      question: "Which SQL statement is used to retrieve data?",
      options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
      correctAnswer: 1,
    },
    {
      question: "Which clause is used to filter results?",
      options: ["WHERE", "IF", "FILTER", "CHECK"],
      correctAnswer: 0,
    },
    {
      question: "Which SQL statement is used to update data?",
      options: ["MODIFY", "CHANGE", "UPDATE", "EDIT"],
      correctAnswer: 2,
    },
    {
      question: "Which command is used to remove a table?",
      options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"],
      correctAnswer: 2,
    },
    {
      question: "What is the default sorting order in SQL?",
      options: ["DESC", "RANDOM", "ASC", "NONE"],
      correctAnswer: 2,
    },
    {
      question: "Which function returns the number of rows?",
      options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"],
      correctAnswer: 0,
    },
    {
      question: "Which keyword is used to avoid duplicate records?",
      options: ["UNIQUE", "ONLY", "DISTINCT", "NO DUPLICATES"],
      correctAnswer: 2,
    },
    {
      question: "Which clause is used for pattern matching?",
      options: ["PATTERN", "LIKE", "MATCH", "FIND"],
      correctAnswer: 1,
    },
    {
      question: "How do you select all columns?",
      options: ["SELECT all", "SELECT each", "SELECT *", "SELECT columns"],
      correctAnswer: 2,
    },
    {
      question: "Which operator is used with WHERE for multiple values?",
      options: ["BETWEEN", "IN", "ALL", "MULTI"],
      correctAnswer: 1,
    },
    {
      question: "What does NULL mean in SQL?",
      options: ["0", "Empty", "No value", "False"],
      correctAnswer: 2,
    },
    {
      question: "Which clause groups rows that have the same values?",
      options: ["GROUP BY", "SORT BY", "COLLECT BY", "CLUSTER BY"],
      correctAnswer: 0,
    },
    {
      question: "Which command adds a new row?",
      options: ["INSERT INTO", "ADD ROW", "NEW", "APPEND"],
      correctAnswer: 0,
    },
    {
      question: "What is a primary key?",
      options: ["A duplicate column", "A nullable key", "A unique identifier", "A foreign identifier"],
      correctAnswer: 2,
    },
    {
      question: "Which SQL statement is used to delete data?",
      options: ["REMOVE", "DROP", "DELETE", "CLEAR"],
      correctAnswer: 2,
    },
    {
      question: "What does the HAVING clause do?",
      options: ["Filter grouped data", "Delete data", "Sort data", "Select rows"],
      correctAnswer: 0,
    },
    {
      question: "Which SQL function gives the highest value?",
      options: ["TOP()", "LARGE()", "HIGH()", "MAX()"],
      correctAnswer: 3,
    },
    {
      question: "Which keyword is used for combining tables?",
      options: ["JOIN", "MERGE", "LINK", "CONNECT"],
      correctAnswer: 0,
    },
    {
      question: "Which command changes a table structure?",
      options: ["MODIFY TABLE", "CHANGE TABLE", "ALTER TABLE", "UPDATE TABLE"],
      correctAnswer: 2,
    },
    {
      question: "What does the LIMIT clause do?",
      options: ["Limits column width", "Limits row count", "Limits data types", "None"],
      correctAnswer: 1,
    },
    {
      question: "Which function calculates the total?",
      options: ["TOTAL()", "ADD()", "SUM()", "COUNT()"],
      correctAnswer: 2,
    },
    {
      question: "Which SQL clause is used to sort the result?",
      options: ["SORT BY", "ORDER", "ORDER BY", "ARRANGE"],
      correctAnswer: 2,
    },
    {
      question: "Which type of JOIN returns all matching rows from both tables?",
      options: ["INNER JOIN", "OUTER JOIN", "FULL JOIN", "MATCH JOIN"],
      correctAnswer: 2,
    },
    {
      question: "Which command renames a column?",
      options: ["RENAME COLUMN", "MODIFY COLUMN", "ALTER COLUMN", "AS"],
      correctAnswer: 3,
    },
  ],
},
];