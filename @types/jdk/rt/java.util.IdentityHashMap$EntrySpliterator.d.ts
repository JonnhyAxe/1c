declare namespace java {
    namespace util {
        class IdentityHashMap$EntrySpliterator<K, V> extends java.util.IdentityHashMap$IdentityHashMapSpliterator<K, V> implements java.util.Spliterator<java.util.Map$Entry<K, V>> {
            public trySplit(): java.util.IdentityHashMap$EntrySpliterator<K, V>
            public forEachRemaining(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): void
            public tryAdvance(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): boolean
            public characteristics(): int
            public trySplit(): java.util.Spliterator
            public static class: java.lang.Class<any>
        }
    }
}