declare namespace javax {
    namespace net {
        namespace ssl {
            interface HandshakeCompletedListener extends java.util.EventListener {
                handshakeCompleted(arg0: javax.net.ssl.HandshakeCompletedEvent): void
            }
            interface HandshakeCompletedListener$$Lambda extends java.util.EventListener {
                (arg0: javax.net.ssl.HandshakeCompletedEvent): void
            }
        }
    }
}