---
title: Home
nav:
  order: 1
---



{% capture left_panel %}

{%- assign image = "/images/profile.jpg" | default: "" -%}
![Qingyao Ai]({{ image | relative_url }})
# Qingyao Ai<br/>艾清遥

<p class="center">


Associate Professor<br/>
Dept. of CS&T<br/>
Tsinghua University<br/>
Beijing, 100084<br/>

Office: FIT-1-506<br/>
Lab: FIT-1-506<br/>

<br/>
{%- include link.html type="google-scholar" icon="" text="Google Scholar" tooltip="" link="UKqaI5IAAAAJ" -%}<br/>
{%- include link.html type="github" icon="" text="Github" tooltip="" link="QingyaoAi" -%}<br/>
{%- include link.html type="twitter" icon="" text="Twitter" tooltip="" link="QingyaoAi" -%}<br/>
{%- include link.html type="linkedin" icon="" text="Linkedin" tooltip="" link="qingyao-ai-4ab8306a" -%}<br/>
{%- include link.html type="email" icon="" text="Email" tooltip="" link="aiqy@tsinghua.edu.cn" -%}<br/>
{%- include twitter_timeline.html -%}
</p>

{% endcapture %}

{% capture main_panel %}


<span style="color:red; font-weight:bold; font-size:20px">I'm actively recruiting PostDocs and Ph.D. candidates! </span>
If you are interested, please send me an email or check about the links at the end of this page.

My research mainly focuses on Information Retrieval and related topics. Currently I'm working on integrating retrieval and generative AI techniques to build better information access systems and agents, including retrieval/ranking optimization, retrieval augmented generation, automatic prompt refinement, continue learning for agents, and more. 

I got my MS/Ph.D degree from College of Information and Computer Sciences, University of Massachusetts Amherst, advised by Prof. [W. Bruce Croft](http://ciir.cs.umass.edu/croft) in the [Center for Intelligent Information Retrieval (CIIR)](http://ciir.cs.umass.edu/). And I got my bachelor degree from Dept. Computer Science & Technology, Tsinghua University. 



**Experience**
- Tsinghua University, Associate Professor at [THUIR](http://ai.thuir.cn/). Beijing, China, Dec. 2024 - Now
- Tsinghua University, Assistant Professor at [THUIR](http://ai.thuir.cn/). Beijing, China, Aug. 2022 - Dec. 2024
- University of Utah, Tenure-track Assistant Professor. Salt Lake City, UT, USA, Aug. 2019 - Jun. 2022
- University of Massachusetts, Amherst, Research Assistant in [CIIR](http://ciir.cs.umass.edu/), advised by Prof. [W. Bruce Croft](http://ciir.cs.umass.edu/croft). Amherst, MA, USA, Sept. 2014 - Jul. 2019
- Amazon Search, Data scientist Intern, mentored by [Danial Hill](http://www.danielnhill.com/) and [S. V. N. Vishwanathan](https://www.stat.purdue.edu/~vishy/main.html), Palo Alto, CA, USA, May 2018 - Aug. 2018
- Google Research, Ph.D. Intern, mentored by [Xuanhui Wang](https://research.google/people/XuanhuiWang/), [Nadav Golbandi](https://research.google/people/105605/) and [Michael Bendersky](http://bendersky.github.io/), CA, USA, Jun. 2017 - Sept. 2017
- Microsoft Research, Research Intern in CLUES, mentored by [Susan Dumais](http://susandumais.com/) and [Nick Craswell](https://www.microsoft.com/en-us/research/people/nickcr/). Redmond, WA, USA,  Jun. 2015 - Sept. 2015
- Tsinghua University, undergraduate thesis project in [THUIR](http://ai.thuir.cn/), advised by Prof. [Yiqun Liu](http://www.thuir.cn/group/~YQLiu/). Beijing, China, Sept. 2012 - Jun. 2014



**Achievements**
- Qian Weichang Chinese Information Processing Science and Technology Youth Innovation Award - 2024
- Qian Weichang Chinese Information Processing Science and Technology Nature and Science Award - First Prize - 2024
- ACM SIGIR Early Career Researcher Award - 2024
- ACM SIGIR 2024 Best Paper Award - 2024
- Beijing Science and Technology Award - First Prize, 2023
- ACM SIGIR-AP 2023 Best Paper Honorable Mention, 2023
- [Google Research Scholar Award](https://ai.googleblog.com/2021/04/announcing-2021-research-scholar.html), 2021
- UMass CICS Accomplishments in Search & Mining Awards, 2017
- Ph.D. Qualifying Exam (Portfolio) passed with distinction, 2016
- Outstanding Bachelor Graduate of Beijing (top 1%), 2014
- Outstanding Bachelor Graduate of Tsinghua (top 10%), 2014
- Excellent Undergraduate Thesis Award (top 4), 2014
- Tsinghua Laboratory Contribution Award, Third Prize, 2014
- Tsinghua Zhong Shi-Mo Scholarship (the highest award for students in Dept. CS&T, top 1), 2012



**Services**
- NTCIR-18 Program Co-Chair
- SIGIR Student Affairs Co-Chair
- CCIR Student Affairs Co-Chair
- SIGIR-AP 2023 General Co-Chair
- Associate Editor
  - [ACM Transactions on Information Systems (TOIS)](https://dl.acm.org/journal/tois/editorial-board)
- Area Chair/Senior PC Member
  - SIGIR, WWW, CIKM, NAACL-HLT, EMNLP, LREC-COLING 
- Guest Editor
  - [TOIS Special Issue on Pre-trained Models for Search and Recommendation](https://dl.acm.org/journal/tois/calls-for-papers)
- PC Member: 
  - SIGIR, WWW, CIKM, ACL, AAAI, EMNLP, ECIR, AIRS, CCL
- Journal Review: 
  - TOIS, TPAMI, JMLR, TKDE, TOIT, IPM, IRJ, KAIS, JASIST

{% endcapture %}

{% include two-col.html leftcol=left_panel rightcol=main_panel left=3 right=9 %}
