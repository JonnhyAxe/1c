declare namespace java {
    namespace lang {
        abstract class ProcessBuilder$Redirect {
            public static readonly PIPE: java.lang.ProcessBuilder$Redirect
            public static readonly INHERIT: java.lang.ProcessBuilder$Redirect
            public abstract type(): java.lang.ProcessBuilder$Redirect$Type
            public file(): java.io.File
            public static from(arg0: java.io.File): java.lang.ProcessBuilder$Redirect
            public static to(arg0: java.io.File): java.lang.ProcessBuilder$Redirect
            public static appendTo(arg0: java.io.File): java.lang.ProcessBuilder$Redirect
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        interface ProcessBuilder$Redirect$$Lambda {
            (): java.lang.ProcessBuilder$Redirect$Type
        }
    }
}