Time ABC
--------

### [GMT - 格林威治標準時間](http://zh.wikipedia.org/wiki/GMT)
* 位於英國倫敦郊區的皇家格林威治天文台的標準時間
* 理論上來說，格林威治標準時間的正午是指當太陽橫穿格林威治子午線時
* 由於地球在它的橢圓軌道裡的運動速度不均勻，這個時刻可能與實際的太陽時有誤差， **最大誤差達16分鐘**
 
### [UT - 世界時](http://zh.wikipedia.org/wiki/%E4%B8%96%E7%95%8C%E6%97%B6)
* 一種以格林威治子夜起算的 **平均太陽時間**
* 還是有不精確的問題，誤差為每日數毫秒

### [TAI - 原子時](http://zh.wikipedia.org/wiki/%E5%8E%9F%E5%AD%90%E6%97%B6)
* 一種通過 **原子鐘** 得到的時間標準
* 誤差為每日數奈秒

### [UTC - 世界標準時間](http://zh.wikipedia.org/wiki/%E5%8D%8F%E8%B0%83%E4%B8%96%E7%95%8C%E6%97%B6)
* 世界統一時間，又稱世界標準時間或世界協調時間，簡稱UTC
* 最主要的世界時間標準，其以 **原子時** 秒長為基礎，在時刻上盡量接近於 **世界時** (格林威治平均時間)
* 確保世界標準時與世界時相差不會超過0.9秒，在有需要的情況下會在世界標準時內加上正或負 **閏秒**

### [UNIX時間](http://zh.wikipedia.org/wiki/UNIX%E6%97%B6%E9%97%B4)
* 從世界標準時間 1970 年 1 月 1 日 0 時 0 分 0 秒起至現在的總秒數，不包括閏秒

### [Julian calendar](http://zh.wikipedia.org/wiki/%E5%84%92%E7%95%A5%E6%9B%86)
* 由羅馬共和國獨裁官 Julius Caesar 於 **公元前45年1月1日起執行，取代舊羅馬曆法** 的一種曆法
* 一年設12個月，大小月交替，四年一閏，平年365日，閏年於二月底增加一閏日。年平均長度為365.25日
* **累積誤差隨著時間越來越大** ，1582年後被教宗 Gregorius XIII 改善，變為格里曆，即沿用至今的西曆

### [Gregorian calendar](http://zh.wikipedia.org/wiki/%E6%A0%BC%E9%87%8C%E5%8E%86)
* **現行公曆**
* Gregorian calendar 與 Julian calendar 相似，但 Gregorian calendar 特別規定， **除非能被400整除，所有的世紀年（能被100整除）都不設閏日** 。
* 曆年平均長度為 365.2425 日，接近平均回歸年的 365.242199074 日
* Gregorian calendar 開始實行時，將 Julian calendar 1582 年 10 月 4 日星期四的次日，為 Gregorian calendar 1582 年 10 月 15 日星期五
* 包含英美的一些歐美地區是在 1752 年才改曆

<pre><code>$ cal 1752

        July                 August              September
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                     1         1  2 14 15 16
 5  6  7  8  9 10 11   2  3  4  5  6  7  8  17 18 19 20 21 22 23
12 13 14 15 16 17 18   9 10 11 12 13 14 15  24 25 26 27 28 29 30
19 20 21 22 23 24 25  16 17 18 19 20 21 22
26 27 28 29 30 31     23 24 25 26 27 28 29
                      30 31
</code></pre>

### [ISO8601](http://zh.wikipedia.org/wiki/ISO_8601)
* 國際標準 ISO 8601 是日期和時間的表示方法
* 範例：`2013-08-16T15:30:00+0800`
<pre><code>// php
date(DATE_ISO8601);
</code></pre>

### [Time Zone](http://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA)
* 時區是地球上的區域使用同一個時間定義
* 世界各個國家位於地球不同位置上，因此不同國家的日出、日落時間必定有所偏差。這些偏差就是所謂的時差。
* 時區表示法
- 世界標準時間(UTC)：時間後面直接加上一個「Z」
- UTC偏移量：在時間後面加上 `±[hh]:[mm]` 、 `±[hh][mm]` 、或者 `±[hh]`
- 縮寫：時區通常都用字母縮寫形式來表示，例如「EST、WST、CST」等。但是它們並不是ISO 8601標準的一部分。
![wikipedia 上面的時區圖](http://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Standard_time_zones_of_the_world.png/1024px-Standard_time_zones_of_the_world.png)

### [日光節約時間](http://zh.wikipedia.org/wiki/%E5%A4%8F%E6%97%B6%E5%88%B6)
* 是一種為節約能源而人為規定地方時間的制度，在這一制度實行期間所採用的統一時間稱為「夏令時間」
* 台灣曾因全球能源危機實施 (1945~1961, 1974~1975)
