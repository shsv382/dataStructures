class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Добавление узла в конец списка
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Добавление узла в начало списка
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Разворот списка
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

    // Вывод списка в консоль - служебный метод для визуализации
    _print() {
        console.log(`HEAD: ${this.head.value}`);
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(currentNode.value);
        console.log(`TAIL: ${this.tail.value}`);
    }
}
