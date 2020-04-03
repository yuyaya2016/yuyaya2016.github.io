---
layout: post
title:  "Propensity Score Matching Analysis for High Note"
date:   2020-02-21 18:05:55 +0300
project type: course project
duration: 2 days
image:  PSM04.png
tags:   R, ggplot, PSM, LogisticRegression
---
## Overview
Propensity score is the conditional probability of receiving the treatment (rather than the control) given the observed covariates. In the observational study, the treatment and control groups are not directly comparable, because they may systematically differ at baseline. So, propensity score plays a crucial role in eliminating the bias that comes with observational study and balancing covariates between two groups. Matching is one of the approaches that propensity scores can be used to control confounding. 

![]({{ site.baseurl }}/images/PSM.png)

This project is to showcase how propensity score matching method works in analysis. I used logistic regression to estimate the score. Nextm I tried two propensity score matching methods - nearest neighbor method and subclassification method - to help me balance data. 


*Check out the [GitHub][psm-github] or [RPubs][RPubs] for the details.*

[psm-github]:   https://github.com/yuyaya2016/Propensity_Score_Matching_R/blob/master/PSM_Rcode.Rmd
[RPubs]: https://rpubs.com/yayeh/594181