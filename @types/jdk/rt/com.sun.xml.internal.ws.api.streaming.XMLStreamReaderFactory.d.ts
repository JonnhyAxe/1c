declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace streaming {
                            abstract class XMLStreamReaderFactory {
                                public constructor()
                                public static set(arg0: com.sun.xml.internal.ws.api.streaming.XMLStreamReaderFactory): void
                                public static get(): com.sun.xml.internal.ws.api.streaming.XMLStreamReaderFactory
                                public static create(arg0: org.xml.sax.InputSource, arg1: boolean): javax.xml.stream.XMLStreamReader
                                public static create(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: boolean): javax.xml.stream.XMLStreamReader
                                public static create(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.lang.String | string, arg3: boolean): javax.xml.stream.XMLStreamReader
                                public static create(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: boolean): javax.xml.stream.XMLStreamReader
                                public static recycle(arg0: javax.xml.stream.XMLStreamReader): void
                                public abstract doCreate(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: boolean): javax.xml.stream.XMLStreamReader
                                public abstract doCreate(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: boolean): javax.xml.stream.XMLStreamReader
                                public abstract doRecycle(arg0: javax.xml.stream.XMLStreamReader): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}