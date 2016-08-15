class Node {
  data : any;
  nextNode : Node;
  constructor(data){
    this.data = data;
    this.nextNode = null;
  }

  getData() : any{
    return this.data;
  }

  setData(newData : any){
    this.data = newData;
  }

  getNextNode() : Node{
    return this.nextNode;
  }

  setNextNode(newNode : Node){
    this.nextNode = newNode;
  }
}

export class LinkedList {
  length : number;
  head : Node;
  constructor(){
    this.length = 0;
    this.head = null;
  }

  find(data : any) : Node{
    let currentNode = this.head;
    while (currentNode != null){
      if (currentNode.data == data){
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }

    return null;
  }

  getLength() : number{
    return this.length;
  }

  addDataAtHead(data: any){
    let newHead = new Node(data);
    newHead.setNextNode(this.head);
    this.head = newHead;
    this.length++;
  }

  addNodeAtHead(node : Node){
    node.setNextNode(this.head);
    this.head = node;
    this.length++;
  }

  deleteHead(){
    if (this.head != null){
      let temp = this.head;
      this.head = this.head.getNextNode();
      length--;
      return temp;
    } else {
      throw "Head is null."
    }
  }
}
