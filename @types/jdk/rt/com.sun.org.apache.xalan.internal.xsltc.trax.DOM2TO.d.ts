declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
                                class DOM2TO implements org.xml.sax.XMLReader , org.xml.sax.ext.Locator2 {
                                    public constructor(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler)
                                    public getContentHandler(): org.xml.sax.ContentHandler
                                    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
                                    public parse(arg0: org.xml.sax.InputSource): void
                                    public parse(): void
                                    public getDTDHandler(): org.xml.sax.DTDHandler
                                    public getErrorHandler(): org.xml.sax.ErrorHandler
                                    public getFeature(arg0: java.lang.String | string): boolean
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public parse(arg0: java.lang.String | string): void
                                    public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
                                    public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                                    public getEntityResolver(): org.xml.sax.EntityResolver
                                    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                                    public getColumnNumber(): int
                                    public getLineNumber(): int
                                    public getPublicId(): string
                                    public getSystemId(): string
                                    public getXMLVersion(): string
                                    public getEncoding(): string
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}