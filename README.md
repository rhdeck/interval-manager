
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
* --timezone \<`timezone`> Timezone for this (default: `America/Chicago`)
* --reference-date \<`isoDate`> ISO-8601 representation of the reference (default: `2021-04-05T21:51:49.410Z`)
* --starting-date \<`isoDate`> ISO-8601 representation of the date the interval had started (default: `2021-04-05T21:51:49.410Z`)
* --ending-date \<`isoDate`> ISO-8601 representation of the date the interval had ended (default: `2021-04-05T21:51:49.410Z`)
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

@raydeck/interval-manager - v2.0.0

# @raydeck/interval-manager - v2.0.0

## Table of contents

### Interfaces

- [IntervalSchedule](#interfacesintervalschedulemd)

### Variables

- [APRIL](#april)
- [AUGUST](#august)
- [DAYINTERVALS](#dayintervals)
- [DAYSOFWEEK](#daysofweek)
- [DAYSOFYEAR](#daysofyear)
- [DECEMBER](#december)
- [FEBRUARY](#february)
- [FRIDAY](#friday)
- [HOURS](#hours)
- [JANUARY](#january)
- [JULY](#july)
- [JUNE](#june)
- [LASTDAY](#lastday)
- [MARCH](#march)
- [MAY](#may)
- [MINUTES](#minutes)
- [MONDAY](#monday)
- [MONTHSOFYEAR](#monthsofyear)
- [NOVEMBER](#november)
- [OCTOBER](#october)
- [ORDERINMONTH](#orderinmonth)
- [SATURDAY](#saturday)
- [SECONDS](#seconds)
- [SEPTEMBER](#september)
- [SUNDAY](#sunday)
- [THURSDAY](#thursday)
- [TUESDAY](#tuesday)
- [WEDNESDAY](#wednesday)
- [WEEKINTERVALS](#weekintervals)

### Functions

- [getNextDate](#getnextdate)
- [isValidTimeZone](#isvalidtimezone)
- [validateSchedule](#validateschedule)

## Variables

### APRIL

• `Const` **APRIL**: *4*= 4

Defined in: [index.ts:433](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L433)

___

### AUGUST

• `Const` **AUGUST**: *8*= 8

Defined in: [index.ts:437](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L437)

___

### DAYINTERVALS

• `Const` **DAYINTERVALS**: *number*[]

Valid day intervals

Defined in: [index.ts:512](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L512)

___

### DAYSOFWEEK

• `Const` **DAYSOFWEEK**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`FRIDAY` | *number* |
`MONDAY` | *number* |
`SATURDAY` | *number* |
`SUNDAY` | *number* |
`THURSDAY` | *number* |
`TUESDAY` | *number* |
`WEDNESDAY` | *number* |

Defined in: [index.ts:477](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L477)

___

### DAYSOFYEAR

• `Const` **DAYSOFYEAR**: *number*[]

Valid days of the year

Defined in: [index.ts:508](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L508)

___

### DECEMBER

• `Const` **DECEMBER**: *12*= 12

Defined in: [index.ts:441](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L441)

___

### FEBRUARY

• `Const` **FEBRUARY**: *2*= 2

Defined in: [index.ts:431](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L431)

___

### FRIDAY

• `Const` **FRIDAY**: *5*= 5

Defined in: [index.ts:428](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L428)

___

### HOURS

• `Const` **HOURS**: *number*[]

Valid

Defined in: [index.ts:502](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L502)

___

### JANUARY

• `Const` **JANUARY**: *1*= 1

Defined in: [index.ts:430](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L430)

___

### JULY

• `Const` **JULY**: *7*= 7

Defined in: [index.ts:436](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L436)

___

### JUNE

• `Const` **JUNE**: *6*= 6

Defined in: [index.ts:435](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L435)

___

### LASTDAY

• `Const` **LASTDAY**: *-1*= -1

Defined in: [index.ts:442](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L442)

___

### MARCH

• `Const` **MARCH**: *3*= 3

Defined in: [index.ts:432](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L432)

___

### MAY

• `Const` **MAY**: *5*= 5

Defined in: [index.ts:434](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L434)

___

### MINUTES

• `Const` **MINUTES**: *number*[]

Valid minutes

Defined in: [index.ts:504](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L504)

___

### MONDAY

• `Const` **MONDAY**: *1*= 1

Defined in: [index.ts:424](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L424)

___

### MONTHSOFYEAR

• `Const` **MONTHSOFYEAR**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`APRIL` | *number* |
`AUGUST` | *number* |
`DECEMBER` | *number* |
`FEBRUARY` | *number* |
`JANUARY` | *number* |
`JULY` | *number* |
`JUNE` | *number* |
`MARCH` | *number* |
`MAY` | *number* |
`NOVEMBER` | *number* |
`OCTOBER` | *number* |
`SEPTEMBER` | *number* |

Defined in: [index.ts:486](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L486)

___

### NOVEMBER

• `Const` **NOVEMBER**: *11*= 11

Defined in: [index.ts:440](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L440)

___

### OCTOBER

• `Const` **OCTOBER**: *10*= 10

Defined in: [index.ts:439](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L439)

___

### ORDERINMONTH

• `Const` **ORDERINMONTH**: *number*[]

Defined in: [index.ts:500](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L500)

___

### SATURDAY

• `Const` **SATURDAY**: *6*= 6

Defined in: [index.ts:429](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L429)

___

### SECONDS

• `Const` **SECONDS**: *number*[]

Valid seconds

Defined in: [index.ts:506](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L506)

___

### SEPTEMBER

• `Const` **SEPTEMBER**: *9*= 9

Defined in: [index.ts:438](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L438)

___

### SUNDAY

• `Const` **SUNDAY**: *0*= 0

Defined in: [index.ts:423](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L423)

___

### THURSDAY

• `Const` **THURSDAY**: *4*= 4

Defined in: [index.ts:427](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L427)

___

### TUESDAY

• `Const` **TUESDAY**: *2*= 2

Defined in: [index.ts:425](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L425)

___

### WEDNESDAY

• `Const` **WEDNESDAY**: *3*= 3

Defined in: [index.ts:426](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L426)

___

### WEEKINTERVALS

• `Const` **WEEKINTERVALS**: *number*[]

Valid week intervals

Defined in: [index.ts:516](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L516)

## Functions

### getNextDate

▸ **getNextDate**(`schedule`: [*IntervalSchedule*](#interfacesintervalschedulemd), `nowDate?`: Date): Date

Get the next date/time after the specified reference date

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`schedule` | [*IntervalSchedule*](#interfacesintervalschedulemd) | IntervalSchedule that defines this interval pattern   |
`nowDate` | Date | Date the result must be after. Defaults to now   |

**Returns:** Date

Date with the next time this schedule should fire

Defined in: [index.ts:10](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L10)

___

### isValidTimeZone

▸ **isValidTimeZone**(`tz`: *string*): *boolean*

Determines whether a given string is a valid/known timezone identifier

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tz` | *string* | Source string (e.g. `America/New_York`)   |

**Returns:** *boolean*

True if the string is a valid time zone, false if not

Defined in: [index.ts:412](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L412)

___

### validateSchedule

▸ **validateSchedule**(`schedule`: [*IntervalSchedule*](#interfacesintervalschedulemd)): *void*

Assert-style validator of whether a given IntervalSchedule contains valid values. Throws if not

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`schedule` | [*IntervalSchedule*](#interfacesintervalschedulemd) | IntervalSchedule to test    |

**Returns:** *void*

Defined in: [index.ts:249](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L249)


<a name="interfacesintervalschedulemd"></a>

[@raydeck/interval-manager - v2.0.0](#readmemd) / IntervalSchedule

# Interface: IntervalSchedule

Interface for defining a schedule for delayed intervals

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

Days to wait between runs, starting from the startsOn date. This can run multiple times per day if `hour`, `minute` or `second` are set with multiple values.Not compatible with weekInterval, monthsOfYear, daysOfYear

Defined in: [index.ts:243](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L243)

___

### daysOfMonth

• `Optional` **daysOfMonth**: *number*[]

Days of the month on which this should fire. Note that not all months have >28 days. Not compatible with dayInterval, weekInterval, daysOfYear

Defined in: [index.ts:233](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L233)

___

### daysOfWeek

• `Optional` **daysOfWeek**: *number*[]

Days of the week (specified as 0-6, where 0 is Sunday and 6 is Saturday). Not compatible with dayInterval, weekInterval, daysOfYear, daysOfMonth

Defined in: [index.ts:235](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L235)

___

### daysOfYear

• `Optional` **daysOfYear**: *number*[]

Days of the year on which this should fire. E.g. to run on the 88th day of the year, specify `[88]`. Note that not all months have >28 days. Not compatible with dayInterval, weekInterval, daysOfWeek

Defined in: [index.ts:237](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L237)

___

### endingOn

• `Optional` **endingOn**: Date

Ending date for this schedule

Defined in: [index.ts:219](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L219)

___

### hours

• **hours**: *number*[]

Hours (in local time) on which this schedule should fire

Defined in: [index.ts:223](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L223)

___

### minutes

• `Optional` **minutes**: *number*[]

Minutes on which this should fire (e.g. [0, 30] for on the hour and half-hour) (default [0])

Defined in: [index.ts:227](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L227)

___

### monthsOfYear

• `Optional` **monthsOfYear**: *number*[]

Months of the year on which this should fire. Not compatible with dayInterval, weekInterval, daysOfYear

Defined in: [index.ts:231](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L231)

___

### orderInMonth

• `Optional` **orderInMonth**: *number*[]

Order of the weekday to fire. For example, to run on the first friday, use `{orderInMonth: [1], daysOfWeek:[5]}`. Note that using this requires specifying `daysOfWeek`. Not compatibile with dayInterval, weekInterval, daysOfMonth, daysOfYear

Defined in: [index.ts:241](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L241)

___

### seconds

• `Optional` **seconds**: *number*[]

Seconds on which this should file (default [0])

Defined in: [index.ts:229](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L229)

___

### startingOn

• `Optional` **startingOn**: Date

Starting date for this schedule (matters for dayInterval and weekInterval)

Defined in: [index.ts:215](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L215)

___

### timezone

• **timezone**: *string*

Time zone to define local time rule (e.g. daylight savings)

Defined in: [index.ts:211](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L211)

___

### weekInterval

• `Optional` **weekInterval**: *number*

Weeks to wait between runs, starting from the startsOn date. This can run multiple times per day or on multiple weekdays based on daysOfWeek. Not compatible with dayInterval, monthsOfYear, daysOfYear

Defined in: [index.ts:239](https://github.com/rhdeck/interval-manager/blob/e79570a/src/index.ts#L239)
