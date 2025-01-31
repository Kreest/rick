/// <reference path="db.ts" />
/// <reference path="types.ts" />
/// <reference path="filter.ts" />

import FilterType = Filter.FilterType;

type Card = Types.Card;
const Card = Types.Card;

const CARDS = DB.CARDS;
const EXTRA_CARDS: HTMLDivElement[] = [];

// https://www.poftut.com/get-query-string-url-javascript/
function getParameterByName(name: string) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// https://stackoverflow.com/a/3540295
var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

const updateTime = isMobile ? 1000 : 300;

document.addEventListener("DOMContentLoaded", () => {
    const body = <HTMLBodyElement> document.getElementsByTagName("body")[0];
    const search = <HTMLInputElement> document.getElementById("search");
    const sort = <HTMLSelectElement> document.getElementById("sort");
    const order = <HTMLDivElement> document.getElementById("arrow");

    for (let i = 0; i < 10; i++) {
        let flex = <HTMLDivElement> document.createElement("div");
        flex.classList.add("flex-50", "xs-flex-33", "sm-flex-25", "md-flex-20", "l-flex-15", "xl-flex-12", "xxl-flex-10");
        flex.style.height = "0px";
        EXTRA_CARDS.push(flex);
    }


    body.onresize = () => CARDS.forEach(c => c.onresize());
    body.onkeypress = e => {
        if (e.key === 's' && !(e.target instanceof HTMLInputElement)) {
            search.focus();
            e.preventDefault();
        }
    };
    let timeout: ReturnType<typeof setTimeout>;
    search.oninput = _ => {
        clearTimeout(timeout);
        timeout = setTimeout(() => update(), updateTime);
    };
    search.onblur = _ => {
        clearTimeout(timeout);
        update();
    };
    sort.onchange = _ => {
        clearTimeout(timeout);
        update();
    }
    order.onclick = _ => {
        clearTimeout(timeout);
        order.classList.toggle("rotated");
        update();
    };

    // get query parameter
    let query = getParameterByName("query");
    if (query) {
        search.value = query;
    }

    update();
});

function update() {
    const search = <HTMLInputElement> document.getElementById("search");
    const result = <HTMLParagraphElement> document.getElementById("result");
    const numResults = <HTMLDivElement> document.getElementById("num-results");
    const numQuantity = <HTMLDivElement> document.getElementById("num-quantity");
    const sort = <HTMLSelectElement> document.getElementById("sort");
    const order = <HTMLDivElement> document.getElementById("arrow");

    history.replaceState(null, "", "?query=" + encodeURIComponent(search.value));

    // clear old content
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    let searchstring = search.value.toLowerCase().replace(/&/g, "and");
    let sortby = sort.value.toLowerCase();
    let ascending = !order.classList.contains("rotated");
    let cards: Card[] = CARDS;

    cards = Filter.filterAll(cards, searchstring, FilterType.Compiled);

    numResults.innerText = "Results: " + cards.length;

    let expregex = /expansion:\(?([a-z0-9\|]+)\)?/;
    let searchexpansions = searchstring.match(expregex);
    let expansionlist = Object.keys(Types.Expansion);
    if (searchexpansions !== null) {
        let exps = searchexpansions[1].split("|");
        expansionlist = expansionlist.filter(exp => exps.some(e => exp.toLowerCase().indexOf(e)>=0))
    }
    numQuantity.innerText = "Quantity: " + cards.reduce((acc, card) => 
            acc + expansionlist.map(exp => (card as Types.PlayCard).quantity.get(Types.Expansion[exp as keyof typeof Types.Expansion]) as number).reduce((a, b) => a+(b?b:0),0),
        0);

    cards = cards.sort((a, b) => {
        let propa = (a as any)[sortby];
        let propb = (b as any)[sortby];
        if (propa === undefined) {
            return 1;
        }
        if (propb === undefined) {
            return -1;
        }
        let st = ascending ? -1 : 1;
        let gt = ascending ? 1 : -1;
        return propa === propb ? 0 : (propa < propb ? st : gt);
    });

    for (const card of cards) {
        result.appendChild(card.getCardFlexElement());
    }

    // add a few extra to make sure that the trailing line is full as well
    for (let flex of EXTRA_CARDS) {
        result.appendChild(flex);
    }
}
