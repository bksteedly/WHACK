import React from "react";
import { iconUrlFromCode } from "./weatherService";

function Forecast({ title, items}) {
    return (
        <div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                {items.map((item) => (
                    <div>
                        <p>{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)}
                        alt=''
                        />
                        <p>{`${item.temp.toFixed()}°`}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;