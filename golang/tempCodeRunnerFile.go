package main

import "fmt"

func main(){
	fmt.Println("hello world")
	var a int32
	var b int64
	var c string
	var d bool
	var e float32
	var f float64

	a = 5
	b = 3
	c = "abc"
	d = true
	e = 3.14
	f = 3.14
	g := 55
	h := "a"
	
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
	fmt.Println(f)
	fmt.Println(g)
	fmt.Println(h)
	fmt.Println("abc %v" , h)
}