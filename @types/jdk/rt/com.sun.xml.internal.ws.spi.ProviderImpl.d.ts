declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        class ProviderImpl extends javax.xml.ws.spi.Provider {
                            public static readonly INSTANCE: com.sun.xml.internal.ws.spi.ProviderImpl
                            public constructor()
                            public createEndpoint(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
                            public createServiceDelegate(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: java.lang.Class): javax.xml.ws.spi.ServiceDelegate
                            public createServiceDelegate(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: java.lang.Class, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.spi.ServiceDelegate
                            public createServiceDelegate(arg0: javax.xml.transform.Source, arg1: javax.xml.namespace.QName, arg2: java.lang.Class): javax.xml.ws.spi.ServiceDelegate
                            public createAndPublishEndpoint(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
                            public createEndpoint(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                            public createAndPublishEndpoint(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                            public createEndpoint(arg0: java.lang.String | string, arg1: java.lang.Class, arg2: javax.xml.ws.spi.Invoker, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                            public readEndpointReference(arg0: javax.xml.transform.Source): javax.xml.ws.EndpointReference
                            public getPort<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                            public createW3CEndpointReference<T>(arg0: java.lang.String | string, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName, arg3: java.util.List<org.w3c.dom.Element>, arg4: java.lang.String | string, arg5: java.util.List<org.w3c.dom.Element>): javax.xml.ws.wsaddressing.W3CEndpointReference
                            public createW3CEndpointReference<T>(arg0: java.lang.String | string, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: java.util.List<org.w3c.dom.Element>, arg5: java.lang.String | string, arg6: java.util.List<org.w3c.dom.Element>, arg7: java.util.List<org.w3c.dom.Element>, arg8: java.util.Map<javax.xml.namespace.QName, java.lang.String>): javax.xml.ws.wsaddressing.W3CEndpointReference
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}