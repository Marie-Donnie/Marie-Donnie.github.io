---
layout: post
author: marie
title: Reproducibility in computer science
---


<em>Reproducibility is crucial for any experiment, considered as a
hallmark of scientific method. While this is widely admitted by the
scientific community, there are still a lot of experiments that does
not apply any of the methodologies that can be used to achieve
reproducibility. Moreover, reproducibility is a term widely employed,
but it lacks a standard description of what is clearly required. We
will dive a bit more in the different level of reproducibility and how
it can be achieved.</em>

***

The ACM (Association for Computing Machinery) defines three levels of
reproducibility [^1]. They suggests a badging system for scientific
teams who wants to publish reproducible experiments. This system
requires an artifact that will undergo a process of checking which
level of reproducibility is achieved. This artifact is composed of
everything that can be used to test the reproducibility of the
experiment, *e.g.*, scripts or softwares produced to run the
experiments, input or output datasets, etc.
The three levels of reproducibility, according to ACM, are:

> **Repeatability (Same team, same experimental setup)**
>
> The measurement can be obtained with stated precision by the same team using the same measurement procedure, the same measuring system, under the same operating conditions, in the same location on multiple trials. For computational experiments, this means that a researcher can reliably repeat her own computation.
>
> **Replicability (Different team, same experimental setup)**
>
> The measurement can be obtained with stated precision by a different team using the same measurement procedure, the same measuring system, under the same operating conditions, in the same or a different location on multiple trials. For computational experiments, this means that an independent group can obtain the same result using the author’s own artifacts.
>
> **Reproducibility (Different team, different experimental setup)**
>
> The measurement can be obtained with stated precision by a different team, a different measuring system, in a different location on multiple trials. For computational experiments, this means that an independent group can obtain the same result using artifacts which they develop completely independently.

These definitions are explicited more in *From Repeatability to Reproducibility and Corroboration*[^2]. The author differenciates two other levels, variation, where someone either repeat or replicate the experiment with a modification of a parameter, and corroboration, where someone obtain the same results by other means.

Instinctively, we feel that reproducibility purpose is to verify results of an experiments. While this is true, it is not the only reason. The main purpose of reproducing an experiment is to enlarge its scope, and to get a general, basic understanding of the measured system. Each level of reproducibility helps towards this goal.

Repeatability is defined as the exact repetition of an experiment, under the same conditions.


(more to come)







[^1]: [ACM artifact review badging ](https://www.acm.org/publications/policies/artifact-review-badging)
[^2]: Dror G. Feitelson. 2015. From Repeatability to Reproducibility and Corroboration. SIGOPS Oper. Syst. Rev. 49, 1 (January 2015), 3-11. DOI: https://doi.org/10.1145/2723872.2723875
