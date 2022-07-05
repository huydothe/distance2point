class Distance {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    point=(b)=>{
        const dx=Math.abs(this.x-b.x);
        const dy=Math.abs(this.y-b.y);
        return Math.hypot(dx,dy);
    }
}

let distance=new Distance(100,150);
let distance2=new Distance(50,100);

console.log(distance.point(distance2))