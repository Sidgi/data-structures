class BinaryTreeNode {


    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }


    getRightNode(){
        return this.right;
    }

    setRightNode(val) {
        this.right = val;
    }

    getLeftNode(){
        return this.left;
    }
    setLeftNode(val){
        this.left = val;

    }
}


export const a = new BinaryTreeNode(1);
export const b = new BinaryTreeNode(2);
export const c = new BinaryTreeNode(-3);
export const d = new BinaryTreeNode(4);
export const e = new BinaryTreeNode(5);
export const f = new BinaryTreeNode(6);
 
a.setLeftNode(b);
a.setRightNode(c);
c.setRightNode(f);
b.setLeftNode(d)
b.setRightNode(e)


