// number, string, boolean, null, undefined, any
// {} type, interface, optional
// [], Array<>
// union, intersection
// literal
// as unknown as любой_тип
// enum, const enum
// utility types

// generic
// typeof, keyof
// mapped types
// as const
// tuple
// void, unknown, never
// type guard
// assert exhaustiveness

// Что реально используется ПОСТОЯННО
/* 
	type / interface
	optional (?)
	Array / []
	union
	generic
	typeof, keyof
	utility types (Partial, Pick, Record)
	type guard
*/

// Используется РЕДКО
/* 
	intersection
	tuple
	as const
	unknown
	void
	never (в основном для строгих проверок)
	assert exhaustiveness
*/

//
// @ts-ignore // Игнорирование правил TypeScript
// @ts-expect-ignore // Игнорирование правил TypeScript

// Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html?clckid=8a1f45b7

//
//
//
// number, string, boolean, null, undefined, any
const o1: number = 20; // NaN, IInfinity
const o2: string = '20';
const o3: boolean = true; // false
const o4: null = null;
const o5: undefined = undefined;
const o6: any = 20;

function o7(a: number, b: string): string {
	return a.toString() + 5 + b;
}

const o8 = (a: number, b: string): string => {
	return a.toString() + 5 + b;
};

//
//
//
// {} type, interface, optional
const o9: { name: string; age: number; car: { color: string } } = {
	name: 'Alex',
	age: 20,
	car: {
		color: 'red',
	},
};

type Type10 = {
	name: string;
	age: number;
	car?: { color: string };
};

const o10: Type10 = {
	name: 'Alex',
	age: 20,
	// car: { color: 'red' },
};

const o10__Child: Type10['age'] = 10;

interface Type11 {
	name: string;
	age: number;
	car: { color: string };
}

const o11: Type11 = {
	name: 'Alex',
	age: 20,
	car: {
		color: 'red',
	},
};

//
//
//
// [], Array<>
const o12: number[] = [1, 2, 3, 4, 5];
const o13: Array<number> = [1, 2, 3, 4, 5];
// const o12: (number | string)[] = [1, '2', 3, '4', 5];
// const o13: Array<number | string> = [1, '2', 3, '4', 5];

type Type14 = {
	name: string;
	age: number;
	hasJob: boolean;
	getMoreInfo?: (config: { status: string }) => { data: number };
};

const o14: Type14[] = [
	// Или так - Array<Type14>
	{
		name: 'Alex',
		age: 20,
		hasJob: true,
		getMoreInfo: (config) => {
			return { data: 123 };
		},
	},
	{
		name: 'Alex 2',
		age: 50,
		hasJob: false,
		getMoreInfo: (config) => {
			return { data: 555 };
		},
	},
];

//
//
//
// union, intersection
function o15(config: { status: string }): { data: number } | undefined | null {
	if (config.status === 'ok') {
		return { data: 123 };
	} else if (config.status === 'error') {
		return undefined;
	}
	return null;
}

type Type16 = {
	name: string;
	age?: number;
};
type Type17 = {
	lastName: string;
};
type Type18 = Type16 & Type17;
interface Type19 extends Type16, Type17 {}

//
//
//
// literal
function o20(a: 'word' | 25 | 50) {}
o20(25);

//
//
//
// as unknown as любой_тип
let o21 = 123;
const o22 = o21 as unknown as string;

// const o23 = a('ok') as unknown as { name: string };
const one = [] as unknown as boolean;
const two = {} as unknown as boolean;
const two_ = (two as unknown as { name: string }).name;
const one_ = (one as unknown as [1, 2, 3, 4, 5])[1];

//
//
//
// enum, const enum
const enum userEnum {
	name = 'Alex',
	age = 20,
}

if (userEnum.name === 'Alex') {
	console.log(userEnum.name.toString());
}
const Alex = userEnum.name;

const enum Status {
	NOT_FOUND = 404,
	SUCCESS = 200,
	ERROR = 500,
}
const enum errorInfo {
	empty = 'Empty field',
	unknowSymbols = 'Unknow symbols in field',
	minLength = 'Min length 3 symbols',
}

//
//
//
// utility types
// Partial - делает все поля НЕ обязательными
type Type23 = Partial<{
	name: 'Alex';
	age: 20;
	car: {
		color: 'red';
	};
}>;

//
// Required - делает все поля обязательными
type Type24 = Required<{
	name?: 'Alex';
	age: 20;
	car: {
		color: 'red';
	};
}>;

//
// Pick - Копирует выбранные поля одного типа в другой тип
type Todo = {
	title: string;
	description: string;
	completed: boolean;
};

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
};

//
// Omit - Копирует поля одного типа в другой тип кроме отмеченных
type Todo2 = {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
};

type TodoInfo = Omit<Todo2, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
	title: 'Pick up kids',
	description: 'Kindergarten closes at 5pm',
};

//
// ReturnType - Возвращает тип, поле начального типа должно быть обязательным, без ?. Либо с помощью - NonNullable<Type>
type Type25 = {
	name: string;
	age: number;
	hasJob: boolean;
	getMore?: (config: { status: string }) => { data: number };
	getMoreInfo: (config: { status: string }) => { data: number };
};

type Type26 = ReturnType<NonNullable<Type25['getMore']>>;
type Type27 = ReturnType<Type25['getMoreInfo']>;

//
//
//
// generic
type ApiResponse<T> = {
	data: T;
	error?: string;
};
/* 
	<T> — это дженерик (переменный тип)
	Тип подставляется при использовании.
*/
type User = {
	id: number;
	name: string;
};
type UserResponse = ApiResponse<User>;
type UsersResponse = ApiResponse<User[]>; // С массивами
/* 
	Фактически получится:

	type UserResponse = {
		data: User
		error?: string
	}
*/

//
//
//
// typeof — взять тип из значения
const routes = {
	id: 1,
	home: '/',
	profile: '/profile',
};

type Routes = typeof routes;

//
// keyof — получить ключи объекта
type User2 = {
	id: number;
	name: string;
};

type UserKeys = keyof User2;
type TestKeyof = keyof User2;
// 'id' | 'name'

//
//
//
// mapped types

//
//
//
// as const — зафиксировать значения, (часто вместо enum)
const status1 = 'loading' as const;
// тип: 'loading'

const STATUS2 = {
	IDLE: 'idle',
	LOADING: 'loading',
	ERROR: 'error',
} as const;

type Status2 = (typeof STATUS2)[keyof typeof STATUS2];
// 'idle' | 'loading' | 'error'

//
//
//
// tuple — фиксированный массив, состояния с фиксированной структурой
type Point = [number, number];
const coords: Point = [10, 20];

//
//
//
// void — функция ничего не возвращает, когда все равно что возвращает функция
function log(message: string): void {
	console.log(message);
}

//
// unknown — безопасный any, данные извне
function handle(data: unknown) {
	if (typeof data === 'string') {
		console.log(data.toUpperCase());
	}

	if (data instanceof Object && 'test' in data && typeof data.test === 'function') {
		data.test();
	}
}

//
// never — то, что не может произойти
function fail(): never {
	throw new Error('error');
}

//
//
//
// type guard — проверка типа, Позволяет сузить тип.
function isString(value: unknown): value is string {
	return typeof value === 'string';
}

function print(value: unknown) {
	if (isString(value)) {
		console.log(value.toUpperCase());
	}
}

//
//
//
// assert exhaustiveness — проверка всех вариантов
type Status3 = 'idle' | 'loading' | 'error';

function render(status3: Status3) {
	switch (status3) {
		case 'idle':
			return '...';
		case 'loading':
			return '...';
		case 'error':
			return '...';
		default:
			const _check: never = status3;
			return _check;
	}
}
