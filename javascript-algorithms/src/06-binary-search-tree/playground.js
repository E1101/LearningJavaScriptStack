import BinarySearchTreeNode from './BinarySearchTreeNode.js';

const bstRootNode = new BinarySearchTreeNode();

bstRootNode.insert(300);

const parentNodeLeaves = bstRootNode.insert(200);
const leafNodeRight = bstRootNode.insert(250);
const leafNodeLeft = bstRootNode.insert(150);

bstRootNode.remove(200);

/*
{
  300: {
    100: {}
    200: {
      150: {}
      250: {}
    }
  }
}
*/
