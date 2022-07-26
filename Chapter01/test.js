import { print, log } from "./text-helpers"; //or
import freel from "./mt-freel";
print("printing a message");
log("logging a message");
freel.print();

import { print as p, log as l } from "./text-helpers"; //or
p("printing a message");
l("logging a message");

import * as fns from "./text-helpers"; //or
