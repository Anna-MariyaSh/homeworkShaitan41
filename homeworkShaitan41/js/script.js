/** @format */
class Human {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
    ageUser() {
        return Math.max((new Date()).getFullYear() - this.year, 0) || undefined;
    }

}

class Student extends Human {
    #presenceMarks = new Array(10);
    #marks = new Array(10);

    _pretsent(bool) {
        const emptyPlace = this.#presenceMarks.findIndex(x => x === undefined)
        if (emptyPlace === -1) return
        return this.#presenceMarks[emptyPlace] = bool;
    }
    present() {
        return this._pretsent(true);
    }

    absent() {
        return this._pretsent(false);
    }

    markUser(mark) {
        const emptyPlace = this.#marks.findIndex(x => x === undefined)
        if ((emptyPlace === -1) || (mark < 0 || mark > 10)) return
        return this.#marks[emptyPlace] = mark;
    }

    summary() {
        let sumMark = this.#marks.reduce((a, b) => { return a + b; }, 0) / this.#marks.length;
        console.log(sumMark);
        let sumPresence = this.#presenceMarks.reduce((a, b) => { return a + b; }, 0) / this.#presenceMarks.length;
        console.log(sumPresence);
        if (sumMark < 9 && sumPresence < 0.9) {
            alert("Редиска!");
        } else if ((sumMark < 9 && sumPresence >= 0.9) || (sumMark >= 0.9 && sumPresence < 0.9)) {
            alert("Норм, но можно лучше")
        } else if (sumMark >= 9 && sumPresence >= 0.9) {
            alert("Ути какой молодчинка!")
        }
    }
}

let user1 = new Student("Klark", "Kent", 1999);
user1.absent();
user1.present();
user1.ageUser();
user1.markUser(10);
user1.markUser(10);
user1.markUser(10);
user1.markUser(10);
user1.markUser(10);
user1.markUser(10);
user1.summary();

console.log(user1);