declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace models {
                                    class XSDFACM implements com.sun.org.apache.xerces.internal.impl.xs.models.XSCMValidator {
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.dtd.models.CMNode, arg1: int)
                                        public isFinalState(arg0: int): boolean
                                        public oneTransition(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int[], arg2: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): java.lang.Object
                                        public startContentModel(): int[]
                                        public endContentModel(arg0: int[]): boolean
                                        public checkUniqueParticleAttribution(arg0: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): boolean
                                        public whatCanGoHere(arg0: int[]): java.util.Vector
                                        public checkMinMaxBounds(): java.util.ArrayList
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
}