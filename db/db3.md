# Driving Table, Driven Table
* 드라이빙 테이블과 드라이븐 테이블인데 테이블 엑세스 순서에 따라 드라이빙 테이블, 드라이븐 테이블 이라고한다
* 처음 Access되는 테이블을 Driving Table
* 이후애 Access되는 테이블을 Drivin Table
* 이것은 옵티마이저가 선정을 하는데 실행계획을 보면서 어떤 테이블이 드라이빙 테이블이고 드리븐 테이블인지 파악을 해야한다

# Join 시 실행계획 과 시간
* 조인 할 때 실행계획을 보고 옵티마이저 보다 시간이 낮은걸 선택한다

* 실행방법
```sql
/* 캐시 삭제*/ 
ALTER SYSTEM FLUSH BUFFER_CACHE
ALTER SESSION SET STATISTICS_LEVEL=ALL;

SELECT  /* ordered use_nl(t2) */ * FROM  EMP  T1 
INNER JOIN  DEPT  T2  
ON T1.DEPTNO = T2.DEPTNO 
WHERE t1.empno >3440
AND t1.empno <3449

/* 쿼리 실행 */

SELECT * FROM TABLE(dbms_xplan.display_cursor(NULL,NULL,'ALLSTATS LAST'));
```
* USE_NL, USE_HASH 등과 같이 힌트를 설정하면서 실행계획을 보고 적절한 상황에 맞는 조인방법을 설정한다
* 오라클 힌트를 무분별하게 남발하는건 하지 말아야 함
* 옵티마이저는 기본적으로 최적의 실행방법을 도출하게 되는데 알아서 인덱스 같은걸 이용한다
* 인덱스가 많이 걸린 테이블을 이용할 때 옵티마이저가 판단미스를 하는데 어떤 인덱스를 사용하라 라고 하는 정도로 힌트를 이용한다

# 쿼리 실행 순서
1. FROM
1. WHERE
1. GROUP BY
1. HAVING
1. SELECT
1. ORDER BY

## 쿼리 실행순서를 보는 이유

test1

|aa|bb|
|---|---|
|1|4|
|2|5|
|3|6|

test2

|aa|cc|
|---|---|
|1|7|
|2|8|

1. 첫번째
```sql
SELECT *
FROM test1 a LEFT JOIN test2 b
ON (a.aa = b.aa)
WHERE b.cc = 7;
```
2. 두번째
```sql
SELECT *
FROM test1 a LEFT JOIN test2 b
ON (a.aa = b.aa AND b.cc = 7);
```
* 첫번째 쿼리, 두번째 쿼리의 결과문이 다르다
 첫번째

|aa|bb|cc|dd|
|---|---|---|---|
| 1 | 4 | 1 | 7 |

 두번째

|aa|bb|cc|dd|
|---|---|---|---|
| 1 | 4 | 1 | 7 |
| 2 | 5 | null | null |
| 3 | 6 | null | null |


* INNER JOIN 시 where 에 걸었던 행의 조건을 on에다 걸으면 더 좋다
> JOIN시 ON조건에 맞게 테이블을 만들어 주기 때문에, 그리고 조인이 다 된 테이블에서 where 을 걸어서 테이블을 한번 더 훓는 행위를 안하기 때문에
>> 실습필요
