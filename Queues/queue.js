class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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
}

class Queue extends LinkedList {
    constructor() {
        super();
    }

    // Добавить в конец очереди
    push(value) {
        this.append(value);
        return value;
    }
    
    // Удалить эелемент из начала очереди
    pop() {
        if (this.length === 0) return 'error';
        const returnedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }
    
    // Посмотреть первый в очереди элемент 
    front() {
        return this.head ? this.head.value : 'error';
    }

    // Посмотреть размер очереди
    size() {
        return this.length;
    }

    // Очистить очередь
    clear() {
        this.head = null;
        this.length = 0;
    }
}
