const t=JSON.parse('{"key":"v-6348a768","path":"/posts/bert-vits2.html","title":"从0开始使用Bert-Vits2训练自己的模型(Windows)","lang":"zh-CN","frontmatter":{"title":"从0开始使用Bert-Vits2训练自己的模型(Windows)","cover":"/assets/bertvitslogo.png","icon":"file","order":1,"author":"goD0S","date":"2023-12-07T00:00:00.000Z","category":["使用指南","AI","Bert-Vits2"],"tag":["使用指南"],"star":true,"description":"感谢@Stardust_减 佬的Bert-Vits项目 Github仓库地址 bilibili 本篇文章是基于该项目的使用指南，如果你想要了解更多关于Bert-Vits2的信息，请移步到该项目的Github页面及作者b站空间 非专业，仅为教学朋友如何使用Bert-Vits2，限定条件为Windows系统，使用Pycharm作为IDE，具有Nvidia20系或更新的显卡， 数据集仅限中文，若非此情况请自行解决","head":[["meta",{"property":"og:url","content":"https://eris.studio/posts/bert-vits2.html"}],["meta",{"property":"og:site_name","content":"确实是博客"}],["meta",{"property":"og:title","content":"从0开始使用Bert-Vits2训练自己的模型(Windows)"}],["meta",{"property":"og:description","content":"感谢@Stardust_减 佬的Bert-Vits项目 Github仓库地址 bilibili 本篇文章是基于该项目的使用指南，如果你想要了解更多关于Bert-Vits2的信息，请移步到该项目的Github页面及作者b站空间 非专业，仅为教学朋友如何使用Bert-Vits2，限定条件为Windows系统，使用Pycharm作为IDE，具有Nvidia20系或更新的显卡， 数据集仅限中文，若非此情况请自行解决"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eris.studio/assets/bertvitslogo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"从0开始使用Bert-Vits2训练自己的模型(Windows)"}],["meta",{"property":"article:author","content":"goD0S"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2023-12-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从0开始使用Bert-Vits2训练自己的模型(Windows)\\",\\"image\\":[\\"https://eris.studio/assets/bertvitslogo.png\\"],\\"datePublished\\":\\"2023-12-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"goD0S\\"}]}"]]},"headers":[{"level":2,"title":"1.安装环境","slug":"_1-安装环境","link":"#_1-安装环境","children":[{"level":3,"title":"1.1安装conda","slug":"_1-1安装conda","link":"#_1-1安装conda","children":[]},{"level":3,"title":"1.2创建虚拟环境","slug":"_1-2创建虚拟环境","link":"#_1-2创建虚拟环境","children":[]},{"level":3,"title":"1.3准备cuda并安装pytorch","slug":"_1-3准备cuda并安装pytorch","link":"#_1-3准备cuda并安装pytorch","children":[]}]},{"level":2,"title":"2.下载Bert-Vits2库","slug":"_2-下载bert-vits2库","link":"#_2-下载bert-vits2库","children":[{"level":3,"title":"2.1下载Requirements.txt中的库","slug":"_2-1下载requirements-txt中的库","link":"#_2-1下载requirements-txt中的库","children":[]},{"level":3,"title":"2.2 安装nltk","slug":"_2-2-安装nltk","link":"#_2-2-安装nltk","children":[]}]},{"level":2,"title":"3.下载模型并检查是否能正常运作","slug":"_3-下载模型并检查是否能正常运作","link":"#_3-下载模型并检查是否能正常运作","children":[{"level":3,"title":"3.1简单检查","slug":"_3-1简单检查","link":"#_3-1简单检查","children":[]}]},{"level":2,"title":"4.开始训练","slug":"_4-开始训练","link":"#_4-开始训练","children":[{"level":3,"title":"4.1准备数据集","slug":"_4-1准备数据集","link":"#_4-1准备数据集","children":[]}]},{"level":2,"title":"5.开始训练","slug":"_5-开始训练","link":"#_5-开始训练","children":[{"level":3,"title":"5.1云端训练","slug":"_5-1云端训练","link":"#_5-1云端训练","children":[]}]},{"level":2,"title":"6.使用webui进行推理","slug":"_6-使用webui进行推理","link":"#_6-使用webui进行推理","children":[]}],"git":{},"readingTime":{"minutes":7.42,"words":2226},"filePathRelative":"posts/bert-vits2.md","localizedDate":"2023年12月7日","excerpt":"<p>感谢@Stardust_减 佬的Bert-Vits项目\\n<a href=\\"https://github.com/fishaudio/Bert-VITS2\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Github仓库地址</a>\\n<a href=\\"https://space.bilibili.com/163056936\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">bilibili</a></p>\\n<p>本篇文章是基于该项目的使用指南，如果你想要了解更多关于Bert-Vits2的信息，请移步到该项目的Github页面及作者b站空间</p>\\n<p>非专业，仅为教学朋友如何使用Bert-Vits2，限定条件为Windows系统，使用Pycharm作为IDE，具有Nvidia20系或更新的显卡，\\n数据集仅限中文，若非此情况请自行解决</p>\\n","autoDesc":true}');export{t as data};
