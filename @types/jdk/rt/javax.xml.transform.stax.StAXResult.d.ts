declare namespace javax {
    namespace xml {
        namespace transform {
            namespace stax {
                class StAXResult implements javax.xml.transform.Result {
                    public static readonly FEATURE: string
                    public constructor(arg0: javax.xml.stream.XMLEventWriter)
                    public constructor(arg0: javax.xml.stream.XMLStreamWriter)
                    public getXMLEventWriter(): javax.xml.stream.XMLEventWriter
                    public getXMLStreamWriter(): javax.xml.stream.XMLStreamWriter
                    public setSystemId(arg0: java.lang.String | string): void
                    public getSystemId(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}