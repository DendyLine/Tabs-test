"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const defaultTabs = [
        "/tabs/Accounting",
        "/tabs/About",
        "/tabs/Administration",
        "/tabs/Auswahllisten",
        "/tabs/Cranberry",
        "/tabs/Dashboard",
        "/tabs/Einkauf",
        "/tabs/Help",
        "/tabs/Lagervelwaltung",
        "/tabs/Post_office",
        "/tabs/Rechn",
        "/tabs/Statistic",
        "/tabs/Sunflower",
        "/tabs/Telefonie",
        "/tabs/Verkauf",
        "/tabs/Warenbeastand.tsx",
        "/tabs/Banking.tsx",];
    const [tabs, setTabs] = useState<string[]>([]);

    useEffect(() => {
        // Отримуємо вкладки з localStorage або записуємо стандартні
        const savedTabs = JSON.parse(localStorage.getItem("tabs") || "null");
        if (!savedTabs) {
            localStorage.setItem("tabs", JSON.stringify(defaultTabs));
            setTabs(defaultTabs);
        } else {
            setTabs(savedTabs);
        }
    }, []);

    return (
        <div>
            <h1>Вкладки</h1>
            <ul>
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <a href={tab}>{tab}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
