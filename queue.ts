export class Queue {

  array : any[];
  head: number;
  tail: number;
  currentSize: number;

  constructor() {
    this.array = [];
    this.head = -1;
    this.tail = -1;
    this.currentSize = 0;
  }


  isEmpty() : boolean{
    return this.currentSize == 0;
  }

  enqueue(data: any) {
    this.tail++;
    this.array[this.tail] = data;
    this.currentSize++;
  }
  dequeue() : any {
    if(this.isEmpty()){
      throw new Error("Queue is empty.");
    } else {
      this.head++;
      this.currentSize--;
      return this.array[this.head];
    }
  }

  peek() : any {
    if(this.isEmpty()){
      throw new Error("Queue is empty.");
    } else {
      this.head++;
      let item = this.array[this.head];
      this.head--;
      return item;
    }
  }

  toString() : string {
    return `[${this.array.toString()}]`;
  }
}

let newQ = new Queue();
newQ.enqueue(1);
console.log(newQ.toString());
newQ.enqueue(2);
console.log(newQ.toString());
console.log(newQ.peek());
console.log(newQ.dequeue());
