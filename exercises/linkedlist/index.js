// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }
  insertFirst(){
    // this.head = new Node(data, this.head)
    // could rewrite with insertAt()
    this.insertAt(data, 0)
  }
  size(){
    let counter = 0
    let node = this.head

    while(node) {
      counter++
      node = node.next
    }

    return counter
  }
  getFirst(){
    // could rewite with getAt()
    // return this.head
    return this.getAt(0)
  }

  // return the last node of the linked list
  getLast(){
    // no node
    // if(!this.head) return null

    // let node = node.next

    // while(node){
    //   if(!node.next) return node
    //   node = node.next
    // }
    // rewrite
    return this.getAt(this.size() - 1)
  }

  // Empties the linked list of any nodes
  clear(){
    this.head = null
  }
  removeFirst(){
    if(!this.head) return 

    this.head = this.head.next
  }
  removeLast(){
    if(!this.head) return 

    if(!this.head.next){
      return this.head = null
    }

    let previous = this.head
    let node = this.head.next
    while(node.next){
      previous = node
      node = node.next
    }

    previous.next = null
  }

  insertLast(data){
    const last = this.getLast()

    if(last) {
      // there are some existing nodes in out chains
      last.next = new Node(data)
    } else{
      // the chain is empty
      this.head = new Node(data)
    }
  }

  getAt(index){
    if(!this.head) return 

    let counter = 0 
    let node = this.head
    while(node) {
      if(counter === index) return node

      counter++
      node = node.next
    }

    return null
  }

  // remove nodes at the provided index
  removeAt(index){
    // empty list 
    if(!this.head) return 
    // delete first
    if(index === 0){
      return this.head = this.head.next
    }

    const previous = this.getAt(index - 1) 
    // index out of bounds case
    if(!previous || !previous.next) return
    previous.next = previous.next.next
  }
  insertAt(data, index) {
    // insert new node at the 0 index when there's no node
    if(!this.head) {
      return this.head = new Node(data)
    }

    // if insert at 0 index
    if(index === 0) {
      return this.head = new Node(data, this.head)
    }

    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous)
    previous.next = node

    // when index is out of bound
  }
  forEach(fn) {
    let node = this.head
    let counter = 0
    while(node){
      fn(node, counter)
      node = node.next
      counter++
    }
  }
  // defines a generator function with key called symbol.iterator
  *[Symbol.iterator](){
    let node = this.head
    while(node) {
      yield node;
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
