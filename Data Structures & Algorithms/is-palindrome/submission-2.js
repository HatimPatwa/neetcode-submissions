class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replaceAll(/[^a-zA-Z0-9]/g,'');
        for(var i = 0; i < str.length; i++){
            if(str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) return false
            
        }
        return true
    }
}
