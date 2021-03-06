declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        abstract class AbstractMessageImpl extends com.sun.xml.internal.ws.api.message.Message {
                            protected readonly soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
                            protected envelopeTag: com.sun.xml.internal.ws.encoding.TagInfoset
                            protected headerTag: com.sun.xml.internal.ws.encoding.TagInfoset
                            protected bodyTag: com.sun.xml.internal.ws.encoding.TagInfoset
                            protected static readonly EMPTY_ATTS: org.xml.sax.helpers.AttributesImpl
                            protected static readonly NULL_LOCATOR: org.xml.sax.helpers.LocatorImpl
                            protected static readonly DEFAULT_TAGS: java.util.List<com.sun.xml.internal.ws.encoding.TagInfoset>
                            protected constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion)
                            public getSOAPVersion(): com.sun.xml.internal.ws.api.SOAPVersion
                            protected constructor(arg0: com.sun.xml.internal.ws.message.AbstractMessageImpl | com.sun.xml.internal.ws.message.AbstractMessageImpl$$Lambda)
                            public readEnvelopeAsSource(): javax.xml.transform.Source
                            public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
                            public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
                            public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
                            public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                            public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                            protected abstract writePayloadTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                            public toSAAJ<T>(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.lang.Boolean | boolean): com.sun.xml.internal.ws.api.message.Message
                            public readAsSOAPMessage<T>(): javax.xml.soap.SOAPMessage
                            public readAsSOAPMessage<T>(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: boolean): javax.xml.soap.SOAPMessage
                            public static class: java.lang.Class<any>
                        }
                        interface AbstractMessageImpl$$Lambda extends com.sun.xml.internal.ws.api.message.Message {
                            (arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                        }
                    }
                }
            }
        }
    }
}