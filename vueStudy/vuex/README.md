# vue cli를 이용하여 프로젝트 생성

[https://youtu.be/fLEgJzJCEDQ](https://youtu.be/fLEgJzJCEDQ)

```html
vue create vuex
//vuex 는 프로젝트 이름
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38c8da0e-7b4d-4a87-9ec8-ba622b274e54/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38c8da0e-7b4d-4a87-9ec8-ba622b274e54/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc4c78d1-07d7-4024-804f-f9d5d3b8c739/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc4c78d1-07d7-4024-804f-f9d5d3b8c739/Untitled.png)

이렇게 선택 후 적당히 엔터 치면서 프로젝트 생성

프로젝트가 생성되면

[http://127.0.0.1:8080/](http://127.0.0.1:8080/) 에서 이하의 화면을 확인한다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1da96c9-36ad-4ede-812c-9b73cccdaaae/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1da96c9-36ad-4ede-812c-9b73cccdaaae/Untitled.png)

```html
vue add vuex
//프로젝트에 vuex추가
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/429d2277-b59c-4fff-bda4-b9def923360e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/429d2277-b59c-4fff-bda4-b9def923360e/Untitled.png)

생성한  vuex 프로젝트에 src/store/index.js 를 보면 이런 파일이 생성 되어있다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af10a564-a3d7-4aa0-a89b-74c756d62d1a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af10a564-a3d7-4aa0-a89b-74c756d62d1a/Untitled.png)

main.js 파일에 store라는 패스가 추가되있는것으로 vuex가 추가 된 것을 확인한다

# vuex란?

1. vuejs를 위한 상태 관리 패턴 + 라이브러리 
2. 데이터 관리 전문 vue 인스턴스
3. 상태 관리 센터

프로젝트 전체적으로 변수(상태)를 관리하는 라이브러리

props나 emit을 쓰면 어떤 컴포넌트에서 어떤 변수가 사용되어 지는지 확인이 어렵기 때문에 vuex에서 일원화하여 관리한다

 

# vuex 구성

1. state

    프로젝트 전반에서 사용하는 변수이다

    각 상태를 포함하며 원본 소스 역할을 한다

2. mutation

    state를 변경하는역할 (거의 methods와 같은 역할)

3. getter 

    여러 컴포넌트에서 적용 할 산출 프로퍼티 (computed)와 역할이 비슷하다

4. actions

    muataion의 실행을 비동기 작업 후에 실행한다

[https://youtu.be/fLEgJzJCEDQ](https://youtu.be/fLEgJzJCEDQ)

## state, mutation 예시

컴포넌트

```jsx
<template>
	...
		{{$store.state.count}}
		<input type="button" value="add1" @click="add()"/>
		<input type="button" value="add1" @click="minus(10)"/>
	...
</template>
<script>
	...
	methods(){
		add(){
			this.state.commit("add"); // 문자열 add는 mutation의 함수명
		},
		minus(value){
			this.state.commit("minus",value);
		}
	}
	...
</script>
```

store/index.js

```jsx
s...
export default new Vuex.Store({
	...
	state:{
		count : 0,
	},
	mutations:{
		add(state){
			state.count++;
		},
		minus(state,payload){
			state.count -= payload;
		}
	}
	...
});

```

여러 컴포넌트의 {{$store.state.count}}(state)는 어느 컴포넌트에서도 참조 가능하다

하나의 컴포넌트에서 state의 변형이 일어나면 다른 컴포넌트에서도 변형된 state의 값이 적용이되어 보여지고 사용되어진다

mutations의 minus함수에서는 payload(혹은 다른 이름을 갖는 파라메터)를 두었는데 컴포넌트로부터 받은 변수를 state에 이용할 때 사용한다

state는 변수의 역할을 한다

[https://youtu.be/GW7-RRgVF18](https://youtu.be/GW7-RRgVF18)

[https://joshua1988.github.io/web-development/vuejs/vuex-getters-mutations/](https://joshua1988.github.io/web-development/vuejs/vuex-getters-mutations/)

# getters, actions 예시

### getters

1. Template에서의 표현식은 간소화 해야 된다
2. 여러 컴포넌트 상에서 state의 표현이 변형되어있고 그것이 중복되어있을때 getter를 써서 state내부에서 관리하면 코드 중복이 줄어든다 

컴포넌트

```jsx
<template>
{{getCounter}}
</template>
<script>
export default {
	...
	computed:{
		getCounter(){
			return this.$store.getters.getCounterMultiply2
		}
	}
	...
}
</script>
```

index.js

```jsx
...
export default new Vuex.Store({
	...
	state:{
		counter: 0,
	},
	getters:{
		getCounterMultiply2(state){
			return counter * 2;
		},
	},
	...
})
```

getters는 컴포넌트의 computed와 연결된다

store state 헷갈릴때

$store → store의 객체애 접근

$store.state → store의 객체에 state에 접근

$store.getters → store의 객체에 getters에 접근

vuex내부에서 state이란 파라메터를 받아서 바로 사용

### mapGetters(vuex helper)

vuex의 helper함수에 포함되어있는 mapGetters를 이용하여 컴포넌트 상에서 더욱 직관적으로 getters를 이용 가능하다

컴포넌트

```jsx
<template>
	...
	{{reverseTestText}}
	...
</template>
<script>
import {mapGetters} from 'vuex';

export default {
	...
	computed:{
		...mapGetters([
			'reverseTestText',
		]);
	}
	...
}
</script>
```

index.js

```jsx
export default new Vuex.store({
	state:{
		testText:"hello world";
	},
	getters:{
		reverseTestText(state){
			return state.testText.split("").reverse().join("");
		}
	},
	...
});
```

mapGetters는 computed에서 컴포넌트 내부에 사용할 변수와 함께 사용 할 수 없는데 해결방법은 ...(자바스크립트 spread 연산자)를 이용하여 해결한다

... 포함한다 라는 이야기

getters는 보여주는데 초점이 맞춰져 있고 mutations는 state상태변화에 초점이 맞추어져 있다

### actions

store를 변화(mutation)하기 전에 비동기 처리를 하기 위한 코드들이 들어간다

Mutations에 비동기 처리가 들어가면 여러 컴포넌트에서 값 변경 요청이 들어왔을때 변경순서 파악이 어렵기 때문에 actions에 비동기 처리를 둔다

mutations에 커밋을 하기 위해 존재

컴포넌트

```jsx
<template>
	...
	
	...
</template>
<script>
default export {
	...
	methods:{
		incrementAction(){
			return $store.dispatch("incrementAction");
		}
	}
	...
}
</script>
```

index.js

```jsx
export default new Vuex.Store({
	...
	store:{
		counter : 0,
	},
	muatations:{
		increments(state){
			return state.counter++;
		},
	},
	actions:{
		incrementActions(context){
			// context.commit("increment");
			// actions 본래의 목적은 mutations를 커밋하는것
			setTimeout(() => {
				context.commit("increment");
			},1000);
		},
	},
	...
});
```

dispatch를 이용하고 methods에 등록한다

vuex에서  actions 함수 파라메터는 context를 들고오는데 mutations에 커밋하기 위해 사용한다

# Vuex helper

[https://youtu.be/31xcabeG4A4](https://youtu.be/31xcabeG4A4)

mapGetters 뿐만아니라 여러 helper를 적용 할 수 있다

목적은 표현식 안에 여러 숫자 계산을 줄이고  vuex와의 연관을 좀더 직관적으로 하기 위해 사용한다

## 종류

### mapState

vuex의 state와 매핑

컴포넌트

```jsx
<template>
{{counter}}
</template>
<script>
import {mapState} from 'vuex';

export default {
	...
	computed:{
		mapState([
			'counter',
		]),
	}
	...
}
</script>
```

index.js

```jsx
export default new Vuex.Store({
	state:{
		counter : 0,
	},
});
```

### mapGetters

이전 설명 참조

### mapMutations

컴포넌트

```jsx
<template>
<input type="button" value="button" @click="increment()"/>
</template>
<script>
import {mapMutations} from 'vuex';

export default{
	...
	methods:{
		...mapMutations([
			'increment',
		]),
	}
	...
}
</script>
```

vuex

```jsx
export default new Vuex.Store({
	state:{
		count : 0,
	},
	mutations:{
		increment(state){
			return state.count++;
		}
	}
})
```

### mapActions

컴포넌트

```jsx
<template>
	...
	<input type="button" @click="increment2()" value="incrementAction"/>
	...
</template>
<scirpt>
import {mapActions} from 'vuex';

export default {
...
	methods:{
		...mapActions(
		['incrementAction',]
		)
	},
...

}
</script>
```

vuex

```jsx
...
incrementAction(context){
      setTimeout(() => {
        context.commit("increment");
      },1000);
    },
...
```

원래 Mutations의 커밋 코드와 Actions가 methods에 있었기 때문에 mapMutations, mapActions가 methods에 들어간다

실습 한 전체 소스코드

컴포넌트

```jsx
<template>
  <div class="home">

    
    <!-- {{$store.state.testText}}-->
    {{testText}}
    
    <!--{{$store.state.counter}} -->
    {{counter}}
    
    
    {{getCounter}}
    {{reverseTestText}};
    <input type="button" value="counter + 1" @click="increment()"/>
    <!-- <input type="button" value="counter + 1 ( actions)" @click="incrementAction()"/> -->
    <input type="button" value="counter + 2 ( actions)" @click="increment2()"/>
  </div>
</template>
<script>
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: 'Home',
  methods:{
    // increment(){
    //   this.$store.commit("increment");
    // },
    ...mapMutations([
      'increment',
    ]),

    // incrementAction(){
    //   this.$store.dispatch("increment");
    // }
    ...mapActions(
      
      ["increment2",]
    ),
  },
  computed: {
    ...mapState([
      'testText',
      'counter',
    ]),
    ...mapGetters([
      "reverseTestText",
    ]),
    getCounter(){
      return this.$store.getters.getCounterMultiply2;
    }
  },
}
</script>
```

vuex

```jsx
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testText:"----helloVuex",
    counter : 0,
  },
  mutations: {
    increment(state){
      state.counter++;
    }
  },
  getters:{
    getCounterMultiply2(state){
      return state.counter * 2;
    },
    reverseTestText(state){
      return state.testText.split("").reverse().join("");
    },
  },
  actions: {
    increment(context){
      setTimeout(() => {
        context.commit("increment");
      },1000);
    },
    increment2(context){
      setTimeout(() => {
        context.commit("increment");
      },1000);
    },
  },
  modules: {
  }
})
```
