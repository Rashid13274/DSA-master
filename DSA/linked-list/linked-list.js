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