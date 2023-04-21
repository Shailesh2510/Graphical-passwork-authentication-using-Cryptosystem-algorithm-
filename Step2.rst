########
Research
########

Step 2
******

Questions
=========
*  1 case study on deployed solution from company website or other sources.
*  5 surveys on focussed issue wrt companies, publication, NGO, govt., etc.
*  Gap analysis - pros and cons of various approaches in solving the issue.
*  1 base paper - repeat or compare results with?
*  Literature survey - Comparative analysis of base paper and case study.

Reference papers
================
*  Alignment based graphical password authentication system: Harshit Varshney;
   2016; IEEE :: Base paper - compare.
*  Survey of various graphical password techniques and their schemes: Kenz
   Bozed; May 2022; IEEE.
*  Analysis of knowledge based graphical password authentication; Gaurav
   Agrawal, Saurabh Singh, Ajay Indian; Aug 2011; IEEE.
*  An exploration of graphical password authentication for children: Sonia
   Chaisson; Nov 2018; ScienceDirect.

Case study
==========
ReCaptcha:
*  Real-time implementation of graphical passwords type approach, but
   limited to verification.
*  Average UI, which most people can use but remains complicated for some.
*  Sometimes can be difficult to use given that images used are of very
   poor quality. Due to this, the user might need to keep entering password
   for indefinite amount of time leading to frustration, and turning down.

Surveys
=======
*  AICTE - All India Council for Technical Education, carried out a survey on
   managing passwords for various platforms and services with major focus being
   experienced govt. employees. In the study, the found that most of the
   employees forgot their passwords either due to complexity of it or while
   trying to remember passwords for multiple websites each with varying
   complexities.
   Owing to this problem, most of the employees are unable to perform routine
   tasks like uploading certain documents online or fetching essential details
   from govt. portals, because either they keep resetting their password every
   time they want to log in or they tend to write passwords in their diaries,
   which they do not carry everytime, etc.
*  Users POV:
   *  If incorrectly done users might not visit again.
   *  If hard to use, people will resort back to passwords.
   *  Many still want to use copy-paste or password manager based approach.
   *  People do not want others to see their password when entering - shoulder
      smurf.
   *  Should get easy as the experience of the user increases.
*  Developers POV:
   *  Should be easy to implement - ex: for passwords they simply have to add
      at-minimum a text field and read the values.
   *  Should be easy to manage - if something goes wrong they should be able
      to debug whether the issue is with the input or in their own system.
*  Organization POV:
   *  Users should not be disappointed.
   *  If user dislikes company might loose client and revenue.
   *  Implementation cost should be less.
*  Overall development perspective:
   *  Solution may be capable to bring lots of age-experienced users to connect
      and interact with technology.
   *  Should improve work efficiency, wrt AICTE study.
   *  Flexible to work with.

Gap analysis
============
Almost all techniques presented in regard to the graphical password
authentication system put forward an authentication based approach which is
meant to replace normal text-based password approach, and none of them focus
on the main issue, that is, ability to remember and enter password easily.

To some extent, thinking from backend side, i.e., from the perspective of
storing such passwords is required. But, all researches being carried out
still revolve around presenting graphical password input and directly
using it to derive password, meanwhile ruining user experience.

Though some of the researches are partially heading in correct direction, i.e.,
they are thinking from user perspective. For example, alignment based
approaches are ones where you simply have to rotate the dials to bring certain
items in same line, which provide pretty good user experience.
And similarly there are multiple approaches.

Literature survey
=================
*  Alignment based approach:
   Pros:
      *  Clean and better UI.
      *  Shoulder smurf resistant.
      *  Easy to use.
   Cons:
      *  Less images = easily crackable, more images = poor experience.
      *  Multiple dials might make user confuse among which dial to move.
*  Survey of various schemes:
   Pros:
      *  Provides various approaches that can be used with a proper study of
         each approach.
      *  Provides multiple ways to make the UI.
   Cons:
      *  Still focuses on backend side.
      *  Approaches not for user POV.
*  Analysis of knowledge based approach:
   Pros:
      *  Provides statical / detailed analysis of knowledge based approaches.
*  Exploration of authentication for children:
   Pros:
      *  Provides real-time study about object vs image based ui for children
         and adults.
      *  Can be used to compare our results with the ones given in this paper.
