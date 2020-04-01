---
layout: post
title:  Stock Forecast
date: 2020-03-24 15:01:35 +0300
project type: course project
duration: 3 days
image:  Tb_viz01
tags:   LinearRegression, TimeSeries, Forecasting, Visualization, Alteryx, Tableau
---
### Goal and Overview
This project takes GE company's stock price for example to predict stock price at the end of 2020. The core idea behind this project is to showcase how to quickly process data, implement algorithms, and build visualized dashboards for clients using __Alteryx__ and __Tableau__. It takes 1 day for research and data collection and 2 days for analysis, tuning, and visualization in this project. The data includes company 5-year stock price, competitors 5-year stock price, industrial index, and microeconomic index.

### Analytics
To predict the future GE stock price, first, I started with ARIMA, a statical method for time series forecasting. This method uses the past data to predict future values so that i could quickly have an overview of the future pattern, whether the trend will go up or down. The prediction, however, is still far from the real value. How the stock price performs inovlves so many factors, hence I took into account the external data for stock forecast.

In the second part, I added the external data as the independent variables, including the stock price of its major competitor, Siemens, the industrial indices, such as Oil and Gas index, Clean Energy index, Aviation index, Healthcare index, and microeconomic indices, such as GDP and Federal Funds Rate. These indices are related to the core business of GE in the recent years. Next, I moved on to a mix of machine learning algorithms, which included ARIMA and linear regression. I implemented ARIMA to predict future values for each indepedent variables. These could be trained in my linear regression model and see how it predict the target variable, the closing price. 

### Visualization
Finally, the trend is plotted in Tableau. On the other hand, with the coefficients of the trained linear regression model, I could also predict and visualize the target variable using *What-if Forecast* or simply using build-in *Forecast* function. The plot is shown as below. 

![]({{ site.baseurl }}/images/Tb_viz01.png)

### Next Step
There are three works in progress to increase the accuracy of the future prediction. 
1. More internal data can be considered, such as GE current production for each business unit. 
2. Apart from ARIMA, LSTM or Prophet model can be taken into account for sequence prediction. 
3. The stacking ensemble method can be used to decrease the bias while improve the prediction.
