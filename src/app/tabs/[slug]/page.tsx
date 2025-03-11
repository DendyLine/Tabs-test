"use client";
import { useParams } from "next/navigation";  // Використовуємо useParams з next/navigation

export default function TabPage() {
    const { slug } = useParams();  // Отримуємо slug через useParams

    return (
        <div>
            <h2>Вкладка: {slug}</h2>
            <p>Контент для вкладки: {slug}</p>
        </div>
    );
}