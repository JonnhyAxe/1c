declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class CachingParserPool$SynchronizedGrammarPool implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool {
                                public constructor(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                public retrieveInitialGrammarSet(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]
                                public retrieveGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public cacheGrammars(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]): void
                                public lockPool(): void
                                public clear(): void
                                public unlockPool(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}