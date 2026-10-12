class SwapNumbers{

    constructor(a,b){
       this.a = a;
       this.b = b;
    }

    swapNumbers(a,b)
   {
      let  temp = this.a;
      this.a = this.b;
      this.b = temp;
      return [this.a,this.b];
    }
}

  const m = new SwapNumbers(20,30);

  console.log(m.swapNumbers());
