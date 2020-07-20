class Person {
    constructor(name, surname, id) {
        this.name = name;
        this.surname = surname;
        this.id = id;
    }

    toString() {
        return this.id + ": " + this.name + ": " + this.surname; 
    }
}

class Employee extends Person {
    constructor(name, surname, id, salary) {
        super(name, surname, id);
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }    
}

class Manager extends Employee {
    constructor(name, surname, id, salary, bonus) {
        super(name, surname, id, salary);
        this.bonus = bonus;
    }

    getSalary() {
        return super.getSalary() + this.bonus;
    }
}