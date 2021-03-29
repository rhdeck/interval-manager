
<a name="readmemd"></a>

Manage Complex Time Intervals

# interval-manager


<a name="__climd"></a>

# Usage
```bash
npx @raydeck/interval-manager [options]
```
Get the next scheduled time based on the provided interval
# Options
* --hour \<`hour...`> Set hour on which this should fire 
* --minute \<`minute...`> Set minute on which this should fire 
* --second \<`second...`> Set second on which this should file 
* --timezone \<`timezone`> Timezone for this (default: `America/New_York`)
* --reference-date \<`isoDate`> ISO-8601 representation of the reference (default: `2021-03-29T11:21:27.994Z`)
* --starting-date \<`isoDate`> ISO-8601 representation of the date the interval had started (default: `2021-03-29T11:21:27.994Z`)
* --ending-date \<`isoDate`> ISO-8601 representation of the date the interval had ended (default: `2021-03-29T11:21:27.994Z`)
* --dayOfMonth \<`daynumber...`> Day of the month to run 1-31 (note that not all months have >28 days) 
* --dayOfWeek \<`dayofweek...`> Day of the week to run, either a number from 0-6 one of sunday, monday, tuesday, wednesday, thursday, friday, saturday 
* --monthOfYear \<`month...`> Month of the year to run in, either a number from 1-12 one of january, february, march, april, may, june, july, august, september, october, november, december 
* --orderInMonth \<`weekNumber...`> Ordinal of the day of week within month to run, e.g. 2 and setting day of week to friday is second friday of the month 
* --dayOfYear \<`dayNumber...`> Ordinal day of the year e.g. on ther 120th day of the year is 120 
* --weekInterval \<`weeks`> Number of weeks between each event 
* --dayInterval \<`days`> Number of days between each event 
* --maxDates \<`limit`> Number of dates to return (default: `2`)
* --verbose Use human-readable version of the date as output (default is ISO-8601) 

<a name="_librarymd"></a>

@raydeck/interval-manager - v1.0.0

# @raydeck/interval-manager - v1.0.0

## Table of contents

### Modules

- [\_\_tests\_\_/interval](#modules__tests___intervalmd)
- [bin](#modulesbinmd)
- [index](#modulesindexmd)


<a name="interfacesbincommandercommandmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / Command

# Interface: Command

[bin](#modulesbinmd).[commander](#modulesbincommandermd).Command

## Hierarchy

* **Command**

  ↳ [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

## Indexable

▪ [key: *string*]: *any*

## Table of contents

### Properties

- [args](#args)
- [commands](#commands)

### Methods

- [action](#action)
- [addCommand](#addcommand)
- [addHelpCommand](#addhelpcommand)
- [alias](#alias)
- [aliases](#aliases)
- [allowUnknownOption](#allowunknownoption)
- [arguments](#arguments)
- [combineFlagAndOptionalValue](#combineflagandoptionalvalue)
- [command](#command)
- [createCommand](#createcommand)
- [description](#description)
- [exitOverride](#exitoverride)
- [help](#help)
- [helpInformation](#helpinformation)
- [helpOption](#helpoption)
- [name](#name)
- [on](#on)
- [option](#option)
- [opts](#opts)
- [outputHelp](#outputhelp)
- [parse](#parse)
- [parseAsync](#parseasync)
- [parseOptions](#parseoptions)
- [passCommandToAction](#passcommandtoaction)
- [requiredOption](#requiredoption)
- [storeOptionsAsProperties](#storeoptionsasproperties)
- [usage](#usage)
- [version](#version)

## Properties

### args

• **args**: *string*[]

Defined in: node_modules/commander/typings/index.d.ts:33

___

### commands

• **commands**: [*Command*](#interfacesbincommandercommandmd)[]

Defined in: node_modules/commander/typings/index.d.ts:35

## Methods

### action

▸ **action**(`fn`: (...`args`: *any*[]) => *void* \| *Promise*<void\>): [*Command*](#interfacesbincommandercommandmd)

Register callback `fn` for the command.

**`example`** 
     program
       .command('help')
       .description('display verbose help')
       .action(function() {
          // output help here
       });

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* \| *Promise*<void\> |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:141

___

### addCommand

▸ **addCommand**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `opts?`: [*CommandOptions*](#interfacesbincommandercommandoptionsmd)): [*Command*](#interfacesbincommandercommandmd)

Add a prepared subcommand.

See .command() for creating an attached subcommand which inherits settings from its parent.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`opts?` | [*CommandOptions*](#interfacesbincommandercommandoptionsmd) |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:103

___

### addHelpCommand

▸ **addHelpCommand**(`enableOrNameAndArgs?`: *string* \| *boolean*, `description?`: *string*): [*Command*](#interfacesbincommandercommandmd)

Override default decision whether to add implicit help command.

   addHelpCommand() // force on
   addHelpCommand(false); // force off
   addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom details

#### Parameters:

Name | Type |
:------ | :------ |
`enableOrNameAndArgs?` | *string* \| *boolean* |
`description?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:121

___

### alias

▸ **alias**(`alias`: *string*): [*Command*](#interfacesbincommandercommandmd)

Set an alias for the command.

You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.

#### Parameters:

Name | Type |
:------ | :------ |
`alias` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:305

▸ **alias**(): *string*

Get alias for the command.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:309

___

### aliases

▸ **aliases**(`aliases`: *string*[]): [*Command*](#interfacesbincommandercommandmd)

Set aliases for the command.

Only the first alias is shown in the auto-generated help.

#### Parameters:

Name | Type |
:------ | :------ |
`aliases` | *string*[] |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:318

▸ **aliases**(): *string*[]

Get aliases for the command.

**Returns:** *string*[]

Defined in: node_modules/commander/typings/index.d.ts:322

___

### allowUnknownOption

▸ **allowUnknownOption**(`arg?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Allow unknown options on the command line.

#### Parameters:

Name | Type |
:------ | :------ |
`arg?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:233

___

### arguments

▸ **arguments**(`desc`: *string*): [*Command*](#interfacesbincommandercommandmd)

Define argument syntax for command.

#### Parameters:

Name | Type |
:------ | :------ |
`desc` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:110

___

### combineFlagAndOptionalValue

▸ **combineFlagAndOptionalValue**(`arg?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Alter parsing of short flags with optional values.

**`example`** 
   // for `.option('-f,--flag [value]'):
  .combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
  .combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`

#### Parameters:

Name | Type |
:------ | :------ |
`arg?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:225

___

### command

▸ **command**(`nameAndArgs`: *string*, `opts?`: [*CommandOptions*](#interfacesbincommandercommandoptionsmd)): [*Command*](#interfacesbincommandercommandmd)

Define a command, implemented using an action handler.

**`remarks`** 
The command description is supplied using `.description`, not as a parameter to `.command`.

**`example`** 
```ts
 program
   .command('clone <source> [destination]')
   .description('clone a repository into a newly created directory')
   .action((source, destination) => {
     console.log('clone command called');
   });
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nameAndArgs` | *string* | command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`   |
`opts?` | [*CommandOptions*](#interfacesbincommandercommandoptionsmd) | configuration options   |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

new command

Defined in: node_modules/commander/typings/index.d.ts:67

▸ **command**(`nameAndArgs`: *string*, `description`: *string*, `opts?`: [*ExecutableCommandOptions*](#interfacesbincommanderexecutablecommandoptionsmd)): [*Command*](#interfacesbincommandercommandmd)

Define a command, implemented in a separate executable file.

**`remarks`** 
The command description is supplied as the second parameter to `.command`.

**`example`** 
```ts
 program
   .command('start <service>', 'start named service')
   .command('stop [service]', 'stop named service, or all if no name supplied');
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nameAndArgs` | *string* | command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`   |
`description` | *string* | description of executable command   |
`opts?` | [*ExecutableCommandOptions*](#interfacesbincommanderexecutablecommandoptionsmd) | configuration options   |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:86

___

### createCommand

▸ **createCommand**(`name?`: *string*): [*Command*](#interfacesbincommandercommandmd)

Factory routine to create a new unattached command.

See .command() for creating an attached subcommand, which uses this routine to
create the command. You can override createCommand to customise subcommands.

#### Parameters:

Name | Type |
:------ | :------ |
`name?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:94

___

### description

▸ **description**(`str`: *string*, `argsDescription?`: { [argName: string]: *string*;  }): [*Command*](#interfacesbincommandercommandmd)

Set the description.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`argsDescription?` | *object* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:292

▸ **description**(): *string*

Get the description.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:296

___

### exitOverride

▸ **exitOverride**(`callback?`: (`err`: [*CommanderError*](#interfacesbincommandercommandererrormd)) => *void*): [*Command*](#interfacesbincommandercommandmd)

Register callback to use as replacement for calling process.exit.

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`err`: [*CommanderError*](#interfacesbincommandercommandererrormd)) => *void* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:126

___

### help

▸ **help**(`cb?`: (`str`: *string*) => *string*): *never*

Output help information and exit.

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *never*

Defined in: node_modules/commander/typings/index.d.ts:369

___

### helpInformation

▸ **helpInformation**(): *string*

Return command help documentation.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:357

___

### helpOption

▸ **helpOption**(`flags?`: *string* \| *boolean*, `description?`: *string*): [*Command*](#interfacesbincommandercommandmd)

You can pass in flags and a description to override the help
flags and help description for your command. Pass in false
to disable the built-in help option.

#### Parameters:

Name | Type |
:------ | :------ |
`flags?` | *string* \| *boolean* |
`description?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:364

___

### name

▸ **name**(`str`: *string*): [*Command*](#interfacesbincommandercommandmd)

Set the name of the command.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:340

▸ **name**(): *string*

Get the name of the command.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:344

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Command*](#interfacesbincommandercommandmd)

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

**`example`** 
    program
      .on('--help', () -> {
        console.log('See web site for more information.');
    });

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:380

___

### option

▸ **option**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

Define option with `flags`, `description` and optional
coercion `fn`.

The `flags` string should contain both the short and long flags,
separated by comma, a pipe or space. The following are all valid
all will output this way when `--help` is used.

   "-p, --pepper"
   "-p|--pepper"
   "-p --pepper"

**`example`** 
    // simple boolean defaulting to false
    program.option('-p, --pepper', 'add pepper');

    --pepper
    program.pepper
    // => Boolean

    // simple boolean defaulting to true
    program.option('-C, --no-cheese', 'remove cheese');

    program.cheese
    // => true

    --no-cheese
    program.cheese
    // => false

    // required argument
    program.option('-C, --chdir <path>', 'change the working directory');

    --chdir /tmp
    program.chdir
    // => "/tmp"

    // optional argument
    program.option('-c, --cheese [type]', 'add cheese [marble]');

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:185

▸ **option**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:186

▸ **option**<T\>(`flags`: *string*, `description`: *string*, `fn`: (`value`: *string*, `previous`: T) => T, `defaultValue?`: T): [*Command*](#interfacesbincommandercommandmd)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`fn` | (`value`: *string*, `previous`: T) => T |
`defaultValue?` | T |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:187

___

### opts

▸ **opts**(): *object*

Return an object containing options as key-value pairs

**Returns:** *object*

Defined in: node_modules/commander/typings/index.d.ts:285

___

### outputHelp

▸ **outputHelp**(`cb?`: (`str`: *string*) => *string*): *void*

Output help information for this command.

When listener(s) are available for the helpLongFlag
those callbacks are invoked.

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *void*

Defined in: node_modules/commander/typings/index.d.ts:352

___

### parse

▸ **parse**(`argv?`: *string*[], `options?`: [*ParseOptions*](#interfacesbincommanderparseoptionsmd)): [*Command*](#interfacesbincommandercommandmd)

Parse `argv`, setting options and invoking commands when defined.

The default expectation is that the arguments are from node and have the application as argv[0]
and the script being run in argv[1], with user parameters after that.

Examples:

     program.parse(process.argv);
     program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
     program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]

#### Parameters:

Name | Type |
:------ | :------ |
`argv?` | *string*[] |
`options?` | [*ParseOptions*](#interfacesbincommanderparseoptionsmd) |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:249

___

### parseAsync

▸ **parseAsync**(`argv?`: *string*[], `options?`: [*ParseOptions*](#interfacesbincommanderparseoptionsmd)): *Promise*<[*Command*](#interfacesbincommandercommandmd)\>

Parse `argv`, setting options and invoking commands when defined.

Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.

The default expectation is that the arguments are from node and have the application as argv[0]
and the script being run in argv[1], with user parameters after that.

Examples:

     program.parseAsync(process.argv);
     program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
     program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]

#### Parameters:

Name | Type |
:------ | :------ |
`argv?` | *string*[] |
`options?` | [*ParseOptions*](#interfacesbincommanderparseoptionsmd) |

**Returns:** *Promise*<[*Command*](#interfacesbincommandercommandmd)\>

Promise

Defined in: node_modules/commander/typings/index.d.ts:267

___

### parseOptions

▸ **parseOptions**(`argv`: *string*[]): [*ParseOptionsResult*](#interfacesbincommanderparseoptionsresultmd)

Parse options from `argv` removing known options,
and return argv split into operands and unknown arguments.

**`example`** 
   argv => operands, unknown
   --known kkk op => [op], []
   op --known kkk => [op], []
   sub --unknown uuu op => [sub], [--unknown uuu op]
   sub -- --unknown uuu op => [sub --unknown uuu op], []

#### Parameters:

Name | Type |
:------ | :------ |
`argv` | *string*[] |

**Returns:** [*ParseOptionsResult*](#interfacesbincommanderparseoptionsresultmd)

Defined in: node_modules/commander/typings/index.d.ts:280

___

### passCommandToAction

▸ **passCommandToAction**(`value?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Whether to pass command to action handler,
or just the options (specify false).

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:213

___

### requiredOption

▸ **requiredOption**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string should contain both the short and long flags, separated by comma, a pipe or space.

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:195

▸ **requiredOption**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:196

▸ **requiredOption**<T\>(`flags`: *string*, `description`: *string*, `fn`: (`value`: *string*, `previous`: T) => T, `defaultValue?`: T): [*Command*](#interfacesbincommandercommandmd)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`fn` | (`value`: *string*, `previous`: T) => T |
`defaultValue?` | T |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:197

___

### storeOptionsAsProperties

▸ **storeOptionsAsProperties**(`value?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:205

___

### usage

▸ **usage**(`str`: *string*): [*Command*](#interfacesbincommandercommandmd)

Set the command usage.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:329

▸ **usage**(): *string*

Get the command usage.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:333

___

### version

▸ **version**(`str`: *string*, `flags?`: *string*, `description?`: *string*): [*Command*](#interfacesbincommandercommandmd)

Set the program version to `str`.

This method auto-registers the "-V, --version" flag
which will print the version number when passed.

You can optionally supply the  flags and description to override the defaults.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`flags?` | *string* |
`description?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:45


<a name="interfacesbincommandercommandererrormd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / CommanderError

# Interface: CommanderError

[bin](#modulesbinmd).[commander](#modulesbincommandermd).CommanderError

## Hierarchy

* *Error*

  ↳ **CommanderError**

## Table of contents

### Properties

- [code](#code)
- [exitCode](#exitcode)
- [message](#message)
- [name](#name)
- [nestedError](#nestederror)
- [stack](#stack)

## Properties

### code

• **code**: *string*

Defined in: node_modules/commander/typings/index.d.ts:7

___

### exitCode

• **exitCode**: *number*

Defined in: node_modules/commander/typings/index.d.ts:8

___

### message

• **message**: *string*

Overrides: void

Defined in: node_modules/commander/typings/index.d.ts:9

___

### name

• **name**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### nestedError

• `Optional` **nestedError**: *string*

Defined in: node_modules/commander/typings/index.d.ts:10

___

### stack

• `Optional` **stack**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975


<a name="interfacesbincommandercommanderstaticmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / CommanderStatic

# Interface: CommanderStatic

[bin](#modulesbinmd).[commander](#modulesbincommandermd).CommanderStatic

## Hierarchy

* [*Command*](#interfacesbincommandercommandmd)

  ↳ **CommanderStatic**

## Table of contents

### Properties

- [Command](#command)
- [CommanderError](#commandererror)
- [Option](#option)
- [args](#args)
- [commands](#commands)
- [program](#program)

### Methods

- [action](#action)
- [addCommand](#addcommand)
- [addHelpCommand](#addhelpcommand)
- [alias](#alias)
- [aliases](#aliases)
- [allowUnknownOption](#allowunknownoption)
- [arguments](#arguments)
- [combineFlagAndOptionalValue](#combineflagandoptionalvalue)
- [command](#command)
- [createCommand](#createcommand)
- [description](#description)
- [exitOverride](#exitoverride)
- [help](#help)
- [helpInformation](#helpinformation)
- [helpOption](#helpoption)
- [name](#name)
- [on](#on)
- [option](#option)
- [opts](#opts)
- [outputHelp](#outputhelp)
- [parse](#parse)
- [parseAsync](#parseasync)
- [parseOptions](#parseoptions)
- [passCommandToAction](#passcommandtoaction)
- [requiredOption](#requiredoption)
- [storeOptionsAsProperties](#storeoptionsasproperties)
- [usage](#usage)
- [version](#version)

## Properties

### Command

• **Command**: [*CommandConstructor*](#commandconstructor)

Defined in: node_modules/commander/typings/index.d.ts:400

___

### CommanderError

• **CommanderError**: [*CommanderErrorConstructor*](#commandererrorconstructor)

Defined in: node_modules/commander/typings/index.d.ts:402

___

### Option

• **Option**: [*OptionConstructor*](#optionconstructor)

Defined in: node_modules/commander/typings/index.d.ts:401

___

### args

• **args**: *string*[]

Inherited from: [Command](#interfacesbincommandercommandmd).[args](#args)

Defined in: node_modules/commander/typings/index.d.ts:33

___

### commands

• **commands**: [*Command*](#interfacesbincommandercommandmd)[]

Inherited from: [Command](#interfacesbincommandercommandmd).[commands](#commands)

Defined in: node_modules/commander/typings/index.d.ts:35

___

### program

• **program**: [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:399

## Methods

### action

▸ **action**(`fn`: (...`args`: *any*[]) => *void* \| *Promise*<void\>): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Register callback `fn` for the command.

**`example`** 
     program
       .command('help')
       .description('display verbose help')
       .action(function() {
          // output help here
       });

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* \| *Promise*<void\> |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:141

___

### addCommand

▸ **addCommand**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `opts?`: [*CommandOptions*](#interfacesbincommandercommandoptionsmd)): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Add a prepared subcommand.

See .command() for creating an attached subcommand which inherits settings from its parent.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`opts?` | [*CommandOptions*](#interfacesbincommandercommandoptionsmd) |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:103

___

### addHelpCommand

▸ **addHelpCommand**(`enableOrNameAndArgs?`: *string* \| *boolean*, `description?`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Override default decision whether to add implicit help command.

   addHelpCommand() // force on
   addHelpCommand(false); // force off
   addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom details

#### Parameters:

Name | Type |
:------ | :------ |
`enableOrNameAndArgs?` | *string* \| *boolean* |
`description?` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:121

___

### alias

▸ **alias**(`alias`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Set an alias for the command.

You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.

#### Parameters:

Name | Type |
:------ | :------ |
`alias` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:305

▸ **alias**(): *string*

Get alias for the command.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:309

___

### aliases

▸ **aliases**(`aliases`: *string*[]): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Set aliases for the command.

Only the first alias is shown in the auto-generated help.

#### Parameters:

Name | Type |
:------ | :------ |
`aliases` | *string*[] |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:318

▸ **aliases**(): *string*[]

Get aliases for the command.

**Returns:** *string*[]

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:322

___

### allowUnknownOption

▸ **allowUnknownOption**(`arg?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Allow unknown options on the command line.

#### Parameters:

Name | Type |
:------ | :------ |
`arg?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:233

___

### arguments

▸ **arguments**(`desc`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Define argument syntax for command.

#### Parameters:

Name | Type |
:------ | :------ |
`desc` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:110

___

### combineFlagAndOptionalValue

▸ **combineFlagAndOptionalValue**(`arg?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Alter parsing of short flags with optional values.

**`example`** 
   // for `.option('-f,--flag [value]'):
  .combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
  .combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`

#### Parameters:

Name | Type |
:------ | :------ |
`arg?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:225

___

### command

▸ **command**(`nameAndArgs`: *string*, `opts?`: [*CommandOptions*](#interfacesbincommandercommandoptionsmd)): [*Command*](#interfacesbincommandercommandmd)

Define a command, implemented using an action handler.

**`remarks`** 
The command description is supplied using `.description`, not as a parameter to `.command`.

**`example`** 
```ts
 program
   .command('clone <source> [destination]')
   .description('clone a repository into a newly created directory')
   .action((source, destination) => {
     console.log('clone command called');
   });
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nameAndArgs` | *string* | command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`   |
`opts?` | [*CommandOptions*](#interfacesbincommandercommandoptionsmd) | configuration options   |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

new command

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:67

▸ **command**(`nameAndArgs`: *string*, `description`: *string*, `opts?`: [*ExecutableCommandOptions*](#interfacesbincommanderexecutablecommandoptionsmd)): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Define a command, implemented in a separate executable file.

**`remarks`** 
The command description is supplied as the second parameter to `.command`.

**`example`** 
```ts
 program
   .command('start <service>', 'start named service')
   .command('stop [service]', 'stop named service, or all if no name supplied');
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`nameAndArgs` | *string* | command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`   |
`description` | *string* | description of executable command   |
`opts?` | [*ExecutableCommandOptions*](#interfacesbincommanderexecutablecommandoptionsmd) | configuration options   |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:86

___

### createCommand

▸ **createCommand**(`name?`: *string*): [*Command*](#interfacesbincommandercommandmd)

Factory routine to create a new unattached command.

See .command() for creating an attached subcommand, which uses this routine to
create the command. You can override createCommand to customise subcommands.

#### Parameters:

Name | Type |
:------ | :------ |
`name?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:94

___

### description

▸ **description**(`str`: *string*, `argsDescription?`: { [argName: string]: *string*;  }): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Set the description.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`argsDescription?` | *object* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:292

▸ **description**(): *string*

Get the description.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:296

___

### exitOverride

▸ **exitOverride**(`callback?`: (`err`: [*CommanderError*](#interfacesbincommandercommandererrormd)) => *void*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Register callback to use as replacement for calling process.exit.

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`err`: [*CommanderError*](#interfacesbincommandercommandererrormd)) => *void* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:126

___

### help

▸ **help**(`cb?`: (`str`: *string*) => *string*): *never*

Output help information and exit.

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *never*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:369

___

### helpInformation

▸ **helpInformation**(): *string*

Return command help documentation.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:357

___

### helpOption

▸ **helpOption**(`flags?`: *string* \| *boolean*, `description?`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

You can pass in flags and a description to override the help
flags and help description for your command. Pass in false
to disable the built-in help option.

#### Parameters:

Name | Type |
:------ | :------ |
`flags?` | *string* \| *boolean* |
`description?` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:364

___

### name

▸ **name**(`str`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Set the name of the command.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:340

▸ **name**(): *string*

Get the name of the command.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:344

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

**`example`** 
    program
      .on('--help', () -> {
        console.log('See web site for more information.');
    });

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:380

___

### option

▸ **option**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Define option with `flags`, `description` and optional
coercion `fn`.

The `flags` string should contain both the short and long flags,
separated by comma, a pipe or space. The following are all valid
all will output this way when `--help` is used.

   "-p, --pepper"
   "-p|--pepper"
   "-p --pepper"

**`example`** 
    // simple boolean defaulting to false
    program.option('-p, --pepper', 'add pepper');

    --pepper
    program.pepper
    // => Boolean

    // simple boolean defaulting to true
    program.option('-C, --no-cheese', 'remove cheese');

    program.cheese
    // => true

    --no-cheese
    program.cheese
    // => false

    // required argument
    program.option('-C, --chdir <path>', 'change the working directory');

    --chdir /tmp
    program.chdir
    // => "/tmp"

    // optional argument
    program.option('-c, --cheese [type]', 'add cheese [marble]');

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:185

▸ **option**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:186

▸ **option**<T\>(`flags`: *string*, `description`: *string*, `fn`: (`value`: *string*, `previous`: T) => T, `defaultValue?`: T): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`fn` | (`value`: *string*, `previous`: T) => T |
`defaultValue?` | T |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:187

___

### opts

▸ **opts**(): *object*

Return an object containing options as key-value pairs

**Returns:** *object*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:285

___

### outputHelp

▸ **outputHelp**(`cb?`: (`str`: *string*) => *string*): *void*

Output help information for this command.

When listener(s) are available for the helpLongFlag
those callbacks are invoked.

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *void*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:352

___

### parse

▸ **parse**(`argv?`: *string*[], `options?`: [*ParseOptions*](#interfacesbincommanderparseoptionsmd)): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Parse `argv`, setting options and invoking commands when defined.

The default expectation is that the arguments are from node and have the application as argv[0]
and the script being run in argv[1], with user parameters after that.

Examples:

     program.parse(process.argv);
     program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
     program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]

#### Parameters:

Name | Type |
:------ | :------ |
`argv?` | *string*[] |
`options?` | [*ParseOptions*](#interfacesbincommanderparseoptionsmd) |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:249

___

### parseAsync

▸ **parseAsync**(`argv?`: *string*[], `options?`: [*ParseOptions*](#interfacesbincommanderparseoptionsmd)): *Promise*<[*CommanderStatic*](#interfacesbincommandercommanderstaticmd)\>

Parse `argv`, setting options and invoking commands when defined.

Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.

The default expectation is that the arguments are from node and have the application as argv[0]
and the script being run in argv[1], with user parameters after that.

Examples:

     program.parseAsync(process.argv);
     program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
     program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]

#### Parameters:

Name | Type |
:------ | :------ |
`argv?` | *string*[] |
`options?` | [*ParseOptions*](#interfacesbincommanderparseoptionsmd) |

**Returns:** *Promise*<[*CommanderStatic*](#interfacesbincommandercommanderstaticmd)\>

Promise

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:267

___

### parseOptions

▸ **parseOptions**(`argv`: *string*[]): [*ParseOptionsResult*](#interfacesbincommanderparseoptionsresultmd)

Parse options from `argv` removing known options,
and return argv split into operands and unknown arguments.

**`example`** 
   argv => operands, unknown
   --known kkk op => [op], []
   op --known kkk => [op], []
   sub --unknown uuu op => [sub], [--unknown uuu op]
   sub -- --unknown uuu op => [sub --unknown uuu op], []

#### Parameters:

Name | Type |
:------ | :------ |
`argv` | *string*[] |

**Returns:** [*ParseOptionsResult*](#interfacesbincommanderparseoptionsresultmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:280

___

### passCommandToAction

▸ **passCommandToAction**(`value?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Whether to pass command to action handler,
or just the options (specify false).

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:213

___

### requiredOption

▸ **requiredOption**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string should contain both the short and long flags, separated by comma, a pipe or space.

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:195

▸ **requiredOption**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:196

▸ **requiredOption**<T\>(`flags`: *string*, `description`: *string*, `fn`: (`value`: *string*, `previous`: T) => T, `defaultValue?`: T): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`fn` | (`value`: *string*, `previous`: T) => T |
`defaultValue?` | T |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:197

___

### storeOptionsAsProperties

▸ **storeOptionsAsProperties**(`value?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

#### Parameters:

Name | Type |
:------ | :------ |
`value?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:205

___

### usage

▸ **usage**(`str`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Set the command usage.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:329

▸ **usage**(): *string*

Get the command usage.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:333

___

### version

▸ **version**(`str`: *string*, `flags?`: *string*, `description?`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Set the program version to `str`.

This method auto-registers the "-V, --version" flag
which will print the version number when passed.

You can optionally supply the  flags and description to override the defaults.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`flags?` | *string* |
`description?` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:45


<a name="interfacesbincommandercommandoptionsmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / CommandOptions

# Interface: CommandOptions

[bin](#modulesbinmd).[commander](#modulesbincommandermd).CommandOptions

## Hierarchy

* **CommandOptions**

  ↳ [*ExecutableCommandOptions*](#interfacesbincommanderexecutablecommandoptionsmd)

## Table of contents

### Properties

- [hidden](#hidden)
- [isDefault](#isdefault)
- [noHelp](#nohelp)

## Properties

### hidden

• `Optional` **hidden**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:386

___

### isDefault

• `Optional` **isDefault**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:387

___

### noHelp

• `Optional` **noHelp**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:385


<a name="interfacesbincommanderexecutablecommandoptionsmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / ExecutableCommandOptions

# Interface: ExecutableCommandOptions

[bin](#modulesbinmd).[commander](#modulesbincommandermd).ExecutableCommandOptions

## Hierarchy

* [*CommandOptions*](#interfacesbincommandercommandoptionsmd)

  ↳ **ExecutableCommandOptions**

## Table of contents

### Properties

- [executableFile](#executablefile)
- [hidden](#hidden)
- [isDefault](#isdefault)
- [noHelp](#nohelp)

## Properties

### executableFile

• `Optional` **executableFile**: *string*

Defined in: node_modules/commander/typings/index.d.ts:390

___

### hidden

• `Optional` **hidden**: *boolean*

Inherited from: [CommandOptions](#interfacesbincommandercommandoptionsmd).[hidden](#hidden)

Defined in: node_modules/commander/typings/index.d.ts:386

___

### isDefault

• `Optional` **isDefault**: *boolean*

Inherited from: [CommandOptions](#interfacesbincommandercommandoptionsmd).[isDefault](#isdefault)

Defined in: node_modules/commander/typings/index.d.ts:387

___

### noHelp

• `Optional` **noHelp**: *boolean*

Inherited from: [CommandOptions](#interfacesbincommandercommandoptionsmd).[noHelp](#nohelp)

Defined in: node_modules/commander/typings/index.d.ts:385


<a name="interfacesbincommanderoptionmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / Option

# Interface: Option

[bin](#modulesbinmd).[commander](#modulesbincommandermd).Option

## Table of contents

### Properties

- [bool](#bool)
- [description](#description)
- [flags](#flags)
- [long](#long)
- [mandatory](#mandatory)
- [optional](#optional)
- [required](#required)
- [short](#short)

## Properties

### bool

• **bool**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:19

___

### description

• **description**: *string*

Defined in: node_modules/commander/typings/index.d.ts:22

___

### flags

• **flags**: *string*

Defined in: node_modules/commander/typings/index.d.ts:15

___

### long

• **long**: *string*

Defined in: node_modules/commander/typings/index.d.ts:21

___

### mandatory

• **mandatory**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:18

___

### optional

• **optional**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:17

___

### required

• **required**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:16

___

### short

• `Optional` **short**: *string*

Defined in: node_modules/commander/typings/index.d.ts:20


<a name="interfacesbincommanderparseoptionsmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / ParseOptions

# Interface: ParseOptions

[bin](#modulesbinmd).[commander](#modulesbincommandermd).ParseOptions

## Table of contents

### Properties

- [from](#from)

## Properties

### from

• **from**: *node* \| *electron* \| *user*

Defined in: node_modules/commander/typings/index.d.ts:27


<a name="interfacesbincommanderparseoptionsresultmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / ParseOptionsResult

# Interface: ParseOptionsResult

[bin](#modulesbinmd).[commander](#modulesbincommandermd).ParseOptionsResult

## Table of contents

### Properties

- [operands](#operands)
- [unknown](#unknown)

## Properties

### operands

• **operands**: *string*[]

Defined in: node_modules/commander/typings/index.d.ts:394

___

### unknown

• **unknown**: *string*[]

Defined in: node_modules/commander/typings/index.d.ts:395


<a name="interfacesindexintervalschedulemd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [index](#modulesindexmd) / IntervalSchedule

# Interface: IntervalSchedule

[index](#modulesindexmd).IntervalSchedule

## Table of contents

### Properties

- [dayInterval](#dayinterval)
- [daysOfMonth](#daysofmonth)
- [daysOfWeek](#daysofweek)
- [daysOfYear](#daysofyear)
- [endingOn](#endingon)
- [hours](#hours)
- [minutes](#minutes)
- [monthsOfYear](#monthsofyear)
- [orderInMonth](#orderinmonth)
- [seconds](#seconds)
- [startingOn](#startingon)
- [timezone](#timezone)
- [weekInterval](#weekinterval)

## Properties

### dayInterval

• `Optional` **dayInterval**: *number*

Defined in: [src/index.ts:195](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L195)

___

### daysOfMonth

• `Optional` **daysOfMonth**: *number*[]

Defined in: [src/index.ts:190](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L190)

___

### daysOfWeek

• `Optional` **daysOfWeek**: *number*[]

Defined in: [src/index.ts:191](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L191)

___

### daysOfYear

• `Optional` **daysOfYear**: *number*[]

Defined in: [src/index.ts:192](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L192)

___

### endingOn

• `Optional` **endingOn**: Date

Defined in: [src/index.ts:185](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L185)

___

### hours

• **hours**: *number*[]

Defined in: [src/index.ts:186](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L186)

___

### minutes

• `Optional` **minutes**: *number*[]

Defined in: [src/index.ts:187](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L187)

___

### monthsOfYear

• `Optional` **monthsOfYear**: *number*[]

Defined in: [src/index.ts:189](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L189)

___

### orderInMonth

• `Optional` **orderInMonth**: *number*[]

Defined in: [src/index.ts:194](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L194)

___

### seconds

• `Optional` **seconds**: *number*[]

Defined in: [src/index.ts:188](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L188)

___

### startingOn

• `Optional` **startingOn**: Date

Defined in: [src/index.ts:184](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L184)

___

### timezone

• **timezone**: *string*

Defined in: [src/index.ts:183](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L183)

___

### weekInterval

• `Optional` **weekInterval**: *number*

Defined in: [src/index.ts:193](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L193)


<a name="modules__tests___intervalmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / __tests__/interval

# Module: \_\_tests\_\_/interval


<a name="modulesbincommandermd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / commander

# Namespace: commander

[bin](#modulesbinmd).commander

## Table of contents

### Interfaces

- [Command](#interfacesbincommandercommandmd)
- [CommandOptions](#interfacesbincommandercommandoptionsmd)
- [CommanderError](#interfacesbincommandercommandererrormd)
- [CommanderStatic](#interfacesbincommandercommanderstaticmd)
- [ExecutableCommandOptions](#interfacesbincommanderexecutablecommandoptionsmd)
- [Option](#interfacesbincommanderoptionmd)
- [ParseOptions](#interfacesbincommanderparseoptionsmd)
- [ParseOptionsResult](#interfacesbincommanderparseoptionsresultmd)

### Type aliases

- [CommandConstructor](#commandconstructor)
- [CommanderErrorConstructor](#commandererrorconstructor)
- [OptionConstructor](#optionconstructor)

## Type aliases

### CommandConstructor

Ƭ **CommandConstructor**: (`name?`: *string*) => [*Command*](#interfacesbincommandercommandmd)

#### Type declaration:

\+ (`name?`: *string*): [*Command*](#interfacesbincommandercommandmd)

#### Parameters:

Name | Type |
:------ | :------ |
`name?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:382

___

### CommanderErrorConstructor

Ƭ **CommanderErrorConstructor**: (`exitCode`: *number*, `code`: *string*, `message`: *string*) => [*CommanderError*](#interfacesbincommandercommandererrormd)

#### Type declaration:

\+ (`exitCode`: *number*, `code`: *string*, `message`: *string*): [*CommanderError*](#interfacesbincommandercommandererrormd)

#### Parameters:

Name | Type |
:------ | :------ |
`exitCode` | *number* |
`code` | *string* |
`message` | *string* |

**Returns:** [*CommanderError*](#interfacesbincommandercommandererrormd)

Defined in: node_modules/commander/typings/index.d.ts:12

___

### OptionConstructor

Ƭ **OptionConstructor**: (`flags`: *string*, `description?`: *string*) => [*Option*](#interfacesbincommanderoptionmd)

#### Type declaration:

\+ (`flags`: *string*, `description?`: *string*): [*Option*](#interfacesbincommanderoptionmd)

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:24


<a name="modulesbinmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / bin

# Module: bin

## Table of contents

### Namespaces

- [commander](#modulesbincommandermd)

### Variables

- [commander](#commander)

## Variables

### commander

• **commander**: [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Defined in: node_modules/commander/typings/index.d.ts:409


<a name="modulesindexmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / index

# Module: index

## Table of contents

### Interfaces

- [IntervalSchedule](#interfacesindexintervalschedulemd)

### Functions

- [getNextDate](#getnextdate)
- [isValidTimeZone](#isvalidtimezone)
- [validateSchedule](#validateschedule)

## Functions

### getNextDate

▸ **getNextDate**(`schedule`: [*IntervalSchedule*](#interfacesindexintervalschedulemd), `startingOn?`: Date, `nowDate?`: Date): Date

#### Parameters:

Name | Type |
:------ | :------ |
`schedule` | [*IntervalSchedule*](#interfacesindexintervalschedulemd) |
`startingOn` | Date |
`nowDate` | Date |

**Returns:** Date

Defined in: [src/index.ts:2](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L2)

___

### isValidTimeZone

▸ **isValidTimeZone**(`tz`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`tz` | *string* |

**Returns:** *boolean*

Defined in: [src/index.ts:291](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L291)

___

### validateSchedule

▸ **validateSchedule**(`__namedParameters`: [*IntervalSchedule*](#interfacesindexintervalschedulemd)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*IntervalSchedule*](#interfacesindexintervalschedulemd) |

**Returns:** *void*

Defined in: [src/index.ts:197](https://github.com/rhdeck/interval-manager/blob/3b9aeec/src/index.ts#L197)
