declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
                            abstract class StubFactoryDynamicBase extends com.sun.corba.se.impl.presentation.rmi.StubFactoryBase {
                                protected readonly loader: java.lang.ClassLoader
                                public constructor(arg0: com.sun.corba.se.spi.presentation.rmi.PresentationManager$ClassData, arg1: java.lang.ClassLoader)
                                public abstract makeStub(): org.omg.CORBA.Object
                                public static class: java.lang.Class<any>
                            }
                            interface StubFactoryDynamicBase$$Lambda extends com.sun.corba.se.impl.presentation.rmi.StubFactoryBase {
                                (): org.omg.CORBA.Object
                            }
                        }
                    }
                }
            }
        }
    }
}