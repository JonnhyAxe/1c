declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
                        abstract class RawAccessor<B, V> {
                            public constructor()
                            public abstract get(arg0: B): V
                            public abstract set(arg0: B, arg1: V): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}