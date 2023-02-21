class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Добавление узла в очередь
    enqueue(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Удаление узла из очереди
    dequeue() {
        if (this.length < 1) {
            return false
        }
        const node = this.head;
        this.head = this.head.next;
        this.length--;
        // опционально:
        // node.next = null;
        return node;
    }

    peek() {
        return this.head;
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
