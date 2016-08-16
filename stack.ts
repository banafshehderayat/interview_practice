export default class Stack {
  array : any[];
  size : number;

  constructor(){
    this.array = [];
    this.size = 0;
  }
  isEmpty() : boolean{
    return this.size == 0;
  }

  pop() : any{
      this.size--;
      return this.array.pop();
  }

  push(data : any) {
    this.size++;
    this.array.push(data);
  }
  peek(): any {
    let item = this.array[this.array.length-1];
    return item;
  }

  toString() : string {
    return `[${this.array.toString()}]`;
  }
}
