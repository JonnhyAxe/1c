declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class MtomCodec extends com.sun.xml.internal.ws.encoding.MimeCodec {
                            public static XOP_XML_MIME_TYPE: string
                            public static XOP_LOCALNAME: string
                            public static XOP_NAMESPACEURI: string
                            public getStaticContentType(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.ContentType
                            public static getStaticContentTypeStatic(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.pipe.ContentType
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream): com.sun.xml.internal.ws.api.pipe.ContentType
                            public static getSOAPXopContentType(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.SOAPVersion, arg2: java.lang.String | string): string
                            public static getActionParameter(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
                            public static writeMimeHeaders(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.io.OutputStream): void
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda): com.sun.xml.internal.ws.api.pipe.ContentType
                            public copy(): com.sun.xml.internal.ws.encoding.MtomCodec
                            protected decode(arg0: com.sun.xml.internal.ws.encoding.MimeMultipartParser, arg1: com.sun.xml.internal.ws.api.message.Packet): void
                            public static determinePacketEncoding(arg0: com.sun.xml.internal.ws.api.message.Packet): string
                            public copy(): com.sun.xml.internal.ws.encoding.MimeCodec
                            public decode(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            public decode(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            public getMimeType(): string
                            public copy(): com.sun.xml.internal.ws.api.pipe.Codec
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}