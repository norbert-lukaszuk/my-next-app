import React from "react";

export const data = [
  {
    id: "PQHiKpXpMxR9wpWfN0na",
    code:
      "git add . /*adding all files to stage*/\ngit commit -m'<commit massage>'/*making a commit*/\ngit push /*pushing changes to github*/",
    description: "Commit procedure ",
  },
  {
    id: "RKthqjAYPnpQzRxtSGko",
    code: "git add .",
    description: "Adding all unstaged files",
  },
  { id: "WAdU3apeO4Gylqit5C1h", code: "kfjslkfjlsieuo", description: 87455465 },
  {
    id: "d3JkAcHk3eVtXIAsEUEZ",
    description: "Branch create and switch to it ",
    code: "git branch -c <branch name>",
  },
  {
    id: "wugL8Fg7QTfKlgaibodw",
    description: "Aliases creating",
    code:
      "git config --global alias.s status /*create alias for git status*/\ngit config --global alias.lg 'log --oneline' /*create alias with longer names*/\ngit config --get-regexp alias /*show all registred aliases*/",
  },
  {
    id: "ygGLkoigCCBqSKdjkWQY",
    description: "Branch switch",
    code: "git checkout <branch-name>",
  },
];
