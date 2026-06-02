// @ts-nocheck

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

export default function App() {
	// Основные типы событий
	// 1. Изменение значения (input, textarea, select)
	/* 
		React.ChangeEvent<HTMLInputElement>
		React.ChangeEvent<HTMLTextAreaElement>
		React.ChangeEvent<HTMLSelectElement>
	*/

	// Пример:
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	//
	// 2. Клик мышью
	/* 
		React.MouseEvent<HTMLButtonElement>;
		React.MouseEvent<HTMLDivElement>;
	*/
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e.currentTarget);
	};

	//
	// 3. Отправка формы
	/* 
	React.FormEvent<HTMLFormElement>;
	*/
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	//
	// 4. Клавиатура
	/* 
	React.KeyboardEvent<HTMLInputElement>;
	React.KeyboardEvent<HTMLDivElement>;
	*/
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			console.log('enter');
		}
	};

	//
	// 5. Фокус
	/* 
	React.FocusEvent<HTMLInputElement>;
	*/
	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		console.log('focus');
	};

	//
	// 6. Потеря фокуса (blur)
	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		console.log('blur');
	};

	//
	// 7. Drag & Drop
	/* 
		React.DragEvent<HTMLDivElement>;
	*/

	//
	// 8. Скролл
	/* 
		React.UIEvent<HTMLDivElement>;
	*/

	//
	// 9. Clipboard (копировать/вставить)
	/* 
		React.ClipboardEvent<HTMLInputElement>;
	*/

	//
	//Типизация props.children
	type Props = {
		children: React.ReactNode;
	};

	// Или так ModalProvider({ children }: React.PropsWithChildren)

	//
	//Типизация API
	type ApiResponse<T> = {
		data: T;
		error?: string;
	};

	//
	// Для сеттеров из useState почти всегда:
	// React.Dispatch<React.SetStateAction<T>>

	//
	// Универсальный тип (редко нужен)
	/* 
		React.SyntheticEvent;
	*/

	/* 
		Используется, если тебе не важна конкретика события.

		Практическое правило
		Работаешь с input → ChangeEvent<HTMLInputElement>
		Кнопка → MouseEvent<HTMLButtonElement>
		Форма → FormEvent<HTMLFormElement>
		Клавиши → KeyboardEvent

		Остальное — по ситуации.
	*/
}

createRoot(document.getElementById('root')!).render(<StrictMode>{/* <App /> */}</StrictMode>);
