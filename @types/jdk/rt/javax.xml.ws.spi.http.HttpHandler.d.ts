declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                namespace http {
                    abstract class HttpHandler {
                        public constructor()
                        public abstract handle(arg0: javax.xml.ws.spi.http.HttpExchange): void
                        public static class: java.lang.Class<any>
                    }
                    interface HttpHandler$$Lambda {
                        (arg0: javax.xml.ws.spi.http.HttpExchange): void
                    }
                }
            }
        }
    }
}