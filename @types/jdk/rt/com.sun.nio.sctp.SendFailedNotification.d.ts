declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class SendFailedNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public abstract association(): com.sun.nio.sctp.Association
                    public abstract address(): java.net.SocketAddress
                    public abstract buffer(): java.nio.ByteBuffer
                    public abstract errorCode(): int
                    public abstract streamNumber(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}