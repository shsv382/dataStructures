// Реализация очереди на основе кольцевого указателя
// maxLength - максимальный размер очереди, 
// известен заранее, по умолчанию - 10
class RoundQueue {
    constructor(maxLength=10) {
        this.array = new Array(maxLength);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
        this.maxLength = maxLength;
    }
    push(n) {
        this.array[this.tail] = parseInt(n);
        this.tail = (this.tail + 1) % this.maxLength;
        this.length++;
    }
    pop() {
        if (this.length < 1) return 'error';
        this.head = (this.head + 1) % this.maxLength
        let answer = this.array[this.head];
        this.array[this.head] = null;
        this.length--;
        return answer;
    }
    front() {
        if (this.length < 1) return 'error';
        return this.array[(this.head + 1)%this.maxLength];
    }
    size() {
        return this.length;
    }
    clear() {
        this.array = new Array(this.maxLength);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
    }
}
