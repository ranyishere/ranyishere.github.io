---
layout: post
title: "Newton's Method"
excerpt: "Numerical Analysis by Richard L. Burden and J. Douglas Faires"
tags:
  - numerical analysis
  - book
  - numerical_tech
---

# Newton's Method

This method is used to find a point \\(p\\) where \\(f(p) = 0\\). In other words, where the
rate at which your function \\(f(x)\\) changes is zero. Or you can think of it as where the
function touches the x axis.

```
INPUT initial approximation p_o;tolerance TOL;maximum number of iterations N_o

OUTPUT approximate solution p or message of failure.

Step 1 Set i = 1.

Step 2 While i =< N_o do Steps 3-6
  Step 3 Set p = p_o - f(p_o)/f'(p_o). (compute p_i.)
  Step 4 If |p - p_o| < TOL then
    OUTPUT (p); (The procedure was successful.)
    STOP.
  Step 5 Set i = i + 1.
  Step 6 Set p_o = p. (Update p_o)

Step 7 OUTPUT('The method failed after N_o iterations')
  (The procedure was unsuccessful)
  STOP
```
