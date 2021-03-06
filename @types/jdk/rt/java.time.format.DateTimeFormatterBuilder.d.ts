declare namespace java {
    namespace time {
        namespace format {
            class DateTimeFormatterBuilder {
                public static getLocalizedDateTimePattern(arg0: java.time.format.FormatStyle, arg1: java.time.format.FormatStyle, arg2: java.time.chrono.Chronology, arg3: java.util.Locale): string
                public constructor()
                public parseCaseSensitive(): java.time.format.DateTimeFormatterBuilder
                public parseCaseInsensitive(): java.time.format.DateTimeFormatterBuilder
                public parseStrict(): java.time.format.DateTimeFormatterBuilder
                public parseLenient(): java.time.format.DateTimeFormatterBuilder
                public parseDefaulting(arg0: java.time.temporal.TemporalField, arg1: long): java.time.format.DateTimeFormatterBuilder
                public appendValue(arg0: java.time.temporal.TemporalField): java.time.format.DateTimeFormatterBuilder
                public appendValue(arg0: java.time.temporal.TemporalField, arg1: int): java.time.format.DateTimeFormatterBuilder
                public appendValue(arg0: java.time.temporal.TemporalField, arg1: int, arg2: int, arg3: java.time.format.SignStyle): java.time.format.DateTimeFormatterBuilder
                public appendValueReduced(arg0: java.time.temporal.TemporalField, arg1: int, arg2: int, arg3: int): java.time.format.DateTimeFormatterBuilder
                public appendValueReduced(arg0: java.time.temporal.TemporalField, arg1: int, arg2: int, arg3: java.time.chrono.ChronoLocalDate): java.time.format.DateTimeFormatterBuilder
                public appendFraction(arg0: java.time.temporal.TemporalField, arg1: int, arg2: int, arg3: boolean): java.time.format.DateTimeFormatterBuilder
                public appendText(arg0: java.time.temporal.TemporalField): java.time.format.DateTimeFormatterBuilder
                public appendText(arg0: java.time.temporal.TemporalField, arg1: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder
                public appendText(arg0: java.time.temporal.TemporalField, arg1: java.util.Map<java.lang.Long, java.lang.String>): java.time.format.DateTimeFormatterBuilder
                public appendInstant(): java.time.format.DateTimeFormatterBuilder
                public appendInstant(arg0: int): java.time.format.DateTimeFormatterBuilder
                public appendOffsetId(): java.time.format.DateTimeFormatterBuilder
                public appendOffset(arg0: java.lang.String | string, arg1: java.lang.String | string): java.time.format.DateTimeFormatterBuilder
                public appendLocalizedOffset(arg0: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder
                public appendZoneId(): java.time.format.DateTimeFormatterBuilder
                public appendZoneRegionId(): java.time.format.DateTimeFormatterBuilder
                public appendZoneOrOffsetId(): java.time.format.DateTimeFormatterBuilder
                public appendZoneText(arg0: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder
                public appendZoneText(arg0: java.time.format.TextStyle, arg1: java.util.Set<java.time.ZoneId>): java.time.format.DateTimeFormatterBuilder
                public appendChronologyId(): java.time.format.DateTimeFormatterBuilder
                public appendChronologyText(arg0: java.time.format.TextStyle): java.time.format.DateTimeFormatterBuilder
                public appendLocalized(arg0: java.time.format.FormatStyle, arg1: java.time.format.FormatStyle): java.time.format.DateTimeFormatterBuilder
                public appendLiteral(arg0: char): java.time.format.DateTimeFormatterBuilder
                public appendLiteral(arg0: java.lang.String | string): java.time.format.DateTimeFormatterBuilder
                public append(arg0: java.time.format.DateTimeFormatter): java.time.format.DateTimeFormatterBuilder
                public appendOptional(arg0: java.time.format.DateTimeFormatter): java.time.format.DateTimeFormatterBuilder
                public appendPattern(arg0: java.lang.String | string): java.time.format.DateTimeFormatterBuilder
                public padNext(arg0: int): java.time.format.DateTimeFormatterBuilder
                public padNext(arg0: int, arg1: char): java.time.format.DateTimeFormatterBuilder
                public optionalStart(): java.time.format.DateTimeFormatterBuilder
                public optionalEnd(): java.time.format.DateTimeFormatterBuilder
                public toFormatter(): java.time.format.DateTimeFormatter
                public toFormatter(arg0: java.util.Locale): java.time.format.DateTimeFormatter
                public static class: java.lang.Class<any>
            }
        }
    }
}