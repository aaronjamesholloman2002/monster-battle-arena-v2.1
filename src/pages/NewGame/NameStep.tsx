import type { PlayerDraft } from "../../core/models/PlayerDraft";

interface Props {

    draft: PlayerDraft;

    setDraft: React.Dispatch<React.SetStateAction<PlayerDraft>>;

    next: () => void;

}

export function NameStep({

    draft,

    setDraft,

    next

}: Props) {

    return (

        <div>

            <h1>Enter Your Name</h1>

            <input

                value={draft.name}

                onChange={(e) =>

                    setDraft({

                        ...draft,

                        name: e.target.value

                    })

                }

            />

            <button onClick={next}>

                Continue

            </button>

        </div>

    );

}