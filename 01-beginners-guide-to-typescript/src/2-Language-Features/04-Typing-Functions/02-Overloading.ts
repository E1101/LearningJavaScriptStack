/**
 * [ Overloading ]
 *
 * Overloading allows us to to define multiple function signatures for one function.
 * We can think of it as pattern matching based on the input types that a function
 * is called with.
 */
// Union return types are not dynamic, so even though we know that book is type string
// and books is type string[], the TypeScript compiler treats the return value statically
// as a union of string and string[]. Any operation that we run on the return value of
// prefix() has to work for both string and string[], which is problematic when we want
// to use one or the other.
function prefix(
    pre: string,
    word: string | string[]
): string | string[] {
    if (typeof word === 'string')
        return `${pre}${word}`;

    return word.map(w => `${pre}${w}`);
}

/**
 * Instead of using union types, we define overloads for our prefix() function to
 * specify dynamic return types based on the input types passed to the function:
 */
// Overload 1: if word is type string, return a string
function preFix(pre: string, word: string): string;

// Overload 2: if word is type string[], return a string[]
function preFix(pre: string, word: string[]): string[];

// Function implementation
function preFix(
    pre: string,
    word: string | string[],
): string | string[] {
    if (typeof word === 'string')
        return `${pre}${word}`;

    return word.map(w => `${pre}${w}`);
}

const book = preFix('fullstack ', 'TypeScript'); // string
book.substring(10); // OK

const books = preFix('fullstack ', ['TypeScript', 'React']); // string[]
books.push('fullstack Vue'); // OK


/**
 * In the example below, we define a function getEmployeeInfo()
 * whose return type depends on the input object type:
 */
type Engineer = { role: 'Engineer' };
type Manager = { role: 'Manager' };
type EngineerManager = { role: 'EngineerManager' };

type EngineerInfo = { languages: string[] };
type ManagerInfo = { directReports: string[] };
type EngineerManagerInfo = EngineerInfo & ManagerInfo;

function getEmployeeInfo(employee: EngineerManager): EngineerManagerInfo;
function getEmployeeInfo(employee: Engineer): EngineerInfo;
function getEmployeeInfo(employee: Manager): ManagerInfo;

function getEmployeeInfo(
    employee: Engineer | Manager | EngineerManager
): EngineerInfo | ManagerInfo | EngineerManagerInfo {
    if (employee.role === 'Engineer')
        return { languages: ['JavaScript', 'C++'] };

    if (employee.role === 'Manager')
        return { directReports: ['Becca', 'Evan' ]};

    return {
        languages: ['Python', 'Scala'],
        directReports: ['John'],
    };
}

