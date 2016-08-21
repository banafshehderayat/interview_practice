import Queue from './queue';
import LinkedList from './linkedList';
import {Node} from './linkedList';
import Stack from './stack';
import Heap from './heap';

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


console.log('Stack Demo:');
let newStack = new Stack();
newStack.push(1);
console.log(newStack.toString());
newStack.push(2);
console.log(newStack.toString());
console.log(newStack.pop());
newStack.push(3);
console.log(newStack.toString());
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.toString());


console.log('Heap Demo');
let newHeap = new Heap();
newHeap.add(0);
newHeap.add(2);
newHeap.add(5);
newHeap.add(1);
newHeap.add(6);
console.log(newHeap);
newHeap.delete(1);
console.log(newHeap);
console.log('Peek: ' + newHeap.peek());
console.log('Pop: ' + newHeap.pop());
console.log(newHeap);
console.log('Contains 2: ' + newHeap.contains(2));
console.log('Contains 3: ' +newHeap.contains(3));
console.log('Is Empty: ' + newHeap.isEmpty());
console.log('Size: ' + newHeap.size());
