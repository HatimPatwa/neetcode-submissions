class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replaceAll(/[^a-zA-Z0-9]/g,'');
        console.log(str)
        for(var i = 0; i < str.length; i++){
            console.log('ittr',i, str.length - 1 - i, s.length)
            if(str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) return false
            
        }
        return true
    }
}
