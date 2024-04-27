const company = {
    sales: [
        { name: 'John', salary: 1000 }, 
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [ 
            { name: 'Jack', salary: 1300 } 
        ]
    }
}

function totalSalary(company) {
    let total = 0;

    for (const department in company) {
        if (Array.isArray(company[department])) {
            for (const worker of company[department]) {
                total += worker.salary;
            }
        } else if (typeof company[department] === "object" && typeof company[department] !== "null") {
            total += totalSalary(company[department]);
        }
    }

    return total;
}

const total = totalSalary(company);
console.log(total);