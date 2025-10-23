class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = null;
        }
        this.length++;
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
        //   1 -> 2 -> 3 -> null
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

    // remove from the begining side.
    shift() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }

    // add from the begining of linkedList
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

    }

    //  iterate the node linkedList
    getAll() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let low = 0;
        let high = this.length - 1;
        while (low <= high) {
            console.log(current.val);
            low++;
            current = current.next;
        }
    }

    // get the node value by passing Index
    findByIndex(index) {
        let start = 0;
        let current = this.head;
        if (index > this.length - 1 || index < 0) {
            return null;
        }
        while (start !== index) {
            current = current.next;
            start++;
        }
        return current;
    }

    // Set the value at particular index.
    setByUsingIndex(val, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        let foundNode = this.findByIndex(index);
        foundNode.val = val;
        return this;
    }

    // Insert the Node at particular Index
    insert(val, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.unshift(val);
        }
        if (index === this.length) {
            return this.push(val);
        }
        let newNode = new Node(val);
        let foundNode = this.findByIndex(index - 1);
        let temp = foundNode.next;
        foundNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }

    // remove the node at particular index.

    remove(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }

        if (index === this.length) {
            return this.pop();
        }
        let foundNode = this.findByIndex(index - 1);
        let temp = foundNode.next.next;
        foundNode.next = temp;
        this.length--;
        return this;
    }

    //  1 -> 2 ->null
    reverse() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let prev = null;

        while (current) {
            let temp = current.next; 
            current.next = prev;
            prev = current;
            current = temp;
        }
        return prev;
    }
    /* 2-> null
    
    step 1:
    - temp = 2;
    - current.next i.e 1 -> null
    - prev(null)   = 1
    - current =  temp 2;

    step 2:
    - temp  = null
    -current.next i.e 1 -> 2
    - prev = 2;
    - current = null
     */

    palindrome() {
        let slow = this.head;
        let fast = this.head;
        let curr = this.head;
        let len = 0;
        while (slow && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            len++;
        }
        let prev = null;
        while (slow) {
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }
        while (len) {
            len--;
            if (prev.val !== curr.val) {
                return false;
            }
            curr = curr.next;
            prev = prev.next;
        }
        return true;

    }
}
const singleLinkedList = new SinglyLinkedList();
singleLinkedList.push(1);
singleLinkedList.push(2);
singleLinkedList.push(3);
singleLinkedList.push(4);
// singleLinkedList.insert(20, 0);
// singleLinkedList.remove(1);
// console.log(singleLinkedList.reverse());
// console.log(singleLinkedList);