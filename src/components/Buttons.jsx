import {Upgrades} from "./Upgrades";

export default function Buttons({buyUpgrade}) {
    return (
        <>
            {Upgrades.map((item) => {
        return (
          <button
            onClick={() => buyUpgrade(item.cost, item.increment)}
            key={item.id}
            id="upgradeButton"
          >
            Upgrade: <strong>{item.name}</strong>
            <br /> Cost: {item.cost} - get +{item.increment} seeds per second!
          </button>
        );
      })}
        </>
    )
}
