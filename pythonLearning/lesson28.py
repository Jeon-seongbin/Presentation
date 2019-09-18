# 1920
input()
li1 = list( map(int, input().split()))
input()
li2 = list( map(int, input().split()))
li1.sort()

#print(li1, li2)

def findBinary(arr, targetNumber):
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start+end)// 2
        indexValue = arr[mid]

        if indexValue == targetNumber:
            return 1
        elif indexValue < targetNumber:
            start = mid + 1
        elif targetNumber < indexValue:
            end = mid - 1
    return 0

for i in range(len(li2)):
    print(findBinary(li1, li2[i]))