declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class ShortSeqHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: short[]): void
                public static extract(arg0: org.omg.CORBA.Any): short[]
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): short[]
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: short[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}