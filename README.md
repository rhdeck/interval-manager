
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
* --reference-date \<`isoDate`> ISO-8601 representation of the reference (default: `2021-03-29T12:10:31.069Z`)
* --starting-date \<`isoDate`> ISO-8601 representation of the date the interval had started (default: `2021-03-29T12:10:31.069Z`)
* --ending-date \<`isoDate`> ISO-8601 representation of the date the interval had ended (default: `2021-03-29T12:10:31.069Z`)
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

@raydeck/interval-manager - v1.0.2

# @raydeck/interval-manager - v1.0.2

## Table of contents

### Interfaces

- [IntervalSchedule](#interfacesintervalschedulemd)

### Functions

- [getNextDate](#getnextdate)
- [isValidTimeZone](#isvalidtimezone)
- [validateSchedule](#validateschedule)

## Functions

### getNextDate

▸ **getNextDate**(`schedule`: [*IntervalSchedule*](#interfacesintervalschedulemd), `startingOn?`: Date, `nowDate?`: Date): Date

#### Parameters:

Name | Type |
:------ | :------ |
`schedule` | [*IntervalSchedule*](#interfacesintervalschedulemd) |
`startingOn` | Date |
`nowDate` | Date |

**Returns:** Date

Defined in: [index.ts:2](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L2)

___

### isValidTimeZone

▸ **isValidTimeZone**(`tz`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`tz` | *string* |

**Returns:** *boolean*

Defined in: [index.ts:298](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L298)

___

### validateSchedule

▸ **validateSchedule**(`__namedParameters`: [*IntervalSchedule*](#interfacesintervalschedulemd)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*IntervalSchedule*](#interfacesintervalschedulemd) |

**Returns:** *void*

Defined in: [index.ts:197](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L197)


<a name="interfacesintervalschedulemd"></a>

[@raydeck/interval-manager - v1.0.2](#readmemd) / IntervalSchedule

# Interface: IntervalSchedule

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

Defined in: [index.ts:195](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L195)

___

### daysOfMonth

• `Optional` **daysOfMonth**: *number*[]

Defined in: [index.ts:190](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L190)

___

### daysOfWeek

• `Optional` **daysOfWeek**: *number*[]

Defined in: [index.ts:191](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L191)

___

### daysOfYear

• `Optional` **daysOfYear**: *number*[]

Defined in: [index.ts:192](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L192)

___

### endingOn

• `Optional` **endingOn**: Date

Defined in: [index.ts:185](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L185)

___

### hours

• **hours**: *number*[]

Defined in: [index.ts:186](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L186)

___

### minutes

• `Optional` **minutes**: *number*[]

Defined in: [index.ts:187](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L187)

___

### monthsOfYear

• `Optional` **monthsOfYear**: *number*[]

Defined in: [index.ts:189](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L189)

___

### orderInMonth

• `Optional` **orderInMonth**: *number*[]

Defined in: [index.ts:194](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L194)

___

### seconds

• `Optional` **seconds**: *number*[]

Defined in: [index.ts:188](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L188)

___

### startingOn

• `Optional` **startingOn**: Date

Defined in: [index.ts:184](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L184)

___

### timezone

• **timezone**: *string*

Defined in: [index.ts:183](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L183)

___

### weekInterval

• `Optional` **weekInterval**: *number*

Defined in: [index.ts:193](https://github.com/rhdeck/interval-manager/blob/32ce88d/src/index.ts#L193)
