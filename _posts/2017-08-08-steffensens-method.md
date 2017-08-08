---
layout: post
title: "Steffensen's Method"
excerpt: "Numerical Analysis by Richard L. Burden and J. Douglas Faires"
tags:
  - numerical analysis
  - book
  - numerical_tech
  - convergence
---

# Stffensen's Method

Used to find a solution \\(p = g(p)\\) given an initial approximation \\(p_o\\).

```
INPUT initial approximation p_o;tolerance TOL;maximum number of iterations N_o

OUTPUT approximate solution p or message of failure.

Step 1 Set i = 1.

Step 2 While i =< N_o do steps 3-6.
  Step 3 Set p_1 = g(p_o);
         p_2 = g(p_1);
         p = p_o - (p_1 - p_o)^{2}/(p_2 - 2p_1 + p_o).
  Step 4 If |p - p_o| < TOL then
         OUTPUT (p); (procedure completed successfully.)
         STOP.
  Step 5 Set i = i + 1.
  Step 6  Set p_o = p (Update p_o)

Step 7 OUTPUT ('Method failed after N_o iterations');
       STOP.

```
