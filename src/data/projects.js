// TODO Add a couple lines about each project
const data = [
  {
    title: 'Compiler',
    subtitle: 'Built a Compiler in C#',
    link: 'https://github.com/alnmathw/compiler-in-c-sharp',
    image: '/images/projects/compiler.jpg',
    date: '2022-11-20',
    desc:
      'Built a Compiler in C#. '
      + 'Implemented all stages including Scanning, Parsing, Context Sensitive Analysis, Code Generation, and Optimization.'
  },
  {
    title: 'Parser Combinator Library',
    subtitle: 'Fast Parser Combinator Library in OCaml',
    link: 'https://github.com/alnmathw/fast-parse-combinator-in-ocaml',
    image: '/images/projects/parse-combinator.jpg',
    date: '2022-06-19',
    desc:
      'Implemented a Fast and Lightweight Monadic Parser Combinator library in OCaml. '
      + 'No dependencies. You can just copy-paste it to your project and use it. '
      + 'Project was inspired by https://www.cs.nott.ac.uk/~pszgmh/monparsing.pdf '
  },
  {
    title: 'Lambda Calculus Interpreter',
    subtitle: 'Lambda Calculus Interpreter using OCaml',
    link: 'https://github.com/alnmathw/lambda-calculus-interpreter-in-ocaml',
    image: '/images/projects/lambda-calculus-interpreter.jpg',
    date: '2022-07-07',
    desc:
      'Implemented a Simply Typed Lambda Calculus Interpreter using OCaml. '
      + 'Implemented a parser in OCaml using Menhir. '
      + 'Further developed my Interpreter to include Polymorphism.',
  },
  {
    title: 'Memory Garbage Collector',
    subtitle: 'Custom Malloc and Memory Management in C',
    link: 'https://github.com/alnmathw/garbage-collector-in-c',
    image: '/images/projects/memory-garbage-collector.jpg',
    date: '2022-06-19',
    desc:
      'Implemented my own malloc function in C. '
      + 'Expanded on my malloc function to free the chucks of (garbage) memory created. '
      + 'Learned about memory management in C.'
  },
  {
    title: 'Halcyon Coin',
    subtitle: 'Implemented an exchange platform for my own cryptocurrency in Python.',
    link: 'https://github.com/alnmathw/halcyon-coin',
    image: '/images/projects/halcyon-coin.jpg',
    date: '2022-07-04',
    desc:
      'Created a cryptocurrency by implementing a blockchain using Python. '
      + 'Used MySQL to implement transactions between users and the exchange and verified those transactions on the backend. '
      + 'Used Flask to create the frontend exchange platform.',
  },
  {
    title: 'FriendlyJSONConverter',
    subtitle: 'An offline CSV to JSON converter using Elm.',
    link: 'https://github.com/alnmathw/FriendlyJSONConverter',
    image: '/images/projects/friendlyjsonconverter.jpg',
    date: '2022-05-02',
    desc:
      'Created an offline CSV to JSON converter that does not require you to submit your (confidential) files using Elm. '
      + 'Learned to build a single page web application that reads, parses, and exports data. '
  },
  {
    title: 'Python Pseudocode Generator',
    subtitle: 'Turn Python code to pseudocode.',
    link: 'https://github.com/alnmathw/python-pseudocode-generator',
    image: '/images/projects/python-pseudocode-generator.jpg',
    date: '2022-06-17',
    desc:
      'Created a Python pseudocode generator that converts code to easily understandable pseudocode. '
      + 'Learned to build a program to parse Python code. '
      + 'Helped my cousin receive an A+ for her computer science assignment.'
  },
];

export default data;
