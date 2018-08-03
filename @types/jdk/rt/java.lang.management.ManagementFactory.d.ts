declare namespace java {
    namespace lang {
        namespace management {
            class ManagementFactory {
                public static CLASS_LOADING_MXBEAN_NAME: string
                public static COMPILATION_MXBEAN_NAME: string
                public static GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE: string
                public static MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE: string
                public static MEMORY_MXBEAN_NAME: string
                public static MEMORY_POOL_MXBEAN_DOMAIN_TYPE: string
                public static OPERATING_SYSTEM_MXBEAN_NAME: string
                public static RUNTIME_MXBEAN_NAME: string
                public static THREAD_MXBEAN_NAME: string
                public static getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
                public static getCompilationMXBean(): java.lang.management.CompilationMXBean
                public static getGarbageCollectorMXBeans(): java.util.List<java.lang.management.GarbageCollectorMXBean>
                public static getMemoryManagerMXBeans(): java.util.List<java.lang.management.MemoryManagerMXBean>
                public static getMemoryMXBean(): java.lang.management.MemoryMXBean
                public static getMemoryPoolMXBeans(): java.util.List<java.lang.management.MemoryPoolMXBean>
                public static getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
                public static getPlatformMBeanServer(): javax.management.MBeanServer
                public static getRuntimeMXBean(): java.lang.management.RuntimeMXBean
                public static getThreadMXBean(): java.lang.management.ThreadMXBean
                public static newPlatformMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: java.lang.String | string, arg2: java.lang.Class<T>): T
                public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(arg0: java.lang.Class<T>): T
                public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(arg0: java.lang.Class<T>): java.util.List<T>
                public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(arg0: javax.management.MBeanServerConnection, arg1: java.lang.Class<T>): T
                public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(arg0: javax.management.MBeanServerConnection, arg1: java.lang.Class<T>): java.util.List<T>
                public static getPlatformManagementInterfaces(): java.util.Set<java.lang.Class<java.lang.management.PlatformManagedObject>>
                public static class: java.lang.Class<any>
            }
        }
    }
}