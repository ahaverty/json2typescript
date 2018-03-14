
export interface JsonConvertHooks {
    before(): void
}

export class JsonConvertHooksUtil {
    static canBefore(arg: any): arg is any {
        return (arg as any).before !== undefined;
    }
}