// // jsx map function thing
import { Upgrades } from "./Upgrades";

// // export default function UpgradesArray({ items, upgradeItem }) {
// //   return (
// //     // <Container />
// //     <div>
// //       {items.map((item) => {
// //         return (
// //           <div key={item.id}>
// //             <button id="upgradeButton">Upgrade {item.cost}</button>
// //           </div>
// //         );
// //       ))}
// //       }
// //     </div>
// //   );
// // }

export default function UpgradesArray() {
    
  return (
    <div>
      {Upgrades.map((item) => {
        return (
          <button key={item.id} id="upgradeButton">
            Upgrade {item.name}: get {item.increment} seeds per second!
          </button>
        );
      })}
    </div>
  );
}
