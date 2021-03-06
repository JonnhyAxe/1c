declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                abstract class MessageToken_v2 extends sun.security.jgss.krb5.Krb5Token {
                    protected static readonly TOKEN_HEADER_SIZE: int
                    protected static readonly CONFOUNDER_SIZE: int
                    protected tokenData: byte[]
                    protected tokenDataLen: int
                    public getTokenId(): int
                    public getKeyUsage(): int
                    public getConfState(): boolean
                    public genSignAndSeqNumber(arg0: org.ietf.jgss.MessageProp, arg1: byte[], arg2: int, arg3: int): void
                    public verifySign(arg0: byte[], arg1: int, arg2: int): boolean
                    public getSequenceNumber(): int
                    protected encodeHeader(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public abstract encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    protected getTokenHeader(): byte[]
                    public static class: java.lang.Class<any>
                }
                interface MessageToken_v2$$Lambda extends sun.security.jgss.krb5.Krb5Token {
                    (arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                }
            }
        }
    }
}