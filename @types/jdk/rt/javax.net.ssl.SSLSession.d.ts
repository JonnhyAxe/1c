declare namespace javax {
    namespace net {
        namespace ssl {
            interface SSLSession {
                getId(): byte[]
                getSessionContext(): javax.net.ssl.SSLSessionContext
                getCreationTime(): long
                getLastAccessedTime(): long
                invalidate(): void
                isValid(): boolean
                putValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
                getValue(arg0: java.lang.String | string): java.lang.Object
                removeValue(arg0: java.lang.String | string): void
                getValueNames(): java.lang.String[]
                getPeerCertificates(): java.security.cert.Certificate[]
                getLocalCertificates(): java.security.cert.Certificate[]
                getPeerCertificateChain(): javax.security.cert.X509Certificate[]
                getPeerPrincipal(): java.security.Principal
                getLocalPrincipal(): java.security.Principal
                getCipherSuite(): string
                getProtocol(): string
                getPeerHost(): string
                getPeerPort(): int
                getPacketBufferSize(): int
                getApplicationBufferSize(): int
            }
        }
    }
}