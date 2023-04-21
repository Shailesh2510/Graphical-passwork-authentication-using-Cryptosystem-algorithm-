########
Research
########

Step 3
******

Questions
=========
*  Proposed problem statement.
*  Objectives.
*  Modules.
*  Anticipated results.
*  Refined problem statement.

Problem statement (proposed, refined)
=====================================
To solve the implementation problems of GPA in a way that UI and backend are
decoupled and to provide better UI.
The UI should be such that it is capable to replace normal password box without
disrupting normal operations.

Objectives
==========
*  Provide better UI.
*  Use decoupled architecture.
*  Ensure normal (no graphic) use case as well; so as to replace normal
   password box.
*  Easy to implement.
*  Easy to extend.
*  Light weight and better user experience.

Modules
=======
*  GPAbox: The main box containing GPA's main graphical (and non-graphical)
   password box.
*  GPADisplayArea: The Area within GPAbox designated for password state
   visibility; similar to normal password boxes.
*  GPA visibility buttons: Pair of buttons to control password visibility; just
   as in normal password boxes.
*  GPA Password clear button: Button to clear currently entered password and
   reset visibility.
*  GPAPicker button: Button to launch GPA graphical password selection tool
   - virtual tablet.
*  GPAVT: GPA virtual tablet (VT) that allows users to choose graphical
   password using selected approach. This area allows multiple extensions
   for each approach.

Anticipated results
===================
*  Single line that is capable to replace exisiting password box with GPA box;
   in html.
*  API for each function: get password, set password, view, hide, etc.
*  A method for implementing new approaches.
*  Light weight UI.
*  Easy to use and implement.
