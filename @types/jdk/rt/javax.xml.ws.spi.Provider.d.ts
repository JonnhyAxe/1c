declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                abstract class Provider {
                    public static readonly JAXWSPROVIDER_PROPERTY: string
                    protected constructor()
                    public static provider(): javax.xml.ws.spi.Provider
                    public abstract createServiceDelegate(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<javax.xml.ws.Service>): javax.xml.ws.spi.ServiceDelegate
                    public createServiceDelegate(arg0: java.net.URL, arg1: javax.xml.namespace.QName, arg2: java.lang.Class<javax.xml.ws.Service>, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.spi.ServiceDelegate
                    public abstract createEndpoint(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
                    public abstract createAndPublishEndpoint(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
                    public abstract readEndpointReference(arg0: javax.xml.transform.Source): javax.xml.ws.EndpointReference
                    public abstract getPort<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                    public abstract createW3CEndpointReference<T>(arg0: java.lang.String | string, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName, arg3: java.util.List<org.w3c.dom.Element>, arg4: java.lang.String | string, arg5: java.util.List<org.w3c.dom.Element>): javax.xml.ws.wsaddressing.W3CEndpointReference
                    public createW3CEndpointReference<T>(arg0: java.lang.String | string, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: java.util.List<org.w3c.dom.Element>, arg5: java.lang.String | string, arg6: java.util.List<org.w3c.dom.Element>, arg7: java.util.List<org.w3c.dom.Element>, arg8: java.util.Map<javax.xml.namespace.QName, java.lang.String>): javax.xml.ws.wsaddressing.W3CEndpointReference
                    public createAndPublishEndpoint<T>(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                    public createEndpoint<T>(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                    public createEndpoint<T>(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: javax.xml.ws.spi.Invoker, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}