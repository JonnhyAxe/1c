declare namespace java {
    namespace util {
        namespace concurrent {
            class CopyOnWriteArraySet<E> extends java.util.AbstractSet<E> implements java.io.Serializable {
                public constructor()
                public constructor(arg0: java.util.Collection<E>)
                public size(): int
                public isEmpty(): boolean
                public contains(arg0: java.lang.Object): boolean
                public toArray(): java.lang.Object[]
                public toArray<T>(arg0: T[]): T[]
                public clear<T>(): void
                public remove<T>(arg0: java.lang.Object): boolean
                public add<T>(arg0: E): boolean
                public containsAll<T>(arg0: java.util.Collection<any>): boolean
                public addAll<T>(arg0: java.util.Collection<E>): boolean
                public removeAll<T>(arg0: java.util.Collection<any>): boolean
                public retainAll<T>(arg0: java.util.Collection<any>): boolean
                public iterator<T>(): java.util.Iterator<E>
                public equals<T>(arg0: java.lang.Object): boolean
                public removeIf<T>(arg0: java.util.function$.Predicate<E>): boolean
                public forEach<T>(arg0: java.util.function$.Consumer$$Lambda<E>): void
                public spliterator<T>(): java.util.Spliterator<E>
                public static class: java.lang.Class<any>
            }
        }
    }
}