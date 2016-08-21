import Heap from './heap';
export default class PriorityQueue {
  heap : Heap;

  constructor(){
    this.heap = new Heap();
  }

  enqueue( data : number ){
    this.heap.add(data);
  }

  dequeue(){
    this.heap.pop();
  }

  peek(){
    this.heap.peek();
  }

  isEmpty(){
    this.heap.isEmpty();
  }
}
