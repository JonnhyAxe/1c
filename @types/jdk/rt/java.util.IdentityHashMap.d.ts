declare namespace java {
    namespace util {
        class IdentityHashMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.Map<K, V> , java.io.Serializable , java.lang.Cloneable {
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: java.util.Map<K, V>)
            public size(): int
            public isEmpty(): boolean
            public get(arg0: java.lang.Object): V
            public containsKey(arg0: java.lang.Object): boolean
            public containsValue(arg0: java.lang.Object): boolean
            public put(arg0: K, arg1: V): V
            public putAll(arg0: java.util.Map<K, V>): void
            public remove(arg0: java.lang.Object): V
            public clear(): void
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public clone(): java.lang.Object
            public keySet(): java.util.Set<K>
            public values(): java.util.Collection<V>
            public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
            public forEach(arg0: java.util.function$.BiConsumer<K, V>): void
            public replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
            public static class: java.lang.Class<any>
        }
    }
}