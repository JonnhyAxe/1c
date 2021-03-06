declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class JAXBContextImpl extends com.sun.xml.internal.bind.api.JAXBRIContext {
                                protected beanInfos: java.util.Map<com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfo, com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo>
                                public readonly marshallerPool: com.sun.istack.internal.Pool<javax.xml.bind.Marshaller>
                                public readonly unmarshallerPool: com.sun.istack.internal.Pool<javax.xml.bind.Unmarshaller>
                                public nameBuilder: com.sun.xml.internal.bind.v2.runtime.NameBuilder
                                public readonly nameList: com.sun.xml.internal.bind.v2.runtime.NameList
                                protected readonly c14nSupport: boolean
                                public readonly xmlAccessorFactorySupport: boolean
                                public readonly allNillable: boolean
                                public readonly retainPropertyInfo: boolean
                                public readonly supressAccessorWarnings: boolean
                                public readonly improvedXsiTypeHandling: boolean
                                public readonly disableSecurityProcessing: boolean
                                public readonly fastBoot: boolean
                                public getXmlNsSet(): java.util.Set<javax.xml.bind.annotation.XmlNs>
                                public hasSwaRef(): boolean
                                public getRuntimeTypeInfoSet(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet
                                public getTypeInfoSet(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet
                                public getElement(arg0: java.lang.Class, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.runtime.ElementBeanInfoImpl
                                protected getOrCreate(arg0: com.sun.xml.internal.bind.v2.model.runtime.RuntimeEnumLeafInfo): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
                                protected getOrCreate(arg0: com.sun.xml.internal.bind.v2.model.runtime.RuntimeClassInfo): com.sun.xml.internal.bind.v2.runtime.ClassBeanInfoImpl
                                protected getOrCreate(arg0: com.sun.xml.internal.bind.v2.model.runtime.RuntimeArrayInfo): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
                                public getOrCreate(arg0: com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfo): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
                                public getBeanInfo(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
                                public getBeanInfo(arg0: java.lang.Object, arg1: boolean): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
                                public getBeanInfo<T>(arg0: java.lang.Class<T>): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<T>
                                public getBeanInfo<T>(arg0: java.lang.Class<T>, arg1: boolean): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<T>
                                public selectRootLoader<T>(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                public getGlobalType<T>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
                                public getNearestTypeName<T>(arg0: javax.xml.namespace.QName): string
                                public getValidRootNames<T>(): java.util.Set<javax.xml.namespace.QName>
                                public getUTF8NameTable<T>(): com.sun.xml.internal.bind.v2.runtime.output.Encoded[]
                                public getNumberOfLocalNames<T>(): int
                                public getNumberOfElementNames<T>(): int
                                public getNumberOfAttributeNames<T>(): int
                                public static createTransformerHandler<T>(arg0: boolean): javax.xml.transform.sax.TransformerHandler
                                public createMarshaller<T>(): com.sun.xml.internal.bind.v2.runtime.MarshallerImpl
                                public createUnmarshaller<T>(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallerImpl
                                public createValidator<T>(): javax.xml.bind.Validator
                                public createJAXBIntrospector<T>(): javax.xml.bind.JAXBIntrospector
                                public generateEpisode<T>(arg0: javax.xml.transform.Result): void
                                public generateSchema<T>(arg0: javax.xml.bind.SchemaOutputResolver | javax.xml.bind.SchemaOutputResolver$$Lambda): void
                                public getTypeName<T>(arg0: com.sun.xml.internal.bind.api.TypeReference): javax.xml.namespace.QName
                                public createBinder<T>(arg0: java.lang.Class<T>): javax.xml.bind.Binder<T>
                                public createBinder<T>(): javax.xml.bind.Binder<org.w3c.dom.Node>
                                public getElementName<T>(arg0: java.lang.Object): javax.xml.namespace.QName
                                public getElementName<T>(arg0: java.lang.Class): javax.xml.namespace.QName
                                public createBridge<T>(arg0: com.sun.xml.internal.bind.api.TypeReference): com.sun.xml.internal.bind.api.Bridge
                                public createBridgeContext<T>(): com.sun.xml.internal.bind.api.BridgeContext
                                public getElementPropertyAccessor<T>(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.bind.api.RawAccessor
                                public getKnownNamespaceURIs<T>(): java.util.List<java.lang.String>
                                public getBuildId<T>(): string
                                public toString<T>(): string
                                public getXMIMEContentType<T>(arg0: java.lang.Object): string
                                public createAugmented<T>(arg0: java.lang.Class<any>): com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                                public createMarshaller<T>(): javax.xml.bind.Marshaller
                                public createUnmarshaller<T>(): javax.xml.bind.Unmarshaller
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}