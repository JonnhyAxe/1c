declare namespace sun {
    namespace util {
        namespace spi {
            abstract class XmlPropertiesProvider {
                protected constructor()
                public abstract load(arg0: java.util.Properties, arg1: java.io.InputStream | java.io.InputStream$$Lambda): void
                public abstract store(arg0: java.util.Properties, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}