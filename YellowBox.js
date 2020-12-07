class YellowBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

   display(){
    fill(242,219,3);
    super.display();
   }
}