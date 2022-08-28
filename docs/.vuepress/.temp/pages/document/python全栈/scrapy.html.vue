<template><div><p>mac和linux安装</p>
<p>pip install scrapy</p>
<p>创建一个小点</p>
<p>scrapy startproject firstproject</p>
<p>创建爬虫文件 first</p>
<p>cd firstproject   # 保证子目录有spiders文件夹</p>
<p>scrapy genspider first <a href="http://www.xxx.com" target="_blank" rel="noopener noreferrer">www.xxx.com<ExternalLinkIcon/></a></p>
<p>执行工程</p>
<p>scrapy crawl first</p>
<p>数据持久化 基于终端</p>
<p>scrapy crawl first -o ./xxx.csv</p>
<p>数据持久化 基于管道</p>
</div></template>
