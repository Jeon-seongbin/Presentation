package main

import "fmt"

func main(){
	var m map[string]string
	m = make(map[string]string)
	m["1"] = "a"
	m["2"] = "b"
	m["3"] = "c"
	m["4"] = "d"
	
	fmt.Println(m["1"])
}