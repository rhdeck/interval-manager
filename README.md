
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
* --reference-date \<`isoDate`> ISO-8601 representation of the reference (default: `2021-04-04T12:01:20.980Z`)
* --starting-date \<`isoDate`> ISO-8601 representation of the date the interval had started (default: `2021-04-04T12:01:20.980Z`)
* --ending-date \<`isoDate`> ISO-8601 representation of the date the interval had ended (default: `2021-04-04T12:01:20.980Z`)
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

@raydeck/interval-manager - v1.2.1

# @raydeck/interval-manager - v1.2.1

## Table of contents

### Interfaces

- [IntervalSchedule](#interfacesintervalschedulemd)

### Variables

- [APRIL](#april)
- [AUGUST](#august)
- [DECEMBER](#december)
- [FEBRUARY](#february)
- [FRIDAY](#friday)
- [JANUARY](#january)
- [JULY](#july)
- [JUNE](#june)
- [MARCH](#march)
- [MAY](#may)
- [MONDAY](#monday)
- [NOVEMBER](#november)
- [OCTOBER](#october)
- [SATURDAY](#saturday)
- [SEPTEMBER](#september)
- [SUNDAY](#sunday)
- [THURSDAY](#thursday)
- [TUESDAY](#tuesday)
- [WEDNESDAY](#wednesday)

### Functions

- [getNextDate](#getnextdate)
- [isValidTimeZone](#isvalidtimezone)
- [validateSchedule](#validateschedule)

## Variables

### APRIL

• `Const` **APRIL**: *4*= 4

Defined in: [index.ts:382](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L382)

___

### AUGUST

• `Const` **AUGUST**: *8*= 8

Defined in: [index.ts:386](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L386)

___

### DECEMBER

• `Const` **DECEMBER**: *12*= 12

Defined in: [index.ts:390](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L390)

___

### FEBRUARY

• `Const` **FEBRUARY**: *2*= 2

Defined in: [index.ts:380](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L380)

___

### FRIDAY

• `Const` **FRIDAY**: *5*= 5

Defined in: [index.ts:377](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L377)

___

### JANUARY

• `Const` **JANUARY**: *1*= 1

Defined in: [index.ts:379](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L379)

___

### JULY

• `Const` **JULY**: *7*= 7

Defined in: [index.ts:385](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L385)

___

### JUNE

• `Const` **JUNE**: *6*= 6

Defined in: [index.ts:384](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L384)

___

### MARCH

• `Const` **MARCH**: *3*= 3

Defined in: [index.ts:381](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L381)

___

### MAY

• `Const` **MAY**: *5*= 5

Defined in: [index.ts:383](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L383)

___

### MONDAY

• `Const` **MONDAY**: *1*= 1

Defined in: [index.ts:373](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L373)

___

### NOVEMBER

• `Const` **NOVEMBER**: *11*= 11

Defined in: [index.ts:389](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L389)

___

### OCTOBER

• `Const` **OCTOBER**: *10*= 10

Defined in: [index.ts:388](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L388)

___

### SATURDAY

• `Const` **SATURDAY**: *6*= 6

Defined in: [index.ts:378](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L378)

___

### SEPTEMBER

• `Const` **SEPTEMBER**: *9*= 9

Defined in: [index.ts:387](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L387)

___

### SUNDAY

• `Const` **SUNDAY**: *0*= 0

Defined in: [index.ts:372](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L372)

___

### THURSDAY

• `Const` **THURSDAY**: *4*= 4

Defined in: [index.ts:376](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L376)

___

### TUESDAY

• `Const` **TUESDAY**: *2*= 2

Defined in: [index.ts:374](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L374)

___

### WEDNESDAY

• `Const` **WEDNESDAY**: *3*= 3

Defined in: [index.ts:375](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L375)

## Functions

### getNextDate

▸ **getNextDate**(`schedule`: [*IntervalSchedule*](#interfacesintervalschedulemd), `startingOn?`: Date, `nowDate?`: Date): Date

Get the next date/time after the specified reference date

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`schedule` | [*IntervalSchedule*](#interfacesintervalschedulemd) | IntervalSchedule that defines this interval pattern   |
`startingOn` | Date | Date the schedule starts on. Matters for dayInterval and weekInterval only. Defaults to now   |
`nowDate` | Date | Date the result must be after. Defaults to now   |

**Returns:** Date

Date with the next time this schedule should fire

Defined in: [index.ts:10](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L10)

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

Defined in: [index.ts:360](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L360)

___

### validateSchedule

▸ **validateSchedule**(`schedule`: [*IntervalSchedule*](#interfacesintervalschedulemd)): *void*

Assert-style validator of whether a given IntervalSchedule contains valid values. Throws if not

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`schedule` | [*IntervalSchedule*](#interfacesintervalschedulemd) | IntervalSchedule to test    |

**Returns:** *void*

Defined in: [index.ts:235](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L235)


<a name="interfacesintervalschedulemd"></a>

[@raydeck/interval-manager - v1.2.1](#readmemd) / IntervalSchedule

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

Defined in: [index.ts:229](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L229)

___

### daysOfMonth

• `Optional` **daysOfMonth**: *number*[]

Days of the month on which this should fire. Note that not all months have >28 days. Not compatible with dayInterval, weekInterval, daysOfYear

Defined in: [index.ts:219](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L219)

___

### daysOfWeek

• `Optional` **daysOfWeek**: *number*[]

Days of the week (specified as 0-6, where 0 is Sunday and 6 is Saturday). Not compatible with dayInterval, weekInterval, daysOfYear, daysOfMonth

Defined in: [index.ts:221](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L221)

___

### daysOfYear

• `Optional` **daysOfYear**: *number*[]

Days of the year on which this should fire. E.g. to run on the 88th day of the year, specify `[88]`. Note that not all months have >28 days. Not compatible with dayInterval, weekInterval, daysOfWeek

Defined in: [index.ts:223](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L223)

___

### endingOn

• `Optional` **endingOn**: Date

Ending date for this schedule

Defined in: [index.ts:205](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L205)

___

### hours

• **hours**: *number*[]

Hours (in local time) on which this schedule should fire

Defined in: [index.ts:209](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L209)

___

### minutes

• `Optional` **minutes**: *number*[]

Minutes on which this should fire (e.g. [0, 30] for on the hour and half-hour) (default [0])

Defined in: [index.ts:213](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L213)

___

### monthsOfYear

• `Optional` **monthsOfYear**: *number*[]

Months of the year on which this should fire. Not compatible with dayInterval, weekInterval, daysOfYear

Defined in: [index.ts:217](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L217)

___

### orderInMonth

• `Optional` **orderInMonth**: *number*[]

Order of the weekday to fire. For example, to run on the first friday, use `{orderInMonth: [1], daysOfWeek:[5]}`. Note that using this requires specifying `daysOfWeek`. Not compatibile with dayInterval, weekInterval, daysOfMonth, daysOfYear

Defined in: [index.ts:227](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L227)

___

### seconds

• `Optional` **seconds**: *number*[]

Seconds on which this should file (default [0])

Defined in: [index.ts:215](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L215)

___

### startingOn

• `Optional` **startingOn**: Date

Starting date for this schedule (matters for dayInterval and weekInterval)

Defined in: [index.ts:201](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L201)

___

### timezone

• **timezone**: *string*

Time zone to define local time rule (e.g. daylight savings)

Defined in: [index.ts:197](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L197)

___

### weekInterval

• `Optional` **weekInterval**: *number*

Weeks to wait between runs, starting from the startsOn date. This can run multiple times per day or on multiple weekdays based on daysOfWeek. Not compatible with dayInterval, monthsOfYear, daysOfYear

Defined in: [index.ts:225](https://github.com/rhdeck/interval-manager/blob/0da1917/src/index.ts#L225)
