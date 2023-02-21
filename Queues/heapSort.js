var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


let counter = 0;

rl.on('line', function (cmd) {
    if (counter === 0) {
        counter++;
    } else {
        cmd = cmd.split(' ').map(item => parseInt(item));
        for (let i = Math.floor(cmd.length / 2 - 1); i >= 0; i--) {
            let pos = i;
            while(pos * 2 + 1 < cmd.length) {
                let min_son_idx = pos * 2 + 1;
                if (cmd[pos * 2 + 2] && (cmd[pos * 2 + 2] < cmd[min_son_idx])) {
                    min_son_idx = pos * 2 + 2;
                }
                if (cmd[pos] > cmd[min_son_idx]) {
                    [cmd[pos], cmd[min_son_idx]] = [cmd[min_son_idx], cmd[pos]];
                    pos = min_son_idx;
                } else {
                    break;
                }
            }
        }
        let ans = [];
        // let length = cmd.length;
        for (let j=0; j<cmd.length + ans.length; j++) {
            ans.push(pop(cmd));
        }
        console.log(ans.join(' '));
    }
});

function pop(arr) {
    if (!arr.length) return false;
    const answer = arr[0];
    if (arr.length > 1) {    
        arr[0] = arr[arr.length-1];
        let pos = 0;
        while(pos * 2 + 2 < arr.length) {
            let min_son_idx = pos * 2 + 1;
            if (arr[pos * 2 + 2] < arr[min_son_idx]) {
                min_son_idx = pos * 2 + 2;
            }
            if (arr[pos] > arr[min_son_idx]) {
                [arr[pos], arr[min_son_idx]] = [arr[min_son_idx], arr[pos]];
                pos = min_son_idx;
            } else {
                break;
            }
        }
    }
    arr.pop();
    return answer;
}