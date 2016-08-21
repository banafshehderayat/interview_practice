export default class Heap {
  array : number[];

  constructor(){
    this.array = [];
  }
  getParent(nodeIndex : number) : number{
    return Math.floor((nodeIndex - 1) / 2);
  }

  heapifyUp(index : number) {
    if (index != 0) {
      let parentIndex = this.getParent(index);
      if (this.array[parentIndex] > this.array[index]){
        let temp = this.array[parentIndex];
        this.array[parentIndex] = this.array[index];
        this.array[index] = temp;
        this.heapifyUp(parentIndex);
      }
    }
  }

  heapifyDown(index : number) {
    while(2 * index <= this.array.length){
      let indexOfLeftChild = 2 * index + 1;
      let indexOfRightChild = 2 * index + 2;
      if (indexOfRightChild < this.array.length){
        if (this.array[indexOfLeftChild] < this.array[indexOfRightChild] ){
          if( this.array[indexOfLeftChild] < this.array[index]){
            let temp = this.array[index];
            this.array[index] = this.array[indexOfLeftChild];
            this.array[indexOfLeftChild] = temp;
            index = indexOfLeftChild;
          } else {
            return;
          }
        } else {
            if( this.array[indexOfRightChild] < this.array[index]){
              let temp = this.array[index];
              this.array[index] = this.array[indexOfRightChild];
              this.array[indexOfRightChild] = temp;
              index = indexOfRightChild;
            } else {
              return;
            }
        }
      } else {
        if( this.array[indexOfLeftChild] < this.array[index]){
          let temp = this.array[index];
          this.array[index] = this.array[indexOfLeftChild];
          this.array[indexOfLeftChild] = temp;
          index = indexOfLeftChild;
        } else {
          return;
        }
      }
    }
  }
  add(data : number) {
    this.array.push(data);
    let lastIndex = this.array.length - 1;
    this.heapifyUp(lastIndex);
  }

  delete(data : number) {
    if (this.array.indexOf(data) > 0){
      let index = this.array.indexOf(data);
      this.array[index] = this.array[this.array.length-1];
      this.array.pop();
      this.heapifyDown(index);
    }
  }

  peek() : number{
    return this.array[this.array.length-1];
  }

  pop() : number{
    return this.array.pop();
  }

  contains(data : number) : boolean {
    return this.array.indexOf(data) > 0;
  }

  isEmpty(): boolean{
    return this.array.length <= 0;
  }

  size() : number {
    return this.array.length;
  }
}
