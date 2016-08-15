import Queue from './queue';
import LinkedList from './linkedList';
import {Node} from './linkedList';

console.log('Queue Demo:');
let newQ = new Queue();
newQ.enqueue(1);
console.log(newQ.toString());
newQ.enqueue(2);
console.log(newQ.toString());
console.log(newQ.peek());
console.log(newQ.dequeue());

console.log('LinkedList Demo:');
let newNode = new Node(2);
console.log(newNode);
let newLL = new LinkedList()
newLL.addDataAtHead(1);
console.log(newLL);
newLL.addNodeAtHead(newNode);
console.log(newLL);
console.log(newLL.deleteHead());
console.log(newLL);
