import React from 'react';
import type { Topic } from '../types';

export const TOPICS: Topic[] = [
  {
    id: 'introduction',
    title: 'Introduction to C',
    description: (
      // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
      React.createElement(React.Fragment, null,
        "Welcome to the C Programming Hub! C is a powerful, general-purpose programming language developed in the early 1970s. It's known for its efficiency, low-level memory access, and is a great language to learn to understand how computers work."
      )
    ),
    subSections: [
      {
        title: 'Your First C Program: "Hello, World!"',
        explanation: (
            // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
            React.createElement(React.Fragment, null,
                React.createElement("p", null, "The classic \"Hello, World!\" program is the traditional first step in learning any new programming language. It's a simple program that outputs the text \"Hello, World!\" to the console."),
                React.createElement("ul", null,
                    React.createElement("li", null, React.createElement("code", null, "#include <stdio.h>"), " is a preprocessor directive that includes the standard input-output library, which contains functions like ", React.createElement("code", null, "printf()"), "."),
                    React.createElement("li", null, React.createElement("code", null, "int main()"), " is the main function where program execution begins."),
                    React.createElement("li", null, React.createElement("code", null, "printf(\"Hello, World!\\n\");"), " is the function call that prints the string to the console. ", React.createElement("code", null, "\\n"), " is a special character that represents a new line."),
                    React.createElement("li", null, React.createElement("code", null, "return 0;"), " indicates that the program has executed successfully.")
                )
            )
        ),
        code: 
`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      },
    ],
  },
  {
    id: 'variables',
    title: 'Variables and Data Types',
    description: 'Variables are containers for storing data values. In C, you must declare the type of a variable, which specifies the type of data it can hold.',
    subSections: [
        {
            title: 'Integer Data Type',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "int"), " data type is used to store whole numbers (integers) without any decimal points. You declare an integer variable by specifying the type ", React.createElement("code", null, "int"), " followed by the variable name.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int age = 30;
    int year = 2023;
    printf("Age: %d\\n", age);
    printf("Year: %d\\n", year);
    return 0;
}`,
        },
        {
            title: 'Floating-Point Data Types',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "float"), " and ", React.createElement("code", null, "double"), " data types are used to store numbers with decimal points. ", React.createElement("code", null, "double"), " has more precision than ", React.createElement("code", null, "float"), "."),
                    React.createElement("p", null, "The format specifier for ", React.createElement("code", null, "float"), " is ", React.createElement("code", null, "%f"), ", and for ", React.createElement("code", null, "double"), " is ", React.createElement("code", null, "%lf"), ".")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    float price = 19.99;
    double pi = 3.1415926535;
    printf("Price: %.2f\\n", price);
    printf("Value of PI: %lf\\n", pi);
    return 0;
}`,
        },
        {
            title: 'Character Data Type',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "char"), " data type is used to store a single character. The character must be enclosed in single quotes (e.g., 'A').")
                )
            ),
            code:
`#include <stdio.h>

int main() {
    char grade = 'A';
    char initial = 'J';
    printf("Your grade is: %c\\n", grade);
    printf("Your initial is: %c\\n", initial);
    return 0;
}`,
        },
    ]
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    description: 'Control flow statements allow you to control the execution path of your program based on certain conditions or loops.',
    subSections: [
        {
            title: 'If-Else Statement',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "if-else"), " statement is used to perform different actions for different conditions. If the condition in the ", React.createElement("code", null, "if"), " block is true, its code is executed. Otherwise, the code in the ", React.createElement("code", null, "else"), " block is executed.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int time = 20;
    if (time < 18) {
        printf("Good day.\\n");
    } else {
        printf("Good evening.\\n");
    }
    return 0;
}`,
        },
        {
            title: 'For Loop',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "for"), " loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int i;
    for (i = 0; i < 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
        },
        {
            title: 'While Loop',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "while"), " loop executes a block of code as long as a specified condition is true. The condition is checked before executing the loop body.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("%d\\n", i);
        i++;
    }
    return 0;
}`,
        },
        {
            title: 'Switch Statement',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "switch"), " statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int day = 4;
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        default:
            printf("Weekend\\n");
    }
    return 0;
}`,
        },
        {
            title: 'Do-While Loop',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "do-while"), " loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("%d\\n", i);
        i++;
    } while (i < 5);
    return 0;
}`,
        }
    ]
  },
  {
    id: 'functions',
    title: 'Functions',
    description: 'A function is a block of code that performs a specific task. Functions allow you to break your code into smaller, reusable parts.',
    subSections: [
        {
            title: 'Defining and Calling a Function',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "To create a function, you must specify its return type, name, and any parameters it takes. To use the function, you \"call\" it by its name.")
                )
            ),
            code: 
`#include <stdio.h>

// Function declaration (prototype)
void greet() {
    printf("Hello from a function!\\n");
}

int main() {
    // Calling the function
    greet();
    return 0;
}`,
        },
        {
            title: 'Function with Parameters',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "You can pass data, known as parameters, into a function. The function can then use this data to perform its task.")
                )
            ),
            code: 
`#include <stdio.h>

void printMyName(char name[]) {
    printf("Hello, %s\\n", name);
}

int main() {
    printMyName("John");
    printMyName("Jane");
    return 0;
}`,
        },
        {
            title: 'Function with Return Value',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "Functions can also return a value to the code that called them using the ", React.createElement("code", null, "return"), " statement. The return type must match the type specified in the function declaration.")
                )
            ),
            code: 
`#include <stdio.h>

int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    printf("Result: %d\\n", result);
    return 0;
}`,
        }
    ]
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Arrays are used to store multiple values of the same type in a single variable, instead of declaring separate variables for each value.',
    subSections: [
        {
            title: 'Declaring and Accessing Arrays',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "To declare an array, define the variable type, specify the name of the array followed by square brackets ", React.createElement("code", null, "[]"), " and specify the number of elements it should store."),
                    React.createElement("p", null, "You access an array element by referring to the index number inside square brackets. Array indexes start with 0.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int myNumbers[] = {25, 50, 75, 100};
    printf("First element: %d\\n", myNumbers[0]);
    
    // Change an element
    myNumbers[0] = 33;
    printf("New first element: %d\\n", myNumbers[0]);
    
    return 0;
}`,
        },
        {
            title: 'Looping Through an Array',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "You can loop through the array elements with the ", React.createElement("code", null, "for"), " loop. The ", React.createElement("code", null, "sizeof"), " operator can be used to get the size of the array.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int myNumbers[] = {25, 50, 75, 100};
    int i;
    int length = sizeof(myNumbers) / sizeof(myNumbers[0]);

    for (i = 0; i < length; i++) {
        printf("%d\\n", myNumbers[i]);
    }
    
    return 0;
}`,
        }
    ]
  },
  {
    id: 'strings',
    title: 'Strings',
    description: 'Strings are used for storing text. In C, a string is actually a one-dimensional array of characters which is terminated by a null character \'\\0\'.',
    subSections: [
        {
            title: 'Creating Strings',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "You can create a string using a character array. The compiler automatically adds the null terminator ", React.createElement("code", null, "\\0"), " at the end of the string."),
                    React.createElement("p", null, "You can print strings using the ", React.createElement("code", null, "%s"), " format specifier.")
                )
            ),
            code:
`#include <stdio.h>

int main() {
    char greeting[] = "Hello World!";
    printf("%s\\n", greeting);
    return 0;
}`,
        },
        {
            title: 'String Functions',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "C provides a set of useful string handling functions in the ", React.createElement("code", null, "<string.h>"), " library."),
                    React.createElement("ul", null,
                        React.createElement("li", null, React.createElement("code", null, "strlen()"), " - Gets the length of a string."),
                        React.createElement("li", null, React.createElement("code", null, "strcpy()"), " - Copies one string to another."),
                        React.createElement("li", null, React.createElement("code", null, "strcat()"), " - Concatenates (joins) two strings.")
                    )
                )
            ),
            code:
`#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello ";
    char str2[] = "World!";
    
    // Concatenate str2 to str1
    strcat(str1, str2);
    printf("Concatenated string: %s\\n", str1);
    
    // Get length of the new str1
    printf("Length of str1: %zu\\n", strlen(str1));
    
    return 0;
}`,
        }
    ]
  },
  {
    id: 'pointers',
    title: 'Pointers',
    description: 'Pointers are one of the most powerful and unique features of C. A pointer is a variable that stores the memory address of another variable.',
    subSections: [
        {
            title: 'Declaring Pointers',
            explanation: (
                // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "You declare a pointer using the asterisk ", React.createElement("code", null, "*"), " symbol. The ampersand ", React.createElement("code", null, "&"), " operator is used to get the memory address of a variable, and the asterisk ", React.createElement("code", null, "*"), " (dereference operator) is used to get the value at that address.")
                )
            ),
            code: 
`#include <stdio.h>

int main() {
    int myAge = 43;     // An int variable
    int* ptr = &myAge;  // A pointer variable, with the name ptr, that stores the address of myAge

    // Output the value of myAge (43)
    printf("%d\\n", myAge);

    // Output the memory address of myAge
    printf("%p\\n", &myAge);

    // Output the memory address of myAge with the pointer
    printf("%p\\n", ptr);
    
    // Dereference: Output the value at the memory address stored in ptr (43)
    printf("%d\\n", *ptr);
    
    return 0;
}`,
        },
        {
            title: 'Pointers and Arrays',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The name of an array is, in essence, a pointer to the first element of the array. This means you can use pointer arithmetic to access array elements."),
                    React.createElement("p", null, React.createElement("code", null, "arr[i]"), " is equivalent to ", React.createElement("code", null, "*(arr + i)"), ".")
                )
            ),
            code:
`#include <stdio.h>

int main() {
    int myNumbers[4] = {25, 50, 75, 100};
    int i;

    for (i = 0; i < 4; i++) {
        // Accessing element using pointer arithmetic
        printf("%d\\n", *(myNumbers + i));
    }
    
    return 0;
}`,
        },
    ]
  },
  {
    id: 'structs',
    title: 'Structs (Structures)',
    description: 'Structures are a way to group several related variables into one place. Each variable in the structure is known as a member.',
    subSections: [
        {
            title: 'Defining and Using a Struct',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "You can define a structure using the ", React.createElement("code", null, "struct"), " keyword. To access any member of a structure, we use the member access operator ", React.createElement("code", null, "."), " (dot).")
                )
            ),
            code:
`#include <stdio.h>
#include <string.h>

// Create a structure called Person
struct Person {
  char name[50];
  int age;
  float salary;
};

int main() {
    // Create a Person struct variable
    struct Person p1;
    
    // Assign values to its members
    strcpy(p1.name, "John Doe");
    p1.age = 32;
    p1.salary = 50000.50;
    
    // Print the members
    printf("Name: %s\\n", p1.name);
    printf("Age: %d\\n", p1.age);
    printf("Salary: %.2f\\n", p1.salary);
    
    return 0;
}`,
        },
    ]
  },
  {
    id: 'file-io',
    title: 'File I/O',
    description: 'File Input/Output (I/O) in C allows you to store data permanently in a file on the disk and read data from it.',
    subSections: [
        {
            title: 'Writing to a File',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "To write to a file, you need to use the ", React.createElement("code", null, "fopen()"), " function in write mode (", React.createElement("code", null, "\"w\""), "). This will create a file if it doesn't exist, or overwrite it if it does. We use ", React.createElement("code", null, "fprintf()"), " to write formatted text to the file, and ", React.createElement("code", null, "fclose()"), " to close it and save the changes.")
                )
            ),
            code:
`#include <stdio.h>

int main() {
    FILE *fptr;

    // Open a file in writing mode
    fptr = fopen("filename.txt", "w");

    // Write some text to the file
    fprintf(fptr, "Hello from C programming!\\n");
    fprintf(fptr, "This is a new line.\\n");

    // Close the file
    fclose(fptr);

    printf("Wrote to file successfully!\\n");

    return 0;
}`,
        },
        {
            title: 'Reading from a File',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "To read from a file, you open it in read mode (", React.createElement("code", null, "\"r\""), "). The ", React.createElement("code", null, "fgets()"), " function is a safe way to read a line of text from a file into a string buffer. We can loop until ", React.createElement("code", null, "fgets()"), " returns ", React.createElement("code", null, "NULL"), ", which indicates the end of the file.")
                )
            ),
            code:
`#include <stdio.h>

int main() {
    FILE *fptr;
    char myString[100];

    // Open a file in reading mode
    fptr = fopen("filename.txt", "r");

    // Read the content of the file and print it
    while(fgets(myString, 100, fptr)) {
        printf("%s", myString);
    }

    // Close the file
    fclose(fptr);

    return 0;
}`,
        },
    ]
  },
  {
    id: 'memory-allocation',
    title: 'Dynamic Memory Allocation',
    description: 'Dynamic memory allocation allows you to allocate memory manually during runtime. This is useful when you don\'t know the size of the memory needed at compile time. This is managed through functions in `<stdlib.h>`.',
    subSections: [
        {
            title: 'Using malloc() and free()',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "malloc()"), " function reserves a block of memory of the specified size and returns a pointer to the beginning of the block."),
                    React.createElement("p", null, "It's crucial to check if ", React.createElement("code", null, "malloc()"), " returned ", React.createElement("code", null, "NULL"), ", which means the allocation failed. After you are done with the memory, you must release it using ", React.createElement("code", null, "free()"), " to prevent memory leaks.")
                )
            ),
            code:
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    int n = 5;

    // Dynamically allocate memory for 5 integers
    ptr = (int*)malloc(n * sizeof(int));

    // Check if the memory has been successfully allocated
    if (ptr == NULL) {
        printf("Memory not allocated.\\n");
        return 1; // Exit program
    }

    // Memory has been successfully allocated
    printf("Memory successfully allocated using malloc.\\n");
    
    // Free the allocated memory
    free(ptr);
    printf("Malloc'd memory successfully freed.\\n");

    return 0;
}`,
        },
        {
            title: 'Using calloc() and realloc()',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, React.createElement("code", null, "calloc()"), " is similar to ", React.createElement("code", null, "malloc()"), " but it allocates memory for an array of elements and initializes them to zero."),
                    React.createElement("p", null, React.createElement("code", null, "realloc()"), " is used to change the size of a previously allocated memory block. It can be used to expand or shrink the memory.")
                )
            ),
            code:
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    int n1 = 5, n2 = 10, i;

    // Allocate memory for 5 integers with calloc (initialized to 0)
    ptr = (int*)calloc(n1, sizeof(int));

    printf("Memory allocated with calloc:\\n");
    for(i = 0; i < n1; ++i) {
        printf("%d, ", ptr[i]);
    }
    
    // Reallocate the memory for 10 integers
    ptr = (int*)realloc(ptr, n2 * sizeof(int));
    
    printf("\\n\\nMemory re-allocated with realloc for a larger size.\\n");

    // Free the memory
    free(ptr);
    
    return 0;
}`,
        },
    ]
  },
  {
    id: 'preprocessor',
    title: 'Preprocessor Directives',
    description: 'The C preprocessor modifies the source code before it is compiled. Directives like `#include` and `#define` are instructions for the preprocessor.',
    subSections: [
        {
            title: 'Macros with #define',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "The ", React.createElement("code", null, "#define"), " directive is used to create macros. It can be used to define constants or create function-like macros. The preprocessor replaces these macros with their defined values or code before compilation."),
                )
            ),
            code:
`#include <stdio.h>

// Macro for a constant value
#define PI 3.14159

// Function-like macro to calculate the square of a number
#define SQUARE(x) ((x) * (x))

int main() {
    float radius = 5.0;
    float area = PI * radius * radius;
    
    printf("Area of circle: %.2f\\n", area);
    printf("Square of 10: %d\\n", SQUARE(10));
    
    return 0;
}`,
        },
        {
            title: 'Conditional Compilation',
            explanation: (
                React.createElement(React.Fragment, null,
                    React.createElement("p", null, "Conditional directives like ", React.createElement("code", null, "#ifdef"), ", ", React.createElement("code", null, "#ifndef"), ", and ", React.createElement("code", null, "#endif"), " allow you to include or exclude parts of the code based on whether a macro is defined. This is commonly used for platform-specific code or for including debugging statements only in a debug build.")
                )
            ),
            code:
`#include <stdio.h>

// Define a macro for debugging
#define DEBUG

int main() {
    int a = 10, b = 20;
    
    #ifdef DEBUG
        printf("Debug: The value of a is %d\\n", a);
        printf("Debug: The value of b is %d\\n", b);
    #endif

    printf("The sum is %d\\n", a + b);
    
    return 0;
}`,
        },
    ]
  },
];
