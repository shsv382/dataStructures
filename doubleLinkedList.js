class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Добавление узла в конец списка
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Добавление узла в начало списка
    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
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
