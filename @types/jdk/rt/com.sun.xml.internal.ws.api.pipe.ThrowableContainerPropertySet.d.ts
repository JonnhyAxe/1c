declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
                            class ThrowableContainerPropertySet extends com.oracle.webservices.internal.api.message.BasePropertySet {
                                public static readonly FIBER_COMPLETION_THROWABLE: string
                                public static readonly FAULT_MESSAGE: string
                                public static readonly RESPONSE_PACKET: string
                                public static readonly IS_FAULT_CREATED: string
                                public constructor(arg0: java.lang.Throwable)
                                public getThrowable(): java.lang.Throwable
                                public setThrowable(arg0: java.lang.Throwable): void
                                public getFaultMessage(): com.sun.xml.internal.ws.api.message.Message
                                public setFaultMessage(arg0: com.sun.xml.internal.ws.api.message.Message): void
                                public getResponsePacket(): com.sun.xml.internal.ws.api.message.Packet
                                public setResponsePacket(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                                public isFaultCreated(): boolean
                                public setFaultCreated(arg0: boolean): void
                                protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}