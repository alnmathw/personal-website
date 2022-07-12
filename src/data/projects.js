// TODO Add a couple lines about each project
const data = [
  {
    title: 'C# Compiler',
    subtitle: 'Built a Compiler in C#',
    link: 'https://github.com/alnmathw/compiler-in-c-sharp',
    image: '/images/projects/compiler.jpg',
    date: '2022-11-20',
    desc:
      'In this project I built a compiler using C# for a custom language from scratch completed with unit tests and source generators. '
      + 'Implemented all stages including Scanning, Parsing, Context Sensitive Analysis, Code Generation, and Optimization. '
      + 'I also created a REPL environment so that users can interact with the compiler using the terminal.'
  },
  {
    title: 'OCaml Parser Combinator Library',
    subtitle: 'Fast Parser Combinator Library in OCaml',
    link: 'https://github.com/alnmathw/fast-parse-combinator-in-ocaml',
    image: '/images/projects/parse-combinator.jpg',
    date: '2022-06-19',
    desc:
      'In this project, I try to write my own parser combinator library in OCaml without any dependencies.'
      + 'However, instead of writing it in Haskell (like most tutorials on the internet), I will be using OCaml as the language offers flexibility with writing imperative code '
      + 'and has more predictable performance.'
      + 'Using this feature of OCaml, I will be able to write a faster parser combinator.'
  },
  {
    title: 'OCaml Lambda Calculus Interpreter',
    subtitle: 'Lambda Calculus Interpreter using OCaml',
    link: 'https://github.com/alnmathw/lambda-calculus-interpreter-in-ocaml',
    image: '/images/projects/lambda-calculus-interpreter.jpg',
    date: '2022-07-07',
    desc:
      'In this project I implemented a Simply Typed Lambda Calculus Interpreter using OCaml. '
      + 'This interpreter uses Menhir to implement the parser '
      + 'and supports Polymorphism.',
  },
  {
    title: 'C Memory Garbage Collector',
    subtitle: 'Custom Malloc and Memory Management in C',
    link: 'https://github.com/alnmathw/garbage-collector-in-c',
    image: '/images/projects/memory-garbage-collector.jpg',
    date: '2022-06-19',
    desc:
      'In this project I implemented my own malloc(), free() and heap data structure to create a memory garbage collector in C. '
      + 'Traces were also added to track the memory allocation and deallocation of objects and their memory addresses on the terminal.'
  },
  {
    title: 'Python Halcyon Coin',
    subtitle: 'Implemented an exchange platform for my own cryptocurrency in Python.',
    link: 'https://github.com/alnmathw/halcyon-coin',
    image: '/images/projects/halcyon-coin.jpg',
    date: '2022-07-04',
    desc:
      'In this project I implemented a blockchain from scratch using Python to transact on a ledger using Halycon Coin. '
      + 'I also created a fullstack web application using Flask and SQL that enables users to '
      + 'register an account, log into the website, purchase Halcyon Coin, sell their balance to other users and view all transactions on the ledger complemented with user verification and blockchain validation'
  },
  {
    title: 'Elm FriendlyJSONConverter',
    subtitle: 'An offline CSV to JSON converter using Elm.',
    link: 'https://github.com/alnmathw/FriendlyJSONConverter',
    image: '/images/projects/friendlyjsonconverter.jpg',
    date: '2022-05-02',
    desc:
      'In this project I created a CSV to JSON converter as a single page web application '
      + 'that does not require users to submit their (potentially confidential) files to the network using Elm.'
  },
  {
    title: 'Python Pseudocode Generator',
    subtitle: 'Turn Python code to pseudocode.',
    link: 'https://github.com/alnmathw/python-pseudocode-generator',
    image: '/images/projects/python-pseudocode-generator.jpg',
    date: '2022-06-17',
    desc:
      'In this project I created a Python pseudocode generator that converts code to easily understandable pseudocode. '
  },
];

export default data;
