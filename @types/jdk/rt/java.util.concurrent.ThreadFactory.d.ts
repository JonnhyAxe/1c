declare namespace java {
    namespace util {
        namespace concurrent {
            interface ThreadFactory {
                newThread(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.lang.Thread
            }
            interface ThreadFactory$$Lambda {
                (arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.lang.Thread
            }
        }
    }
}