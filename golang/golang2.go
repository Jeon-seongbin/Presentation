package main

import "fmt"

func main(){
	a := 2
	b := 9

	if (a == b){
		fmt.Println("same")
	}else {
		fmt.Println("false")
	}

	switch (b){
		case 1:
			fmt.Println("1")
		case 2:
			fmt.Println("2")
		case 3:
			fmt.Println("3")
		case 0:
			fmt.Println("0")
		default :
			fmt.Println("dont have")
	}

	for i := 0; i< 10; i++ {
		fmt.Println("i =>", i)
	}

	fmt.Println(add(1,2))
	fmt.Println(userInput("aa","bbb"))
}

func add (x int , y int ) int {
	return x + y;
}

func userInput (x string , y string) (string, string){
	return x , y
} 