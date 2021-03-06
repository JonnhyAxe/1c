declare namespace javax {
    namespace print {
        namespace event {
            class PrintJobEvent extends javax.print.event.PrintEvent {
                public static readonly JOB_CANCELED: int
                public static readonly JOB_COMPLETE: int
                public static readonly JOB_FAILED: int
                public static readonly REQUIRES_ATTENTION: int
                public static readonly NO_MORE_EVENTS: int
                public static readonly DATA_TRANSFER_COMPLETE: int
                public constructor(arg0: javax.print.DocPrintJob, arg1: int)
                public getPrintEventType(): int
                public getPrintJob(): javax.print.DocPrintJob
                public static class: java.lang.Class<any>
            }
        }
    }
}