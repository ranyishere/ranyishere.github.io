---
layout: post
title: "Fixed Point Iteration"
excerpt: "Numerical Analysis by Richard L. Burden and J. Douglas Faires"
tags:
  - numerical analysis
  - book
  - numerical_tech
---

# Fixed Point Iteration Method

You want to use this method to find a point where \\(f(p) = p \\).
In other words, the point you put into the function returns the same point.
To put it in another perspection, when the line \\(y = x \\) intersects your
function \\(f(x)\\).

```
INPUT initial approximation p_o;tolerance TOL; maximum number of iterations N

OUPUT approximate solution p or message of failure.

Step 1 Set i = 1.

Step 2 While i =< N do Steps 3-6
  Step 3 Set p = g(p). (Compute p_i)
  Step 4 If |p - p_o| < TOL then
    OUTPUT (p); (Procedure was successful)
    STOP.
  Step 5 Set i = i + 1
  Step 6 Set p_o = p (Update p_o)
  Step 7 OUTPUT ('The method failed after N iterations'); (Failed procedure)
  STOP
```
