import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Patricks" | "Easter" | "Flag" | "Earth" | "Halloween";

const ALPHA_TRANSITION: Record<Holiday, Holiday> = {
    Earth: "Easter",
    Easter: "Flag",
    Flag: "Halloween",
    Halloween: "Patricks",
    Patricks: "Earth"
};

const TIME_TRANSITION: Record<Holiday, Holiday> = {
    Patricks: "Easter",
    Easter: "Earth",
    Earth: "Flag",
    Flag: "Halloween",
    Halloween: "Patricks"
};

const EMOJIS: Record<Holiday, string> = {
    Patricks: "☘️",
    Easter: "🐇",
    Flag: "🚩",
    Earth: "🌎",
    Halloween: "🎃"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Patricks");

    function changeHolidayAlpha(): void {
        const newHoliday = ALPHA_TRANSITION[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayTime(): void {
        const newHoliday = TIME_TRANSITION[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            Holiday: {EMOJIS[holiday]}
            <Button onClick={changeHolidayAlpha}>Advance by Alphabet</Button>
            <Button onClick={changeHolidayTime}>Advance by Year</Button>
        </div>
    );
}
