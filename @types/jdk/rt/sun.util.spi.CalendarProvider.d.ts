declare namespace sun {
    namespace util {
        namespace spi {
            abstract class CalendarProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getInstance(arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.Calendar
                public static class: java.lang.Class<any>
            }
            interface CalendarProvider$$Lambda extends java.util.spi.LocaleServiceProvider {
                (arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.Calendar
            }
        }
    }
}