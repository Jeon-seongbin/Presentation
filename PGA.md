# PGA
	Private Global Area

* 사용자 각자 주어진 영역
* 다른 유저가 또다른 유저의 영역을 볼 수 없다

## PGA 영역

* 세션 영역
  - 유저의 커넥션 정보가 저장됨
  - 로그인 정보 세션 상황 세션변수 등
  - 안 쓰는 커넥션이 있으면 닫아주어야 함(당연) ```.close();```
  
* private sql영역
  - persistant area
    + sql query는 데이터베이스에서 커서로 변환된다
      ```Either you create it as an explicit cursor or implicit cursor.```
    + 이 영역에 사용된 바인드 변수와 커서 변수가 persistant area에 저장되고 커서가 끝날때 풀어진다
    
  - runtime area
    + The other private SQL area component is the run time area.
    + 다른 프라이빗 sql 역역 컴포넌트는 런타임 구역에 있다
    + 실행 상태 정보를 저장한다
    + 테이블을 읽기 시작했는지, 테이블을 몇 퍼센트 읽었는지 리딩이 끝났는지 등
    
3. 커서 영역
  - 커서 정보를 저장
4. sql work 영역
  - sort area
    + 디스크에서 읽은 데이터가 ```order by``` ```group by``` ```roll-up``` ```window command```` 에 의해 정렬되는 곳
  - hash join area
  - bitmap merge area
  - bitmap create area
> PGA영역에서 hashjoin bitmap 관련 처리 함


# PGA 영역의 크기가 중요하다
## PGA 영역의 크기가 작으면 퍼포먼스가 떨어지고
## PGA 영역의 크기가 높으면 퍼포먼스가 높아진다

## 오라클은 PGA 영역의 크기를 자동으로 줄 수 있는데 어떤 영역에서는 적게 필요할 수도 있고, 많이 필요할 수도 있기 때문이다
