//  Linked-List
class Node {
    constructor(val){
        this.val = val;
        this.next  =  null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(!this.head){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        let current = this.head;
        let secondToLast = this.head;
        // 1 -> 2 - > 3 -> null;
        while(current.next){
            secondToLast = current;
            current  = current.next;
        }

        // 1 -> 2 -> null;
        //  cut the connection to second to last node.
        secondToLast.next = null;
        this.tail = secondToLast;
        this.length--;
        if(!this.length){
            this.head = this.tail = null;
        }
        return current.val
    }
    // shift : remove from the begining.
    shift(){
        let current = this.head;
        if(this.length > 1){
            this.head = current.next;
        }else if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return this;
    }

    unshift(val){
        // 1 -> null
        const node = new Node(val);
        if(!this.head){
            node.next = this.head;
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    reverse(){
        // 1 -> 2 -> 3 -> null;
        let current = this.head;
        let prev = null;
        if(!this.head){
            return null;
        }
        while(current){
            let temp = current.next;
            current.next = prev;
            prev = current
            current = temp;
        }
        return prev;
    }
    //  iterate the node linkedList
    getAll(){
        let current = this.head;
        if(!this.head){
            return null;
        }
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    // get the node value by passing Index
    getNode(index){
        let current  = 0;
        let expectedNode = this.head;
        if(!this.head || index === -1){
            return null;
        }

        while(current !== index){
            current++;
            expectedNode = expectedNode.next;
        }
        return expectedNode;
    }

    //  Set the value at particular index.
    setNode(val, index){
        const searchedNode = this.getNode(index - 1);
        const temp = searchedNode.next;
        const node  = new Node(val);
        //  1 -> 2-> 3 -> null let say 4. at 1.
        searchedNode.next = node;
        node.next = temp;
        this.length++;
        return this;
    }
    
}

const sl = new SinglyLinkedList();
sl.push(1);
sl.push(2);
sl.push(3);
// console.log(sl);
// console.log(sl.pop());
// console.log(sl.pop());
// console.log(sl.pop());

// console.log(sl);
// sl.unshift(3);
// sl.unshift(2);
// sl.unshift(1);


// sl.shift();
// sl.shift();
// sl.shift();
// sl.getAll();
// sl.setNode(10, 1);



// console.log(sl.reverse());
// console.log(sl.getNode(3));
// console.log(sl);

