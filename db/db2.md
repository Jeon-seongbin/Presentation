# ROWNUM

rownum
* 순번
* Select 후에 결과집합을 만들어 내면서 rownum이라는 컬럼이 추가가 된다
* where절에 rownum을 이용하여 조건을 주면 다른 조건을 만족시킨 결과에 대해 조건이 반영된다
* > >= 인 경우 rownum은 동작하지 않는다
* rownum = 2 인 경우 처음 겸색되서 나온 결과에 rownum 1 이 붙고 결과값이 rownum = 2와 맞지 않기 떄문에 버리게 되고 그 과정을 반복하면 rownum = 2는 도달 할 수 없는 값이 된다
* 페이징에 이용 할 수 있는데 밑의 예시처럼 따라 할 것
> select * from ( select rownum num tableA.* from tableA) where number between 5 and 10


