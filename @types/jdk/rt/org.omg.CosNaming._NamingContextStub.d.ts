declare namespace org {
    namespace omg {
        namespace CosNaming {
            class _NamingContextStub extends org.omg.CORBA.portable.ObjectImpl implements org.omg.CosNaming.NamingContext {
                public constructor()
                public bind(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CORBA.Object): void
                public bind_context(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CosNaming.NamingContext): void
                public rebind(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CORBA.Object): void
                public rebind_context(arg0: org.omg.CosNaming.NameComponent[], arg1: org.omg.CosNaming.NamingContext): void
                public resolve(arg0: org.omg.CosNaming.NameComponent[]): org.omg.CORBA.Object
                public unbind(arg0: org.omg.CosNaming.NameComponent[]): void
                public list(arg0: int, arg1: org.omg.CosNaming.BindingListHolder, arg2: org.omg.CosNaming.BindingIteratorHolder): void
                public new_context(): org.omg.CosNaming.NamingContext
                public bind_new_context(arg0: org.omg.CosNaming.NameComponent[]): org.omg.CosNaming.NamingContext
                public destroy(): void
                public _ids(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}