class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    back() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        let pos = this.heap.length - 1;
        while(pos > 0 && this.heap[pos] > this.heap[Math.floor((pos-1)/2)]) {
            [this.heap[pos], this.heap[Math.floor((pos-1)/2)]] = [this.heap[Math.floor((pos-1)/2)], this.heap[pos]]
            pos = Math.floor((pos-1)/2);
        }
    }

    pop() {
        if (!this.heap.length) return false;
        const answer = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        let pos = 0;
        while(pos * 2 + 2 < this.heap.length) {
            let min_son_idx = pos * 2 + 1;
            if (this.heap[pos * 2 + 2] > this.heap[min_son_idx]) {
                min_son_idx = pos * 2 + 2;
            }
            if (this.heap[pos] < this.heap[min_son_idx]) {
                [this.heap[pos], this.heap[min_son_idx]] = [this.heap[min_son_idx], this.heap[pos]];
                pos = min_son_idx;
            } else {
                break;
            }
        }
        this.heap.pop();
        return answer;
    }
}

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


let counter = 0;
let heap = new BinaryHeap();

rl.on('line', function (cmd) {
    if (counter === 0) {
        counter++;
    } else {
        if (cmd == '1') {
            console.log(heap.pop());
        } else {
            cmd = cmd.split(' ');
            if (cmd[0] === '0') heap.push(parseInt(cmd[1]));
        }
    }
});

