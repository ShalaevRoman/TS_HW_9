showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepRequireReadonly<T> = {
    readonly [P in keyof T]-?: T[P] extends object ? DeepRequireReadonly<T[P]> : T[P];
};

type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
};

type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: PropertyDescriptor;
};