
<a name="readmemd"></a>

Template for making easy-to-work-with tempates

# ts-template

## Usage

1. [Copy this template](https://github.com/rhdeck/ts-template/)
2. Clone to a local directory (eg `git clone https://github.com/me/my-repository/ && cd my-repository`)
3. Run `yarn && yarn setup` to initialize the node package (Get rid of template strings - and this readme!)
4. Happy Coding!

## Useful Scripts

1. `yarn build` will build using typescript pre-configured to node-compatible defaults
2. `yarn docs` will auto-generate a README.md that starts with TOP.md, then adds CLI documentation (via [commanderdoc](https://npmjs.com/package/commanderdoc)) for any tool you have set up, and then library documentation after that.
3. `yarn test` is pre-configured to test for typescript errors
4. `yarn watch` will watch the codebase for changes and rebuild (using [livelink](https://npmjs.com/package/@raydeck/livelink))

## Git code protections

1. `git commit` will be blocked on the `main` branch unless you set the environment variable `ALLOWMAIN=1` Branch commits and PRs are thus encouraged
2. `git commit` also tests messages for meeting the commitline standard conventions.
3. `git commit` blocks pushes that do not pass `yarn test` (as a base case, they must pass typescript compilation)
4. `npm publish` will always rebuild the code, the documentation, and push those changes back to the repository.
5. `npm publish` will only publish the lib and src directories - any others are no

## A note on "main"

I made a deliberate choice to change the primary branch from `master` to `main` for reasons that are obvious to some. This repository endeavors to make that just automatic.

PRs and feedback welcome via GitHub issues.


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
* --reference-date \<`isoDate`> ISO-8601 representation of the reference (default: `2021-03-29T10:25:34.816Z`)
* --starting-date \<`isoDate`> ISO-8601 representation of the date the interval had started (default: `2021-03-29T10:25:34.816Z`)
* --ending-date \<`isoDate`> ISO-8601 representation of the date the interval had ended (default: `2021-03-29T10:25:34.816Z`)
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


<a name="interfacesbincommanderaddhelptextcontextmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / AddHelpTextContext

# Interface: AddHelpTextContext

[bin](#modulesbinmd).[commander](#modulesbincommandermd).AddHelpTextContext

## Table of contents

### Properties

- [command](#command)
- [error](#error)

## Properties

### command

• **command**: [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:146

___

### error

• **error**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:145


<a name="interfacesbincommandercommandmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / Command

# Interface: Command

[bin](#modulesbinmd).[commander](#modulesbincommandermd).Command

## Hierarchy

* **Command**

  ↳ [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

## Table of contents

### Properties

- [args](#args)
- [commands](#commands)
- [parent](#parent)

### Methods

- [action](#action)
- [addCommand](#addcommand)
- [addHelpCommand](#addhelpcommand)
- [addHelpText](#addhelptext)
- [addOption](#addoption)
- [alias](#alias)
- [aliases](#aliases)
- [allowExcessArguments](#allowexcessarguments)
- [allowUnknownOption](#allowunknownoption)
- [arguments](#arguments)
- [combineFlagAndOptionalValue](#combineflagandoptionalvalue)
- [command](#command)
- [configureHelp](#configurehelp)
- [configureOutput](#configureoutput)
- [createCommand](#createcommand)
- [createHelp](#createhelp)
- [createOption](#createoption)
- [description](#description)
- [enablePositionalOptions](#enablepositionaloptions)
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
- [passThroughOptions](#passthroughoptions)
- [requiredOption](#requiredoption)
- [storeOptionsAsProperties](#storeoptionsasproperties)
- [usage](#usage)
- [version](#version)

## Properties

### args

• **args**: *string*[]

Defined in: node_modules/commander/typings/index.d.ts:164

___

### commands

• **commands**: [*Command*](#interfacesbincommandercommandmd)[]

Defined in: node_modules/commander/typings/index.d.ts:165

___

### parent

• **parent**: *null* \| [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:166

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

Defined in: node_modules/commander/typings/index.d.ts:305

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

Defined in: node_modules/commander/typings/index.d.ts:234

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

Defined in: node_modules/commander/typings/index.d.ts:252

___

### addHelpText

▸ **addHelpText**(`position`: [*AddHelpTextPosition*](#addhelptextposition), `text`: *string*): [*Command*](#interfacesbincommandercommandmd)

Add additional text to be displayed with the built-in help.

Position is 'before' or 'after' to affect just this command,
and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*AddHelpTextPosition*](#addhelptextposition) |
`text` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:586

▸ **addHelpText**(`position`: [*AddHelpTextPosition*](#addhelptextposition), `text`: (`context`: [*AddHelpTextContext*](#interfacesbincommanderaddhelptextcontextmd)) => *undefined* \| *string*): [*Command*](#interfacesbincommandercommandmd)

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*AddHelpTextPosition*](#addhelptextposition) |
`text` | (`context`: [*AddHelpTextContext*](#interfacesbincommanderaddhelptextcontextmd)) => *undefined* \| *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:587

___

### addOption

▸ **addOption**(`option`: [*Option*](#interfacesbincommanderoptionmd)): [*Command*](#interfacesbincommandercommandmd)

Add a prepared Option.

See .option() and .requiredOption() for creating and attaching an option in a single call.

#### Parameters:

Name | Type |
:------ | :------ |
`option` | [*Option*](#interfacesbincommanderoptionmd) |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:379

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

Defined in: node_modules/commander/typings/index.d.ts:508

▸ **alias**(): *string*

Get alias for the command.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:512

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

Defined in: node_modules/commander/typings/index.d.ts:521

▸ **aliases**(): *string*[]

Get aliases for the command.

**Returns:** *string*[]

Defined in: node_modules/commander/typings/index.d.ts:525

___

### allowExcessArguments

▸ **allowExcessArguments**(`allowExcess?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Allow excess command-arguments on the command line. Pass false to make excess arguments an error.

#### Parameters:

Name | Type |
:------ | :------ |
`allowExcess?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:415

___

### allowUnknownOption

▸ **allowUnknownOption**(`allowUnknown?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Allow unknown options on the command line.

#### Parameters:

Name | Type |
:------ | :------ |
`allowUnknown?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:408

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

Defined in: node_modules/commander/typings/index.d.ts:241

___

### combineFlagAndOptionalValue

▸ **combineFlagAndOptionalValue**(`combine?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Alter parsing of short flags with optional values.

**`example`** 
   // for `.option('-f,--flag [value]'):
  .combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
  .combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`

#### Parameters:

Name | Type |
:------ | :------ |
`combine?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:401

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

Defined in: node_modules/commander/typings/index.d.ts:198

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

Defined in: node_modules/commander/typings/index.d.ts:217

___

### configureHelp

▸ **configureHelp**(`configuration`: *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>): [*Command*](#interfacesbincommandercommandmd)

You can customise the help by overriding Help properties using configureHelp(),
or with a subclass of Help by overriding createHelp().

#### Parameters:

Name | Type |
:------ | :------ |
`configuration` | *Partial*<[*Help*](#interfacesbincommanderhelpmd)\> |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:269

▸ **configureHelp**(): *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>

Get configuration

**Returns:** *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>

Defined in: node_modules/commander/typings/index.d.ts:271

___

### configureOutput

▸ **configureOutput**(`configuration`: [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd)): [*Command*](#interfacesbincommandercommandmd)

The default output goes to stdout and stderr. You can customise this for special
applications. You can also customise the display of errors by overriding outputError.

The configuration properties are all functions:

   // functions to change where being written, stdout and stderr
   writeOut(str)
   writeErr(str)
   // matching functions to specify width for wrapping help
   getOutHelpWidth()
   getErrHelpWidth()
   // functions based on what is being written out
   outputError(str, write) // used for displaying errors, and not used for displaying help

#### Parameters:

Name | Type |
:------ | :------ |
`configuration` | [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd) |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:288

▸ **configureOutput**(): [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd)

Get configuration

**Returns:** [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd)

Defined in: node_modules/commander/typings/index.d.ts:290

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

Defined in: node_modules/commander/typings/index.d.ts:225

___

### createHelp

▸ **createHelp**(): [*Help*](#interfacesbincommanderhelpmd)

You can customise the help with a subclass of Help by overriding createHelp,
or by overriding Help properties using configureHelp().

**Returns:** [*Help*](#interfacesbincommanderhelpmd)

Defined in: node_modules/commander/typings/index.d.ts:263

___

### createOption

▸ **createOption**(`flags`: *string*, `description?`: *string*): [*Option*](#interfacesbincommanderoptionmd)

Factory routine to create a new unattached option.

See .option() for creating an attached option, which uses this routine to
create the option. You can override createOption to return a custom option.

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:372

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

Defined in: node_modules/commander/typings/index.d.ts:495

▸ **description**(): *string*

Get the description.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:499

___

### enablePositionalOptions

▸ **enablePositionalOptions**(`positional?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Enable positional options. Positional means global options are specified before subcommands which lets
subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.

The default behaviour is non-positional and global options may appear anywhere on the command line.

#### Parameters:

Name | Type |
:------ | :------ |
`positional?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:425

___

### exitOverride

▸ **exitOverride**(`callback?`: (`err`: [*CommanderError*](#interfacesbincommandercommandererrormd)) => *void*): [*Command*](#interfacesbincommandercommandmd)

Register callback to use as replacement for calling process.exit.

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | (`err`: [*CommanderError*](#interfacesbincommandercommandererrormd)) => *void* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:257

___

### help

▸ **help**(`context?`: [*HelpContext*](#interfacesbincommanderhelpcontextmd)): *never*

Output help information and exit.

Outputs built-in help, and custom text added using `.addHelpText()`.

#### Parameters:

Name | Type |
:------ | :------ |
`context?` | [*HelpContext*](#interfacesbincommanderhelpcontextmd) |

**Returns:** *never*

Defined in: node_modules/commander/typings/index.d.ts:576

▸ **help**(`cb?`: (`str`: *string*) => *string*): *never*

**`deprecated`** since v7

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *never*

Defined in: node_modules/commander/typings/index.d.ts:578

___

### helpInformation

▸ **helpInformation**(`context?`: [*HelpContext*](#interfacesbincommanderhelpcontextmd)): *string*

Return command help documentation.

#### Parameters:

Name | Type |
:------ | :------ |
`context?` | [*HelpContext*](#interfacesbincommanderhelpcontextmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:562

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

Defined in: node_modules/commander/typings/index.d.ts:569

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

Defined in: node_modules/commander/typings/index.d.ts:543

▸ **name**(): *string*

Get the name of the command.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:547

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Command*](#interfacesbincommandercommandmd)

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:592

___

### option

▸ **option**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

Define option with `flags`, `description` and optional
coercion `fn`.

The `flags` string contains the short and/or long flags,
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

Defined in: node_modules/commander/typings/index.d.ts:349

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

Defined in: node_modules/commander/typings/index.d.ts:350

▸ **option**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

**`deprecated`** since v7, instead use choices or a custom function

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:352

___

### opts

▸ **opts**(): [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Return an object containing options as key-value pairs

**Returns:** [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Defined in: node_modules/commander/typings/index.d.ts:488

___

### outputHelp

▸ **outputHelp**(`context?`: [*HelpContext*](#interfacesbincommanderhelpcontextmd)): *void*

Output help information for this command.

Outputs built-in help, and custom text added using `.addHelpText()`.

#### Parameters:

Name | Type |
:------ | :------ |
`context?` | [*HelpContext*](#interfacesbincommanderhelpcontextmd) |

**Returns:** *void*

Defined in: node_modules/commander/typings/index.d.ts:555

▸ **outputHelp**(`cb?`: (`str`: *string*) => *string*): *void*

**`deprecated`** since v7

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *void*

Defined in: node_modules/commander/typings/index.d.ts:557

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

Defined in: node_modules/commander/typings/index.d.ts:452

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

Defined in: node_modules/commander/typings/index.d.ts:470

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

Defined in: node_modules/commander/typings/index.d.ts:483

___

### passThroughOptions

▸ **passThroughOptions**(`passThrough?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

Pass through options that come after command-arguments rather than treat them as command-options,
so actual command-options come before command-arguments. Turning this on for a subcommand requires
positional options to have been enabled on the program (parent commands).

The default behaviour is non-positional and options may appear before or after command-arguments.

#### Parameters:

Name | Type |
:------ | :------ |
`passThrough?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:436

___

### requiredOption

▸ **requiredOption**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:360

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

Defined in: node_modules/commander/typings/index.d.ts:361

▸ **requiredOption**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*Command*](#interfacesbincommandercommandmd)

**`deprecated`** since v7, instead use choices or a custom function

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:363

___

### storeOptionsAsProperties

▸ **storeOptionsAsProperties**(): [*Command*](#interfacesbincommandercommandmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

**Returns:** [*Command*](#interfacesbincommandercommandmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

`this` command for chaining

Defined in: node_modules/commander/typings/index.d.ts:387

▸ **storeOptionsAsProperties**(`storeAsProperties`: *true*): [*Command*](#interfacesbincommandercommandmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

#### Parameters:

Name | Type |
:------ | :------ |
`storeAsProperties` | *true* |

**Returns:** [*Command*](#interfacesbincommandercommandmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Defined in: node_modules/commander/typings/index.d.ts:388

▸ **storeOptionsAsProperties**(`storeAsProperties?`: *boolean*): [*Command*](#interfacesbincommandercommandmd)

#### Parameters:

Name | Type |
:------ | :------ |
`storeAsProperties?` | *boolean* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:389

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

Defined in: node_modules/commander/typings/index.d.ts:532

▸ **usage**(): *string*

Get the command usage.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:536

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

Defined in: node_modules/commander/typings/index.d.ts:176


<a name="interfacesbincommandercommandererrormd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / CommanderError

# Interface: CommanderError

[bin](#modulesbinmd).[commander](#modulesbincommandermd).CommanderError

## Hierarchy

* *Error*

  ↳ **CommanderError**

  ↳↳ [*InvalidOptionArgumentError*](#interfacesbincommanderinvalidoptionargumenterrormd)

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

Defined in: node_modules/commander/typings/index.d.ts:11

___

### exitCode

• **exitCode**: *number*

Defined in: node_modules/commander/typings/index.d.ts:12

___

### message

• **message**: *string*

Overrides: void

Defined in: node_modules/commander/typings/index.d.ts:13

___

### name

• **name**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### nestedError

• `Optional` **nestedError**: *string*

Defined in: node_modules/commander/typings/index.d.ts:14

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
- [Help](#help)
- [InvalidOptionArgumentError](#invalidoptionargumenterror)
- [Option](#option)
- [args](#args)
- [commands](#commands)
- [parent](#parent)
- [program](#program)

### Methods

- [action](#action)
- [addCommand](#addcommand)
- [addHelpCommand](#addhelpcommand)
- [addHelpText](#addhelptext)
- [addOption](#addoption)
- [alias](#alias)
- [aliases](#aliases)
- [allowExcessArguments](#allowexcessarguments)
- [allowUnknownOption](#allowunknownoption)
- [arguments](#arguments)
- [combineFlagAndOptionalValue](#combineflagandoptionalvalue)
- [command](#command)
- [configureHelp](#configurehelp)
- [configureOutput](#configureoutput)
- [createCommand](#createcommand)
- [createHelp](#createhelp)
- [createOption](#createoption)
- [description](#description)
- [enablePositionalOptions](#enablepositionaloptions)
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
- [passThroughOptions](#passthroughoptions)
- [requiredOption](#requiredoption)
- [storeOptionsAsProperties](#storeoptionsasproperties)
- [usage](#usage)
- [version](#version)

## Properties

### Command

• **Command**: [*CommandConstructor*](#commandconstructor)

Defined in: node_modules/commander/typings/index.d.ts:615

___

### CommanderError

• **CommanderError**: [*CommanderErrorConstructor*](#commandererrorconstructor)

Defined in: node_modules/commander/typings/index.d.ts:617

___

### Help

• **Help**: [*HelpConstructor*](#helpconstructor)

Defined in: node_modules/commander/typings/index.d.ts:619

___

### InvalidOptionArgumentError

• **InvalidOptionArgumentError**: [*InvalidOptionArgumentErrorConstructor*](#invalidoptionargumenterrorconstructor)

Defined in: node_modules/commander/typings/index.d.ts:618

___

### Option

• **Option**: [*OptionConstructor*](#optionconstructor)

Defined in: node_modules/commander/typings/index.d.ts:616

___

### args

• **args**: *string*[]

Inherited from: [Command](#interfacesbincommandercommandmd).[args](#args)

Defined in: node_modules/commander/typings/index.d.ts:164

___

### commands

• **commands**: [*Command*](#interfacesbincommandercommandmd)[]

Inherited from: [Command](#interfacesbincommandercommandmd).[commands](#commands)

Defined in: node_modules/commander/typings/index.d.ts:165

___

### parent

• **parent**: *null* \| [*Command*](#interfacesbincommandercommandmd)

Inherited from: [Command](#interfacesbincommandercommandmd).[parent](#parent)

Defined in: node_modules/commander/typings/index.d.ts:166

___

### program

• **program**: [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:614

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

Defined in: node_modules/commander/typings/index.d.ts:305

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

Defined in: node_modules/commander/typings/index.d.ts:234

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

Defined in: node_modules/commander/typings/index.d.ts:252

___

### addHelpText

▸ **addHelpText**(`position`: [*AddHelpTextPosition*](#addhelptextposition), `text`: *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Add additional text to be displayed with the built-in help.

Position is 'before' or 'after' to affect just this command,
and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*AddHelpTextPosition*](#addhelptextposition) |
`text` | *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:586

▸ **addHelpText**(`position`: [*AddHelpTextPosition*](#addhelptextposition), `text`: (`context`: [*AddHelpTextContext*](#interfacesbincommanderaddhelptextcontextmd)) => *undefined* \| *string*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*AddHelpTextPosition*](#addhelptextposition) |
`text` | (`context`: [*AddHelpTextContext*](#interfacesbincommanderaddhelptextcontextmd)) => *undefined* \| *string* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:587

___

### addOption

▸ **addOption**(`option`: [*Option*](#interfacesbincommanderoptionmd)): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Add a prepared Option.

See .option() and .requiredOption() for creating and attaching an option in a single call.

#### Parameters:

Name | Type |
:------ | :------ |
`option` | [*Option*](#interfacesbincommanderoptionmd) |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:379

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

Defined in: node_modules/commander/typings/index.d.ts:508

▸ **alias**(): *string*

Get alias for the command.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:512

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

Defined in: node_modules/commander/typings/index.d.ts:521

▸ **aliases**(): *string*[]

Get aliases for the command.

**Returns:** *string*[]

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:525

___

### allowExcessArguments

▸ **allowExcessArguments**(`allowExcess?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Allow excess command-arguments on the command line. Pass false to make excess arguments an error.

#### Parameters:

Name | Type |
:------ | :------ |
`allowExcess?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:415

___

### allowUnknownOption

▸ **allowUnknownOption**(`allowUnknown?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Allow unknown options on the command line.

#### Parameters:

Name | Type |
:------ | :------ |
`allowUnknown?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:408

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

Defined in: node_modules/commander/typings/index.d.ts:241

___

### combineFlagAndOptionalValue

▸ **combineFlagAndOptionalValue**(`combine?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Alter parsing of short flags with optional values.

**`example`** 
   // for `.option('-f,--flag [value]'):
  .combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
  .combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`

#### Parameters:

Name | Type |
:------ | :------ |
`combine?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:401

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

Defined in: node_modules/commander/typings/index.d.ts:198

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

Defined in: node_modules/commander/typings/index.d.ts:217

___

### configureHelp

▸ **configureHelp**(`configuration`: *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

You can customise the help by overriding Help properties using configureHelp(),
or with a subclass of Help by overriding createHelp().

#### Parameters:

Name | Type |
:------ | :------ |
`configuration` | *Partial*<[*Help*](#interfacesbincommanderhelpmd)\> |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:269

▸ **configureHelp**(): *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>

Get configuration

**Returns:** *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:271

___

### configureOutput

▸ **configureOutput**(`configuration`: [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd)): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

The default output goes to stdout and stderr. You can customise this for special
applications. You can also customise the display of errors by overriding outputError.

The configuration properties are all functions:

   // functions to change where being written, stdout and stderr
   writeOut(str)
   writeErr(str)
   // matching functions to specify width for wrapping help
   getOutHelpWidth()
   getErrHelpWidth()
   // functions based on what is being written out
   outputError(str, write) // used for displaying errors, and not used for displaying help

#### Parameters:

Name | Type |
:------ | :------ |
`configuration` | [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd) |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:288

▸ **configureOutput**(): [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd)

Get configuration

**Returns:** [*OutputConfiguration*](#interfacesbincommanderoutputconfigurationmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:290

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

Defined in: node_modules/commander/typings/index.d.ts:225

___

### createHelp

▸ **createHelp**(): [*Help*](#interfacesbincommanderhelpmd)

You can customise the help with a subclass of Help by overriding createHelp,
or by overriding Help properties using configureHelp().

**Returns:** [*Help*](#interfacesbincommanderhelpmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:263

___

### createOption

▸ **createOption**(`flags`: *string*, `description?`: *string*): [*Option*](#interfacesbincommanderoptionmd)

Factory routine to create a new unattached option.

See .option() for creating an attached option, which uses this routine to
create the option. You can override createOption to return a custom option.

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:372

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

Defined in: node_modules/commander/typings/index.d.ts:495

▸ **description**(): *string*

Get the description.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:499

___

### enablePositionalOptions

▸ **enablePositionalOptions**(`positional?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Enable positional options. Positional means global options are specified before subcommands which lets
subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.

The default behaviour is non-positional and global options may appear anywhere on the command line.

#### Parameters:

Name | Type |
:------ | :------ |
`positional?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:425

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

Defined in: node_modules/commander/typings/index.d.ts:257

___

### help

▸ **help**(`context?`: [*HelpContext*](#interfacesbincommanderhelpcontextmd)): *never*

Output help information and exit.

Outputs built-in help, and custom text added using `.addHelpText()`.

#### Parameters:

Name | Type |
:------ | :------ |
`context?` | [*HelpContext*](#interfacesbincommanderhelpcontextmd) |

**Returns:** *never*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:576

▸ **help**(`cb?`: (`str`: *string*) => *string*): *never*

**`deprecated`** since v7

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *never*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:578

___

### helpInformation

▸ **helpInformation**(`context?`: [*HelpContext*](#interfacesbincommanderhelpcontextmd)): *string*

Return command help documentation.

#### Parameters:

Name | Type |
:------ | :------ |
`context?` | [*HelpContext*](#interfacesbincommanderhelpcontextmd) |

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:562

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

Defined in: node_modules/commander/typings/index.d.ts:569

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

Defined in: node_modules/commander/typings/index.d.ts:543

▸ **name**(): *string*

Get the name of the command.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:547

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:592

___

### option

▸ **option**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Define option with `flags`, `description` and optional
coercion `fn`.

The `flags` string contains the short and/or long flags,
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

Defined in: node_modules/commander/typings/index.d.ts:349

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

Defined in: node_modules/commander/typings/index.d.ts:350

▸ **option**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

**`deprecated`** since v7, instead use choices or a custom function

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:352

___

### opts

▸ **opts**(): [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Return an object containing options as key-value pairs

**Returns:** [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:488

___

### outputHelp

▸ **outputHelp**(`context?`: [*HelpContext*](#interfacesbincommanderhelpcontextmd)): *void*

Output help information for this command.

Outputs built-in help, and custom text added using `.addHelpText()`.

#### Parameters:

Name | Type |
:------ | :------ |
`context?` | [*HelpContext*](#interfacesbincommanderhelpcontextmd) |

**Returns:** *void*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:555

▸ **outputHelp**(`cb?`: (`str`: *string*) => *string*): *void*

**`deprecated`** since v7

#### Parameters:

Name | Type |
:------ | :------ |
`cb?` | (`str`: *string*) => *string* |

**Returns:** *void*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:557

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

Defined in: node_modules/commander/typings/index.d.ts:452

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

Defined in: node_modules/commander/typings/index.d.ts:470

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

Defined in: node_modules/commander/typings/index.d.ts:483

___

### passThroughOptions

▸ **passThroughOptions**(`passThrough?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Pass through options that come after command-arguments rather than treat them as command-options,
so actual command-options come before command-arguments. Turning this on for a subcommand requires
positional options to have been enabled on the program (parent commands).

The default behaviour is non-positional and options may appear before or after command-arguments.

#### Parameters:

Name | Type |
:------ | :------ |
`passThrough?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:436

___

### requiredOption

▸ **requiredOption**(`flags`: *string*, `description?`: *string*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description?` | *string* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:360

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

Defined in: node_modules/commander/typings/index.d.ts:361

▸ **requiredOption**(`flags`: *string*, `description`: *string*, `regexp`: *RegExp*, `defaultValue?`: *string* \| *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

**`deprecated`** since v7, instead use choices or a custom function

#### Parameters:

Name | Type |
:------ | :------ |
`flags` | *string* |
`description` | *string* |
`regexp` | *RegExp* |
`defaultValue?` | *string* \| *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:363

___

### storeOptionsAsProperties

▸ **storeOptionsAsProperties**(): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

`this` command for chaining

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:387

▸ **storeOptionsAsProperties**(`storeAsProperties`: *true*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

#### Parameters:

Name | Type |
:------ | :------ |
`storeAsProperties` | *true* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd) & [*OptionValues*](#interfacesbincommanderoptionvaluesmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:388

▸ **storeOptionsAsProperties**(`storeAsProperties?`: *boolean*): [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

#### Parameters:

Name | Type |
:------ | :------ |
`storeAsProperties?` | *boolean* |

**Returns:** [*CommanderStatic*](#interfacesbincommandercommanderstaticmd)

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:389

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

Defined in: node_modules/commander/typings/index.d.ts:532

▸ **usage**(): *string*

Get the command usage.

**Returns:** *string*

Inherited from: [Command](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:536

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

Defined in: node_modules/commander/typings/index.d.ts:176


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

Defined in: node_modules/commander/typings/index.d.ts:597

___

### isDefault

• `Optional` **isDefault**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:598

___

### noHelp

• `Optional` **noHelp**: *boolean*

**`deprecated`** since v7, replaced by hidden

Defined in: node_modules/commander/typings/index.d.ts:600


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

Defined in: node_modules/commander/typings/index.d.ts:603

___

### hidden

• `Optional` **hidden**: *boolean*

Inherited from: [CommandOptions](#interfacesbincommandercommandoptionsmd).[hidden](#hidden)

Defined in: node_modules/commander/typings/index.d.ts:597

___

### isDefault

• `Optional` **isDefault**: *boolean*

Inherited from: [CommandOptions](#interfacesbincommandercommandoptionsmd).[isDefault](#isdefault)

Defined in: node_modules/commander/typings/index.d.ts:598

___

### noHelp

• `Optional` **noHelp**: *boolean*

**`deprecated`** since v7, replaced by hidden

Inherited from: [CommandOptions](#interfacesbincommandercommandoptionsmd).[noHelp](#nohelp)

Defined in: node_modules/commander/typings/index.d.ts:600


<a name="interfacesbincommanderhelpmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / Help

# Interface: Help

[bin](#modulesbinmd).[commander](#modulesbincommandermd).Help

## Table of contents

### Properties

- [helpWidth](#helpwidth)
- [sortOptions](#sortoptions)
- [sortSubcommands](#sortsubcommands)

### Methods

- [commandDescription](#commanddescription)
- [commandUsage](#commandusage)
- [formatHelp](#formathelp)
- [longestArgumentTermLength](#longestargumenttermlength)
- [longestOptionTermLength](#longestoptiontermlength)
- [longestSubcommandTermLength](#longestsubcommandtermlength)
- [optionDescription](#optiondescription)
- [optionTerm](#optionterm)
- [padWidth](#padwidth)
- [subcommandDescription](#subcommanddescription)
- [subcommandTerm](#subcommandterm)
- [visibleArguments](#visiblearguments)
- [visibleCommands](#visiblecommands)
- [visibleOptions](#visibleoptions)
- [wrap](#wrap)

## Properties

### helpWidth

• `Optional` **helpWidth**: *number*

output helpWidth, long lines are wrapped to fit

Defined in: node_modules/commander/typings/index.d.ts:92

___

### sortOptions

• **sortOptions**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:94

___

### sortSubcommands

• **sortSubcommands**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:93

## Methods

### commandDescription

▸ **commandDescription**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): *string*

Get the description for the command.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:108

___

### commandUsage

▸ **commandUsage**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): *string*

Get the command usage to be displayed at the top of the built-in help.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:106

___

### formatHelp

▸ **formatHelp**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `helper`: [*Help*](#interfacesbincommanderhelpmd)): *string*

Generate the built-in help text.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`helper` | [*Help*](#interfacesbincommanderhelpmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:133

___

### longestArgumentTermLength

▸ **longestArgumentTermLength**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `helper`: [*Help*](#interfacesbincommanderhelpmd)): *number*

Get the longest argument term length.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`helper` | [*Help*](#interfacesbincommanderhelpmd) |

**Returns:** *number*

Defined in: node_modules/commander/typings/index.d.ts:122

___

### longestOptionTermLength

▸ **longestOptionTermLength**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `helper`: [*Help*](#interfacesbincommanderhelpmd)): *number*

Get the longest option term length.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`helper` | [*Help*](#interfacesbincommanderhelpmd) |

**Returns:** *number*

Defined in: node_modules/commander/typings/index.d.ts:120

___

### longestSubcommandTermLength

▸ **longestSubcommandTermLength**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `helper`: [*Help*](#interfacesbincommanderhelpmd)): *number*

Get the longest command term length.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`helper` | [*Help*](#interfacesbincommanderhelpmd) |

**Returns:** *number*

Defined in: node_modules/commander/typings/index.d.ts:118

___

### optionDescription

▸ **optionDescription**(`option`: [*Option*](#interfacesbincommanderoptionmd)): *string*

Get the option description to show in the list of options.

#### Parameters:

Name | Type |
:------ | :------ |
`option` | [*Option*](#interfacesbincommanderoptionmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:103

___

### optionTerm

▸ **optionTerm**(`option`: [*Option*](#interfacesbincommanderoptionmd)): *string*

Get the option term to show in the list of options.

#### Parameters:

Name | Type |
:------ | :------ |
`option` | [*Option*](#interfacesbincommanderoptionmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:101

___

### padWidth

▸ **padWidth**(`cmd`: [*Command*](#interfacesbincommandercommandmd), `helper`: [*Help*](#interfacesbincommanderhelpmd)): *number*

Calculate the pad width from the maximum term length.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |
`helper` | [*Help*](#interfacesbincommanderhelpmd) |

**Returns:** *number*

Defined in: node_modules/commander/typings/index.d.ts:124

___

### subcommandDescription

▸ **subcommandDescription**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): *string*

Get the command description to show in the list of subcommands.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:99

___

### subcommandTerm

▸ **subcommandTerm**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): *string*

Get the command term to show in the list of subcommands.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:97

___

### visibleArguments

▸ **visibleArguments**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): { `description`: *string* ; `term`: *string*  }[]

Get an array of the arguments which have descriptions.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** { `description`: *string* ; `term`: *string*  }[]

Defined in: node_modules/commander/typings/index.d.ts:115

___

### visibleCommands

▸ **visibleCommands**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): [*Command*](#interfacesbincommandercommandmd)[]

Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** [*Command*](#interfacesbincommandercommandmd)[]

Defined in: node_modules/commander/typings/index.d.ts:111

___

### visibleOptions

▸ **visibleOptions**(`cmd`: [*Command*](#interfacesbincommandercommandmd)): [*Option*](#interfacesbincommanderoptionmd)[]

Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | [*Command*](#interfacesbincommandercommandmd) |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)[]

Defined in: node_modules/commander/typings/index.d.ts:113

___

### wrap

▸ **wrap**(`str`: *string*, `width`: *number*, `indent`: *number*, `minColumnWidth?`: *number*): *string*

Wrap the given string to width characters per line, with lines after the first indented.
Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`width` | *number* |
`indent` | *number* |
`minColumnWidth?` | *number* |

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:130


<a name="interfacesbincommanderhelpcontextmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / HelpContext

# Interface: HelpContext

[bin](#modulesbinmd).[commander](#modulesbincommandermd).HelpContext

## Table of contents

### Properties

- [error](#error)

## Properties

### error

• **error**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:142


<a name="interfacesbincommanderinvalidoptionargumenterrormd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / InvalidOptionArgumentError

# Interface: InvalidOptionArgumentError

[bin](#modulesbinmd).[commander](#modulesbincommandermd).InvalidOptionArgumentError

## Hierarchy

* [*CommanderError*](#interfacesbincommandercommandererrormd)

  ↳ **InvalidOptionArgumentError**

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

Inherited from: [CommanderError](#interfacesbincommandercommandererrormd).[code](#code)

Defined in: node_modules/commander/typings/index.d.ts:11

___

### exitCode

• **exitCode**: *number*

Inherited from: [CommanderError](#interfacesbincommandercommandererrormd).[exitCode](#exitcode)

Defined in: node_modules/commander/typings/index.d.ts:12

___

### message

• **message**: *string*

Inherited from: [CommanderError](#interfacesbincommandercommandererrormd).[message](#message)

Defined in: node_modules/commander/typings/index.d.ts:13

___

### name

• **name**: *string*

Inherited from: [CommanderError](#interfacesbincommandercommandererrormd).[name](#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### nestedError

• `Optional` **nestedError**: *string*

Inherited from: [CommanderError](#interfacesbincommandercommandererrormd).[nestedError](#nestederror)

Defined in: node_modules/commander/typings/index.d.ts:14

___

### stack

• `Optional` **stack**: *string*

Inherited from: [CommanderError](#interfacesbincommandercommandererrormd).[stack](#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975


<a name="interfacesbincommanderoptionmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / Option

# Interface: Option

[bin](#modulesbinmd).[commander](#modulesbincommandermd).Option

## Table of contents

### Properties

- [argChoices](#argchoices)
- [defaultValue](#defaultvalue)
- [defaultValueDescription](#defaultvaluedescription)
- [description](#description)
- [flags](#flags)
- [hidden](#hidden)
- [long](#long)
- [mandatory](#mandatory)
- [negate](#negate)
- [optionFlags](#optionflags)
- [optional](#optional)
- [parseArg](#parsearg)
- [required](#required)
- [short](#short)
- [variadic](#variadic)

### Methods

- [argParser](#argparser)
- [argumentRejected](#argumentrejected)
- [attributeName](#attributename)
- [choices](#choices)
- [default](#default)
- [fullDescription](#fulldescription)
- [hideHelp](#hidehelp)
- [makeOptionMandatory](#makeoptionmandatory)
- [name](#name)

## Properties

### argChoices

• `Optional` **argChoices**: *string*[]

Defined in: node_modules/commander/typings/index.d.ts:39

___

### defaultValue

• `Optional` **defaultValue**: *any*

Defined in: node_modules/commander/typings/index.d.ts:35

___

### defaultValueDescription

• `Optional` **defaultValueDescription**: *string*

Defined in: node_modules/commander/typings/index.d.ts:36

___

### description

• **description**: *string*

Defined in: node_modules/commander/typings/index.d.ts:25

___

### flags

• **flags**: *string*

Defined in: node_modules/commander/typings/index.d.ts:24

___

### hidden

• **hidden**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:38

___

### long

• `Optional` **long**: *string*

Defined in: node_modules/commander/typings/index.d.ts:33

___

### mandatory

• **mandatory**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:30

___

### negate

• **negate**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:34

___

### optionFlags

• **optionFlags**: *string*

Defined in: node_modules/commander/typings/index.d.ts:31

___

### optional

• **optional**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:28

___

### parseArg

• `Optional` **parseArg**: <T\>(`value`: *string*, `previous`: T) => T

#### Type declaration:

▸ <T\>(`value`: *string*, `previous`: T): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* |
`previous` | T |

**Returns:** T

Defined in: node_modules/commander/typings/index.d.ts:37

Defined in: node_modules/commander/typings/index.d.ts:37

___

### required

• **required**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:27

___

### short

• `Optional` **short**: *string*

Defined in: node_modules/commander/typings/index.d.ts:32

___

### variadic

• **variadic**: *boolean*

Defined in: node_modules/commander/typings/index.d.ts:29

## Methods

### argParser

▸ **argParser**<T\>(`fn`: (`value`: *string*, `previous`: T) => T): [*Option*](#interfacesbincommanderoptionmd)

Set the custom handler for processing CLI option arguments into option values.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`value`: *string*, `previous`: T) => T |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:54

___

### argumentRejected

▸ **argumentRejected**(`messsage`: *string*): *never*

Validation of option argument failed.
Intended for use from custom argument processing functions.

#### Parameters:

Name | Type |
:------ | :------ |
`messsage` | *string* |

**Returns:** *never*

Defined in: node_modules/commander/typings/index.d.ts:70

___

### attributeName

▸ **attributeName**(): *string*

Return option name, in a camelcase format that can be used
as a object attribute key.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:86

___

### choices

▸ **choices**(`values`: *string*[]): [*Option*](#interfacesbincommanderoptionmd)

Only allow option value to be one of choices.

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *string*[] |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:75

___

### default

▸ **default**(`value`: *any*, `description?`: *string*): [*Option*](#interfacesbincommanderoptionmd)

Set the default value, and optionally supply the description to be displayed in the help.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |
`description?` | *string* |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:44

___

### fullDescription

▸ **fullDescription**(): *string*

Calculate the full description, including defaultValue etc.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:49

___

### hideHelp

▸ **hideHelp**(`hide?`: *boolean*): [*Option*](#interfacesbincommanderoptionmd)

Hide option in help.

#### Parameters:

Name | Type |
:------ | :------ |
`hide?` | *boolean* |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:64

___

### makeOptionMandatory

▸ **makeOptionMandatory**(`mandatory?`: *boolean*): [*Option*](#interfacesbincommanderoptionmd)

Whether the option is mandatory and must have a value after parsing.

#### Parameters:

Name | Type |
:------ | :------ |
`mandatory?` | *boolean* |

**Returns:** [*Option*](#interfacesbincommanderoptionmd)

Defined in: node_modules/commander/typings/index.d.ts:59

___

### name

▸ **name**(): *string*

Return option name.

**Returns:** *string*

Defined in: node_modules/commander/typings/index.d.ts:80


<a name="interfacesbincommanderoptionvaluesmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / OptionValues

# Interface: OptionValues

[bin](#modulesbinmd).[commander](#modulesbincommandermd).OptionValues

## Indexable

▪ [key: *string*]: *any*


<a name="interfacesbincommanderoutputconfigurationmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / [commander](#modulesbincommandermd) / OutputConfiguration

# Interface: OutputConfiguration

[bin](#modulesbinmd).[commander](#modulesbincommandermd).OutputConfiguration

## Table of contents

### Methods

- [getErrHelpWidth](#geterrhelpwidth)
- [getOutHelpWidth](#getouthelpwidth)
- [outputError](#outputerror)
- [writeErr](#writeerr)
- [writeOut](#writeout)

## Methods

### getErrHelpWidth

▸ `Optional`**getErrHelpWidth**(): *number*

**Returns:** *number*

Defined in: node_modules/commander/typings/index.d.ts:152

___

### getOutHelpWidth

▸ `Optional`**getOutHelpWidth**(): *number*

**Returns:** *number*

Defined in: node_modules/commander/typings/index.d.ts:151

___

### outputError

▸ `Optional`**outputError**(`str`: *string*, `write`: (`str`: *string*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`write` | (`str`: *string*) => *void* |

**Returns:** *void*

Defined in: node_modules/commander/typings/index.d.ts:153

___

### writeErr

▸ `Optional`**writeErr**(`str`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *void*

Defined in: node_modules/commander/typings/index.d.ts:150

___

### writeOut

▸ `Optional`**writeOut**(`str`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *void*

Defined in: node_modules/commander/typings/index.d.ts:149


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

Defined in: node_modules/commander/typings/index.d.ts:139


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

Defined in: node_modules/commander/typings/index.d.ts:608

___

### unknown

• **unknown**: *string*[]

Defined in: node_modules/commander/typings/index.d.ts:609


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

Defined in: [src/index.ts:210](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L210)

___

### daysOfMonth

• `Optional` **daysOfMonth**: *number*[]

Defined in: [src/index.ts:205](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L205)

___

### daysOfWeek

• `Optional` **daysOfWeek**: *number*[]

Defined in: [src/index.ts:206](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L206)

___

### daysOfYear

• `Optional` **daysOfYear**: *number*[]

Defined in: [src/index.ts:207](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L207)

___

### endingOn

• `Optional` **endingOn**: Date

Defined in: [src/index.ts:200](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L200)

___

### hours

• **hours**: *number*[]

Defined in: [src/index.ts:201](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L201)

___

### minutes

• `Optional` **minutes**: *number*[]

Defined in: [src/index.ts:202](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L202)

___

### monthsOfYear

• `Optional` **monthsOfYear**: *number*[]

Defined in: [src/index.ts:204](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L204)

___

### orderInMonth

• `Optional` **orderInMonth**: *number*[]

Defined in: [src/index.ts:209](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L209)

___

### seconds

• `Optional` **seconds**: *number*[]

Defined in: [src/index.ts:203](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L203)

___

### startingOn

• `Optional` **startingOn**: Date

Defined in: [src/index.ts:199](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L199)

___

### timezone

• **timezone**: *string*

Defined in: [src/index.ts:198](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L198)

___

### weekInterval

• `Optional` **weekInterval**: *number*

Defined in: [src/index.ts:208](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L208)


<a name="modules__tests___intervalmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / __tests__/interval

# Module: \_\_tests\_\_/interval


<a name="modulesbincommandermd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / [bin](#modulesbinmd) / commander

# Namespace: commander

[bin](#modulesbinmd).commander

## Table of contents

### Interfaces

- [AddHelpTextContext](#interfacesbincommanderaddhelptextcontextmd)
- [Command](#interfacesbincommandercommandmd)
- [CommandOptions](#interfacesbincommandercommandoptionsmd)
- [CommanderError](#interfacesbincommandercommandererrormd)
- [CommanderStatic](#interfacesbincommandercommanderstaticmd)
- [ExecutableCommandOptions](#interfacesbincommanderexecutablecommandoptionsmd)
- [Help](#interfacesbincommanderhelpmd)
- [HelpContext](#interfacesbincommanderhelpcontextmd)
- [InvalidOptionArgumentError](#interfacesbincommanderinvalidoptionargumenterrormd)
- [Option](#interfacesbincommanderoptionmd)
- [OptionValues](#interfacesbincommanderoptionvaluesmd)
- [OutputConfiguration](#interfacesbincommanderoutputconfigurationmd)
- [ParseOptions](#interfacesbincommanderparseoptionsmd)
- [ParseOptionsResult](#interfacesbincommanderparseoptionsresultmd)

### Type aliases

- [AddHelpTextPosition](#addhelptextposition)
- [CommandConstructor](#commandconstructor)
- [CommanderErrorConstructor](#commandererrorconstructor)
- [HelpConfiguration](#helpconfiguration)
- [HelpConstructor](#helpconstructor)
- [InvalidOptionArgumentErrorConstructor](#invalidoptionargumenterrorconstructor)
- [OptionConstructor](#optionconstructor)

## Type aliases

### AddHelpTextPosition

Ƭ **AddHelpTextPosition**: *beforeAll* \| *before* \| *after* \| *afterAll*

Defined in: node_modules/commander/typings/index.d.ts:157

___

### CommandConstructor

Ƭ **CommandConstructor**: (`name?`: *string*) => [*Command*](#interfacesbincommandercommandmd)

#### Type declaration:

\+ (`name?`: *string*): [*Command*](#interfacesbincommandercommandmd)

#### Parameters:

Name | Type |
:------ | :------ |
`name?` | *string* |

**Returns:** [*Command*](#interfacesbincommandercommandmd)

Defined in: node_modules/commander/typings/index.d.ts:594

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

Defined in: node_modules/commander/typings/index.d.ts:16

___

### HelpConfiguration

Ƭ **HelpConfiguration**: *Partial*<[*Help*](#interfacesbincommanderhelpmd)\>

Defined in: node_modules/commander/typings/index.d.ts:136

___

### HelpConstructor

Ƭ **HelpConstructor**: () => [*Help*](#interfacesbincommanderhelpmd)

#### Type declaration:

\+ (): [*Help*](#interfacesbincommanderhelpmd)

**Returns:** [*Help*](#interfacesbincommanderhelpmd)

Defined in: node_modules/commander/typings/index.d.ts:135

___

### InvalidOptionArgumentErrorConstructor

Ƭ **InvalidOptionArgumentErrorConstructor**: (`message`: *string*) => [*InvalidOptionArgumentError*](#interfacesbincommanderinvalidoptionargumenterrormd)

#### Type declaration:

\+ (`message`: *string*): [*InvalidOptionArgumentError*](#interfacesbincommanderinvalidoptionargumenterrormd)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*InvalidOptionArgumentError*](#interfacesbincommanderinvalidoptionargumenterrormd)

Defined in: node_modules/commander/typings/index.d.ts:21

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

Defined in: node_modules/commander/typings/index.d.ts:88


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

Defined in: node_modules/commander/typings/index.d.ts:626


<a name="modulesindexmd"></a>

[@raydeck/interval-manager - v1.0.0](#readmemd) / index

# Module: index

## Table of contents

### Interfaces

- [IntervalSchedule](#interfacesindexintervalschedulemd)

### Functions

- [getNextDate](#getnextdate)
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

Defined in: [src/index.ts:2](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L2)

___

### validateSchedule

▸ **validateSchedule**(`__namedParameters`: [*IntervalSchedule*](#interfacesindexintervalschedulemd)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*IntervalSchedule*](#interfacesindexintervalschedulemd) |

**Returns:** *void*

Defined in: [src/index.ts:216](https://github.com/rhdeck/interval-manager/blob/8dfa3fc/src/index.ts#L216)
