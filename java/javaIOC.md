Spring IOC
=============

# 디팬던시 인젝션 부터 이야기를 해야됨
## Dependency Injection

* 개발 시 의존관계 약화를 위해 사용한다

### 클래스 안에서 직접 객체를 생성하는 식으로 개발을 할 수 있겠지만 
### 클래스의 생성자에서 객체를 주입을 해서 의존관계 약화를 목표로 개발을 한다

```
class Test{
	A a = new A();

	B b;

	Test(B b){
		this.b = b;
	}

}


```

* 클래스의 생성자에서 객체를 주입(파라메터로 받는)것은 스프링이 직접 해준다

# 어떤 객체를 주입하는것인가?
## BEAN 이라는 객체를 이용
> BEAN 스프링에서 관리하는 객체를 지칭

1. SpringApplication 에서 지정한 패키지 들 중
2. Controller Service Configureation Bean이라는 어노태이션을 스캔하여
3. 스프링 Bean Container에 등록하여 BEAN을 관리한다
# 의존성 주입은 스프링 IOC 컨테이너 안에서만 가능하다

# 가지고 오는 방법
1. 표준방식인 생성자 이용
2. @Autowired 어노테이션 이용
