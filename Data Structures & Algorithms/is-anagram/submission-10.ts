class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
       let  sMain = s.split('').sort().join('');
        let  jMain = t.split('').sort().join('');
        if(sMain == jMain) return true

       return false
    }
}
