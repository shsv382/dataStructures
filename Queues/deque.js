class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Добавление узла в конец списка
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Добавление узла в начало списка
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

class Deque extends DoubleLinkedList {
    constructor() {
        super();
    }

    push_front(value) {
        this.prepend(value);
        return "ok";
    }
    
    pop_front() {
        if (this.length === 0) return 'error';
        const returnedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }

    push_back(value) {
        this.append(value);
        return "ok";
    }
    
    pop_back() {
        if (this.length === 0) return 'error';
        const returnedValue = this.tail.value;
        this.tail = this.tail.prev;
        this.length--;
        return returnedValue;
    }
    
    front() {
        return this.head ? this.head.value : 'error';
    }

    back() {
        return this.tail ? this.tail.value : 'error';
    }

    size() {
        return this.length;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return "ok";
    }
}

class RoundDeque {
    constructor(maxLength=100) {
        this.array = new Array(maxLength);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
        this.maxLength = maxLength;
    }
// push_front n
// Добавить (положить) в начало дека новый элемент. Программа должна вывести ok.
    push_front(n) {
        this.array[this.head] = n;
        this.head = (this.head + (this.maxLength - 1)) % this.maxLength;
        this.length++;
        return 'ok';
    }
// push_back n
// Добавить (положить) в конец дека новый элемент. Программа должна вывести ok.
    push_back(n) {
        this.array[this.tail] = n;
        this.tail = (this.tail + 1) % this.maxLength;
        this.length++;
        return 'ok';
    }
// pop_front
// Извлечь из дека первый элемент. Программа должна вывести его значение.
    pop_front() {
        if (this.length < 1) return 'error';
        this.head = (this.head + 1) % this.maxLength
        let answer = this.array[this.head];
        this.array[this.head] = null;
        this.length--;
        return answer;
    }
// pop_back
// Извлечь из дека последний элемент. Программа должна вывести его значение.
    pop_back() {
        if (this.length < 1) return 'error';
        this.tail = (this.tail + (this.maxLength - 1)) % this.maxLength
        let answer = this.array[this.tail];
        this.array[this.tail] = null;
        this.length--;
        return answer;
    }
// front
// Узнать значение первого элемента (не удаляя его). Программа должна вывести его значение.
    front() {
        if (this.length < 1) return 'error';
        return this.array[(this.head + 1)%this.maxLength];
    }
// back
// Узнать значение последнего элемента (не удаляя его). Программа должна вывести его значение.
    back() {
        if (this.length < 1) return 'error';
        return this.array[(this.tail + (this.maxLength - 1))%this.maxLength];
    }
// size
// Вывести количество элементов в деке.
    size() {
        return this.length;
    }
// clear
// Очистить дек (удалить из него все элементы) и вывести ok.
    clear() {
        this.array = new Array(this.maxLength);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
        return 'ok';
    }
}

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let deque = new RoundDeque();

rl.on('line', function (cmd) {
    switch(cmd) {
        case 'pop_front':
            console.log(deque.pop_front());
            break;
        case 'pop_back':
            console.log(deque.pop_back());
            break;
        case 'front':
            console.log(deque.front());
            break;
        case 'back':
            console.log(deque.back());
            break;
        case 'size':
            console.log(deque.size());
            break;
        case 'clear':
            console.log(deque.clear());
            break;
        case 'exit':
            console.log("bye");
            process.exit();
        default:
            let arg = cmd.split(' ');
            if(arg[0] === 'push_front') {
                console.log(deque.push_front(arg[1]));
            } else if(arg[0] === 'push_back') {
                console.log(deque.push_back(arg[1]));
            }
            break;
    }
});
