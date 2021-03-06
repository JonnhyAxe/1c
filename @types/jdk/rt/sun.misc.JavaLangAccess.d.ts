declare namespace sun {
    namespace misc {
        interface JavaLangAccess {
            getConstantPool(arg0: java.lang.Class<any>): sun.reflect.ConstantPool
            casAnnotationType(arg0: java.lang.Class<any>, arg1: sun.reflect.annotation.AnnotationType, arg2: sun.reflect.annotation.AnnotationType): boolean
            getAnnotationType(arg0: java.lang.Class<any>): sun.reflect.annotation.AnnotationType
            getDeclaredAnnotationMap(arg0: java.lang.Class<any>): java.util.Map<java.lang.Class<java.lang.annotation.Annotation>, java.lang.annotation.Annotation>
            getRawClassAnnotations(arg0: java.lang.Class<any>): byte[]
            getRawClassTypeAnnotations(arg0: java.lang.Class<any>): byte[]
            getRawExecutableTypeAnnotations(arg0: java.lang.reflect.Executable): byte[]
            getEnumConstantsShared<E extends java.lang.Enum<E>>(arg0: java.lang.Class<E>): E[]
            blockedOn<E extends java.lang.Enum<E>>(arg0: java.lang.Thread, arg1: sun.nio.ch.Interruptible | sun.nio.ch.Interruptible$$Lambda): void
            registerShutdownHook<E extends java.lang.Enum<E>>(arg0: int, arg1: boolean, arg2: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            getStackTraceDepth<E extends java.lang.Enum<E>>(arg0: java.lang.Throwable): int
            getStackTraceElement<E extends java.lang.Enum<E>>(arg0: java.lang.Throwable, arg1: int): java.lang.StackTraceElement
            newStringUnsafe<E extends java.lang.Enum<E>>(arg0: char[]): string
            newThreadWithAcc<E extends java.lang.Enum<E>>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.security.AccessControlContext): java.lang.Thread
            invokeFinalize<E extends java.lang.Enum<E>>(arg0: java.lang.Object): void
        }
    }
}