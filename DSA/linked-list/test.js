//  create a linked-list and perform some operation

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode  = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
            this.length++;
        }
        else{
            let temp = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = null;
            this.length++;
        }
        return this;
    }

    pop() {
        // no node in the list, therefore return null
        if (!this.length) {
          return null;
        } else {
          /*
           * find the second to last node (it should become the new tail):
           * - set the current head as currentNode (we always have to start from the List's head node)
           * - set the current head as secondToLastNode (we can't go back a node, therefore we have to save the second to last)
           * - as long as the current node has a next node (so it is not the last node)
           * - then set the current node to the second to last
           * - then set the current node's `next` as the current node
           */
          let currentNode = this.head;
          let secondToLastNode = this.head;
          while (currentNode.next) {
            secondToLastNode = currentNode;
            currentNode = currentNode.next;
          }
          // set the second to last node's `next` to `null` (the second to last should "cut" its connection to the next node)
          secondToLastNode.next = null;
          // set it as `tail`
          this.tail = secondToLastNode;
          // decrease the Singly Linked List's `length` by 1
          this.length--;
          // if the Singly Linked List now is empty, set its `head` and `tail` to `null`
          if (!this.length) {
            this.head = null;
            this.tail = null;
          }
          // return the popped node (found some lines above)
          return currentNode;
        }
    }

    shift(){
        if(!this.head){
            return null;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;

        if(!this.length){
            this.head = null;
            this.tail  = null;
        }
        
        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
            this.length++;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    getAll(){
        if(!this.head){
            return null;
        }
        let current = this.head;

       while(current){
        console.log(current.val);
        current = current.next;
       }
    }



}

const sl = new SL();
// push operation
sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);


// pop() operation:
// sl.popp();
// sl.popp();
// sl.popp();

// shift() operation:
// sl.shift();
// sl.shift();

// Unshift() Operation:
// sl.unshift(30);
// sl.unshift(20);
// sl.unshift(10)

//  getAll()
sl.getAll();
// console.log(sl);


