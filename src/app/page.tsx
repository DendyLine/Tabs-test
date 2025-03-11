"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Tab {
    titleImg: string;
    name: string;
}

export default function Home() {
    const defaultTabs: Tab[] = [
        { name: "Accounting", titleImg: "../fi-rs-user-add.svg" },
        { name: "Banking", titleImg: "../fi-rs-bank.svg" },
        { name: "About", titleImg: "../fi-rs-user-add.svg" },
        { name: "Administration", titleImg: "../fi-rs-settings.svg" },
        { name: "Help", titleImg: "../fi-rs-book-alt.svg" },
        { name: "Auswahllisten", titleImg: "../fi-rs-list.svg" },
        { name: "Telefonie", titleImg: "../fi-rs-phone-call.svg" },
        { name: "Cranberry", titleImg: "../fi-rs-user-add.svg" },
        { name: "Dashboard", titleImg: "../fi-rs-apps.svg" },
        { name: "Einkauf", titleImg: "../fi-rs-shopping-cart-check.svg" },
        { name: "Lagervelwaltung", titleImg: "../pinned.svg" },
        { name: "Post_office", titleImg: "../fi-rs-bank.svg" },
        { name: "Rechn", titleImg: "../fi-rs-browser.svg" },
        { name: "Statistic", titleImg: "../fi-rs-chart-pie.svg" },
        { name: "Sunflower", titleImg: "../fi-rs-user-add.svg" },
        { name: "Verkauf", titleImg: "../fi-rs-shop.svg" },
        { name: "Warenbeastand", titleImg: "../fi-rs-cube.svg" },
    ];

    const [visibleTabs, setVisibleTabs] = useState<Tab[]>(defaultTabs);
    const [hiddenTabs, setHiddenTabs] = useState<Tab[]>([]);
    const tabsContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateTabsVisibility = () => {
            const container = tabsContainerRef.current;
            if (container) {
                const containerWidth = container.offsetWidth;
                let totalWidth = 0;
                const visible: Tab[] = [];
                const hidden: Tab[] = [];

                defaultTabs.forEach((tab) => {
                    const tabWidth = 120; // width of each tab
                    if (totalWidth + tabWidth <= containerWidth) {
                        totalWidth += tabWidth;
                        visible.push(tab);
                    } else {
                        hidden.push(tab);
                    }
                });

                setVisibleTabs(visible);
                setHiddenTabs(hidden);
            }
        };

        window.addEventListener("resize", updateTabsVisibility);
        updateTabsVisibility(); // Set visibility state on load

        return () => window.removeEventListener("resize", updateTabsVisibility);
    }, []);

    return (
        <div className="App">
            <header></header>
            <div className="App__tabs" ref={tabsContainerRef}>
                {visibleTabs.map((tab, index) => (
                    <Link className="Tab__link" key={index} href={`/tabs/${tab.name}`}>
                        <img src={tab.titleImg} alt={tab.name} />
                        {tab.name}
                    </Link>
                ))}
                {hiddenTabs.length > 0 && (
                    <div className="DropdownMenu">
                        <button className="DropdownButton">^</button>
                        <ul className="DropdownList">
                            {hiddenTabs.map((tab, index) => (
                                <li key={index}>
                                    <Link className="DropdownList__link" href={`/tabs/${tab.name}`}>
                                        <img src={tab.titleImg} alt={tab.name} />
                                        {tab.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="Tab__content"></div>
        </div>
    );
}
