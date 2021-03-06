declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
                abstract class HttpServer {
                    protected constructor()
                    public static create(): com.sun.net.httpserver.HttpServer
                    public static create(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
                    public abstract bind(arg0: java.net.InetSocketAddress, arg1: int): void
                    public abstract start(): void
                    public abstract setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                    public abstract getExecutor(): java.util.concurrent.Executor
                    public abstract stop(arg0: int): void
                    public abstract createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): com.sun.net.httpserver.HttpContext
                    public abstract createContext(arg0: java.lang.String | string): com.sun.net.httpserver.HttpContext
                    public abstract removeContext(arg0: java.lang.String | string): void
                    public abstract removeContext(arg0: com.sun.net.httpserver.HttpContext): void
                    public abstract getAddress(): java.net.InetSocketAddress
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}