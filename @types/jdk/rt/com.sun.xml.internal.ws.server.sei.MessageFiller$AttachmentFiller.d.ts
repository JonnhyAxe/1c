declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class MessageFiller$AttachmentFiller extends com.sun.xml.internal.ws.server.sei.MessageFiller {
                                protected readonly param: com.sun.xml.internal.ws.model.ParameterImpl
                                protected readonly getter: com.sun.xml.internal.ws.server.sei.ValueGetter
                                protected readonly mimeType: string
                                protected constructor(arg0: com.sun.xml.internal.ws.model.ParameterImpl, arg1: com.sun.xml.internal.ws.server.sei.ValueGetter | com.sun.xml.internal.ws.server.sei.ValueGetter$$Lambda)
                                public static createAttachmentFiller(arg0: com.sun.xml.internal.ws.model.ParameterImpl, arg1: com.sun.xml.internal.ws.server.sei.ValueGetter | com.sun.xml.internal.ws.server.sei.ValueGetter$$Lambda): com.sun.xml.internal.ws.server.sei.MessageFiller
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}