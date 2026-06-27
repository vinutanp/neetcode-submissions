class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq={}
        for item in s:
            if item in freq:
                freq[item]+=1
            else:
                freq[item]=1
        for item in t:
            if item in freq:
                freq[item]-=1
                if freq[item] == 0:
                    del freq[item]
            else:
                return False
        for value in freq.values():
            if value != 0:
                return False

        return True

        