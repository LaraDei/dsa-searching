
//1. How many searches?
    //[3, 5, 6, 8, 11, 12, 14, 15, 17, 18] to find 8
    //[12,6,8]
    //[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]to find 16
    //[12,17,14,15,-1]
//2. Adding a React UI
    //see files app.js
//3. Find a book
    /* binary search for the main class number then a linear seach to find exact title*/
//4. Searching in a BST
    //[14 15 19 25 27 35 79 89 90 91] 
    //[35 25 15 14 19 27 89 79 91 90]
    //=>[14, 19, 15, 27, 25, 79, 90, 91, 89, 35]
    //[5 7 6 9 11 10 8] => [8, 6, 5, 7, 10, 9, 11]
//5. Implement different tree traversals

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
      this.count = 0;
    }
  
    insert(key, value) {
      if (this.key == null) {
        this.key = key;
        this.value = value;
      }
      else if (key < this.key) {
        if (this.left == null) {
          this.left = new BinarySearchTree(key, value, this)
        }
        else {
          this.left.insert(key, value);
        }
      }
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this)
        }
        else {
          this.right.insert(key, value)
        }
      }
  
    }
  
    find(key) {
      if (this.key == key) {
        return this.value
      }
      else if (key < this.key && this.left) {
        this.left.find(key)
      }
      else if (key > this.key && this.right) {
        this.right.find(key)
      }
      else {
        throw new Error('Key error')
      }
    }
  
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key)
        }
        else if (this.left) {
          this._replaceWith(this.left)
        }
        else if (this.right) {
          this._replaceWith(this.right)
        }
        else {
          this._replaceWith(null)
        }
      }
      else if (key < this.key && this.left) {
        this.left.remove(key);
      }
      else if (key > this.key && this.right) {
        this.right.remove(key);
      }
      else {
        throw new Error('Key error')
      }
    }
  
    findElementCount() {
      if (this.key != null) {
        this.count++
      }
    }  
  }
  function binaryTreeTest() {

    let Tree = new BinarySearchTree();
    let values = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
    for (let value of values) {
        Tree.insert(value, null);
    }
    //console.log(postOrder(Tree))
    console.log(preOrder(Tree))
     //console.log(inOrder(Tree))
  }

function preOrder(tree, values=[]) {
    values.push(tree.key)
    if (tree.left) {
        preOrder(tree.left, values)
    }
    if (tree.right) {
        preOrder(tree.right, values)
    }
    return values;
}
function inOrder(tree, values =[]) {
    if (tree.left) {
        inOrder(tree.left, values)
    }
    values.push(tree.key)
    if (tree.right) {
        inOrder(tree.right, values)
    }
    return values;
}
function postOrder(tree, values = []) {
    
    if (tree.left) {
        //values.push(tree.key)
        postOrder(tree.left, values)
    }
    if (tree.right) {
        //values.push(tree.key)
        postOrder(tree.right, values)
    }
    values.push(tree.key)
    return values
 }
    
//console.log(binaryTreeTest());

//6. Find the next commanding officer
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
	}
	
	enqueue(data) {
		const node = new _Node(data);

		if (this.first === null) {
			this.first = node;
		}

		if (this.last) {
			this.last.next = node;
		}
		//make the new node the last item on the queue
		this.last = node;
	}

	dequeue() {
		//if the queue is empty, there is nothing to return
	   if (this.first === null) {
		   return;
	   }
	   const node = this.first;
	   this.first = this.first.next;
		//if this is the last item in the queue
	   if (node === this.last) {
		   this.last = null;
	   }
	   return node.value;
   }
}

const command = new BinarySearchTree();
command.insert(5, 'Cpt Picard');
command.insert(6, 'Cmdr Data');
command.insert(3, 'Cmdr Riker');
command.insert(2, 'Lt Cmdr Worf');
command.insert(4, 'Lt Cmdr LaForge');
command.insert(8, 'Lt Cmdr Crusher');
command.insert(1, 'Lt Security-Officer');
command.insert(7, 'Lt Selar');

function listOfficers(tree, result = []) {
    const queue = new Queue();
    const node = tree;
    //console.log(node);
    queue.enqueue(node);
    //console.log(queue);
  
    while(queue.first) {
      const node = queue.dequeue();
      result.push(node.value);
  
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
  
    return result;
  }
  
//console.log(listOfficers(command));

//7. Max profit
function maxProfit(arr) {
    let max = 0;
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
           let diff = arr[j] - arr[i];
           if (diff > 0 && diff > max) {
               max = diff
           } 
        }
    }
    return max;
  }
//console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))

//8. Egg drop (optional)
function eggDrop() {
let f = 1;
  while (f*(f + 1) / 2 < 100) {
    f++;
  }
  let floor = f;
  let count = 0;

  while (floor <= 100) {
    console.log(`Drop ${count + 1} at floor ${floor}`);
    count++;
    floor += f - count
  }
  if (floor > 100) console.log(`Drop ${count + 1} at floor 100`);
}

eggDrop();