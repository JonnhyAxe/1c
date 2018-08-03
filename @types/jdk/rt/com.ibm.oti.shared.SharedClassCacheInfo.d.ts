declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                class SharedClassCacheInfo {
                    public static readonly JVMLEVEL_JAVA5: int
                    public static readonly JVMLEVEL_JAVA6: int
                    public static readonly JVMLEVEL_JAVA7: int
                    public static readonly JVMLEVEL_JAVA8: int
                    public static readonly ADDRESS_MODE_32: int
                    public static readonly ADDRESS_MODE_64: int
                    public static readonly COMPRESSED_REFS: int
                    public static readonly NON_COMPRESSED_REFS: int
                    public static readonly COMPRESSED_REFS_UNKNOWN: int
                    public getCacheName(): string
                    public isCacheCompatible(): boolean
                    public isCachePersistent(): boolean
                    public getCacheType(): int
                    public getOSshmid(): int
                    public getOSsemid(): int
                    public getLastDetach(): java.util.Date
                    public getCacheJVMLevel(): int
                    public getCacheAddressMode(): int
                    public isCacheCorrupt(): boolean
                    public getCacheSize(): long
                    public getCacheFreeBytes(): long
                    public getCacheSoftMaxBytes(): long
                    public getCacheCompressedRefsMode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}