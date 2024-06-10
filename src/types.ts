namespace Types {

    export function getCardProperties(): string[] {
        const dummyPower = new (PlayCard as any)();
        let props = Object.getOwnPropertyNames(dummyPower)
            .filter((name) => name.toLowerCase() == name);
        props = [...new Set(props)];
        return props;
    }

    export enum Expansion {
        Basegame = "Basegame",
        TheGatheringStorm = "The Gathering Storm",
        RebelVsImperium = "Rebel vs. Imperium",
        TheBrinkOfWar = "The Brink of War",
        AlienArtifacts = "Alien Artifacts",
        XenoInvasion = "Xeno Invasion",
        Promo = "Promo"
    }

    const ExpansionShort = new Map<Expansion, string>([
        [Expansion.Basegame, "base"],
        [Expansion.TheGatheringStorm, "tgs"],
        [Expansion.RebelVsImperium, "rvi"],
        [Expansion.TheBrinkOfWar, "bow"],
        [Expansion.AlienArtifacts, "aa"],
        [Expansion.XenoInvasion, "xi"],
        [Expansion.Promo, "promo"]
    ])

    export enum Flag {
        ALIEN = 'ALIEN',
        ANTI_XENO = 'ANTI_XENO',
        CHROMO = 'CHROMO',
        DISCARD_PRODUCE = 'DISCARD_PRODUCE',
        DISCARD_TO_12 = 'DISCARD_TO_12',
        EXTRA_SURVEY = 'EXTRA_SURVEY',
        GAME_END_14 = 'GAME_END_14',
        IMPERIUM = 'IMPERIUM',
        MILITARY = 'MILITARY',
        NO_PRODUCE = 'NO_PRODUCE',
        PRESTIGE = 'PRESTIGE',
        PROMO = 'PROMO',
        REBEL = 'REBEL',
        SELECT_LAST = 'SELECT_LAST',
        START = 'START',
        STARTHAND_3 = 'STARTHAND_3',
        START_BLUE = 'START_BLUE',
        START_RED = 'START_RED',
        START_SAVE = 'START_SAVE',
        TAKE_DISCARDS = 'TAKE_DISCARDS',
        TERRAFORMING = 'TERRAFORMING',
        UPLIFT = 'UPLIFT',
        WINDFALL = 'WINDFALL',
        XENO = 'XENO',
    }

    export enum PhaseCode {
        AGAINST_CHROMO = 'AGAINST_CHROMO',
        AGAINST_REBEL = 'AGAINST_REBEL',
        ALIEN = 'ALIEN',
        ANTE_CARD = 'ANTE_CARD',
        AUTO_PRODUCE = 'AUTO_PRODUCE',
        CONQUER_SETTLE = 'CONQUER_SETTLE',
        CONSUME_3_DIFF = 'CONSUME_3_DIFF',
        CONSUME_ALIEN = 'CONSUME_ALIEN',
        CONSUME_ALL = 'CONSUME_ALL',
        CONSUME_ANY = 'CONSUME_ANY',
        CONSUME_GENE = 'CONSUME_GENE',
        CONSUME_NOVELTY = 'CONSUME_NOVELTY',
        CONSUME_N_DIFF = 'CONSUME_N_DIFF',
        CONSUME_PRESTIGE = 'CONSUME_PRESTIGE',
        CONSUME_RARE = 'CONSUME_RARE',
        CONSUME_THIS = 'CONSUME_THIS',
        CONSUME_TWO = 'CONSUME_TWO',
        DESTROY = 'DESTROY',
        DISCARD = 'DISCARD',
        DISCARD_ANY = 'DISCARD_ANY',
        DISCARD_HAND = 'DISCARD_HAND',
        DISCARD_PRESTIGE = 'DISCARD_PRESTIGE',
        DISCARD_REDUCE = 'DISCARD_REDUCE',
        DRAW = 'DRAW',
        DRAW_5_DEV = 'DRAW_5_DEV',
        DRAW_AFTER = 'DRAW_AFTER',
        DRAW_CHROMO = 'DRAW_CHROMO',
        DRAW_DIFFERENT = 'DRAW_DIFFERENT',
        DRAW_EACH_ALIEN = 'DRAW_EACH_ALIEN',
        DRAW_EACH_NOVELTY = 'DRAW_EACH_NOVELTY',
        DRAW_EACH_RARE = 'DRAW_EACH_RARE',
        DRAW_EVERY_TWO = 'DRAW_EVERY_TWO',
        DRAW_IF = 'DRAW_IF',
        DRAW_IMPERIUM = 'DRAW_IMPERIUM',
        DRAW_LUCKY = 'DRAW_LUCKY',
        DRAW_MILITARY = 'DRAW_MILITARY',
        DRAW_MOST_NOVELTY = 'DRAW_MOST_NOVELTY',
        DRAW_MOST_PRODUCED = 'DRAW_MOST_PRODUCED',
        DRAW_MOST_RARE = 'DRAW_MOST_RARE',
        DRAW_REBEL = 'DRAW_REBEL',
        DRAW_REBEL_MILITARY = 'DRAW_REBEL_MILITARY',
        DRAW_TWO_MILITARY = 'DRAW_TWO_MILITARY',
        DRAW_WORLD_GENE = 'DRAW_WORLD_GENE',
        DRAW_WORLD_RARE = 'DRAW_WORLD_RARE',
        DRAW_XENO_MILITARY = 'DRAW_XENO_MILITARY',
        EXPLORE = 'EXPLORE',
        EXPLORE_AFTER = 'EXPLORE_AFTER',
        EXTRA_MILITARY = 'EXTRA_MILITARY',
        FLIP_ZERO = 'FLIP_ZERO',
        GENE = 'GENE',
        GET_2_CARD = 'GET_2_CARD',
        GET_3_CARD = 'GET_3_CARD',
        GET_CARD = 'GET_CARD',
        GET_PRESTIGE = 'GET_PRESTIGE',
        GET_VP = 'GET_VP',
        IF_IMPERIUM = 'IF_IMPERIUM',
        KEEP = 'KEEP',
        MILITARY_HAND = 'MILITARY_HAND',
        NOT_THIS = 'NOT_THIS',
        NOVELTY = 'NOVELTY',
        NO_TAKEOVER = 'NO_TAKEOVER',
        NO_TRADE = 'NO_TRADE',
        ORB_MOVEMENT = 'ORB_MOVEMENT',
        PAY_DISCOUNT = 'PAY_DISCOUNT',
        PAY_MILITARY = 'PAY_MILITARY',
        PAY_PRESTIGE = 'PAY_PRESTIGE',
        PER_CHROMO = 'PER_CHROMO',
        PER_IMPERIUM = 'PER_IMPERIUM',
        PER_MILITARY = 'PER_MILITARY',
        PER_PEACEFUL = 'PER_PEACEFUL',
        PER_REBEL_MILITARY = 'PER_REBEL_MILITARY',
        PLACE_LEFTOVER = 'PLACE_LEFTOVER',
        PLACE_MILITARY = 'PLACE_MILITARY',
        PLACE_TWO = 'PLACE_TWO',
        PLACE_ZERO = 'PLACE_ZERO',
        PRESTIGE = 'PRESTIGE',
        PRESTIGE_IF = 'PRESTIGE_IF',
        PRESTIGE_MOST_CHROMO = 'PRESTIGE_MOST_CHROMO',
        PRESTIGE_REBEL = 'PRESTIGE_REBEL',
        PRESTIGE_SIX = 'PRESTIGE_SIX',
        PREVENT_TAKEOVER = 'PREVENT_TAKEOVER',
        PRODUCE = 'PRODUCE',
        PRODUCE_PRESTIGE = 'PRODUCE_PRESTIGE',
        RARE = 'RARE',
        REDUCE = 'REDUCE',
        REDUCE_ZERO = 'REDUCE_ZERO',
        REPAIR = 'REPAIR',
        SAVE_COST = 'SAVE_COST',
        SHIFT_RARE = 'SHIFT_RARE',
        TAKEOVER_DEFENSE = 'TAKEOVER_DEFENSE',
        TAKEOVER_IMPERIUM = 'TAKEOVER_IMPERIUM',
        TAKEOVER_MILITARY = 'TAKEOVER_MILITARY',
        TAKEOVER_PRESTIGE = 'TAKEOVER_PRESTIGE',
        TAKEOVER_REBEL = 'TAKEOVER_REBEL',
        TAKE_SAVED = 'TAKE_SAVED',
        TRADE_ACTION = 'TRADE_ACTION',
        TRADE_ANY = 'TRADE_ANY',
        TRADE_BONUS_CHROMO = 'TRADE_BONUS_CHROMO',
        TRADE_GENE = 'TRADE_GENE',
        TRADE_NOVELTY = 'TRADE_NOVELTY',
        TRADE_NO_BONUS = 'TRADE_NO_BONUS',
        TRADE_RARE = 'TRADE_RARE',
        TRADE_THIS = 'TRADE_THIS',
        UPGRADE_WORLD = 'UPGRADE_WORLD',
        VP = 'VP',
        WINDFALL_ALIEN = 'WINDFALL_ALIEN',
        WINDFALL_ANY = 'WINDFALL_ANY',
        WINDFALL_GENE = 'WINDFALL_GENE',
        WINDFALL_NOVELTY = 'WINDFALL_NOVELTY',
        WINDFALL_RARE = 'WINDFALL_RARE',
        XENO = 'XENO',
        XENO_DEFENSE = 'XENO_DEFENSE',
    }

    export enum ExtraVPType {
        ALIEN_FLAG = 'ALIEN_FLAG',
        ALIEN_PRODUCTION = 'ALIEN_PRODUCTION',
        ALIEN_SCIENCE = 'ALIEN_SCIENCE',
        ALIEN_TECHNOLOGY = 'ALIEN_TECHNOLOGY',
        ALIEN_UPLIFT = 'ALIEN_UPLIFT',
        ALIEN_WINDFALL = 'ALIEN_WINDFALL',
        ANTI_XENO_DEVEL = 'ANTI_XENO_DEVEL',
        ANTI_XENO_FLAG = 'ANTI_XENO_FLAG',
        ANTI_XENO_WORLD = 'ANTI_XENO_WORLD',
        CHROMO_FLAG = 'CHROMO_FLAG',
        DEVEL = 'DEVEL',
        DEVEL_CONSUME = 'DEVEL_CONSUME',
        DEVEL_EXPLORE = 'DEVEL_EXPLORE',
        DEVEL_TRADE = 'DEVEL_TRADE',
        GENE_PRODUCTION = 'GENE_PRODUCTION',
        GENE_WINDFALL = 'GENE_WINDFALL',
        IMPERIUM_FLAG = 'IMPERIUM_FLAG',
        KIND_GOOD = 'KIND_GOOD',
        MILITARY = 'MILITARY',
        NAME = 'NAME',
        NEGATIVE_MILITARY = 'NEGATIVE_MILITARY',
        NONMILITARY_TRADE = 'NONMILITARY_TRADE',
        NONMILITARY_WORLD = 'NONMILITARY_WORLD',
        NOVELTY_PRODUCTION = 'NOVELTY_PRODUCTION',
        NOVELTY_WINDFALL = 'NOVELTY_WINDFALL',
        PRESTIGE = 'PRESTIGE',
        RARE_PRODUCTION = 'RARE_PRODUCTION',
        RARE_WINDFALL = 'RARE_WINDFALL',
        REBEL_FLAG = 'REBEL_FLAG',
        REBEL_MILITARY = 'REBEL_MILITARY',
        SIX_DEVEL = 'SIX_DEVEL',
        TERRAFORMING_FLAG = 'TERRAFORMING_FLAG',
        THREE_VP = 'THREE_VP',
        TOTAL_MILITARY = 'TOTAL_MILITARY',
        UPLIFT_FLAG = 'UPLIFT_FLAG',
        WORLD = 'WORLD',
        WORLD_CONSUME = 'WORLD_CONSUME',
        WORLD_EXPLORE = 'WORLD_EXPLORE',
        WORLD_TRADE = 'WORLD_TRADE',
        XENO_MILITARY = 'XENO_MILITARY',
    }

    export enum Phase {
        Explore = "Explore",
        Develop = "Develop",
        Settle = "Settle",
        Trade = "Trade",
        Consume = "Consume",
        Produce = "Produce",
    }

    const PhaseShort = new Map<Phase, string>([
        [Phase.Explore, "I  "],
        [Phase.Develop, "II "],
        [Phase.Settle, "III"],
        [Phase.Trade, "$  "],
        [Phase.Consume, "IV "],
        [Phase.Produce, "V  "],
    ])

    export type Power = {
        phase: Phase;
        code: PhaseCode[];
        value: number;
        times: number;
    }

    export type ExtraVP = {
        value: number;
        type: ExtraVPType;
        name: string;
    }

    export type Quantity = Map<Expansion, number>;

    export enum CardType {
        Development = "Development",
        World = "World",
    }

    export abstract class Card {
        // capital so they can not be searched with filters
        private FontSize: number | null = null;
        private P: HTMLSpanElement | null = null;
        private Container: HTMLDivElement | null = null;
        private Flex: HTMLDivElement | null = null;

        constructor(public expansion: Expansion, public type: CardType, public name: string) {}

        getSearchString(): string {
            return Object.keys(this)
                .filter((name) => name.toLowerCase() === name)
                .map((name) => (this as any)[name])
                .filter((prop) => prop !== null)
                .map((prop) => JSON.stringify(prop).toLowerCase().replace("&", "and"))
                .join(" ")
                .toLowerCase();
        }
        abstract getImageFolder(): string;
        abstract getBacksideText(): string;
        abstract getFrontOverlay(): Node | null;

        public getCardFlexElement() {
            if (this.Flex != null) {
                return this.Flex;
            }

            let flex = <HTMLDivElement> document.createElement("div");
            this.Flex = flex;
            flex.classList.add("flex-50", "xs-flex-33", "sm-flex-25", "md-flex-20", "l-flex-15", "xl-flex-12", "xxl-flex-10");
            let container = document.createElement("div");
            this.Container = container;
            container.classList.add("flip-container");
            let flipper = document.createElement("div");
            flipper.classList.add("flipper");

            let front = document.createElement("div");
            front.classList.add("front");
            front.style.cursor = "pointer";
            // image with webp by default and jpg as fallback
            let picture = document.createElement("picture");
            // let webp = document.createElement("source"); TODO: Restore webp support
            // webp.srcset = this.getImagePath() + ".webp";
            // webp.type = "image/webp";
            // picture.appendChild(webp);
            let jpg = document.createElement("source");
            jpg.srcset = this.getImagePath() + ".jpg";
            jpg.type = "image/jpg";
            picture.appendChild(jpg);
            let fallback = document.createElement("img");
            fallback.src = this.getImagePath() + ".jpg";
            picture.appendChild(fallback);
            front.appendChild(picture);

            // if (this.getFrontOverlay() != null) {
            //     front.appendChild(<Node> this.getFrontOverlay());
            // }

            let back = document.createElement("div");
            back.classList.add("back");
            back.style.cursor = "pointer";
            let backdiv = document.createElement("div");
            backdiv.style.paddingLeft = "10px";
            backdiv.style.paddingRight = "10px";
            let p = document.createElement("span");
            this.P = p;
            p.style.cursor = "auto";
            p.innerHTML = this.getBacksideText();
            backdiv.appendChild(p);
            back.appendChild(backdiv);

            flipper.appendChild(back);
            flipper.appendChild(front);
            container.appendChild(flipper);
            flex.appendChild(container);

            let x: number, y: number;
            container.onmousedown = (e) => {
                x = e.x;
                y = e.y;
            };
            container.onmouseup = (e) => {
                if (e.target instanceof HTMLAnchorElement) {
                    // link was clicked - ignore
                    return;
                }
                if (Math.abs(x - e.x) > 5 || Math.abs(y - e.y) > 5) {
                    // it was a drag (e.g. to select and copy something) - ignore
                    return;
                }
                if (!container.classList.contains("flipped")) {
                    if (this.FontSize == null) {
                        this.scaleFontSize();
                    } else {
                        p.style.fontSize = this.FontSize + "px";
                    }
                }
                container.classList.toggle("flipped");
            };

            return flex;
        }

        private getImagePath() {
            let name;
            if (Array.isArray(this.name)) {
                name = this.name[0];
            } else {
                name = this.name;
            }
            return this.getImageFolder() + name
                .toLowerCase()
                .replace(/ /g, "_")
                .replace(/[,]/g, "")
        }

        // scale font of cardbacks to fit size
        private scaleFontSize() {
            let p = <HTMLSpanElement> this.P;
            this.FontSize = 14;
            p.style.fontSize = this.FontSize + "px";
            let back = (p.parentElement as any).parentElement as any;
            while (p.offsetHeight > back.offsetHeight) {
                this.FontSize -= 0.5;
                p.style.fontSize = this.FontSize + "px";
            }
        }

        onresize() {
            this.FontSize = null;
            if (this.P != null && this.Container != null && this.Container.classList.contains("flipped")) {
                this.scaleFontSize();
            }
        }
    }

    export class PlayCard extends Card {
        constructor(expansion: Expansion, type: CardType, name: string, public cost: number, public vp: number,
                    public flag: Flag[] = [], public power: Power[] = [], public extravp: ExtraVP[] = [],
                    public quantity: Quantity | undefined = undefined)
        {
            super(expansion, type, name);
        }

        getSearchString(): string {
            let s = this.expansion.replace(/&/g, "and") + " " + this.type + " " + this.cost + " " + this.name + " " + this.vp;
            s += " " + JSON.stringify(this.flag);
            s += " " + JSON.stringify(this.power);
            s += " " + JSON.stringify(this.extravp);
            return s.toLowerCase();
        }

        getFrontOverlay(): Node | null {
            let overlay = <HTMLDivElement> document.createElement("div");
            overlay.style.position = "absolute";
            overlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            overlay.style.width = "67%";
            overlay.style.height = "10%";
            overlay.style.left = "27%";
            overlay.style.top = "4%";
            overlay.style.zIndex = "1";
            overlay.style.borderRadius = "0 13px 0 0";
            return overlay;
        }

        getBacksideText(): string {
            let text = "";
            text += "<b>Expansion</b>: " + this.expansion + "<br/>";
            text += "<b>Name</b>: " + this.name + "<br/>";
            text += "<b>Cost</b>: " + this.cost + " ";
            text += "<b>VP</b>: " + this.vp + "<br/>";
            text += "<b>Type</b>: " + this.type + "<br/>";
            text += "<b>Quantity</b>: " +
                Object.keys(Expansion).filter((exp) => this.quantity?.has(Expansion[exp as keyof typeof Expansion]))
                                    .map((exp) => ExpansionShort.get(Expansion[exp as keyof typeof Expansion]) +":" +this.quantity?.get(Expansion[exp as keyof typeof Expansion])) //TODO: Oh god fix this abomination
                + "<br/>";

            if(this.flag != null && this.flag.length > 0) {
                text += "<b>Flags</b>: " + this.flag.map(f => f.toLowerCase()) + "<br/>";
            }

            if(this.power != null && this.power.length > 0) {
                text += "<b>Powers</b>:<br/>" + this.power.map(p => PhaseShort.get(p.phase) + (p.times != 0 ? " x"+p.times:"") + ": " + p.code.join(", ").toLowerCase() + (p.value != 0 ? " " + p.value : null)).join("<br/>") + "<br/>"; //TODO: better display here
            }

            if(this.extravp != null && this.extravp.length > 0) {
                text += "<b>Extra VP</b>:<br/>" + this.extravp.map(e => e.value + "/" + (e.type == "NAME"? e.name : e.type.toLowerCase())).join("<br/>") + "<br/>";
            }

            return text;
        }

        getImageFolder(): string {
            return "imgs/"+ ExpansionShort.get(this.expansion) +"/";
        }
    }
}
