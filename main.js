
// 1.Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle{
	
	constructor(height,width){
		
		this.height=height
		
		this.width=width
		
	}
	
	area(){
		
		let res=this.height*this.width
		
		document.write(`Height : ${res}`)
		
		
	}
	
	Perimeter(){
		
		let per=2*(this.height+this.width)
		
		document.write(`Width : ${per}`)
		
		document.write("<br>");
		
		document.write("<br>");
	}
	
	
}

let rect=new Rectangle(10,70)

rect.Perimeter()

rect.area()