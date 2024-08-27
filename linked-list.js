/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode =  new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;  
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode

    }
    this.length++

  }

  /** pop(): return & remove last item. */

  pop() {
    let node = this.head;
    let count = 0;
    let preNode = node


    if (this.length === 1) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      this.tail = this.head
      return val;
    }

    while (node !== null && count != this.length -1) {
      count += 1;
      preNode = node;
      node = node.next;
    }

    
    preNode.next = null;
    this.tail = preNode;
    this.length -= 1;

    return node.val;

  }

  /** shift(): return & remove first item. */

  shift() {
    
    let val = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length < 2) this.tail = this.head;
    return val;
    
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) { 
    let index  = 0;
    let node  =  this.head;

    while(node !==  null && index != idx) {
      node = node.next;
      index++ 
    }
     
    
    return node.val
  }


  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let index  = 0;
    let node  =  this.head;
    while(node) {
      if(index === idx) {
        node.val = val 
        return node.val 
      }
      node= node.next;
      index++ 
    }
    return -1
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let index  = 0;
    let node  =  this.head;
    let preNode = node
    


    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    
    while(node !== null && index !== idx) {
      index += 1;
      preNode = node;
      node = node.next;
    }

    let newNode  = new Node(val);
    newNode.next = preNode.next;
    preNode.next = newNode;

    this.length++
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      let index  = 0;
      let node  =  this.head;
   

      if (idx >= this.length || idx < 0) {
        throw new Error("Invalid index.");
      }

      
      if (idx === 0) {
        let val = this.head.val;
        this.head = this.head.next;
        this.length -= 1;
        if (this.length < 2) this.tail = this.head;
        return val;
      }
      
      while(node) {
        if(index === idx) {
          return node.val 
        }
        node = node.next;
        index++ 
      }

      while(node) {
        if(index === idx) {
          let temporalNode = node.next;
          node.next = null;
          preNode.next = temporalNode
        }
        preNode  = node
        node= node.next;
         
      }

      return node

  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let node = this.head;
    if(!this.head){
      return total
    }
    while(node) {
      total = total + node.val;
      node = node.next
    }

    let avg =  parseInt(total) /  this.length;

    return avg;
    
  }
}

module.exports = LinkedList;
