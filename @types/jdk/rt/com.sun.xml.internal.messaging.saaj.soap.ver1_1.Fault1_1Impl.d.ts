declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_1 {
                                class Fault1_1Impl extends com.sun.xml.internal.messaging.saaj.soap.impl.FaultImpl {
                                    protected static readonly log: java.util.logging.Logger
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string)
                                    protected getDetailName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getFaultCodeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getFaultStringName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getFaultActorName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected createDetail(): com.sun.xml.internal.messaging.saaj.soap.impl.DetailImpl
                                    protected createSOAPFaultElement(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    protected checkIfStandardFaultCode(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    protected finallySetFaultCode(arg0: java.lang.String | string): void
                                    public getFaultCode(): string
                                    public getFaultCodeAsName(): javax.xml.soap.Name
                                    public getFaultCodeAsQName(): javax.xml.namespace.QName
                                    public setFaultString(arg0: java.lang.String | string): void
                                    public getFaultString(): string
                                    public getFaultStringLocale(): java.util.Locale
                                    public setFaultString(arg0: java.lang.String | string, arg1: java.util.Locale): void
                                    protected isStandardFaultElement(arg0: java.lang.String | string): boolean
                                    public appendFaultSubcode(arg0: javax.xml.namespace.QName): void
                                    public removeAllFaultSubcodes(): void
                                    public getFaultSubcodes(): java.util.Iterator
                                    public getFaultReasonText(arg0: java.util.Locale): string
                                    public getFaultReasonTexts(): java.util.Iterator
                                    public getFaultReasonLocales(): java.util.Iterator
                                    public addFaultReasonText(arg0: java.lang.String | string, arg1: java.util.Locale): void
                                    public getFaultRole(): string
                                    public setFaultRole(arg0: java.lang.String | string): void
                                    public getFaultNode(): string
                                    public setFaultNode(arg0: java.lang.String | string): void
                                    protected getDefaultFaultCode(): javax.xml.namespace.QName
                                    public addChildElement(arg0: javax.xml.soap.SOAPElement): javax.xml.soap.SOAPElement
                                    protected createSOAPFaultElement(arg0: javax.xml.namespace.QName): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    protected createSOAPFaultElement(arg0: javax.xml.soap.Name): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    public setFaultCode(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public setFaultActor(arg0: java.lang.String | string): void
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