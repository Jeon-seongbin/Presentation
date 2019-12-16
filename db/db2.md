# ROWNUM
* 순번
* Select 후에 결과집합을 만들어 내면서 rownum이라는 컬럼이 추가가 된다
* where절에 rownum을 이용하여 조건을 주면 다른 조건을 만족시킨 결과에 대해 조건이 반영된다
* \> \>= 인 경우 rownum은 동작하지 않는다
* rownum = 2 인 경우 처음 겸색되서 나온 결과에 rownum 1 이 붙고 결과값이 rownum = 2와 맞지 않기 때문에 버리게 되고 그 과정을 반복하면 rownum = 2는 도달 할 수 없는 값이 된다

### 페이징에 이용 할 수 있는데 밑의 예시처럼 따라 할 것
> select * from ( select rownum num tableA.* from tableA) where number between 5 and 10;

# ROWID
* 데이터베이스 내에서 데이터 공유의 주소
* rowid는 인덱스에 저장됨
* 유일한 주소이지만 테이블의 PK처럼 사용될 수는 없다. 레코드를 삭제했다면 삭제된 레코드의 rowid는 나중에 입력되는 다른 레코드에 부여 될 수 있다.

* ROWID 의 구성
  1. 데이터 오브젝트 번호 32bit (6자리)
  1. DataFile 번호 10 bit (3자리)
  1. Block 번호22bit (6자리)
  1. Block 내 Slot 16bit (3자리)

### ROWID 보는 법
> select rowid , * tableA from tableA

### 어떤 테이블이 몇개의 블록으로 이루어져 있는지
> select count(Distinct(substr(rowid ,1 ,15))) as Block_Count from tableA;
> 블록번호 까지 문자열을 잘라서 중복된 컬럼을 제거 후 카운트

