declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLSocketFactoryImpl extends javax.net.ssl.SSLSocketFactory {
                public constructor()
                public createSocket(): java.net.Socket
                public createSocket(arg0: java.lang.String | string, arg1: int): java.net.Socket
                public createSocket(arg0: java.net.Socket, arg1: java.lang.String | string, arg2: int, arg3: boolean): java.net.Socket
                public createSocket(arg0: java.net.Socket, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: boolean): java.net.Socket
                public createSocket(arg0: java.net.InetAddress, arg1: int): java.net.Socket
                public createSocket(arg0: java.lang.String | string, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
                public createSocket(arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}