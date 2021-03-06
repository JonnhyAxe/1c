declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
                                class SoftReferenceGrammarPool implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool {
                                    protected static readonly TABLE_SIZE: int
                                    protected static readonly ZERO_LENGTH_GRAMMAR_ARRAY: com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]
                                    protected fGrammars: com.sun.org.apache.xerces.internal.jaxp.validation.SoftReferenceGrammarPool$Entry[]
                                    protected fPoolIsLocked: boolean
                                    protected fGrammarCount: int
                                    protected readonly fReferenceQueue: java.lang.ref.ReferenceQueue
                                    public constructor()
                                    public constructor(arg0: int)
                                    public retrieveInitialGrammarSet(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]
                                    public cacheGrammars(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]): void
                                    public retrieveGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    public putGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.Grammar | com.sun.org.apache.xerces.internal.xni.grammars.Grammar$$Lambda): void
                                    public getGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    public removeGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    public containsGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): boolean
                                    public lockPool(): void
                                    public unlockPool(): void
                                    public clear(): void
                                    public equals(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): boolean
                                    public hashCode(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): int
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