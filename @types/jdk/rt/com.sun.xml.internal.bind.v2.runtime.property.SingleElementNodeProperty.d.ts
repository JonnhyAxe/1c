declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace property {
                                class SingleElementNodeProperty<BeanT, ValueT> extends com.sun.xml.internal.bind.v2.runtime.property.PropertyImpl<BeanT> {
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementPropertyInfo)
                                    public wrapUp(): void
                                    public reset(arg0: BeanT): void
                                    public getIdValue(arg0: BeanT): string
                                    public serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg2: java.lang.Object): void
                                    public buildChildElementUnmarshallers(arg0: com.sun.xml.internal.bind.v2.runtime.property.UnmarshallerChain, arg1: com.sun.xml.internal.bind.v2.util.QNameMap<com.sun.xml.internal.bind.v2.runtime.unmarshaller.ChildLoader>): void
                                    public getKind(): com.sun.xml.internal.bind.v2.model.core.PropertyKind
                                    public getElementPropertyAccessor(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor
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