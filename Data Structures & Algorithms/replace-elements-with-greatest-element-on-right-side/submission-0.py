class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        maxi = -1
        newarr=[]
        for i in range(len(arr) - 1, -1, -1):
            if(i == len(arr)-1):
                newarr.append(-1)
                maxi=arr[i]
                continue
            newarr.append(maxi)

            if arr[i] > maxi:
                maxi = arr[i]
        return newarr[::-1]

        