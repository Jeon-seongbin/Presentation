package main

import "fmt"

type Person struct{
	name string
	age int
}

func (p Person) printName(){
	fmt.Println(p.name)
}


type Student struct{
	name string
	age int
	sungJuk SungJuk
}

type SungJuk struct{
	name string
	grade string
}

func (s Student) printStudentSungJuk(){
	fmt.Println(s.sungJuk)
}

func main(){
	var a[10] int
	a[0] = 1

	fmt.Println(a[0])

	var p Person
	p = Person{"A",3}
	p1 := Person{name:"ccc",age:3}
	p2 := Person{name:"ccc"}
	p3 := Person{age:4}

	fmt.Println(p,p1,p2,p3)

	p3.name = "name3"
	p3.age = 24

	fmt.Println(p3.name, p3.age)
	p3.printName()


	s := Student{}
	s.name = "studentName"
	s.age = 24
	s.sungJuk.name = "math"
	s.sungJuk.grade ="B"

	s.printStudentSungJuk()
}