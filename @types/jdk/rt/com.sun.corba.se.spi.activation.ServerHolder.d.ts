declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        class ServerHolder implements org.omg.CORBA.portable.Streamable {
                            public value: com.sun.corba.se.spi.activation.Server
                            public constructor()
                            public constructor(arg0: com.sun.corba.se.spi.activation.Server)
                            public _read(arg0: org.omg.CORBA.portable.InputStream): void
                            public _write(arg0: org.omg.CORBA.portable.OutputStream): void
                            public _type(): org.omg.CORBA.TypeCode
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}