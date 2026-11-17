---
title: Home
nav:
  order: 1
---



{% capture left_panel %}

<div class="profile-visual">
  <img class="profile-photo" src="{{ '/images/profile.jpg' | relative_url }}" alt="Qingyao Ai" width="255" height="225" />
</div>

# Qingyao Ai
<p class="profile-info">
Associate Professor<br/>
Dept. of CS&T, Tsinghua University<br/>
Lab & Office: FIT-1-506<br/>
</p>

<div class="profile-links">
{%- include link.html type="google-scholar" icon="" text="Google Scholar" tooltip="" link="UKqaI5IAAAAJ" -%}
{%- include link.html type="github" icon="" text="" tooltip="" link="QingyaoAi" -%}
{%- include link.html type="twitter" icon="" text="" tooltip="" link="QingyaoAi" -%}
{%- include link.html type="email" icon="" text="Email" tooltip="" link="aiqy@tsinghua.edu.cn" -%}
</div>

{% endcapture %}

{% capture main_panel %}


<div class="recruitment-callout">
  <strong>I'm actively recruiting PostDocs and Ph.D. candidates!</strong>
  <span>If you are interested, please <a href="mailto:aiqy@tsinghua.edu.cn">send me an email</a> or explore <a href="https://ai.thuir.cn/opportunities/">open positions &rarr;</a></span>
</div>

My research mainly focuses on Information Retrieval and related topics. Currently I'm working on integrating retrieval and generative AI techniques to build better information access systems and agents, including retrieval/ranking optimization, retrieval augmented generation, automatic prompt refinement, continue learning for agents, and more. 

I got my MS/Ph.D degree from College of Information and Computer Sciences, University of Massachusetts Amherst, advised by Prof. [W. Bruce Croft](http://ciir.cs.umass.edu/croft) in the [Center for Intelligent Information Retrieval (CIIR)](http://ciir.cs.umass.edu/). And I got my bachelor degree from Dept. Computer Science & Technology, Tsinghua University. 



## Experience
- Tsinghua University, Associate Professor at [THUIR](http://ai.thuir.cn/). Beijing, China, Dec. 2024 - Now
- Tsinghua University, Assistant Professor at [THUIR](http://ai.thuir.cn/). Beijing, China, Aug. 2022 - Dec. 2024
- University of Utah, Tenure-track Assistant Professor. Salt Lake City, UT, USA, Aug. 2019 - Jun. 2022
- University of Massachusetts, Amherst, Research Assistant in [CIIR](http://ciir.cs.umass.edu/), advised by Prof. [W. Bruce Croft](http://ciir.cs.umass.edu/croft). Amherst, MA, USA, Sept. 2014 - Jul. 2019
- Amazon Search, Data scientist Intern, mentored by [Danial Hill](http://www.danielnhill.com/) and [S. V. N. Vishwanathan](https://www.stat.purdue.edu/~vishy/main.html), Palo Alto, CA, USA, May 2018 - Aug. 2018
- Google Research, Ph.D. Intern, mentored by [Xuanhui Wang](https://research.google/people/XuanhuiWang/), [Nadav Golbandi](https://research.google/people/105605/) and [Michael Bendersky](http://bendersky.github.io/), CA, USA, Jun. 2017 - Sept. 2017
- Microsoft Research, Research Intern in CLUES, mentored by [Susan Dumais](http://susandumais.com/) and [Nick Craswell](https://www.microsoft.com/en-us/research/people/nickcr/). Redmond, WA, USA,  Jun. 2015 - Sept. 2015
- Tsinghua University, undergraduate thesis project in [THUIR](http://ai.thuir.cn/), advised by Prof. [Yiqun Liu](http://www.thuir.cn/group/~YQLiu/). Beijing, China, Sept. 2012 - Jun. 2014



## Achievements
- [ACM CIKM 2026 Test of Time Award](http://www.cikmconference.org/cikmToTA.html) - 2026
- [WLF Prize for Young Scientists Finalist](https://www.thewlaprize.org.cn/) - 2026
- [Ant InTech Award - Future](https://www.antresearch.com/cooperation/InTech) - 2026
- Qian Weichang Chinese Information Processing Science and Technology Youth Innovation Award - 2024
- Qian Weichang Chinese Information Processing Science and Technology Nature and Science Award - First Prize - 2024
- [ACM SIGIR Early Career Researcher Award](https://sigir.org/awards/sigir-ecr-awards/) - 2024
- [ACM SIGIR 2024 Best Paper Award](https://sigir.org/awards/best-paper-awards/) - 2024
- Beijing Science and Technology Award - First Prize, 2023
- [ACM SIGIR-AP 2023 Best Paper Honorable Mention](https://www.sigir-ap.org/sigir-ap-2023/bestpaper-award/), 2023
- [Google Research Scholar Award](https://ai.googleblog.com/2021/04/announcing-2021-research-scholar.html), 2021
- [UMass CICS Accomplishments in Search & Mining Awards](https://ciir.cs.umass.edu/2017SearchMiningAward#:~:text=The%20Accomplishments%20in%20Search%20%26%20Mining,reputation%20in%20these%20two%20areas.), 2017
- Ph.D. Qualifying Exam (Portfolio) passed with distinction, 2016
- Outstanding Bachelor Graduate of Beijing (top 1%), 2014
- Outstanding Bachelor Graduate of Tsinghua (top 10%), 2014
- Excellent Undergraduate Thesis Award (top 4), 2014
- Tsinghua Laboratory Contribution Award, Third Prize, 2014
- Tsinghua Zhong Shi-Mo Scholarship (the highest award for students in Dept. CS&T, top 1), 2012



## Services
- NTCIR-18/19 Program Co-Chair
- SIGIR 2027 Doctoral Colloquium Co-Chair
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

<div class="home-layout">
  <aside class="home-profile">{{ left_panel | markdownify }}</aside>
  <div class="home-content">{{ main_panel | markdownify }}</div>
  <details class="home-updates">
    <summary>Updates on LinkedIn</summary>
    {% include linkedin_timeline.html %}
  </details>
</div>
