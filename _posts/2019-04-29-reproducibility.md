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

In computer science, the subject of experiments is usually a software,
a software stack, or an Operating System. It can be used to evaluate
its performance in terms of time, security, scalability,
etc. Experimenting on complex softwares is time-consuming, prone to
error, hard to reproduce. But reproducing experiments is extremely
important to broaden the scope of experiments and increase confidence
in the results. There are a lot of sources on reproducibility, but
often the definitions vary from one to another.

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

There was a analogy in Feitelson's article[^2] that was taken from Schmidt's paper[^3]:
> "Imagine, I were to show you a knife I have recently
> invented that cuts stone as easily as butter. I demonstrate this
> several times (replication) to you by cutting pieces of stone. You
> might be impressed by the demonstration but not really convinced that
> it works. However, you might be a bit more convinced if I were to
> demonstrate it again on a different type of stone, and even more
> convincing if I were to give you the knife and you (as a different
> person) were also able to cut one of my stones. But there might still
> be a trick or something wrong with the material I am employing.  So
> you will be a lot more convinced if you could repeat the experiment in
> your home (different place). But I think the most convincing strategy
> of all would be to give you a proper description of how to produce
> such a tool, so you can manufacture your own different knife,
> completely independently from what I have done."
I find this pretty accurate, though it refers to the variations of an experiment (different place) that I did not talk about much.

I illustrated this in the figure below. Blue cuts the stone with the knife she crafted. This is the experiment. She does it several times with the same knife; this is repetition. She then gives her knife to green, who replicates the experiment on the same stones. Green is given instructions to produce his own knife and reproduce the experiment by interpreting the instructions he was given.
![Reproducibility](/assets/img/posts/reproducibility/3r.png "Reproducibility")
<figure>
<figcaption>
<span class="figure-number">Figure 1: </span>
The stone cutter experiment repeated, replicated and reproduced.
</figcaption>
</figure>


# Further reading #

- [Beyond computational reproducibility, let us aim for reusability](http://gael-varoquaux.info/programming/beyond-computational-reproducibility-let-us-aim-for-reusability.html)
- [Ruiz, Cristian, et al. "Reconstructable software appliances with kameleon." ACM SIGOPS Operating Systems Review 49.1 (2015): 80-89.](https://dl.acm.org/citation.cfm?id=2723883)




# Sources #

[^1]: [ACM artifact review badging ](https://www.acm.org/publications/policies/artifact-review-badging)
[^2]: [Dror G. Feitelson. 2015. From Repeatability to Reproducibility and Corroboration. SIGOPS Oper. Syst. Rev. 49, 1 (January 2015), 3-11. DOI: https://doi.org/10.1145/2723872.2723875](https://doi.org/10.1145/2723872.2723875)
[^3]: [Schmidt, Stefan. (2009). Shall We Really Do It Again? The Powerful Concept of Replication Is Neglected in the Social Sciences. Review of General Psychology. 13. 90-100. 10.1037/a0015108.](https://www.researchgate.net/publication/232450980_Shall_We_Really_Do_It_Again_The_Powerful_Concept_of_Replication_Is_Neglected_in_the_Social_Sciences)
