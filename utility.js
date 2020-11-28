class Queue {
   
   constructor(){
     
     this.data = [];
     this.rear = 0;
     this.size = 10;
   }
   enqueue(element) {
   
	//need to check if the queue is full or not so it avoids overflow
    if(this.rear < this.size ) {
          this.data[this.rear] = element;
          this.rear = this.rear + 1;
     }
   }
   
   isEmpty() {
   
    return this.rear === 0;
   }
   
   dequeue() {
   
     if(this.isEmpty() === false) {
          
          this.rear = this.rear-1;
          return this.data.shift();
     }
   }

   print() {
   
   for(let i =0; i < this.rear; i++) {
      console.log(this.data[i]);
    }
  }

}
module.exports = new Queue();

