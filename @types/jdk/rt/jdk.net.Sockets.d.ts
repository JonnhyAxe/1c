declare namespace jdk {
    namespace net {
        class Sockets {
            public static setOption<T>(arg0: java.net.Socket, arg1: java.net.SocketOption<T>, arg2: T): void
            public static getOption<T>(arg0: java.net.Socket, arg1: java.net.SocketOption<T>): T
            public static setOption<T>(arg0: java.net.ServerSocket, arg1: java.net.SocketOption<T>, arg2: T): void
            public static getOption<T>(arg0: java.net.ServerSocket, arg1: java.net.SocketOption<T>): T
            public static setOption<T>(arg0: java.net.DatagramSocket, arg1: java.net.SocketOption<T>, arg2: T): void
            public static getOption<T>(arg0: java.net.DatagramSocket, arg1: java.net.SocketOption<T>): T
            public static supportedOptions<T>(arg0: java.lang.Class<any>): java.util.Set<java.net.SocketOption<any>>
            public static class: java.lang.Class<any>
        }
    }
}