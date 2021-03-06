declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLFault extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getName(): string
                                    getMessage(): com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage
                                    getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
                                    getQName(): javax.xml.namespace.QName
                                    getAction(): string
                                    isDefaultAction(): boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}