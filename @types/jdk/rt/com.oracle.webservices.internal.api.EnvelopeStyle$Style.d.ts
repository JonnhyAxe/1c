declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    class EnvelopeStyle$Style extends java.lang.Enum<com.oracle.webservices.internal.api.EnvelopeStyle$Style> {
                        public static readonly SOAP11: com.oracle.webservices.internal.api.EnvelopeStyle$Style
                        public static readonly SOAP12: com.oracle.webservices.internal.api.EnvelopeStyle$Style
                        public static readonly XML: com.oracle.webservices.internal.api.EnvelopeStyle$Style
                        public readonly bindingId: string
                        public static values(): com.oracle.webservices.internal.api.EnvelopeStyle$Style[]
                        public static valueOf(arg0: java.lang.String | string): com.oracle.webservices.internal.api.EnvelopeStyle$Style
                        public isSOAP11(): boolean
                        public isSOAP12(): boolean
                        public isXML(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}