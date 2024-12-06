// class Node {
//     constructor(val, prev, next) {
//         this.val = val;
//         this.prev = prev || null;
//         this.next = next || null;
//     }
// }
// class DoublyLinkedList {
//     constructor() {
//         this.head = this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = this.tail = newNode;
//         } else {
//             let newTail = newNode;
//             newTail.prev = this.tail;
//             this.tail.next = newTail;
//             this.tail = newTail;
//         }
//         this.length++;
//         return this;
//     }
//     unshift(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = this.tail = newNode;
//         }
//         else {
//             let oldHead = this.head;
//             this.head = newNode;
//             this.head.next = oldHead;
//             oldHead.prev = this.head;

//         }
//         this.length++;
//         return this;
//     }
//     pop() {
//         let current = this.tail;
//         if (!this.head) {
//             return undefined;
//         }
//         if (this.length === 1) {
//             this.head = this.tail = null;
//         }

//         this.tail = current.prev;
//         this.tail.next = null;
//         this.length--;
//         return current.val;
//     }
//     shift() {
//         let current = this.head;
//         if (!this.head) return undefined;
//         if (this.length === 1) {
//             this.head = this.tail = null;
//         }
//         this.head = current.next;
//         this.head.prev = null;
//         this.length--;
//         return current.val;
//     }
//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         let headNode = this.head;
//         let tailNode = this.tail;
//         let count = 0;
//         let middle = parseInt(this.length / 2);
//         if (index <= middle) {
//             while (index !== count) {
//                 headNode = headNode.next;
//                 count++;
//             }
//             return headNode;
//         }
//         else {
//             count = this.length - 1;
//             while (index !== count) {
//                 tailNode = tailNode.prev;
//                 count--;
//             }
//             return tailNode;
//         }
//     }
//     set(index, val) {
//         let foundNode = this.get(index);
//         if (foundNode !== null) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;

//     }
//     insert(index, val) {
//         if (index < 0 || index > this.length) return null;
//         if (index === 0) return this.unshift(val);
//         if (index === this.length) return this.push(val);
//         let current = new Node(val);
//         let prevNode = this.get(index - 1);
//         let temp = prevNode.next;
//         prevNode.next = current;
//         current.prev = prevNode;
//         current.next = temp;
//         this.length++;
//         return this;
//     }
//     remove(index) {
//         if (index < 0 || index >= this.length) return null;
//         if (index === 0) return this.shift();
//         if (index === this.length - 1) return this.pop();
//         let prevNode = this.get(index - 1);
//         let temp = prevNode.next;
//         prevNode.next = temp.next;
//         temp.next.prev = prevNode;
//         this.length--;
//         return temp;

//     }
//     search(val) {
//         let current = this.head;
//         while (current) {
//             if (current.val === val) {
//                 return true;
//             }
//             current = current.next;
//         }
//         return false;
//     }
//     reverse() {

//         let temp = this.head;
//         this.head = this.tail;
//         this.tail = temp;
//         return this;
//     }
// }
// let list = new DoublyLinkedList();
// list.push(10);
// list.push(20);
// list.push(30);
// list.push(40);
// list.push(50);
// list.push(60);
// list.push(70);


class Node {
    constructor(val, prev, next){
        this.val = val;
        this.prev = prev || null;
        this.next  = next || null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head  = this.tail = null;
        this.length = 0;
    }

    // push 
    push(val){
        let newNode  = new Node(val);
        if(!this.head){
            this.head = this.tail  = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;

    }

    //
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // pop
    pop(){
        let currentTail = this.tail;
        if(!this.head){
            return null;
        }
        if(this.length === 1){
            this.head = this.tail = null;
        }
        else {
            this.tail = currentTail.prev;
            this.tail.next = null;
        }
        this.length--;
        return currentTail.val;
    }

    shift() {
        if (this.length === 0) {
            return false;
        }
        let current = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
        }
        this.length--;
        return current;
    }


}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
// doublyLinkedList.unshift(10);
// doublyLinkedList.unshift(20);
// doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.pop();
doublyLinkedList.shift();
doublyLinkedList.shift();
doublyLinkedList.shift();
doublyLinkedList.shift();


console.log(doublyLinkedList);

