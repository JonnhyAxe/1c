declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
                                abstract class HeaderElementImpl extends com.sun.xml.internal.messaging.saaj.soap.impl.ElementImpl implements javax.xml.soap.SOAPHeaderElement {
                                    protected static RELAY_ATTRIBUTE_LOCAL_NAME: javax.xml.soap.Name
                                    protected static MUST_UNDERSTAND_ATTRIBUTE_LOCAL_NAME: javax.xml.soap.Name
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.soap.Name)
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.namespace.QName)
                                    protected abstract getActorAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getRoleAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getMustunderstandAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getMustunderstandAttributeValue(arg0: java.lang.String | string): boolean
                                    protected abstract getMustunderstandLiteralValue(arg0: boolean): string
                                    protected abstract getRelayAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getRelayAttributeValue(arg0: java.lang.String | string): boolean
                                    protected abstract getRelayLiteralValue(arg0: boolean): string
                                    protected abstract getActorOrRole(): string
                                    public setParentElement(arg0: javax.xml.soap.SOAPElement): void
                                    public setActor(arg0: java.lang.String | string): void
                                    public setRole(arg0: java.lang.String | string): void
                                    public getActor(): string
                                    public getRole(): string
                                    public setMustUnderstand(arg0: boolean): void
                                    public getMustUnderstand(): boolean
                                    public setRelay(arg0: boolean): void
                                    public getRelay(): boolean
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