---
layout: post
title:  NFL Super Bowl Final Game Score Prediction
date:   2020-02-01 15:01:35 +0300
image:  nfl01.png
tags:   Python, Tensorflow, Prophet, TimeSeries
---
#### Goal
The project is to predict 2020 NFL final game winner and the scores for Kansas City Chiefs and San Francisco 49ers. 

#### Data Brief
Data: 2016 - 2019 NFL data
Data Amount: 25 columns, 2134 records
Data Source: Pro-Football Reference Website

### Overview
In this project, I used the past 4-year NFL data from ESPN website. In order to predict the final score, first, I applied several models of time series forecasting to predict each performance for two teams. The models include ARIMA, Tensorflow TS Forecast, and Facebook Prophet, respectively. After predicting values for each performance, I trained two models, the Linear Regression using Tensorflow and Poisson Regression in statsmodels package, to predict the final scores for two teams.


*Check out the [GitHub][GitHub] for the details*
[GitHub]: https://github.com/yuyaya2016/NFLSuperBowlPrediction/blob/master/NFLSuperBowl_ScorePrediction.ipynb