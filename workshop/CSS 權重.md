1. CSS 權重 - 前面 / 後面？
- 橘色：因為後面的權重 > 前面的

2. CSS 權重 - 特權
- 橘色：因為有 !important ，這是最高權重

3. CSS 權重 - 行內
- 有 !important：橘色，因為有 !important ，這是最高權重
- 無 !important：紅色，因為 inline 權重比較高

4. CSS 權重 - class
- 綠色：因為 class 權重 > element

5. CSS 權重 - element
- 藍色：因為 element 權重 > 全域 （＊）

6. CSS 權重 - 全域
- 紅色：全域為唯一的 style

7. CSS 權重 - 權重選擇計算
- 紅色：因為 id 權重 > class
