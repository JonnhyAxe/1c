declare namespace java {
    namespace util {
        namespace concurrent {
            class Executors {
                public static newFixedThreadPool(arg0: int): java.util.concurrent.ExecutorService
                public static newWorkStealingPool(arg0: int): java.util.concurrent.ExecutorService
                public static newWorkStealingPool(): java.util.concurrent.ExecutorService
                public static newFixedThreadPool(arg0: int, arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.util.concurrent.ExecutorService
                public static newSingleThreadExecutor(): java.util.concurrent.ExecutorService
                public static newSingleThreadExecutor(arg0: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.util.concurrent.ExecutorService
                public static newCachedThreadPool(): java.util.concurrent.ExecutorService
                public static newCachedThreadPool(arg0: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.util.concurrent.ExecutorService
                public static newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService
                public static newSingleThreadScheduledExecutor(arg0: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.util.concurrent.ScheduledExecutorService
                public static newScheduledThreadPool(arg0: int): java.util.concurrent.ScheduledExecutorService
                public static newScheduledThreadPool(arg0: int, arg1: java.util.concurrent.ThreadFactory | java.util.concurrent.ThreadFactory$$Lambda): java.util.concurrent.ScheduledExecutorService
                public static unconfigurableExecutorService(arg0: java.util.concurrent.ExecutorService): java.util.concurrent.ExecutorService
                public static unconfigurableScheduledExecutorService(arg0: java.util.concurrent.ScheduledExecutorService): java.util.concurrent.ScheduledExecutorService
                public static defaultThreadFactory(): java.util.concurrent.ThreadFactory
                public static privilegedThreadFactory(): java.util.concurrent.ThreadFactory
                public static callable<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.Callable<T>
                public static callable<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.Callable<java.lang.Object>
                public static callable<T>(arg0: java.security.PrivilegedAction<any> | java.security.PrivilegedAction$$Lambda<any>): java.util.concurrent.Callable<java.lang.Object>
                public static callable<T>(arg0: java.security.PrivilegedExceptionAction<any> | java.security.PrivilegedExceptionAction$$Lambda<any>): java.util.concurrent.Callable<java.lang.Object>
                public static privilegedCallable<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.Callable<T>
                public static privilegedCallableUsingCurrentClassLoader<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.Callable<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}