// import { useNavigate } from "react-router-dom";
// import { PlayerFactory } from "../../core/managers/PlayerFactory";

// export function StarterStep(...) {

//     const navigate = useNavigate();

//     function selectStarter(monster: Monster) {

//         // Update the draft
//         const updatedDraft = {

//             ...draft,

//             starter: monster

//         };

//         // Create the player
//         const player = PlayerFactory.create(updatedDraft);

//         // Save the player
//         GameStore.setPlayer(player);

//         SaveManager.savePlayer(player);

//         // Go to the next page
//         navigate("/main-menu");

//     }

//     return (
//         <>
//             <button onClick={() => selectStarter(MonsterDatabase.flarant())}>
//                 Flarant
//             </button>

//             <button onClick={() => selectStarter(MonsterDatabase.elegiphant())}>
//                 Elegiphant
//             </button>
//         </>
//     );
// }