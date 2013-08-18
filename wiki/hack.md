Hack Something
--------------

### it-ebooks
* id=1 ~ 2612
<pre><code>export id=2612
curl http://it-ebooks.info/book/${id}/ | grep go\.php | awk -F"\"" '{print "http://it-ebooks.info" $4}' | xargs wget --content-disposition
</code></pre>

* id=2613 ~
<pre><code>export id=2613
curl http://it-ebooks.info/book/${id}/ | grep filepi\.com | awk -F"\"" '{print $2}' | xargs wget --referer=http://it-ebooks.info/book/${id}/ --content-disposition
</code></pre>
