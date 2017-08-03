---
layout: post
title: "Bisection Method for Single Variable"
excerpt: "Numerical Analysis by Richard L. Burden and J. Douglas Faires"
tags:
  - numerical analysis
  - book
  - numerical_tech
---

# Bisection Method

This is a method to find the roots of a single variable function. \\(f(a)\\)
and \\(f(b)\\) have opposite signs and you are basically finding the midpoint
between a and b. And you do this iteratively until \\(f(p)\\) equals to zero
or you reach the iteration limit you set.

```
  INPUT endpoints a,b; tolerance TOL;maximum number of iterations

  OUTPUT approximate solution p or message of failure

  Step 1 set \\(i = 1\\);
    \\(FA = f(a)\\)

  Step 2 while i =< $N_{o}$ do Steps 3-6.
    Step 3 Set \\(p = a + (b - a)/2\\); (Compute \\(p\_{i}\\))
      \\(FP = f(p)\\)
    Step 4 If FP = 0 or (b - a)/2 < TOL then
      OUTPUT (\\(p\\)) (Procedure is completed, output the point p)
      STOP
    Step 5 Set \\(i = i + 1\\).
    Step 6 If \\(FA\ \dot\ FP\\) > 0 then \\(a = p\\); (Compute \\(a\_{i}\\),
                                                      \\(b\_{i}\\))
      \\(FA = FP\\)
    else set \\(b = p\\). (\\(FA\\) is unchanged.)
  Step 7 OUTPUT ('Method failed after \\(N\_{o}\\) iterations')
    STOP
```
