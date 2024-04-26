import "./Button.css";
import { Upgrades } from "./Upgrades";




export default function Button({buyUpgrade}) {

    
    return (
    <div>
      {Upgrades.map((item) => {
    // return (
<div key={item.id}> 
<span>
Upgrade {item.name}: get {item.increment} seeds per second 
</span>
<button onClick={() => buyUpgrade(item.cost, item.increment)}>
Purchase
</button>
</div>



        
    //   <button onClick={() => buyUpgrade} key={item.id} id="upgradeButton">
    //     Upgrade {item.name}: get {item.increment} seeds per second!
    //   </button>
    // );
  })}
    </div>
  );
}

// {Upgrades.map((item) => {
//     return (
//       <button onClick={() => buyUpgrade(item.cost, item.increment)} key={item.id} id="upgradeButton">
//         Upgrade {item.name}: get {item.increment} seeds per second!
//       </button>
//     );
//   })}

// const Button = ({Upgrades, buyUpgrade}) => {
//     return (
//         <div>
//             {Upgrades.map}
//         </div>
//     )
// }