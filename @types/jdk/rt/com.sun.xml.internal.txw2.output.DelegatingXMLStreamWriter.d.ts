declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
                        abstract class DelegatingXMLStreamWriter implements javax.xml.stream.XMLStreamWriter {
                            public constructor(arg0: javax.xml.stream.XMLStreamWriter)
                            public writeStartElement(arg0: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeEmptyElement(arg0: java.lang.String | string): void
                            public writeEndElement(): void
                            public writeEndDocument(): void
                            public close(): void
                            public flush(): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                            public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public writeNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeDefaultNamespace(arg0: java.lang.String | string): void
                            public writeComment(arg0: java.lang.String | string): void
                            public writeProcessingInstruction(arg0: java.lang.String | string): void
                            public writeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeCData(arg0: java.lang.String | string): void
                            public writeDTD(arg0: java.lang.String | string): void
                            public writeEntityRef(arg0: java.lang.String | string): void
                            public writeStartDocument(): void
                            public writeStartDocument(arg0: java.lang.String | string): void
                            public writeStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public writeCharacters(arg0: java.lang.String | string): void
                            public writeCharacters(arg0: char[], arg1: int, arg2: int): void
                            public getPrefix(arg0: java.lang.String | string): string
                            public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public setDefaultNamespace(arg0: java.lang.String | string): void
                            public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                            public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                            public getProperty(arg0: java.lang.String | string): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}