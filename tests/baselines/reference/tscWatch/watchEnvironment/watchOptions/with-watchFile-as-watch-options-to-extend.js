/a/lib/tsc.js -w -p /a/b/tsconfig.json --watchFile UseFsEvents
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

//// [/a/b/tsconfig.json]
{}

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile2.js]
var y = 1;



Output::
>> Screen clear
12:00:17 AM - Starting compilation in watch mode...



12:00:22 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

WatchedFiles::

FsWatches::
/a/b/tsconfig.json:
  {"directoryName":"/a/b/tsconfig.json","fallbackPollingInterval":2000,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/commonfile1.ts:
  {"directoryName":"/a/b/commonFile1.ts","fallbackPollingInterval":250,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/commonfile2.ts:
  {"directoryName":"/a/b/commonFile2.ts","fallbackPollingInterval":250,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/lib/lib.d.ts:
  {"directoryName":"/a/lib/lib.d.ts","fallbackPollingInterval":250,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
