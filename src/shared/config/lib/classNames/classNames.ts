type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    addinitional: string[] = [],
): string {
    return [
        cls,
        ...addinitional.filter(Boolean),
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}
