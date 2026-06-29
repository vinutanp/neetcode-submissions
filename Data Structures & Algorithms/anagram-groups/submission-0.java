class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, ArrayList<String>> map = new HashMap<>();
        for (int i=0;i<strs.length;i++){
            char[] chrs=strs[i].toCharArray();
            Arrays.sort(chrs);
            String key = new String(chrs);
            if(map.containsKey(key)){
               map.get(key).add(strs[i]);
            }else{
                ArrayList<String> list = new ArrayList<>();
                list.add(strs[i]);
                map.put(key, list);
            }

        }
        return new ArrayList<>(map.values());
        
    }
}
