/**Singly Linked List - This consists of Nodes, each node has a value and a pointer. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SiglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      //Loop continues wile there is a next after current
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var temp = this.head;
    this.head = temp.next;

    this.length--;
    if (this.length === 0) return (this.tail = null);

    return temp;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShift(value); //to return either true or false
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = temp.next;
    this.length--;
    return temp;
  }

  reverse() {
    //swap the head and tail;
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;
    var counter = 0;
    while (node != null) {
      next = node.next; //save the next value of node as next
      node.next = prev; // reverse
      prev = node; //  make node the new prev
      node = next; //  make next the new node
      counter++;
    }
    return this;
  }
}

let list = new SiglyLinkedList();

list.unShift(1);
list.unShift(2);
list.unShift(3);
list.unShift(4);
console.log(list);
console.log(list.get(1));
list.pop();
console.log(list.set(1, "Fifty"));
console.log(list.shift());
console.log(list.shift());

function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  this.insert = insert;
  this.insertEnd = insertEnd;
  this.pop = pop;
  this.shift = shift;
  this.reverse = reverse;
}

function insert(data) {
  var newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    var temp = this.head;
    this.head = newNode;
    this.head.next = temp;
  }
  this.length++;
  return this;
}
function insertEnd(data) {
  var newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
}

function pop() {
  if (!this.head) return undefined;
  let current = this.head;
  let newTail = current;
  while (current.next) {
    //Loop continues wile there is a next after current
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}

function shift() {
  if (!this.head) return undefined;
  this.head = this.head.next;
  this.length--;
  if (this.length === 0) return (this.tail = null);
}

function reverse() {
  var node = this.head;
  this.head = this.tail;
  this.tail = node;

  var prev = null;
  var next;
  var counter = 0;
  while (node != null) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
    counter++;
  }
  return this;
}

var sll = new SinglyLinkedList();
sll.insert(3);
sll.insert(2);
sll.insert(1);
sll.insertEnd(4);
// sll.pop();
sll.shift();
sll.reverse();
console.log(sll);

function DLLNode(data) {
  this.next = null;
  this.prev = null;
  this.data = data;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.addAtFront = function (data) {
  var newNode = new DLLNode(data);

  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    var temp = newNode;
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.addAtEnd = function (data) {
  var newNode = new DLLNode(data);

  if (this.tail === null) {
    this.tail = newNode;
    this.tail = this.head;
  } else {
    var temp = newNode;
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.length++;
};

DoublyLinkedList.prototype.deleteStart = function () {
  var toReturn = null;
  if (this.length === 0) return undefined;

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }

  this.length--;
  return toReturn;
};

var doubly = new DoublyLinkedList();
doubly.addAtFront("Toyin");
doubly.addAtEnd(500);
doubly.addAtEnd(200);
doubly.deleteStart();
console.log(doubly);
