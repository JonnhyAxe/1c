declare namespace sun {
    namespace security {
        namespace provider {
            class AuthPolicyFile extends javax.security.auth.Policy {
                public constructor()
                public refresh(): void
                public getPermissions(arg0: javax.security.auth.Subject, arg1: java.security.CodeSource): java.security.PermissionCollection
                public static class: java.lang.Class<any>
            }
        }
    }
}