declare namespace javax {
    namespace xml {
        namespace bind {
            namespace attachment {
                abstract class AttachmentUnmarshaller {
                    public constructor()
                    public abstract getAttachmentAsDataHandler(arg0: java.lang.String | string): javax.activation.DataHandler
                    public abstract getAttachmentAsByteArray(arg0: java.lang.String | string): byte[]
                    public isXOPPackage(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}