declare namespace jdk {
    namespace nashorn {
        namespace api {
            namespace scripting {
                abstract class AbstractJSObject implements jdk.nashorn.api.scripting.JSObject {
                    public constructor()
                    public call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public newObject(...arg0: java.lang.Object[]): java.lang.Object
                    public eval(arg0: java.lang.String | string): java.lang.Object
                    public getMember(arg0: java.lang.String | string): java.lang.Object
                    public getSlot(arg0: int): java.lang.Object
                    public hasMember(arg0: java.lang.String | string): boolean
                    public hasSlot(arg0: int): boolean
                    public removeMember(arg0: java.lang.String | string): void
                    public setMember(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public setSlot(arg0: int, arg1: java.lang.Object): void
                    public keySet(): java.util.Set<java.lang.String>
                    public values(): java.util.Collection<java.lang.Object>
                    public isInstance(arg0: java.lang.Object): boolean
                    public isInstanceOf(arg0: java.lang.Object): boolean
                    public getClassName(): string
                    public isFunction(): boolean
                    public isStrictFunction(): boolean
                    public isArray(): boolean
                    public toNumber(): double
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    public static getDefaultValue(arg0: jdk.nashorn.api.scripting.JSObject, arg1: java.lang.Class<any>): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}