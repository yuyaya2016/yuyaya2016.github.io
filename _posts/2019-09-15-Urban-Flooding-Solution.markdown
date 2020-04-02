---
layout: post
title:  Data-Driven Urban Flooding Solution - Auto Regressive Time Series Model
date:   2019-09-15 15:01:35 +0300
image:  flood05.png
tags:   R, Tableau, TimeSeries
---
#### Goal 
The project aims to find a data-driven and economic flood control observatory to predict 60-minute forward flooding status and share possible advice beforehand.  avoid the flooding issue in the urban area. The project takes Taipei city as target to build prototype at the first stage. We hope to further extend the solutions to other urban areas. The solution in this project was highlighted in 2019 Bloomberg Data for Good Exchange Conference.

#### Project Overview
The project is collaborated with Taipei Geotechnical Engineering Office of Taipei City and Central Weather Bureau of Taiwan and Data for Social Good program hosted by DSP Inc. The project is accomplished by a 10-people team composed of geotechnical experts, program manager, statisticians, data scientists, data analysts, and developers. The overall process takes half a year, including data collection, cleansing, exploratory data analysis, statistical modeling, visualization and building prototype. 

#### Summary
As the global warming worsens, severe weather strikes flood control system more fiercely than ever. To prevent the damage, construction is the typical way adopted in the first place, such as reservoirs and embankments. However, construction is hardly eliminate the risk of flooding and is even likely to cause disastrous flood, like breaching of dikes. Plus, the construction cost is considerable. As a result, a smart flood control system is essential for a city. 

### Data Collection
In Taipei, to control the flooding issue when the rain hits, the government built measurement stations from upstream to downstream to track and collect data. So, we took advantage of these datasets, inlcuding:
    - weather condition 
    - rainfall amount
    - Water levels of Sewer monitoring sites
    - pumping amount
    - precipitation amount

Apart from the above datasets, we also took into account datasets about exogenous attributes, such as topography and illegal reclaimation. We integrated data from different sources for analytics. 

(*Below is the image of current flood control system in Taipei city*)
![]({{ site.baseurl }}/images/FloodSystem.png)

#### Data Processing
Since the datasets are collected in different ways, it took a lot of effort to make it consistent. For instance, the time measurement in each dataset is different, some are calculated in minutes while some are days, so the time should be convert into the smallest unit. Besides, there are some missing value in different measurement stations. It is crucial for us to find the reasons and then treat them in a specific way.

#### EDA and Visualization
Below is the demo of exploratory analysis of illegal reclaimation data.
![]({{ site.baseurl }}/images/flood05.png)

#### Modeling
Based on the data and context, we applied Autoregressive Distributed Lag Model (ADLM) to prediction. We used extreme rainfall events only to train our model. The proposed autoregressive distributed lag model (ADLM) is defined as followed, where 𝑆" , 𝑅" and 𝑃" stand for the water level of sewer monitoring site, the rainfall amount and the pumping amount at time 𝑡.

![]({{ site.baseurl }}/images/flood03.png)


In the below image, the upper panel shows the results of one flood site whereas the lower panel shows the results of one non-flood site. The left panel stands for 30-minute lag models whereas the right panel stands for 60-minute lag models. The R-square were calculated according to the training data. Two horizontal lines in all subgraphs are the upper and lower bounds of the sewer. The green curves represent the true water level over time. The solid yellow curves represent the predicted water level using ADLM, whereas the dotted yellow curves are the corresponding 95% confidence intervals.

![]({{ site.baseurl }}/images/flood04.png)

#### Prototype 
The prototype of smart flood control observatory.
![]({{ site.baseurl }}/images/flood06.png)


**Reference**
Check out the details:
- the [Research Paper][paper]
- the [Poster][poster] for summary.
- the [Tableau Gallery][tableau] for the visualizations.

[paper]: https://drive.google.com/file/d/1-QJzU3pzz1ytWX6vbkFJxnAOk72vKflA/view?usp=sharing
[poster]: https://drive.google.com/file/d/143JfSyMdAReb50QfxjxVIOdVme0UuNIM/view?usp=sharing
[tableau]: https://public.tableau.com/profile/joanna5709#!/vizhome/IllegalRecalmationsbyDistrictsJurisdictions/IllegalReclamationsbyDistricts