declare namespace com {
    namespace sun {
        namespace istack {
            namespace internal {
                abstract class Pool$Impl<T> implements com.sun.istack.internal.Pool<T> {
                    public constructor()
                    public take(): T
                    public recycle(arg0: T): void
                    protected abstract create(): T
                    public static class: java.lang.Class<any>
                }
                interface Pool$Impl$$Lambda<T> implements com.sun.istack.internal.Pool<T> {
                    (): T
                }
            }
        }
    }
}