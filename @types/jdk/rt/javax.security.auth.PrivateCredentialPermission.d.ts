declare namespace javax {
    namespace security {
        namespace auth {
            class PrivateCredentialPermission extends java.security.Permission {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public getCredentialClass(): string
                public getPrincipals(): java.lang.String[][]
                public implies(arg0: java.security.Permission): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public getActions(): string
                public newPermissionCollection(): java.security.PermissionCollection
                public static class: java.lang.Class<any>
            }
        }
    }
}