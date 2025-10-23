class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Sl {
    constructor(){
        this.head  = null;
        this.tail = null;
        this.length = 0;
    }

    // implement the push operation of singly linked list.
    //  time complexcity O(1);
    push(val){
        const new_node = new Node(val);
        if(!this.head){
            this.head = this.tail = new_node;
            this.length++;
        }else{

            this.tail.next = new_node;
            this.tail = new_node;
            this.length++;
        }
        return this;
    }
    //  implement the pop  operation of single linked list.
    pop(){
        let current = this.head;
        let newTail  = current;
        //  findout the second last node in singly-linked list.
        while(current.next){
            current  = current.next;
            // 1 -> 2 -> 3


        }
    }
}


const sl = new Sl();
// sl.push(1);
// sl.push(2);
// sl.push(3);

console.log(sl);