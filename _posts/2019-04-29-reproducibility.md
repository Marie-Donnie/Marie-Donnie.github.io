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

These definitions are explicited more in *From Repeatability to
Reproducibility and Corroboration*[^2]. The author differenciates two
other levels, variation, where someone either repeat or replicate the
experiment with a modification of a parameter, and corroboration,
where someone obtain the same results by other means.

Instinctively, we feel that reproducibility purpose is to verify
results of an experiments. While this is true, it is not the only
reason. The main purpose of reproducing an experiment is to enlarge
its scope, and to get a general, basic understanding of the measured
system. Each level of reproducibility helps towards this goal.

### Repeatability ###

Repeatability is defined as the exact repetition of an experiment,
under the same conditions. It is the minimum level expected for any
experiment. How can one trust the results of an experiment if even the
original team can not duplicate their own results? Though this does
not really increase the confidence in the experimental results, it
paves the way towards a usable artifact by pushing the experimenter to
package everything and list all required
configurations[^2]. Usually the experiment will be
repeated by the original team of experimenters to verify their own
results before publishing them, but also because they will probably
need to execute the workflow multiple times to refine the
experimentation code (bug fixing, scalability issue, etc.).

#### Requirements ####

To repeat an experiment, one needs access to the same or equivalent
infrastructure and the artifact used for the experiment. It is highly
recommended when making any experiment to build a solid set of scripts
or yet better a true software. It might feel time consuming, but with
good libraries the burden can be lessened, and the time it takes to
re-execute the experiment is really improved. Moreover, it helps to
anticipate for further levels of reproducibility.


### Replicability ###

Replicability provides important data about robustness to slight
variations (even though it is supposed to be the same experimental
tools) between the subjects of an experiment and the replicas.  In
theory, replicability should be repeating the same experiment in the
same conditions. But as we know, the state of a complex system is
really hard, if not impossible to achieve again[^4][^5]. So we have to
take this into account when replicating an experiment, that the
results might not be exactly the same, but the important is to keep
the trend.


#### Requirements ####





# TLDR #


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
- [Goble, Carole. "Reproducibility (and the R*) of Science: motivations, challenges and trends" IRCDL Pisa (2019)](https://www.slideshare.net/carolegoble/reproducibility-and-the-r-of-science-motivations-challenges-and-trends)
- [Desquilbet, Loïc, Sabrina Granger, Boris Hejblum, Arnaud Legrand, Pascal Pernot, et Nicolas P. Rougier. Vers une recherche reproductible : Faire évoluer ses pratiques. Bordeaux : Urfist de Bordeaux, 2019. ISBN : 979-10-97595-05-0 ; https://hal.archives-ouvertes.fr/hal-02144142](https://rr-france.github.io/bookrr/)


# Sources #

[^1]: [ACM artifact review badging ](https://www.acm.org/publications/policies/artifact-review-badging)
[^2]: [Dror G. Feitelson. 2015. From Repeatability to Reproducibility and Corroboration. SIGOPS Oper. Syst. Rev. 49, 1 (January 2015), 3-11. DOI: https://doi.org/10.1145/2723872.2723875](https://doi.org/10.1145/2723872.2723875)
[^3]: [Schmidt, Stefan. (2009). Shall We Really Do It Again? The Powerful Concept of Replication Is Neglected in the Social Sciences. Review of General Psychology. 13. 90-100. 10.1037/a0015108.](https://www.researchgate.net/publication/232450980_Shall_We_Really_Do_It_Again_The_Powerful_Concept_of_Replication_Is_Neglected_in_the_Social_Sciences)
[^4]: [Moseley, B., & Marks, P. (2006). Out of the tar pit. Software practice advancement (spa), 2006.](http://curtclifton.net/papers/MoseleyMarks06a.pdf)
[^5]: [Legrand, Arnaud (2020). Obtaining faithful/reproducible measurements on modern CPUs. Presented in GDR-RSD day in Nantes.] (https://github.com/alegrand/SMPE/blob/master/lectures/talk_20_01_23_Nantes_RSD.pdf)

# Some unquoted sources for really interested people #

These links are some articles I've read for the production of this article, mostly about tools to repeat/replicate/reproduce the experiments:
- [Chirigati, F., Rampin, R., Shasha, D., & Freire, J. (2016, June). Reprozip: Computational reproducibility with ease. In Proceedings of the 2016 international conference on management of data (pp. 2085-2088).](https://doi.org/10.1145/2882903.2899401)
- [Jimenez, I., Sevilla, M., Watkins, N., Maltzahn, C., Lofstead, J., Mohror, K., ... & Arpaci-Dusseau, R. (2017, May). The popper convention: Making reproducible systems evaluation practical. In 2017 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW) (pp. 1561-1570). IEEE.](https://www.researchgate.net/profile/Ivo_Jimenez/publication/318125763_The_Popper_Convention_Making_Reproducible_Systems_Evaluation_Practical/links/5ba33e4d299bf13e603e4e82/The-Popper-Convention-Making-Reproducible-Systems-Evaluation-Practical.pdf)
- [Séguin, C., Caron, E., & Dubus, S. (2019, May). SeeDep: Deploying Reproducible Application Topologies on Cloud Platform.](https://hal.archives-ouvertes.fr/hal-02119654/file/CLOSER_2019_41_CR.pdf)
- [Cristian Ruiz, Salem Harrache, Michael Mercier, Olivier Richard:
Reconstructable Software Appliances with Kameleon. Operating Systems Review 49(1): 80-89 (2015)](https://dl.acm.org/doi/10.1145/2723872.2723883)
