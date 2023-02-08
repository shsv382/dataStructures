class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class SortedLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Вставка узла
    insert(value) {
        const newNode = new Node(value);
        if (value < this.head.value) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else if (value > this.tail.value) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next.value < value) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next.prev = newNode;
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
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
