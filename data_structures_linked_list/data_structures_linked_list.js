/**
 * Implementation of Linked list in Javascript. performing operations
 * like creating a linked list, adding element at first, last and 
 * specific index also removing first node last node and node at specific index
 */

// Creating a Node
class Node {
  /**
   * @param {*} data - The data to be stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Creating a linked list  
class linkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a node with the given data at the beginning of the linked list.
   * @param {*} data - The data to be added.
   */
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  
  /**
   * Adds a node with the given data at the end of the linked list.
   * @param {*} data - The data to be added.
   */
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  /**
   * Returns the size (number of nodes) of the linked list.
   * @returns {number} - The size of the linked list.
   */
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  /**
   * Adds a node with the given data at the specified index in the linked list.
   * @param {*} data - The data to be added.
   * @param {number} index - The index at which the data should be added.
   */
  addAt(data, index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Inputs");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
  }

  /**
   * Removes the first node from the linked list.
   */
  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  /**
   * Removes the last node from the linked list.
   */
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  /**
   * Removes the node at the specified index from the linked list.
   * @param {number} index - The index of the node to be removed.
   */
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log("Error");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    if (cur.next) {
      cur.next = cur.next.next;
    }
  }

  /**
   * Prints the elements of the linked list.
   */
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Creating object of the linked list and calling the functions.
const L = new linkedList();
L.addFirst(32);
L.addFirst(3);
L.addFirst(2);
L.addFirst(327);
L.addFirst(76);
L.addFirst(87);
L.print();
L.removeLast();
console.log("\n");
L.addAt(-2, 9);
L.print();
console.log("\n");
L.removeTop();
L.print();