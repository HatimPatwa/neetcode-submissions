class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = new Map();
        const cols = new Map();
        const sqr = new Map();
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                let val = board[i][j]
                if (val == '.') continue;
                const squareKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
                if(
                    (rows.get(i) && rows.get(i).has(val)) ||
                    (cols.get(j) && cols.get(j).has(val)) ||
                    (sqr.get(squareKey) && sqr.get(squareKey).has(val))
                ) return false
                rows.set(i, (rows.get(i) || new Set()).add(val));
                cols.set(j, (cols.get(j) || new Set()).add(val))
                sqr.set(squareKey, (sqr.get(squareKey) || new Set()).add(val))
            }
        }
        return true
    }
}
